const homeMenu= [
  {
    "link": "/apps/home/myview"
  }
];

const dashboardMenu = [
  {
    "label": "Finance Monitoring",
    "link": "/dashboard/finance",
    "icon": "ri-pie-chart-2-line"
  },
  {
    "label": "Events Management",
    "link": "/dashboard/events",
    "icon": "ri-calendar-todo-line"
  },
  {
    "label": "Sales Monitoring",
    "link": "/dashboard/sales",
    "icon": "ri-shopping-bag-3-line"
  },
  {
    "label": "Website Analytics",
    "link": "/dashboard/analytics",
    "icon": "ri-bar-chart-2-line"
  },
  {
    "label": "Cryptocurrency",
    "link": "/dashboard/crypto",
    "icon": "ri-coin-line"
  },
  {
    "label": "Helpdesk Service",
    "link": "/dashboard/helpdesk",
    "icon": "ri-service-line"
  },
  {
    "label": "Storage Management",
    "link": "/dashboard/storage",
    "icon": "ri-hard-drive-2-line"
  },
  {
    "label": "Product Management",
    "link": "/dashboard/product",
    "icon": "ri-suitcase-2-line"
  }
];

const inboxMenu  = [
  {
    "label": "Email",
    "link": "/apps/messages/email",
    "icon": "far-envelope"
  },
  {
    "label": "Chat",
    "link": "/apps/messages/chat",
    "icon": "far-comment-dollar"
  }
];

const taskMenu = [
  {
    "label": "Calendar",
    "link": "/apps/tasks/calendar",
    "icon": "far-calendar-heart"
  },
  {
    "label": "Task Manager",
    "link": "/apps/tasks/tasks",
    "icon": "far-square-check"
  },
];

const networkMenu = [
  {
    "label": "Contact",
    "link": "/apps/networks/contacts",
    "icon": "far-address-book"
  },
  {
    "label": "Connection",
    "link": "/apps/networks/connections",
    "icon": "far-link"
  },
  {
    "label": "Business Partner",
    "link": "/apps/networks/businesspartners",
    "icon": "far-handshake"
  },
  {
    "label": "Group",
    "link": "/apps/networks/groups",
    "icon": "far-people-group"
  },
  {
    "label": "Events",
    "link": "/apps/networks/events",
    "icon": "far-calendar-star"
  },
];

const portalMenu = [
  {
    "label": "Buyer Portal",
    "link": "/apps/portals/buyerportal",
    "icon": "far-store"
  },
  {
    "label": "Supplier Portal",
    "link": "/apps/portals/supplierportal",
    "icon": "far-globe-pointer"
  }
];

