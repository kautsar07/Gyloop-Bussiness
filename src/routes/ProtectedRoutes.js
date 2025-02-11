import React from "react";

// Dashboard
import EventManagement from "../dashboard/EventManagement";
import SalesMonitoring from "../dashboard/SalesMonitoring";
import WebsiteAnalytics from "../dashboard/WebsiteAnalytics";
import FinanceMonitoring from "../dashboard/FinanceMonitoring";
import Cryptocurrency from "../dashboard/Cryptocurrency";
import HelpdeskService from "../dashboard/HelpdeskService";
import StorageManagement from "../dashboard/StorageManagement";
import ProductManagement from "../dashboard/ProductManagement";

// Apps
import GalleryMusic from "../apps/GalleryMusic";
import GalleryVideo from "../apps/GalleryVideo";
import Tasks from "../apps/tasks/Tasks";
import Chat from "../apps/messages/Chat";
import Email from "../apps/messages/Email";
import AppCalendar from "../apps/tasks/AppCalendar";
import FileManager from "../apps/FileManager";
import Contacts from "../apps/networks/Contacts";
import Connections from "../apps/networks/Connections";
import Businesspartners from "../apps/networks/Businesspartners";
import Groups from "../apps/networks/Groups";
import Buyerportal from "../apps/portals/Buyerportal";
import Supplierportal from "../apps/portals/Supplierportal";

//Home
import Myview from "../apps/home/Myview.js";

// Customers
import Customermasters from"../apps/customers/Customermasters"
import Salesevents from"../apps/customers/Salesevents"
import Leads from"../apps/customers/Leads"
import Opportunities from"../apps/customers/Opportunities"
import Salesactivities from"../apps/customers/Salesactivities"
import Salesbatches from"../apps/customers/Salesbatches"
import Salesbillingcollection from"../apps/customers/Salesbillingcollection"
import Salesbillingreport from"../apps/customers/Salesbillingreport"
import Salesbillings from"../apps/customers/Salesbillings"
import Salesbom from"../apps/customers/Salesbom"
import Salescampaign from"../apps/customers/Salescampaign"
import Salescases from"../apps/customers/Salescases"
import Salescatalogs from"../apps/customers/Salescatalogs"
import Saleschannel from"../apps/customers/Saleschannel"
import Salescommission from"../apps/customers/Salescommission"
import Salescontacts from"../apps/customers/Salescontacts"
import Salescontracts from"../apps/customers/Salescontracts"
import Salescustomerreport from"../apps/customers/Salescustomerreport"
import Salesdelieryorders from"../apps/customers/Salesdelieryorders"
import Salesdeliveryreport from"../apps/customers/Salesdeliveryreport"
import Salesdeliverytracking from"../apps/customers/Salesdeliverytracking"
import Salesdiscountbudget from"../apps/customers/Salesdiscountbudget"
import Salesdivisions from"../apps/customers/Salesdivisions"
// import Salesevents from"../apps/customers/Salesevents"
import Salesfleets from"../apps/customers/Salesfleets"
import Salesgroups from"../apps/customers/Salesgroups"
import Salesinventoryreport from"../apps/customers/Salesinventoryreport"
import Saleskpi from"../apps/customers/Saleskpi"
import Saleskpireport from"../apps/customers/Saleskpireport"
import Salesloyaltyprograms from"../apps/customers/Salesloyaltyprograms"
import Salesmembership from"../apps/customers/Salesmembership"
import Salesoffices from"../apps/customers/Salesoffices"
import Salesorders from"../apps/customers/Salesorders"
import Salesequipments from"../apps/customers/Salesequipments"
import Salesorg from"../apps/customers/Salesorg"
import Salespersons from"../apps/customers/Salespersons"
import Salespricing from"../apps/customers/Salespricing"
import Salesproductreport from"../apps/customers/Salesproductreport"
import Salesproducts from"../apps/customers/Salesproducts"
import Salesproposals from"../apps/customers/Salesproposals"
import Salesquotations from"../apps/customers/Salesquotations"
import Salesrecurring from"../apps/customers/Salesrecurring"
import Salesreport from"../apps/customers/Salesreport"
import Salesrevenueplan from"../apps/customers/Salesrevenueplan"
import Salesrewardcatalogs from"../apps/customers/Salesrewardcatalogs"
import Salesserialnumbers from"../apps/customers/Salesserialnumbers"
import Salesservicepartners from"../apps/customers/Salesservicepartners"
import Salesshipment from"../apps/customers/Salesshipment"
import Salesstandardterms from"../apps/customers/Salesstandardterms"
import Salestarget from"../apps/customers/Salestarget"
import Salestasks from"../apps/customers/Salestasks"
import Salestechnicians from"../apps/customers/Salestechnicians"
import Salestenders from"../apps/customers/Salestenders"
import Salesvisits from"../apps/customers/Salesvisits"
import Salesvoucherclaim from"../apps/customers/Salesvoucherclaim"
import Salesvouchermasters from"../apps/customers/Salesvouchermasters"
import Saleswarranty from"../apps/customers/Saleswarranty"
import Salesworkcenters from"../apps/customers/Salesworkcenters"
import Salesserviceconfirmations from"../apps/customers/Salesserviceconfirmations"
import Salesservicedispatching from"../apps/customers/Salesservicedispatching"
import Salesserviceorders from"../apps/customers/Salesserviceorders"
import Serviceordersettlement from"../apps/customers/Serviceordersettlement"
import Servicerequest from"../apps/customers/Servicerequest"
import Territories from"../apps/customers/Territories"
import Territoryscopes from"../apps/customers/Territoryscopes"
import Saleswarrantyclaim from"../apps/customers/Saleswarrantyclaim"

