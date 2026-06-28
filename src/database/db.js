import Dexie from "dexie";

const db = new Dexie("chippsuDB");

db.version(3).stores({

  settings: "id",

  categories: "++id,name",

  products: "++id,name,categoryId,price,isActive",

  recipes: "++id,productId,ingredientId",

  inventory: "++id,name,type,currentStock,unit",

  inventoryLog: "++id,itemId,date,type",

  sales: "++id,date,time,total,paymentMode",

  saleItems: "++id,saleId,productId",

  customers: "++id,name,phone",

  expenses: "++id,date,category",

  vendors: "++id,name",

  purchases: "++id,vendorId,date",

  purchaseItems: "++id,purchaseId,itemId",

  staff: "++id,name",

  attendance: "++id,staffId,date",

  cashbook: "++id,date,type",

  syncQueue: "++id,type,status"

});


export default db;