const crmAppsMenu = [
  {
    "label": "Org. Structure",
    "icon": "far-sitemap",
    "submenu": [
      {
        "label": "Sales Org.",
        "link": "/apps/customers/salesorg"
      },
      {
        "label": "Sales Channels",
        "link": "/apps/customers/saleschannel"
      },
      {
        "label": "Sales Divisions",
        "link": "/apps/customers/salesdivisions"
      },
      {
        "label": "Sales Offices",
        "link": "/apps/customers/salesoffices"
      },
      {
        "label": "Sales Groups",
        "link": "/apps/customers/salesgroups"
      },
      {
        "label": "Sales Persons",
        "link": "/apps/customers/salespersons"
      },
      {
        "label": "Territories",
        "link": "/apps/customers/territories"
      },
      {
        "label": "Territory Scopes",
        "link": "/apps/customers/territoryscopes"
      }
    ]
  },
  {
    "label": "Master Data",
    "icon": "far-box",
    "submenu": [
      {
        "label": "Products",
        "link": "/apps/customers/salesproducts"
      },
      {
        "label": "Catalogs",
        "link": "/apps/customers/salescatalogs"
      },
      {
        "label": "Pricing",
        "link": "/apps/customers/salespricing"
      },
      {
        "label": "Bill of Materials",
        "link": "/apps/customers/salesbom"
      },
      {
        "label": "Batches",
        "link": "/apps/customers/salesbatches"
      },
      {
        "label": "Serial Numbers",
        "link": "/apps/customers/salesserialnumbers"
      },
      {
        "label": "Equipments",
        "link": "/apps/customers/salesequipments"
      },
      {
        "label": "Warranty",
        "link": "/apps/customers/saleswarranty"
      },
      {
        "label": "Standard Terms",
        "link": "/apps/customers/salesstandardterms"
      },
      {
        "label": "Work Centers",
        "link": "/apps/customers/salesworkcenters"
      },
      {
        "label": "Fleets",
        "link": "/apps/customers/salesfleets"
      },
      {
        "label": "Technicians",
        "link": "/apps/customers/salestechnicians"
      },
    ]
  },
  {
    "label": "Plan & Budget",
    "icon": "far-sack-dollar",
    "submenu": [
      {
        "label": "Revenue Planning",
        "link": "/apps/customers/salesrevenueplan"
      },
      {
        "label": "Sales Target",
        "link": "/apps/customers/salestarget"
      },
      {
        "label": "Discount Budget",
        "link": "/apps/customers/salesdiscountbudget"
      },
      {
        "label": "Sales Commission",
        "link": "/apps/customers/salescommission"
      },
      {
        "label": "Sales KPI",
        "link": "/apps/customers/saleskpi"
      }
    ]
  },
  {
    "label": "Voucher",
    "icon": "far-ticket",
    "submenu": [
      {
        "label": "Voucher Masters",
        "link": "/apps/customers/salesvouchermaster"
      },
      {
        "label": "Voucher Claim",
        "link": "/apps/customers/salesvoucherclaim"
      }
    ]
  },
  {
    "label": "Business Partner",
    "icon": "far-handshake",
    "submenu": [
      {
        "label": "Leads",
        "link": "/apps/customers/leads"
      },
      {
        "label": "Contacts",
        "link": "/apps/customers/salescontacts"
      },
      {
        "label": "Customer Masters",
        "link": "/apps/customers/customermasters"
      },
      {
        "label": "Service Partners",
        "link": "/apps/customers/salesservicepartners"
      },
    ]
  },
  {
    "label": "Campaign",
    "icon": "far-bullhorn",
    "submenu": [
      {
        "label": "Campaigns",
        "link": "/apps/customers/salescampaign"
      },
      {
        "label": "Events",
        "link": "/apps/customers/salescampaign"
      }
    ]
  },
  {
    "label": "Activity Tracker",
    "icon": "far-stopwatch",
    "submenu": [
      {
        "label": "Activities",
        "link": "/apps/customers/salesactivities"
      },
      {
        "label": "Tasks",
        "link": "/apps/customers/salestasks"
      },
      {
        "label": "Sales Visits",
        "link": "/apps/customers/salesvisits"
      }
    ]
  },
  {
    "label": "Pre-Sales",
    "icon": "far-filter-circle-dollar",
    "submenu": [
      {
        "label": "Opportunities",
        "link": "/apps/customers/opportunities"
      },
      {
        "label": "Quotations",
        "link": "/apps/customers/salesquotations"
      },
      {
        "label": "Proposals",
        "link": "/apps/customers/salesproposals"
      },
      {
        "label": "Tenders",
        "link": "/apps/customers/salestenders"
      }
    ]
  },
  {
    "label": "Sales",
    "icon": "far-circle-dollar",
    "submenu": [
      {
        "label": "Sales Orders",
        "link": "/apps/customers/serviceorders"
      },
      {
        "label": "Contracts",
        "link": "/apps/customers/salescontracts"
      },
      {
        "label": "Recurring Sales Orders",
        "link": "/apps/customers/salesrecurring"
      }
    ]
  },
  {
    "label": "Delivery",
    "icon": "far-truck-fast",
    "submenu": [
      {
        "label": "Delivery Orders",
        "link": "/apps/customers/salesdelieryorders"
      },
      {
        "label": "Shipment",
        "link": "/apps/customers/salesshipment"
      },
      {
        "label": "Delivery Tracking",
        "link": "/apps/customers/salesdeliverytracking"
      }
    ]
  },
  {
    "label": "Billing",
    "icon": "far-file-invoice-dollar",
    "submenu": [
      {
        "label": "Customer Billing",
        "link": "/apps/customers/salesbillings"
      },
      {
        "label": "Billing Collection",
        "link": "/apps/customers/salesbillingcollection"
      }
    ]
  },
  {
    "label": "After Sales",
    "icon": "far-face-smile",
    "submenu": [
      {
        "label": "Cases",
        "link": "/apps/customers/salescases"
      },
      {
        "label": "Service Request",
        "link": "/apps/customers/servicerequest"
      },
      {
        "label": "Warranty Claim",
        "link": "/apps/customers/saleswarrantyclaim"
      },
      {
        "label": "Dispatching",
        "link": "/apps/customers/salesservicedispatching"
      },
      {
        "label": "Service Orders",
        "link": "/apps/customers/salesserviceorders"
      },
      {
        "label": "Confirmations",
        "link": "/apps/customers/salesserviceconfirmations"
      },
      {
        "label": "Settlement",
        "link": "/apps/customers/serviceordersettlement"
      }
    ]
  },
  {
    "label": "Loyalty",
    "icon": "far-coins",
    "submenu": [
      {
        "label": "Loyalty Programs",
        "link": "/apps/customers/salesloyaltyprograms"
      },
      {
        "label": "Reward Catalogs",
        "link": "/apps/customers/salesrewardcatalogs"
      },
      {
        "label": "Memberships",
        "link": "/apps/customers/salesmembership"
      }
    ]
  },
  {
    "label": "CRM Rerport",
    "icon": "far-chart-mixed",
    "submenu": [
      {
        "label": "KPI Report",
        "link": "/apps/customers/saleskpireport"
      },
      {
        "label": "Sales Report",
        "link": "/apps/customers/salesreport"
      },
      {
        "label": "Delivery Report",
        "link": "/apps/customers/salesdeliveryreport"
      },
      {
        "label": "Inventory Report",
        "link": "/apps/customers/salesinventoryreport"
      },
      {
        "label": "Billing Report",
        "link": "/apps/customers/salesbillingreport"
      },
      {
        "label": "Customer Report",
        "link": "/apps/customers/salescustomerreport"
      },
      {
        "label": "Product Report",
        "link": "/apps/customers/salesproductreport"
      }
    ]
  }
];