//Suppliers
import Purchaseorg from "../apps/suppliers/Purchaseorg"
import Buyergroups from "../apps/suppliers/Buyergroups"
import Buyerpersons from "../apps/suppliers/Buyerpersons"
import Procurementcommittee from "../apps/suppliers/Procurementcommittee"
import Purchaseproducts from "../apps/suppliers/Purchaseproducts"
import Purchasecatalogs from "../apps/suppliers/Purchasecatalogs"
import Purchasepricing from "../apps/suppliers/Purchasepricing"
import Vendorlist from "../apps/suppliers/Vendorlist"
import Purchasebom from "../apps/suppliers/Purchasebom"
import Purchasebatches from "../apps/suppliers/Purchasebatches"
import Purchaseserialnumber from "../apps/suppliers/Purchaseserialnumber"
import Purchaseequipments from "../apps/suppliers/Purchaseequipments"
import Purchasewarranty from "../apps/suppliers/Purchasewarranty"
import Purchasestandardterms from "../apps/suppliers/Purchasestandardterms"
import Purchaseplan from "../apps/suppliers/Purchaseplan"
import Purchasetarget from "../apps/suppliers/Purchasetarget"
import Purchasebudget from "../apps/suppliers/Purchasebudget"
import Purchasekpi from "../apps/suppliers/Purchasekpi"
import purchasevouchermasters from "../apps/suppliers/purchasevouchermasters"
import Purchasevoucherclaim from "../apps/suppliers/Purchasevoucherclaim"
import Vendorleads from "../apps/suppliers/Vendorleads"
import Purchasecontacts from "../apps/suppliers/Purchasecontacts"
import Vendormasters from "../apps/suppliers/Vendormasters"
import Purchaseservicepartners from "../apps/suppliers/Purchaseservicepartners"
import Purchaseactivities from "../apps/suppliers/Purchaseactivities"
import Purchasetasks from "../apps/suppliers/Purchasetasks"
import Purchaserequisitions from "../apps/suppliers/Purchaserequisitions"
import Purchaseselectioncriteria from "../apps/suppliers/Purchaseselectioncriteria"
import Purchasecriteriamethod from "../apps/suppliers/Purchasecriteriamethod"
import Purchaseselfservice from "../apps/suppliers/Purchaseselfservice"
import Purchaserequestforquotations from "../apps/suppliers/Purchaserequestforquotations"
import Purchaserequestforproposals from "../apps/suppliers/Purchaserequestforproposals"
import Purchasetenders from "../apps/suppliers/Purchasetenders"
import Purchaseorders from "../apps/suppliers/Purchaseorders"
import Purchasecontracts from "../apps/suppliers/Purchasecontracts"
import Purchasedeliveryorders from "../apps/suppliers/Purchasedeliveryorders"
import Purchaseshipment from "../apps/suppliers/Purchaseshipment"
import Purchasedeliverytracking from "../apps/suppliers/Purchasedeliverytracking"
import Purchasevendorinvoice from "../apps/suppliers/Purchasevendorinvoice"
import Purchasevendorinvoicestatus from "../apps/suppliers/Purchasevendorinvoicestatus"
import Purchaseservicecases from "../apps/suppliers/Purchaseservicecases"
import Purchaseservicerequest from "../apps/suppliers/Purchaseservicerequest"
import Purchasewarrantyclaim from "../apps/suppliers/Purchasewarrantyclaim"
import Purchaseserviceorders from "../apps/suppliers/Purchaseserviceorders"
import Purchaseserviceconfirmation from "../apps/suppliers/Purchaseserviceconfirmation"
import Purchasemembership from "../apps/suppliers/Purchasemembership"
import Purchasekpireport from "../apps/suppliers/Purchasekpireport"
import Purchasereport from "../apps/suppliers/Purchasereport"
import Purchasedeliveryreport from "../apps/suppliers/Purchasedeliveryreport"
import Purchaseinventoryreport from "../apps/suppliers/Purchaseinventoryreport"
import Purchaseinvoicereport from "../apps/suppliers/Purchaseinvoicereport"
import Purchasevendorreport from "../apps/suppliers/Purchasevendorreport"
import Purchaseproductreport from "../apps/suppliers/Purchaseproductreport"

