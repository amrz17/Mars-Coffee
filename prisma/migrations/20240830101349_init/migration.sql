-- CreateTable
CREATE TABLE "tbl_admin" (
    "id_admin" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tbl_admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "tbl_user" (
    "id_user" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" TEXT,

    CONSTRAINT "tbl_user_pkey" PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "tbl_product" (
    "id_product" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "stock_quantity" INTEGER NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "tbl_product_pkey" PRIMARY KEY ("id_product")
);

-- CreateTable
CREATE TABLE "tbl_discount" (
    "id_discount" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'percentage',
    "value" INTEGER NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "valid_from" TIMESTAMP(3) NOT NULL,
    "valid_until" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "tbl_discount_pkey" PRIMARY KEY ("id_discount")
);

-- CreateTable
CREATE TABLE "tbl_voucher" (
    "id_voucher" TEXT NOT NULL,
    "code" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "discount_value" INTEGER NOT NULL,
    "valid_from" TIMESTAMP(3) NOT NULL,
    "valid_until" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "adminId" TEXT NOT NULL,

    CONSTRAINT "tbl_voucher_pkey" PRIMARY KEY ("id_voucher")
);

-- CreateTable
CREATE TABLE "tbl_transaction" (
    "id_transaction" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total_price" BIGINT NOT NULL,
    "discount" INTEGER NOT NULL,
    "final_price" BIGINT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "voucherId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "tbl_transaction_pkey" PRIMARY KEY ("id_transaction")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_admin_id_admin_key" ON "tbl_admin"("id_admin");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_admin_username_key" ON "tbl_admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_user_id_user_key" ON "tbl_user"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_product_id_product_key" ON "tbl_product"("id_product");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_discount_id_discount_key" ON "tbl_discount"("id_discount");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_voucher_id_voucher_key" ON "tbl_voucher"("id_voucher");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_voucher_code_key" ON "tbl_voucher"("code");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_transaction_id_transaction_key" ON "tbl_transaction"("id_transaction");

-- AddForeignKey
ALTER TABLE "tbl_user" ADD CONSTRAINT "tbl_user_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "tbl_admin"("id_admin") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_product" ADD CONSTRAINT "tbl_product_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "tbl_admin"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_discount" ADD CONSTRAINT "tbl_discount_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "tbl_admin"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_discount" ADD CONSTRAINT "tbl_discount_productId_fkey" FOREIGN KEY ("productId") REFERENCES "tbl_product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_voucher" ADD CONSTRAINT "tbl_voucher_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "tbl_admin"("id_admin") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_transaction" ADD CONSTRAINT "tbl_transaction_voucherId_fkey" FOREIGN KEY ("voucherId") REFERENCES "tbl_voucher"("id_voucher") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_transaction" ADD CONSTRAINT "tbl_transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tbl_user"("id_user") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_transaction" ADD CONSTRAINT "tbl_transaction_productId_fkey" FOREIGN KEY ("productId") REFERENCES "tbl_product"("id_product") ON DELETE RESTRICT ON UPDATE CASCADE;