const srmAppsMenu = [
  {
    "label": "Org. Structure",
    "icon": "far-sitemap",
    "submenu": [
      {
        "label": "Purchase Org.",
        "link": "/apps/suppliers/purchaseorg"
      },
      {
        "label": "Buyer Groups",
        "link": "/apps/suppliers/buyergroups"
      },
      {
        "label": "Buyer Persons",
        "link": "/apps/suppliers/buyerpersons"
      },
      {
        "label": "Procurement Committee",
        "link": "/apps/suppliers/procurementcommittee"
      },
    ]
  },
  {
    "label": "Master Data",
    "icon": "far-box",
    "submenu": [
      {
        "label": "Products",
        "link": "/apps/suppliers/purchaseproducts"
      },
      {
        "label": "Catalogs",
        "link": "/apps/suppliers/purchasecatalogs"
      },
      {
        "label": "Pricing",
        "link": "/apps/suppliers/purchasepricing"
      },
      {
        "label": "Vendor List",
        "link": "/apps/suppliers/vendorlist"
      },
      {
        "label": "Bill of Materials",
        "link": "/apps/suppliers/purchasebom"
      },
      {
        "label": "Batches",
        "link": "/apps/suppliers/purchasebatches"
      },
      {
        "label": "Serial Numbers",
        "link": "/apps/suppliers/purchaseserialnumber"
      },
      {
        "label": "Equipments",
        "link": "/apps/suppliers/purchaseequipments"
      },
      {
        "label": "Warranty",
        "link": "/apps/suppliers/purchasewarranty"
      },
      {
        "label": "Standard Terms",
        "link": "/apps/suppliers/purchasestandardterms"
      }
    ]
  },
  {
    "label": "Plan & Budget",
    "icon": "far-sack-dollar",
    "submenu": [
      {
        "label": "Purchase Planning",
        "link": "/apps/suppliers/purchaseplan"
      },
      {
        "label": "Purchase Target",
        "link": "/apps/suppliers/purchasetarget"
      },
      {
        "label": "Purchase Budget",
        "link": "/apps/suppliers/purchasebudget"
      },
      {
        "label": "Purchase KPI",
        "link": "/apps/suppliers/purchasekpi"
      }
    ]
  },
  {
    "label": "Voucher",
    "icon": "far-ticket",
    "submenu": [
      {
        "label": "Voucher Masters",
        "link": "/apps/suppliers/purchasevouchermasters"
      },
      {
        "label": "Voucher Claim",
        "link": "/apps/suppliers/purchasevoucherclaim"
      }
    ]
  },
  {
    "label": "Business Partner",
    "icon": "far-handshake",
    "submenu": [
      {
        "label": "Vendor Leads",
        "link": "/apps/suppliers/vendorleads"
      },
      {
        "label": "Contacts",
        "link": "/apps/suppliers/purchasecontacts"
      },
      {
        "label": "Vendor Masters",
        "link": "/apps/suppliers/vendormasters"
      },
      {
        "label": "Service Partners",
        "link": "/apps/suppliers/purchaseservicepartners"
      },
    ]
  },
  
  {
    "label": "Activity Tracker",
    "icon": "far-stopwatch",
    "submenu": [
      {
        "label": "Activities",
        "link": "/apps/suppliers/purchaseactivities"
      },
      {
        "label": "Tasks",
        "link": "/apps/suppliers/purchasetasks"
      }
    ]
  },
  {
    "label": "Requisition",
    "icon": "far-hand",
    "submenu": [
      {
        "label": "Purchase Requisitions",
        "link": "/apps/suppliers/purchaserequisitions"
      }
    ]
  },
  {
    "label": "Selection Rule",
    "icon": "far-list-radio",
    "submenu": [
      {
        "label": "Criteria",
        "link": "/apps/suppliers/purchaseselectioncriteria"
      },
      {
        "label": "Method",
        "link": "/apps/suppliers/purchasecriteriamethod"
      }
    ]
  },
  {
    "label": "Sourcing",
    "icon": "far-magnifying-glass-location",
    "submenu": [
      {
        "label": "Self Service Purchase",
        "link": "/apps/suppliers/purchaseselfservice"
      },
      {
        "label": "Request for Quotations",
        "link": "/apps/suppliers/purchaserequestforquotations"
      },
      {
        "label": "Request for Proposal",
        "link": "/apps/suppliers/purchaserequestforproposals"
      },
      {
        "label": "Tenders",
        "link": "/apps/suppliers/purchasetenders"
      }
    ]
  },
  {
    "label": "Purchase",
    "icon": "far-cart-shopping",
    "submenu": [
      {
        "label": "Purchase Orders",
        "link": "/apps/suppliers/purchaseorders"
      },
      {
        "label": "Contracts",
        "link": "/apps/suppliers/purchasecontracts"
      }
    ]
  },
  {
    "label": "Delivery",
    "icon": "far-truck-fast",
    "submenu": [
      {
        "label": "Delivery Orders",
        "link": "/apps/suppliers/purchasedeliveryorders"
      },
      {
        "label": "Shipment",
        "link": "/apps/suppliers/purchaseshipment"
      },
      {
        "label": "Delivery Tracking",
        "link": "/apps/suppliers/purchasedeliverytracking"
      }
    ]
  },
  {
    "label": "Invoice",
    "icon": "far-file-invoice-dollar",
    "submenu": [
      {
        "label": "Vendor Invoice",
        "link": "/apps/suppliers/purchasevendorinvoice"
      },
      {
        "label": "Invoice Status",
        "link": "/apps/suppliers/purchasevendorinvoicestatus"
      }
    ]
  },
  {
    "label": "Service Case",
    "icon": "far-face-smile",
    "submenu": [
      {
        "label": "Cases",
        "link": "/apps/suppliers/purchaseservicecases"
      },
      {
        "label": "Service Request",
        "link": "/apps/suppliers/purchaseservicerequest"
      },
      {
        "label": "Warranty Claim",
        "link": "/apps/suppliers/purchasewarrantyclaim"
      },
      {
        "label": "Service Orders",
        "link": "/apps/suppliers/purchaseserviceorders"
      },
      {
        "label": "Confirmations",
        "link": "/apps/suppliers/purchaseserviceconfirmation"
      }
    ]
  },
  {
    "label": "Loyalty",
    "icon": "far-coins",
    "submenu": [
      {
        "label": "Membership",
        "link": "/apps/suppliers/purchasemembership"
      }
    ]
  },
  {
    "label": "SRM Rerport",
    "icon": "far-chart-mixed",
    "submenu": [
      {
        "label": "KPI Report",
        "link": "/apps/suppliers/purchasekpireport"
      },
      {
        "label": "Purchase Report",
        "link": "/apps/suppliers/purchasereport"
      },
      {
        "label": "Delivery Report",
        "link": "/apps/suppliers/purchasedeliveryreport"
      },
      {
        "label": "Inventory Report",
        "link": "/apps/suppliers/purchaseinventoryreport"
      },
      {
        "label": "Invoice Report",
        "link": "/apps/suppliers/purchaseinvoicereport"
      },
      {
        "label": "Vendor Report",
        "link": "/apps/suppliers/purchasevendorreport"
      },
      {
        "label": "Product Report",
        "link": "/apps/suppliers/purchaseproductreport"
      }
    ]
  }
];