//Warehouse
import Warehouselocation from "../apps/warehouse/Warehouselocation"
import Warehousenumber from "../apps/warehouse/Warehousenumber"
import Warehousezone from "../apps/warehouse/Warehousezone"
import Warehouseaisle from "../apps/warehouse/Warehouseaisle"
import Warehouserack from "../apps/warehouse/Warehouserack"
import Warehouselevel from "../apps/warehouse/Warehouselevel"
import Warehousebin from "../apps/warehouse/Warehousebin"
import Warehousedesigner from "../apps/warehouse/Warehousedesigner"
import Warehouseproducts from "../apps/warehouse/Warehouseproducts"
import Warehousebom from "../apps/warehouse/Warehousebom"
import Warehousebatches from "../apps/warehouse/Warehousebatches"
import Warehouseserialnumber from "../apps/warehouse/Warehouseserialnumber"
import Warehouseequipments from "../apps/warehouse/Warehouseequipments"
import Warehousepurchaserequisition from "../apps/warehouse/Warehousepurchaserequisition"
import Materialrequirementplanning from "../apps/warehouse/Materialrequirementplanning"
import Transferrequisition from "../apps/warehouse/Transferrequisition"
import Outboundrequisition from "../apps/warehouse/Outboundrequisition"
import Committoreserved from "../apps/warehouse/Committoreserved"
import Stockonhand from "../apps/warehouse/Stockonhand"
import Stockvmi from "../apps/warehouse/Stockvmi"
import Stockconsignment from "../apps/warehouse/Stockconsignment"
import Stockcustomer from "../apps/warehouse/Stockcustomer"
import Proposalofdelivery from "../apps/warehouse/Proposalofdelivery"
import Goodsreceipt from "../apps/warehouse/Goodsreceipt"
import Goodsissue from "../apps/warehouse/Goodsissue"
import Proofofdelivery from "../apps/warehouse/Proofofdelivery"
import Stocktransfer from "../apps/warehouse/Stocktransfer"
import Qualityinspection from "../apps/warehouse/Qualityinspection"
import Putaway from "../apps/warehouse/Putaway"
import Picking from "../apps/warehouse/Picking"
import Packing from "../apps/warehouse/Packing"
import Repacking from "../apps/warehouse/Repacking"
import Labeling from "../apps/warehouse/Labeling"
import Relabeling from "../apps/warehouse/Relabeling"
import Loading from "../apps/warehouse/Loading"
import Unloading from "../apps/warehouse/Unloading"
import Stocktaking from "../apps/warehouse/Stocktaking"
import Stockadjustment from "../apps/warehouse/Stockadjustment"
import Stockreturn from "../apps/warehouse/Stockreturn"
import Goodscanceltransactions from "../apps/warehouse/Goodscanceltransactions"
import Proposalofacceptance from "../apps/warehouse/Proposalofacceptance"
import Serviceacceptance from "../apps/warehouse/Serviceacceptance"
import Serviceinspection from "../apps/warehouse/Serviceinspection"
import Proofofservice from "../apps/warehouse/Proofofservice.js"
import Servicecanceltransactions from "../apps/warehouse/Servicecanceltransactions"
import Warehousekpireport from "../apps/warehouse/Warehousekpireport"
import Fulfillmentreport from "../apps/warehouse/Fulfillmentreport"
import Inventoryreport from "../apps/warehouse/Inventoryreport"
import Goodsmovementreport from "../apps/warehouse/Goodsmovementreport"
import Servicereport from "../apps/warehouse/Servicereport"
import Warehouseproductreport from "../apps/warehouse/Warehouseproductreport"

//Settings
import Basicdata from "../apps/settings/Basicdata"
import Profilesetting from "../apps/settings/Profilesetting"
import Digitalsignature from "../apps/settings/Digitalsignature"

//Administration
import Systemid from "../apps/administration/Systemid"
import Organizationid from "../apps/administration/Organizationid"
import Applications from "../apps/administration/Applications"
import Appsmarket from "../apps/administration/Appsmarket"
import Resources from "../apps/administration/Resources"
import Utilities from "../apps/administration/Utilities"
import Licenses from "../apps/administration/Licenses"
import Paymentmethod from "../apps/administration/Paymentmethod"
import Subscriptionbilling from "../apps/administration/Subscriptionbilling"
import Usersadministration from "../apps/administration/Usersadministration"
import Usergroupsadministration from "../apps/administration/Usergroupsadministration"
import Authorizationroles from "../apps/administration/Authorizationroles"
import Authentication from "../apps/administration/Authentication"
import Alertcenter from "../apps/administration/Alertcenter"
import Apicontrols from "../apps/administration/Apicontrols"