const wmsAppsMenu = [
  {
    "label": "Org. Structure",
    "icon": "far-sitemap",
    "submenu": [
      {
        "label": "Warehouse Location",
        "link": "/apps/warehouse/warehouselocation"
      },
      {
        "label": "Warehouse Number",
        "link": "/apps/warehouse/warehousenumber"
      }
    ]
  },
  {
    "label": "Design",
    "icon": "far-pen-ruler",
    "submenu": [
      {
        "label": "Warehouse Zone",
        "link": "/apps/warehouse/warehousezone"
      },
      {
        "label": "Warehouse Aisle",
        "link": "/apps/warehouse/warehouseaisle"
      },
      {
        "label": "Warehouse Rack",
        "link": "/apps/warehouse/warehouserack"
      },
      {
        "label": "Warehouse Level",
        "link": "/apps/warehouse/warehouselevel"
      },
      {
        "label": "Warehouse Bin",
        "link": "/apps/warehouse/warehousebin"
      },
      {
        "label": "Layout Designer",
        "link": "/apps/warehouse/warehousedesigner"
      }
    ]
  },
  {
    "label": "Master Data",
    "icon": "far-box",
    "submenu": [
      {
        "label": "Products",
        "link": "/apps/warehouse/warehouseproducts"
      },
      {
        "label": "Bill of Materials",
        "link": "/apps/warehouse/warehousebom"
      },
      {
        "label": "Batches",
        "link": "/apps/warehouse/warehousebatches"
      },
      {
        "label": "Serial Numbers",
        "link": "/apps/warehouse/warehouseserialnumber"
      },
      {
        "label": "Equipments",
        "link": "/apps/warehouse/warehouseequipments"
      }
    ]
  },
  {
    "label": "Requisition",
    "icon": "far-hand",
    "submenu": [
      {
        "label": "Purchase Requisition",
        "link": "/apps/warehouse/warehousepurchaserequisition"
      },
      {
        "label": "Material Req. Planning",
        "link": "/apps/warehouse/materialrequirementplanning"
      },
      {
        "label": "Transfer Requisition",
        "link": "/apps/warehouse/transferrequisition"
      },
      {
        "label": "Outbond Requisition",
        "link": "/apps/warehouse/outboundrequisition"
      },
      {
        "label": "Commit to Reserved",
        "link": "/apps/warehouse/committoreserved"
      }
    ]
  },
  {
    "label": "Inventory",
    "icon": "far-boxes-stacked",
    "submenu": [
      {
        "label": "On-Hand Stock",
        "link": "/apps/warehouse/stockonhand"
      },
      {
        "label": "Vendor Manage Inventory",
        "link": "/apps/warehouse/stockvmi"
      },
      {
        "label": "Consignment Stock",
        "link": "/apps/warehouse/stockconsignment"
      },
      {
        "label": "Customer Stock",
        "link": "/apps/warehouse/stockcustomer"
      },
    ]
  },
  {
    "label": "Goods Movement",
    "icon": "far-forklift",
    "submenu": [
      {
        "label": "Proposal of Delivery",
        "link": "/apps/warehouse/proposalofdelivery"
      },
      {
        "label": "Goods Receipt",
        "link": "/apps/warehouse/goodsreceipt"
      },
      {
        "label": "Goods Issue",
        "link": "/apps/warehouse/goodsissue"
      },
      {
        "label": "Proof of Delivery",
        "link": "/apps/warehouse/proofofdelivery"
      },
      {
        "label": "Stock Transfer",
        "link": "/apps/warehouse/stocktransfer"
      },
      {
        "label": "Quality Inspection",
        "link": "/apps/warehouse/qualityinspection"
      },
      {
        "label": "Putaway",
        "link": "/apps/warehouse/putaway"
      },
      {
        "label": "Picking",
        "link": "/apps/warehouse/picking"
      },
      {
        "label": "Packing",
        "link": "/apps/warehouse/packing"
      },
      {
        "label": "Repacking",
        "link": "/apps/warehouse/repacking"
      },
      {
        "label": "Labeling",
        "link": "/apps/warehouse/labeling"
      },
      {
        "label": "Relabeling",
        "link": "/apps/warehouse/relabeling"
      },
      {
        "label": "Loading",
        "link": "/apps/warehouse/loading"
      },
      {
        "label": "Unloading",
        "link": "/apps/warehouse/unloading"
      },
      {
        "label": "Stock Taking",
        "link": "/apps/warehouse/stocktaking"
      },
      {
        "label": "Stock Adjustment",
        "link": "/apps/warehouse/stockadjustment"
      },
      {
        "label": "Stock Return",
        "link": "/apps/warehouse/stockreturn"
      },
      {
        "label": "Cancel Transactions",
        "link": "/apps/warehouse/goodscanceltransactions"
      }, 
    ]
  },
  {
    "label": "Service Transactions",
    "icon": "far-hand-holding-heart",
    "submenu": [
      {
        "label": "Proposal of Acceptance",
        "link": "/apps/warehouse/proposalofacceptance"
      },
      {
        "label": "Service Acceptance",
        "link": "/apps/warehouse/serviceacceptance"
      },
      {
        "label": "Service Inspection",
        "link": "/apps/warehouse/serviceinspection"
      },
      {
        "label": "Proof of Service",
        "link": "/apps/warehouse/proofofservice"
      },
      {
        "label": "Cancel Transactions",
        "link": "/apps/warehouse/servicecanceltransactions"
      }, 
    ]
  },
  {
    "label": "WMS Rerport",
    "icon": "far-chart-mixed",
    "submenu": [
      {
        "label": "KPI Report",
        "link": "/apps/warehouse/warehousekpireport"
      },
      {
        "label": "Fulfillment Report",
        "link": "/apps/warehouse/fulfillmentreport"
      },
      {
        "label": "Inventory Report",
        "link": "/apps/warehouse/inventoryreport"
      },
      {
        "label": "Goods Movement Report",
        "link": "/apps/warehouse/goodsmovementreport"
      },
      {
        "label": "Service Report",
        "link": "/apps/warehouse/servicereport"
      },
      {
        "label": "Product Report",
        "link": "/apps/warehouse/warehouseproductreport"
      }
    ]
  }
];  

const oneviewAppsMenu = [
  {
    "label": "View Layout",
    "icon": "far-sitemap",
    "submenu": [
      {
        "label": "Template",
        "link": "/apps/warehouse/warehouselocation"
      },
      {
        "label": "Assignment",
        "link": "/apps/warehouse/warehousenumber"
      }
    ]
  },
  {
    "label": "Announcement",
    "icon": "far-sitemap",
    "submenu": [
      {
        "label": "Announcement",
        "link": "/apps/warehouse/warehouselocation"
      },
    ]
  },

  {
    "label": "Survey",
    "icon": "far-sitemap",
    "submenu": [
      {
        "label": "Survey",
        "link": "/apps/warehouse/warehouselocation"
      },
      {
        "label": "Quick Poll",
        "link": "/apps/warehouse/warehouselocation"
      }
    ]
  },
  
]; 

const settingMenu = [
  {
    "label": "Account Setting",
    "icon": "far-user-gear",
    "submenu": [
      {
        "label": "Basic Data",
        "link": "/apps/settings/basicdata"
      },
      {
        "label": "Profile Setting",
        "link": "/apps/settings/profilesetting"
      },
    ]
  },
  {
    "label": "Digital Signature",
    "icon": "far-signature-lock",
    "submenu": [
      {
        "label": "Signature Setting",
        "link": "/apps/settings/digitalsignature"
      }
    ]
  },

  
];  