// Pages
import Pricing from "../pages/Pricing";
import Faq from "../pages/Faq";
import Profile from "../pages/Profile";
import People from "../pages/People";
import Activity from "../pages/Activity";
import Events from "../apps/networks/Events";
import Settings from "../pages/Settings";

// UI Elements
import LayoutColumns from "../docs/LayoutColumns";
import LayoutGrid from "../docs/LayoutGrid";
import LayoutGutters from "../docs/LayoutGutters";
import Accordions from "../docs/Accordions";
import Alerts from "../docs/Alerts";
import Avatars from "../docs/Avatars";
import Badges from "../docs/Badges";
import Breadcrumbs from "../docs/Breadcrumbs";
import Buttons from "../docs/Buttons";
import Cards from "../docs/Cards";
import Carousels from "../docs/Carousels";
import Dropdowns from "../docs/Dropdowns";
import Images from "../docs/Images";
import Listgroup from "../docs/Listgroup";
import Markers from "../docs/Markers";
import Modals from "../docs/Modals";
import NavTabs from "../docs/NavTabs";
import OffCanvas from "../docs/OffCanvas";
import Paginations from "../docs/Paginations";
import Placeholders from "../docs/Placeholders";
import Popovers from "../docs/Popovers";
import Progress from "../docs/Progress";
import Spinners from "../docs/Spinners";
import Toasts from "../docs/Toasts";
import Tooltips from "../docs/Tooltips";
import Tables from "../docs/Tables";
import FormElements from "../docs/FormElements";
import FormSelects from "../docs/FormSelects";
import FormChecksRadios from "../docs/FormChecksRadios";
import FormRange from "../docs/FormRange";
import FormPickers from "../docs/FormPickers";
import FormLayouts from "../docs/FormLayouts";
import UtilBackground from "../docs/UtilBackground";
import UtilBorder from "../docs/UtilBorder";
import UtilColors from "../docs/UtilColors";
import UtilDivider from "../docs/UtilDivider";
import UtilFlex from "../docs/UtilFlex";
import UtilSizing from "../docs/UtilSizing";
import UtilSpacing from "../docs/UtilSpacing";
import UtilOpacity from "../docs/UtilOpacity";
import UtilPosition from "../docs/UtilPosition";
import UtilTypography from "../docs/UtilTypography";
import UtilShadows from "../docs/UtilShadows";
import UtilExtras from "../docs/UtilExtras";
import ApexCharts from "../docs/ApexCharts";
import ChartJs from "../docs/ChartJs";
import MapLeaflet from "../docs/MapLeaflet";
import MapVector from "../docs/MapVector";
import IconRemix from "../docs/IconRemix";
import IconFeather from "../docs/IconFeather";