const adminMenu = [
  {
    "label": "Org.  Systems",
    "icon": "far-building",
    "submenu": [
      {
        "label": "System ID",
        "link": "/apps/administration/systemid"
      },
      {
        "label": "Organization ID",
        "link": "/apps/administration/organizationid"
      },
    ]
  },
  {
    "label": "Application",
    "icon": "far-grid-2",
    "submenu": [
      {
        "label": "Applications",
        "link": "/apps/administration/applications"
      },
      {
        "label": "Apps Market",
        "link": "/apps/administration/appsmarket"
      },
      {
        "label": "Resources",
        "link": "/apps/administration/resources"
      },
      {
        "label": "Utilities",
        "link": "/apps/administration/utilities"
      },
    ]
  },
  {
    "label": "Subscription",
    "icon": "far-crown",
    "submenu": [
      {
        "label": "Licenses",
        "link": "/apps/administration/licenses"
      },
      {
        "label": "Payment Method",
        "link": "/apps/administration/paymentmethod"
      },
      {
        "label": "Billing",
        "link": "/apps/administration/subscriptionbilling"
      }
    ]
  },
  {
    "label": "User & Group",
    "icon": "far-users-gear",
    "submenu": [
      {
        "label": "Users",
        "link": "/apps/administration/usersadministration"
      },
      {
        "label": "User Groups",
        "link": "/apps/administration/usergroupsadministration"
      },
      {
        "label": "Authorization Roles",
        "link": "/apps/administration/authorizationroles"
      },
    ]
  },
  {
    "label": "Security",
    "icon": "far-shield-check",
    "submenu": [
      {
        "label": "Authentication",
        "link": "/apps/administration/authentication"
      },
      {
        "label": "Alert Center",
        "link": "/apps/administration/alertcenter"
      },
      {
        "label": "API Controls",
        "link": "/apps/administration/apicontrols"
      },
    ]
  },
];  

const configMenu = [
  {
    "label": "General",
    "icon": "far-gear",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Company",
    "icon": "far-building-magnifying-glass",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Master Data",
    "icon": "far-box-open",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "CRM",
    "icon": "far-heart",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "SRM",
    "icon": "far-cart-shopping",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "WMS",
    "icon": "far-warehouse",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Workflow Builder",
    "icon": "far-arrow-progress",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Process Builder",
    "icon": "far-diagram-project",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Portal Designer",
    "icon": "far-palette",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Report Painter",
    "icon": "far-paint-roller",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Mail Template",
    "icon": "far-envelope-open-text",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Print Out Painter",
    "icon": "far-file-invoice",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Form Builder",
    "icon": "far-pen-to-square",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Validation",
    "icon": "far-triangle-exclamation",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Substitution",
    "icon": "far-arrow-right-arrow-left",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  {
    "label": "Integration",
    "icon": "far-chart-network",
    "submenu": [
      {
        "label": "General Config",
        "link": "/docs/layout/grid"
      },
      {
        "label": "Company",
        "link": "/docs/layout/gutters"
      },
    ]
  },
  
];

// const applicationsMenu = [
//   {
//     "label": "File Manager",
//     "link": "/apps/file-manager",
//     "icon": "ri-folder-2-line"
//   },
//   {
//     "label": "Email",
//     "link": "/apps/email",
//     "icon": "ri-mail-send-line"
//   },
//   {
//     "label": "Calendar",
//     "link": "/apps/calendar",
//     "icon": "ri-calendar-line"
//   },
//   {
//     "label": "Chat",
//     "link": "/apps/chat",
//     "icon": "ri-question-answer-line"
//   },
//   {
//     "label": "Contacts",
//     "link": "/apps/contacts",
//     "icon": "ri-contacts-book-line"
//   },
//   {
//     "label": "Task Manager",
//     "link": "/apps/tasks",
//     "icon": "ri-checkbox-multiple-line"
//   },
//   {
//     "label": "Media Gallery",
//     "icon": "ri-gallery-line",
//     "submenu": [
//       {
//         "label": "Music Stream",
//         "link": "/apps/gallery-music"
//       },
//       {
//         "label": "Video Stream",
//         "link": "/apps/gallery-video"
//       }
//     ]
//   }
// ];

// const pagesMenu = [
//   {
//     "label": "User Pages",
//     "icon": "ri-account-circle-line",
//     "submenu": [
//       {
//         "label": "User Profile",
//         "link": "/pages/profile"
//       },
//       {
//         "label": "People & Groups",
//         "link": "/pages/people"
//       },
//       {
//         "label": "Activity Log",
//         "link": "/pages/activity"
//       },
//       {
//         "label": "Events",
//         "link": "/pages/events"
//       },
//       {
//         "label": "Settings",
//         "link": "/pages/settings"
//       }
//     ]
//   },
//   {
//     "id": 27,
//     "label": "Authentication",
//     "icon": "ri-lock-2-line",
//     "submenu": [
//       {
//         "label": "Sign In Basic",
//         "link": "/pages/signin"
//       },
//       {
//         "label": "Sign In Cover",
//         "link": "/pages/signin2"
//       },
//       {
//         "label": "Sign Up Basic",
//         "link": "/pages/signup"
//       },
//       {
//         "label": "Sign Up Cover",
//         "link": "/pages/signup2"
//       },
//       {
//         "label": "Verify Account",
//         "link": "/pages/verify"
//       },
//       {
//         "label": "Forgot Password",
//         "link": "/pages/forgot"
//       },
//       {
//         "label": "Lock Screen",
//         "link": "/pages/lock"
//       }
//     ]
//   },
//   {
//     "label": "Error Pages",
//     "icon": "ri-error-warning-line",
//     "submenu": [
//       {
//         "label": "Page Not Found",
//         "link": "/pages/error-404"
//       },
//       {
//         "label": "Internal Server Error",
//         "link": "/pages/error-500"
//       },
//       {
//         "label": "Service Unavailable",
//         "link": "/pages/error-503"
//       },
//       {
//         "label": "Forbidden",
//         "link": "/pages/error-505"
//       }
//     ]
//   },
//   {
//     "label": "Other Pages",
//     "icon": "ri-file-text-line",
//     "submenu": [
//       {
//         "label": "Pricing",
//         "link": "/pages/pricing"
//       },
//       {
//         "label": "FAQ",
//         "link": "/pages/faq"
//       }
//     ]
//   }
// ];

// const uiElementsMenu = [
//   {
//     "label": "Getting Started",
//     "icon": "ri-pencil-ruler-2-line",
//     "submenu": [
//       {
//         "label": "Grid System",
//         "link": "/docs/layout/grid"
//       },
//       {
//         "label": "Columns",
//         "link": "/docs/layout/columns"
//       },
//       {
//         "label": "Gutters",
//         "link": "/docs/layout/gutters"
//       }
//     ]
//   },
//   {
//     "label": "Components",
//     "icon": "ri-suitcase-line",
//     "submenu": [
//       {
//         "label": "Accordion",
//         "link": "/docs/com/accordions"
//       },
//       {
//         "label": "Alerts",
//         "link": "/docs/com/alerts"
//       },
//       {
//         "label": "Avatars",
//         "link": "/docs/com/avatars"
//       },
//       {
//         "label": "Badge",
//         "link": "/docs/com/badge"
//       },
//       {
//         "label": "Breadcrumbs",
//         "link": "/docs/com/breadcrumbs"
//       },
//       {
//         "label": "Buttons",
//         "link": "/docs/com/buttons"
//       },
//       {
//         "label": "Cards",
//         "link": "/docs/com/cards"
//       },
//       {
//         "label": "Carousel",
//         "link": "/docs/com/carousel"
//       },
//       {
//         "label": "Dropdown",
//         "link": "/docs/com/dropdown"
//       },
//       {
//         "label": "Images",
//         "link": "/docs/com/images"
//       },
//       {
//         "label": "List Group",
//         "link": "/docs/com/listgroup"
//       },
//       {
//         "label": "Markers",
//         "link": "/docs/com/markers"
//       },
//       {
//         "label": "Modal",
//         "link": "/docs/com/modal"
//       },
//       {
//         "label": "Nav & Tabs",
//         "link": "/docs/com/navtabs"
//       },
//       {
//         "label": "Offcanvas",
//         "link": "/docs/com/offcanvas"
//       },
//       {
//         "label": "Pagination",
//         "link": "/docs/com/pagination"
//       },
//       {
//         "label": "Placeholders",
//         "link": "/docs/com/placeholders"
//       },
//       {
//         "label": "Popovers",
//         "link": "/docs/com/popovers"
//       },
//       {
//         "label": "Progress",
//         "link": "/docs/com/progress"
//       },
//       {
//         "label": "Spinners",
//         "link": "/docs/com/spinners"
//       },
//       {
//         "label": "Toast",
//         "link": "/docs/com/toasts"
//       },
//       {
//         "label": "Tooltips",
//         "link": "/docs/com/tooltips"
//       },
//       {
//         "label": "Tables",
//         "link": "/docs/com/tables"
//       }
//     ]
//   },
//   {
//     "label": "Forms",
//     "icon": "ri-list-check-2",
//     "submenu": [
//       {
//         "label": "Text Elements",
//         "link": "/docs/form/elements"
//       },
//       {
//         "label": "Selects",
//         "link": "/docs/form/selects"
//       },
//       {
//         "label": "Checks & Radios",
//         "link": "/docs/form/checksradios"
//       },
//       {
//         "label": "Range",
//         "link": "/docs/form/range"
//       },
//       {
//         "label": "Pickers",
//         "link": "/docs/form/pickers"
//       },
//       {
//         "label": "Layouts",
//         "link": "/docs/form/layouts"
//       }
//     ]
//   },
//   {
//     "label": "Charts & Graphs",
//     "icon": "ri-bar-chart-2-line",
//     "submenu": [
//       {
//         "label": "ApexCharts",
//         "link": "/docs/chart/apex"
//       },
//       {
//         "label": "Chartjs",
//         "link": "/docs/chart/chartjs"
//       }
//     ]
//   },
//   {
//     "label": "Maps & Icons",
//     "icon": "ri-stack-line",
//     "submenu": [
//       {
//         "label": "Leaflet Maps",
//         "link": "/docs/map/leaflet"
//       },
//       {
//         "label": "Vector Maps",
//         "link": "/docs/map/vector"
//       },
//       {
//         "label": "Remixicon",
//         "link": "/docs/icon/remix"
//       },
//       {
//         "label": "Feathericons",
//         "link": "/docs/icon/feather"
//       }
//     ]
//   },
//   {
//     "label": "Utilities",
//     "icon": "ri-briefcase-4-line",
//     "submenu": [
//       {
//         "label": "Background",
//         "link": "/docs/util/background"
//       },
//       {
//         "label": "Border",
//         "link": "/docs/util/border"
//       },
//       {
//         "label": "Colors",
//         "link": "/docs/util/colors"
//       },
//       {
//         "label": "Divider",
//         "link": "/docs/util/divider"
//       },
//       {
//         "label": "Flex",
//         "link": "/docs/util/flex"
//       },
//       {
//         "label": "Sizing",
//         "link": "/docs/util/sizing"
//       },
//       {
//         "label": "Spacing",
//         "link": "/docs/util/spacing"
//       },
//       {
//         "label": "Opacity",
//         "link": "/docs/util/opacity"
//       },
//       {
//         "label": "Position",
//         "link": "/docs/util/position"
//       },
//       {
//         "label": "Typography",
//         "link": "/docs/util/typography"
//       },
//       {
//         "label": "Shadows",
//         "link": "/docs/util/shadows"
//       },
//       {
//         "label": "Extras",
//         "link": "/docs/util/extras"
//       }
//     ]
//   }
// ];

export 
{ 
  homeMenu,
  dashboardMenu, 
  inboxMenu, 
  taskMenu, 
  networkMenu, 
  portalMenu, 
  crmAppsMenu, 
  srmAppsMenu, 
  wmsAppsMenu, 
  oneviewAppsMenu,
  settingMenu,
  adminMenu,
  configMenu,
  // applicationsMenu, 
  // pagesMenu, 
  // uiElementsMenu 
};