const protectedRoutes = [
  { path: "dashboard/finance", element: <FinanceMonitoring /> },
  { path: "dashboard/events", element: <EventManagement /> },
  { path: "dashboard/sales", element: <SalesMonitoring /> },
  { path: "dashboard/analytics", element: <WebsiteAnalytics /> },
  { path: "dashboard/crypto", element: <Cryptocurrency /> },
  { path: "dashboard/helpdesk", element: <HelpdeskService /> },
  { path: "dashboard/storage", element: <StorageManagement /> },
  { path: "dashboard/product", element: <ProductManagement /> },
  { path: "apps/gallery-music", element: <GalleryMusic /> },
  { path: "apps/gallery-video", element: <GalleryVideo /> },
  { path: "apps/tasks/tasks", element: <Tasks /> },
  { path: "apps/tasks/calendar", element: <AppCalendar /> },
  { path: "apps/networks/contacts", element: <Contacts /> },
  { path: "apps/networks/connections", element: <Connections /> },
  { path: "apps/networks/businesspartners", element: <Businesspartners /> },
  { path: "apps/networks/groups", element: <Groups /> },
  { path: "apps/networks/events", element: <Events /> },
  { path: "apps/portals/buyerportal", element: <Buyerportal /> },
  { path: "apps/portals/supplierportal", element: <Supplierportal /> },

  { path: "apps/home/myview", element: <Myview /> },
  
  //Customers
  { path: "apps/customers/customermasters" , element:<Customermasters/> },
  // { path: "apps/customers/salesevents" , element:<Salesevents/> },
  { path: "apps/customers/leads" , element:<Leads/> },
  { path: "apps/customers/opportunities" , element:<Opportunities/> },
  { path: "apps/customers/salesactivities" , element:<Salesactivities/> },
  { path: "apps/customers/salesbatches" , element:<Salesbatches/> },
  { path: "apps/customers/salesbillingcollection" , element:<Salesbillingcollection/> },
  { path: "apps/customers/salesbillingreport" , element:<Salesbillingreport/> },
  { path: "apps/customers/salesbillings" , element:<Salesbillings/> },
  { path: "apps/customers/salesbom" , element:<Salesbom/> },
  { path: "apps/customers/salescampaign" , element:<Salescampaign/> },
  { path: "apps/customers/salescases" , element:<Salescases/> },
  { path: "apps/customers/salescatalogs" , element:<Salescatalogs/> },
  { path: "apps/customers/saleschannel" , element:<Saleschannel/> },
  { path: "apps/customers/salescommission" , element:<Salescommission/> },
  { path: "apps/customers/salescontacts" , element:<Salescontacts/> },
  { path: "apps/customers/salescontracts" , element:<Salescontracts/> },
  { path: "apps/customers/salescustomerreport" , element:<Salescustomerreport/> },
  { path: "apps/customers/salesdelieryorders" , element:<Salesdelieryorders/> },
  { path: "apps/customers/salesdeliveryreport" , element:<Salesdeliveryreport/> },
  { path: "apps/customers/salesdeliverytracking" , element:<Salesdeliverytracking/> },
  { path: "apps/customers/salesdiscountbudget" , element:<Salesdiscountbudget/> },
  { path: "apps/customers/salesdivisions" , element:<Salesdivisions/> },
  { path: "apps/customers/salesevents" , element:<Salesevents/> },
  { path: "apps/customers/salesequipments" , element:<Salesequipments/> },
  { path: "apps/customers/salesfleets" , element:<Salesfleets/> },
  { path: "apps/customers/salesgroups" , element:<Salesgroups/> },
  { path: "apps/customers/salesinventoryreport" , element:<Salesinventoryreport/> },
  { path: "apps/customers/saleskpi" , element:<Saleskpi/> },
  { path: "apps/customers/saleskpireport" , element:<Saleskpireport/> },
  { path: "apps/customers/salesloyaltyprograms" , element:<Salesloyaltyprograms/> },
  { path: "apps/customers/salesmembership" , element:<Salesmembership/> },
  { path: "apps/customers/salesoffices" , element:<Salesoffices/> },
  { path: "apps/customers/salesorders" , element:<Salesorders/> },
  { path: "apps/customers/salesorg" , element:<Salesorg/> },
  { path: "apps/customers/salespersons" , element:<Salespersons/> },
  { path: "apps/customers/salespricing" , element:<Salespricing/> },
  { path: "apps/customers/salesproductreport" , element:<Salesproductreport/> },
  { path: "apps/customers/salesproducts" , element:<Salesproducts/> },
  { path: "apps/customers/salesproposals" , element:<Salesproposals/> },
  { path: "apps/customers/salesquotations" , element:<Salesquotations/> },
  { path: "apps/customers/salesrecurring" , element:<Salesrecurring/> },
  { path: "apps/customers/salesreport" , element:<Salesreport/> },
  { path: "apps/customers/salesrevenueplan" , element:<Salesrevenueplan/> },
  { path: "apps/customers/salesrewardcatalogs" , element:<Salesrewardcatalogs/> },
  { path: "apps/customers/salesserialnumbers" , element:<Salesserialnumbers/> },
  { path: "apps/customers/salesservicepartners" , element:<Salesservicepartners/> },
  { path: "apps/customers/salesshipment" , element:<Salesshipment/> },
  { path: "apps/customers/salesstandardterms" , element:<Salesstandardterms/> },
  { path: "apps/customers/salestarget" , element:<Salestarget/> },
  { path: "apps/customers/salestasks" , element:<Salestasks/> },
  { path: "apps/customers/salestechnicians" , element:<Salestechnicians/> },
  { path: "apps/customers/salestenders" , element:<Salestenders/> },
  { path: "apps/customers/salesvisits" , element:<Salesvisits/> },
  { path: "apps/customers/salesvoucherclaim" , element:<Salesvoucherclaim/> },
  { path: "apps/customers/salesvouchermasters" , element:<Salesvouchermasters/> },
  { path: "apps/customers/saleswarranty" , element:<Saleswarranty/> },
  { path: "apps/customers/salesworkcenters" , element:<Salesworkcenters/> },
  { path: "apps/customers/salesserviceconfirmations" , element:<Salesserviceconfirmations/> },
  { path: "apps/customers/salesservicedispatching" , element:<Salesservicedispatching/> },
  { path: "apps/customers/salesserviceorders" , element:<Salesserviceorders/> },
  { path: "apps/customers/serviceordersettlement" , element:<Serviceordersettlement/> },
  { path: "apps/customers/servicerequest" , element:<Servicerequest/> },
  { path: "apps/customers/territories" , element:<Territories/> },
  { path: "apps/customers/territoryscopes" , element:<Territoryscopes/> },
  { path: "apps/customers/saleswarrantyclaim" , element:<Saleswarrantyclaim/> },

  //Suppliers
  { path: "apps/suppliers/purchaseorg" , element:<Purchaseorg/> },
  { path: "apps/suppliers/buyergroups" , element:<Buyergroups/> },
  { path: "apps/suppliers/buyerpersons" , element:<Buyerpersons/> },
  { path: "apps/suppliers/procurementcommittee" , element:<Procurementcommittee/> },
  { path: "apps/suppliers/purchaseproducts" , element:<Purchaseproducts/> },
  { path: "apps/suppliers/purchasecatalogs" , element:<Purchasecatalogs/> },
  { path: "apps/suppliers/purchasepricing" , element:<Purchasepricing/> },
  { path: "apps/suppliers/vendorlist" , element:<Vendorlist/> },
  { path: "apps/suppliers/purchasebom" , element:<Purchasebom/> },
  { path: "apps/suppliers/purchasebatches" , element:<Purchasebatches/> },
  { path: "apps/suppliers/purchaseserialnumber" , element:<Purchaseserialnumber/> },
  { path: "apps/suppliers/purchaseequipments" , element:<Purchaseequipments/> },
  { path: "apps/suppliers/purchasewarranty" , element:<Purchasewarranty/> },
  { path: "apps/suppliers/purchasestandardterms" , element:<Purchasestandardterms/> },
  { path: "apps/suppliers/purchaseplan" , element:<Purchaseplan/> },
  { path: "apps/suppliers/purchasetarget" , element:<Purchasetarget/> },
  { path: "apps/suppliers/purchasebudget" , element:<Purchasebudget/> },
  { path: "apps/suppliers/purchasekpi" , element:<Purchasekpi/> },
  { path: "apps/suppliers/purchasevouchermasters" , element:<purchasevouchermasters/> },
  { path: "apps/suppliers/purchasevoucherclaim" , element:<Purchasevoucherclaim/> },
  { path: "apps/suppliers/vendorleads" , element:<Vendorleads/> },
  { path: "apps/suppliers/purchasecontacts" , element:<Purchasecontacts/> },
  { path: "apps/suppliers/vendormasters" , element:<Vendormasters/> },
  { path: "apps/suppliers/purchaseservicepartners" , element:<Purchaseservicepartners/> },
  { path: "apps/suppliers/purchaseactivities" , element:<Purchaseactivities/> },
  { path: "apps/suppliers/purchasetasks" , element:<Purchasetasks/> },
  { path: "apps/suppliers/purchaserequisitions" , element:<Purchaserequisitions/> },
  { path: "apps/suppliers/purchaseselectioncriteria" , element:<Purchaseselectioncriteria/> },
  { path: "apps/suppliers/purchasecriteriamethod" , element:<Purchasecriteriamethod/> },
  { path: "apps/suppliers/purchaseselfservice" , element:<Purchaseselfservice/> },
  { path: "apps/suppliers/purchaserequestforquotations" , element:<Purchaserequestforquotations/> },
  { path: "apps/suppliers/purchaserequestforproposals" , element:<Purchaserequestforproposals/> },
  { path: "apps/suppliers/purchasetenders" , element:<Purchasetenders/> },
  { path: "apps/suppliers/purchaseorders" , element:<Purchaseorders/> },
  { path: "apps/suppliers/purchasecontracts" , element:<Purchasecontracts/> },
  { path: "apps/suppliers/purchasedeliveryorders" , element:<Purchasedeliveryorders/> },
  { path: "apps/suppliers/purchaseshipment" , element:<Purchaseshipment/> },
  { path: "apps/suppliers/purchasedeliverytracking" , element:<Purchasedeliverytracking/> },
  { path: "apps/suppliers/purchasevendorinvoice" , element:<Purchasevendorinvoice/> },
  { path: "apps/suppliers/purchasevendorinvoicestatus" , element:<Purchasevendorinvoicestatus/> },
  { path: "apps/suppliers/purchaseservicecases" , element:<Purchaseservicecases/> },
  { path: "apps/suppliers/purchaseservicerequest" , element:<Purchaseservicerequest/> },
  { path: "apps/suppliers/purchasewarrantyclaim" , element:<Purchasewarrantyclaim/> },
  { path: "apps/suppliers/purchaseserviceorders" , element:<Purchaseserviceorders/> },
  { path: "apps/suppliers/purchaseserviceconfirmation" , element:<Purchaseserviceconfirmation/> },
  { path: "apps/suppliers/purchasemembership" , element:<Purchasemembership/> },
  { path: "apps/suppliers/purchasekpireport" , element:<Purchasekpireport/> },
  { path: "apps/suppliers/purchasereport" , element:<Purchasereport/> },
  { path: "apps/suppliers/purchasedeliveryreport" , element:<Purchasedeliveryreport/> },
  { path: "apps/suppliers/purchaseinventoryreport" , element:<Purchaseinventoryreport/> },
  { path: "apps/suppliers/purchaseinvoicereport" , element:<Purchaseinvoicereport/> },
  { path: "apps/suppliers/purchasevendorreport" , element:<Purchasevendorreport/> },
  { path: "apps/suppliers/purchaseproductreport" , element:<Purchaseproductreport/> }, 

  //Warehouse
  { path: "apps/warehouse/warehouselocation" , element:<Warehouselocation/> },
  { path: "apps/warehouse/warehousenumber" , element:<Warehousenumber/> },
  { path: "apps/warehouse/warehousezone" , element:<Warehousezone/> },
  { path: "apps/warehouse/warehouseaisle" , element:<Warehouseaisle/> },
  { path: "apps/warehouse/warehouserack" , element:<Warehouserack/> },
  { path: "apps/warehouse/warehouselevel" , element:<Warehouselevel/> },
  { path: "apps/warehouse/warehousebin" , element:<Warehousebin/> },
  { path: "apps/warehouse/warehousedesigner" , element:<Warehousedesigner/> },
  { path: "apps/warehouse/warehouseproducts" , element:<Warehouseproducts/> },
  { path: "apps/warehouse/warehousebom" , element:<Warehousebom/> },
  { path: "apps/warehouse/warehousebatches" , element:<Warehousebatches/> },
  { path: "apps/warehouse/warehouseserialnumber" , element:<Warehouseserialnumber/> },
  { path: "apps/warehouse/warehouseequipments" , element:<Warehouseequipments/> },
  { path: "apps/warehouse/warehousepurchaserequisition" , element:<Warehousepurchaserequisition/> },
  { path: "apps/warehouse/materialrequirementplanning" , element:<Materialrequirementplanning/> },
  { path: "apps/warehouse/transferrequisition" , element:<Transferrequisition/> },
  { path: "apps/warehouse/outboundrequisition" , element:<Outboundrequisition/> },
  { path: "apps/warehouse/committoreserved" , element:<Committoreserved/> },
  { path: "apps/warehouse/stockonhand" , element:<Stockonhand/> },
  { path: "apps/warehouse/stockvmi" , element:<Stockvmi/> },
  { path: "apps/warehouse/stockconsignment" , element:<Stockconsignment/> },
  { path: "apps/warehouse/stockcustomer" , element:<Stockcustomer/> },
  { path: "apps/warehouse/proposalofdelivery" , element:<Proposalofdelivery/> },
  { path: "apps/warehouse/goodsreceipt" , element:<Goodsreceipt/> },
  { path: "apps/warehouse/goodsissue" , element:<Goodsissue/> },
  { path: "apps/warehouse/proofofdelivery" , element:<Proofofdelivery/> },
  { path: "apps/warehouse/stocktransfer" , element:<Stocktransfer/> },
  { path: "apps/warehouse/qualityinspection" , element:<Qualityinspection/> },
  { path: "apps/warehouse/putaway" , element:<Putaway/> },
  { path: "apps/warehouse/picking" , element:<Picking/> },
  { path: "apps/warehouse/packing" , element:<Packing/> },
  { path: "apps/warehouse/repacking" , element:<Repacking/> },
  { path: "apps/warehouse/labeling" , element:<Labeling/> },
  { path: "apps/warehouse/relabeling" , element:<Relabeling/> },
  { path: "apps/warehouse/loading" , element:<Loading/> },
  { path: "apps/warehouse/unloading" , element:<Unloading/> },
  { path: "apps/warehouse/stocktaking" , element:<Stocktaking/> },
  { path: "apps/warehouse/stockadjustment" , element:<Stockadjustment/> },
  { path: "apps/warehouse/stockreturn" , element:<Stockreturn/> },
  { path: "apps/warehouse/goodscanceltransactions" , element:<Goodscanceltransactions/> },
  { path: "apps/warehouse/proposalofacceptance" , element:<Proposalofacceptance/> },
  { path: "apps/warehouse/serviceacceptance" , element:<Serviceacceptance/> },
  { path: "apps/warehouse/serviceinspection" , element:<Serviceinspection/> },
  { path: "apps/warehouse/proofofservice" , element:<Proofofservice/> },
  { path: "apps/warehouse/servicecanceltransactions" , element:<Servicecanceltransactions/> },
  { path: "apps/warehouse/warehousekpireport" , element:<Warehousekpireport/> },
  { path: "apps/warehouse/fulfillmentreport" , element:<Fulfillmentreport/> },
  { path: "apps/warehouse/inventoryreport" , element:<Inventoryreport/> },
  { path: "apps/warehouse/goodsmovementreport" , element:<Goodsmovementreport/> },
  { path: "apps/warehouse/servicereport" , element:<Servicereport/> },
  { path: "apps/warehouse/warehouseproductreport" , element:<Warehouseproductreport/> },

  //Settings
  { path: "apps/settings/basicdata" , element:<Basicdata/> },
  { path: "apps/settings/profilesetting" , element:<Profilesetting/> },
  { path: "apps/settings/digitalsignature" , element:<Digitalsignature/> },

  //Administration
  { path: "apps/administration/systemid" , element:<Systemid/> },
  { path: "apps/administration/organizationid" , element:<Organizationid/> },
  { path: "apps/administration/applications" , element:<Applications/> },
  { path: "apps/administration/appsmarket" , element:<Appsmarket/> },
  { path: "apps/administration/resources" , element:<Resources/> },
  { path: "apps/administration/utilities" , element:<Utilities/> },
  { path: "apps/administration/licenses" , element:<Licenses/> },
  { path: "apps/administration/paymentmethod" , element:<Paymentmethod/> },
  { path: "apps/administration/subscriptionbilling" , element:<Subscriptionbilling/> },
  { path: "apps/administration/usersadministration" , element:<Usersadministration/> },
  { path: "apps/administration/usergroupsadministration" , element:<Usergroupsadministration/> },
  { path: "apps/administration/authorizationroles" , element:<Authorizationroles/> },
  { path: "apps/administration/authentication" , element:<Authentication/> },
  { path: "apps/administration/alertcenter" , element:<Alertcenter/> },
  { path: "apps/administration/apicontrols" , element:<Apicontrols/> },

  { path: "apps/messages/chat", element: <Chat /> },
  { path: "apps/messages/email", element: <Email /> },
  { path: "apps/file-manager", element: <FileManager /> },
  { path: "pages/pricing", element: <Pricing /> },
  { path: "pages/faq", element: <Faq /> },
  { path: "pages/profile", element: <Profile /> },
  { path: "pages/people", element: <People /> },
  { path: "pages/activity", element: <Activity /> },
  
  { path: "pages/settings", element: <Settings /> },
  { path: "docs/layout/grid", element: <LayoutGrid /> },
  { path: "docs/layout/columns", element: <LayoutColumns /> },
  { path: "docs/layout/gutters", element: <LayoutGutters /> },
  { path: "docs/com/accordions", element: <Accordions /> },
  { path: "docs/com/alerts", element: <Alerts /> },
  { path: "docs/com/avatars", element: <Avatars /> },
  { path: "docs/com/badge", element: <Badges /> },
  { path: "docs/com/breadcrumbs", element: <Breadcrumbs /> },
  { path: "docs/com/buttons", element: <Buttons /> },
  { path: "docs/com/cards", element: <Cards /> },
  { path: "docs/com/carousel", element: <Carousels /> },
  { path: "docs/com/dropdown", element: <Dropdowns /> },
  { path: "docs/com/images", element: <Images /> },
  { path: "docs/com/listgroup", element: <Listgroup /> },
  { path: "docs/com/markers", element: <Markers /> },
  { path: "docs/com/modal", element: <Modals /> },
  { path: "docs/com/navtabs", element: <NavTabs /> },
  { path: "docs/com/offcanvas", element: <OffCanvas /> },
  { path: "docs/com/pagination", element: <Paginations /> },
  { path: "docs/com/placeholders", element: <Placeholders /> },
  { path: "docs/com/popovers", element: <Popovers /> },
  { path: "docs/com/progress", element: <Progress /> },
  { path: "docs/com/spinners", element: <Spinners /> },
  { path: "docs/com/toasts", element: <Toasts /> },
  { path: "docs/com/tooltips", element: <Tooltips /> },
  { path: "docs/com/tables", element: <Tables /> },
  { path: "docs/form/elements", element: <FormElements /> },
  { path: "docs/form/selects", element: <FormSelects /> },
  { path: "docs/form/checksradios", element: <FormChecksRadios /> },
  { path: "docs/form/range", element: <FormRange /> },
  { path: "docs/form/pickers", element: <FormPickers /> },
  { path: "docs/form/layouts", element: <FormLayouts /> },
  { path: "docs/chart/apex", element: <ApexCharts /> },
  { path: "docs/chart/chartjs", element: <ChartJs /> },
  { path: "docs/map/leaflet", element: <MapLeaflet /> },
  { path: "docs/map/vector", element: <MapVector /> },
  { path: "docs/icon/remix", element: <IconRemix /> },
  { path: "docs/icon/feather", element: <IconFeather /> },
  { path: "docs/util/background", element: <UtilBackground /> },
  { path: "docs/util/border", element: <UtilBorder /> },
  { path: "docs/util/colors", element: <UtilColors /> },
  { path: "docs/util/divider", element: <UtilDivider /> },
  { path: "docs/util/flex", element: <UtilFlex /> },
  { path: "docs/util/sizing", element: <UtilSizing /> },
  { path: "docs/util/spacing", element: <UtilSpacing /> },
  { path: "docs/util/opacity", element: <UtilOpacity /> },
  { path: "docs/util/position", element: <UtilPosition /> },
  { path: "docs/util/typography", element: <UtilTypography /> },
  { path: "docs/util/shadows", element: <UtilShadows /> },
  { path: "docs/util/extras", element: <UtilExtras /> }
]

export default protectedRoutes;