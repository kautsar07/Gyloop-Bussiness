import React from "react";

// Dashboard
import EventManagement from "../dashboard/EventManagement.js";
import SalesMonitoring from "../dashboard/SalesMonitoring.js";
import WebsiteAnalytics from "../dashboard/WebsiteAnalytics.js";
import FinanceMonitoring from "../dashboard/FinanceMonitoring.js";
import Cryptocurrency from "../dashboard/Cryptocurrency.js";
import HelpdeskService from "../dashboard/HelpdeskService.js";
import StorageManagement from "../dashboard/StorageManagement.js";
import ProductManagement from "../dashboard/ProductManagement.js";

// Apps
import GalleryMusic from "../apps/GalleryMusic.js";
import GalleryVideo from "../apps/GalleryVideo.js";
import Tasks from "../apps/tasks/Tasks.js";
import Chat from "../apps/messages/Chat.js";
import Email from "../apps/messages/Email.js";
import AppCalendar from "../apps/tasks/AppCalendar.js";
import FileManager from "../apps/FileManager.js";
import Contacts from "../apps/networks/Contacts.js";
import Connections from "../apps/networks/Connections.js";
import Businesspartners from "../apps/networks/Businesspartners.js";
import Groups from "../apps/networks/Groups.js";
import Buyerportal from "../apps/portals/Buyerportal.js";
import Supplierportal from "../apps/portals/Supplierportal.js";

//Home
import Myview from "../apps/home/Myview.js";

// Customers
import Customermasters from"../apps/customers/Customermasters.js"
import Salesevents from"../apps/customers/Salesevents.js"
import Leads from"../apps/customers/Leads.js"
import Opportunities from"../apps/customers/Opportunities.js"
import Salesactivities from"../apps/customers/Salesactivities.js"
import Salesbatches from"../apps/customers/Salesbatches.js"
import Salesbillingcollection from"../apps/customers/Salesbillingcollection.js"
import Salesbillingreport from"../apps/customers/Salesbillingreport.js"
import Salesbillings from"../apps/customers/Salesbillings.js"
import Salesbom from"../apps/customers/Salesbom.js"
import Salescampaign from"../apps/customers/Salescampaign.js"
import Salescases from"../apps/customers/Salescases.js"
import Salescatalogs from"../apps/customers/Salescatalogs.js"
import Saleschannel from"../apps/customers/Saleschannel.js"
import Salescommission from"../apps/customers/Salescommission.js"
import Salescontacts from"../apps/customers/Salescontacts.js"
import Salescontracts from"../apps/customers/Salescontracts.js"
import Salescustomerreport from"../apps/customers/Salescustomerreport.js"
import Salesdelieryorders from"../apps/customers/Salesdelieryorders.js"
import Salesdeliveryreport from"../apps/customers/Salesdeliveryreport.js"
import Salesdeliverytracking from"../apps/customers/Salesdeliverytracking.js"
import Salesdiscountbudget from"../apps/customers/Salesdiscountbudget.js"
import Salesdivisions from"../apps/customers/Salesdivisions.js"
// import Salesevents from"../apps/customers/Salesevents"
import Salesfleets from"../apps/customers/Salesfleets.js"
import Salesgroups from"../apps/customers/Salesgroups.js"
import Salesinventoryreport from"../apps/customers/Salesinventoryreport.js"
import Saleskpi from"../apps/customers/Saleskpi.js"
import Saleskpireport from"../apps/customers/Saleskpireport.js"
import Salesloyaltyprograms from"../apps/customers/Salesloyaltyprograms.js"
import Salesmembership from"../apps/customers/Salesmembership.js"
import Salesoffices from"../apps/customers/Salesoffices.js"
import Salesorders from"../apps/customers/Salesorders.js"
import Salesequipments from"../apps/customers/Salesequipments.js"
import Salesorg from"../apps/customers/Salesorg.js"
import Salespersons from"../apps/customers/Salespersons.js"
import Salespricing from"../apps/customers/Salespricing.js"
import Salesproductreport from"../apps/customers/Salesproductreport.js"
import Salesproducts from"../apps/customers/Salesproducts.js"
import Salesproposals from"../apps/customers/Salesproposals.js"
import Salesquotations from"../apps/customers/Salesquotations.js"
import Salesrecurring from"../apps/customers/Salesrecurring.js"
import Salesreport from"../apps/customers/Salesreport.js"
import Salesrevenueplan from"../apps/customers/Salesrevenueplan.js"
import Salesrewardcatalogs from"../apps/customers/Salesrewardcatalogs.js"
import Salesserialnumbers from"../apps/customers/Salesserialnumbers.js"
import Salesservicepartners from"../apps/customers/Salesservicepartners.js"
import Salesshipment from"../apps/customers/Salesshipment.js"
import Salesstandardterms from"../apps/customers/Salesstandardterms.js"
import Salestarget from"../apps/customers/Salestarget.js"
import Salestasks from"../apps/customers/Salestasks.js"
import Salestechnicians from"../apps/customers/Salestechnicians.js"
import Salestenders from"../apps/customers/Salestenders.js"
import Salesvisits from"../apps/customers/Salesvisits.js"
import Salesvoucherclaim from"../apps/customers/Salesvoucherclaim.js"
import Salesvouchermasters from"../apps/customers/Salesvouchermasters.js"
import Saleswarranty from"../apps/customers/Saleswarranty.js"
import Salesworkcenters from"../apps/customers/Salesworkcenters.js"
import Salesserviceconfirmations from"../apps/customers/Salesserviceconfirmations.js"
import Salesservicedispatching from"../apps/customers/Salesservicedispatching.js"
import Salesserviceorders from"../apps/customers/Salesserviceorders.js"
import Serviceordersettlement from"../apps/customers/Serviceordersettlement.js"
import Servicerequest from"../apps/customers/Servicerequest.js"
import Territories from"../apps/customers/Territories.js"
import Territoryscopes from"../apps/customers/Territoryscopes.js"
import Saleswarrantyclaim from"../apps/customers/Saleswarrantyclaim.js"

//Suppliers
import Purchaseorg from "../apps/suppliers/Purchaseorg.js"
import Buyergroups from "../apps/suppliers/Buyergroups.js"
import Buyerpersons from "../apps/suppliers/Buyerpersons.js"
import Procurementcommittee from "../apps/suppliers/Procurementcommittee.js"
import Purchaseproducts from "../apps/suppliers/Purchaseproducts.js"
import Purchasecatalogs from "../apps/suppliers/Purchasecatalogs.js"
import Purchasepricing from "../apps/suppliers/Purchasepricing.js"
import Vendorlist from "../apps/suppliers/Vendorlist.js"
import Purchasebom from "../apps/suppliers/Purchasebom.js"
import Purchasebatches from "../apps/suppliers/Purchasebatches.js"
import Purchaseserialnumber from "../apps/suppliers/Purchaseserialnumber.js"
import Purchaseequipments from "../apps/suppliers/Purchaseequipments.js"
import Purchasewarranty from "../apps/suppliers/Purchasewarranty.js"
import Purchasestandardterms from "../apps/suppliers/Purchasestandardterms.js"
import Purchaseplan from "../apps/suppliers/Purchaseplan.js"
import Purchasetarget from "../apps/suppliers/Purchasetarget.js"
import Purchasebudget from "../apps/suppliers/Purchasebudget.js"
import Purchasekpi from "../apps/suppliers/Purchasekpi.js"
import purchasevouchermasters from "../apps/suppliers/purchasevouchermasters.js"
import Purchasevoucherclaim from "../apps/suppliers/Purchasevoucherclaim.js"
import Vendorleads from "../apps/suppliers/Vendorleads.js"
import Purchasecontacts from "../apps/suppliers/Purchasecontacts.js"
import Vendormasters from "../apps/suppliers/Vendormasters.js"
import Purchaseservicepartners from "../apps/suppliers/Purchaseservicepartners.js"
import Purchaseactivities from "../apps/suppliers/Purchaseactivities.js"
import Purchasetasks from "../apps/suppliers/Purchasetasks.js"
import Purchaserequisitions from "../apps/suppliers/Purchaserequisitions.js"
import Purchaseselectioncriteria from "../apps/suppliers/Purchaseselectioncriteria.js"
import Purchasecriteriamethod from "../apps/suppliers/Purchasecriteriamethod.js"
import Purchaseselfservice from "../apps/suppliers/Purchaseselfservice.js"
import Purchaserequestforquotations from "../apps/suppliers/Purchaserequestforquotations.js"
import Purchaserequestforproposals from "../apps/suppliers/Purchaserequestforproposals.js"
import Purchasetenders from "../apps/suppliers/Purchasetenders.js"
import Purchaseorders from "../apps/suppliers/Purchaseorders.js"
import Purchasecontracts from "../apps/suppliers/Purchasecontracts.js"
import Purchasedeliveryorders from "../apps/suppliers/Purchasedeliveryorders.js"
import Purchaseshipment from "../apps/suppliers/Purchaseshipment.js"
import Purchasedeliverytracking from "../apps/suppliers/Purchasedeliverytracking.js"
import Purchasevendorinvoice from "../apps/suppliers/Purchasevendorinvoice.js"
import Purchasevendorinvoicestatus from "../apps/suppliers/Purchasevendorinvoicestatus.js"
import Purchaseservicecases from "../apps/suppliers/Purchaseservicecases.js"
import Purchaseservicerequest from "../apps/suppliers/Purchaseservicerequest.js"
import Purchasewarrantyclaim from "../apps/suppliers/Purchasewarrantyclaim.js"
import Purchaseserviceorders from "../apps/suppliers/Purchaseserviceorders.js"
import Purchaseserviceconfirmation from "../apps/suppliers/Purchaseserviceconfirmation.js"
import Purchasemembership from "../apps/suppliers/Purchasemembership.js"
import Purchasekpireport from "../apps/suppliers/Purchasekpireport.js"
import Purchasereport from "../apps/suppliers/Purchasereport.js"
import Purchasedeliveryreport from "../apps/suppliers/Purchasedeliveryreport.js"
import Purchaseinventoryreport from "../apps/suppliers/Purchaseinventoryreport.js"
import Purchaseinvoicereport from "../apps/suppliers/Purchaseinvoicereport.js"
import Purchasevendorreport from "../apps/suppliers/Purchasevendorreport.js"
import Purchaseproductreport from "../apps/suppliers/Purchaseproductreport.js"

//Warehouse
import Warehouselocation from "../apps/warehouse/Warehouselocation.js"
import Warehousenumber from "../apps/warehouse/Warehousenumber.js"
import Warehousezone from "../apps/warehouse/Warehousezone.js"
import Warehouseaisle from "../apps/warehouse/Warehouseaisle.js"
import Warehouserack from "../apps/warehouse/Warehouserack.js"
import Warehouselevel from "../apps/warehouse/Warehouselevel.js"
import Warehousebin from "../apps/warehouse/Warehousebin.js"
import Warehousedesigner from "../apps/warehouse/Warehousedesigner.js"
import Warehouseproducts from "../apps/warehouse/Warehouseproducts.js"
import Warehousebom from "../apps/warehouse/Warehousebom.js"
import Warehousebatches from "../apps/warehouse/Warehousebatches.js"
import Warehouseserialnumber from "../apps/warehouse/Warehouseserialnumber.js"
import Warehouseequipments from "../apps/warehouse/Warehouseequipments.js"
import Warehousepurchaserequisition from "../apps/warehouse/Warehousepurchaserequisition.js"
import Materialrequirementplanning from "../apps/warehouse/Materialrequirementplanning.js"
import Transferrequisition from "../apps/warehouse/Transferrequisition.js"
import Outboundrequisition from "../apps/warehouse/Outboundrequisition.js"
import Committoreserved from "../apps/warehouse/Committoreserved.js"
import Stockonhand from "../apps/warehouse/Stockonhand.js"
import Stockvmi from "../apps/warehouse/Stockvmi.js"
import Stockconsignment from "../apps/warehouse/Stockconsignment.js"
import Stockcustomer from "../apps/warehouse/Stockcustomer.js"
import Proposalofdelivery from "../apps/warehouse/Proposalofdelivery.js"
import Goodsreceipt from "../apps/warehouse/Goodsreceipt.js"
import Goodsissue from "../apps/warehouse/Goodsissue.js"
import Proofofdelivery from "../apps/warehouse/Proofofdelivery.js"
import Stocktransfer from "../apps/warehouse/Stocktransfer.js"
import Qualityinspection from "../apps/warehouse/Qualityinspection.js"
import Putaway from "../apps/warehouse/Putaway.js"
import Picking from "../apps/warehouse/Picking.js"
import Packing from "../apps/warehouse/Packing.js"
import Repacking from "../apps/warehouse/Repacking.js"
import Labeling from "../apps/warehouse/Labeling.js"
import Relabeling from "../apps/warehouse/Relabeling.js"
import Loading from "../apps/warehouse/Loading.js"
import Unloading from "../apps/warehouse/Unloading.js"
import Stocktaking from "../apps/warehouse/Stocktaking.js"
import Stockadjustment from "../apps/warehouse/Stockadjustment.js"
import Stockreturn from "../apps/warehouse/Stockreturn.js"
import Goodscanceltransactions from "../apps/warehouse/Goodscanceltransactions.js"
import Proposalofacceptance from "../apps/warehouse/Proposalofacceptance.js"
import Serviceacceptance from "../apps/warehouse/Serviceacceptance.js"
import Serviceinspection from "../apps/warehouse/Serviceinspection.js"
import Proofofservice from "../apps/warehouse/Proofofservice.js"
import Servicecanceltransactions from "../apps/warehouse/Servicecanceltransactions.js"
import Warehousekpireport from "../apps/warehouse/Warehousekpireport.js"
import Fulfillmentreport from "../apps/warehouse/Fulfillmentreport.js"
import Inventoryreport from "../apps/warehouse/Inventoryreport.js"
import Goodsmovementreport from "../apps/warehouse/Goodsmovementreport.js"
import Servicereport from "../apps/warehouse/Servicereport.js"
import Warehouseproductreport from "../apps/warehouse/Warehouseproductreport.js"

//Settings
import Basicdata from "../apps/settings/Basicdata.js"
import Profilesetting from "../apps/settings/Profilesetting.js"
import Digitalsignature from "../apps/settings/Digitalsignature.js"

//Administration
import Systemid from "../apps/administration/Systemid.js"
import Organizationid from "../apps/administration/Organizationid.js"
import Applications from "../apps/administration/Applications.js"
import Appsmarket from "../apps/administration/Appsmarket.js"
import Resources from "../apps/administration/Resources.js"
import Utilities from "../apps/administration/Utilities.js"
import Licenses from "../apps/administration/Licenses.js"
import Paymentmethod from "../apps/administration/Paymentmethod.js"
import Subscriptionbilling from "../apps/administration/Subscriptionbilling.js"
import Usersadministration from "../apps/administration/Usersadministration.js"
import Usergroupsadministration from "../apps/administration/Usergroupsadministration.js"
import Authorizationroles from "../apps/administration/Authorizationroles.js"
import Authentication from "../apps/administration/Authentication.js"
import Alertcenter from "../apps/administration/Alertcenter.js"
import Apicontrols from "../apps/administration/Apicontrols.js"

// Pages
import Pricing from "../pages/Pricing.js";
import Faq from "../pages/Faq.js";
import Profile from "../pages/Profile.js";
import People from "../pages/People.js";
import Activity from "../pages/Activity.js";
import Events from "../apps/networks/Events.js";
import Settings from "../pages/Settings.js";

// UI Elements
import LayoutColumns from "../docs/LayoutColumns.js";
import LayoutGrid from "../docs/LayoutGrid.js";
import LayoutGutters from "../docs/LayoutGutters.js";
import Accordions from "../docs/Accordions.js";
import Alerts from "../docs/Alerts.js";
import Avatars from "../docs/Avatars.js";
import Badges from "../docs/Badges.js";
import Breadcrumbs from "../docs/Breadcrumbs.js";
import Buttons from "../docs/Buttons.js";
import Cards from "../docs/Cards.js";
import Carousels from "../docs/Carousels.js";
import Dropdowns from "../docs/Dropdowns.js";
import Images from "../docs/Images.js";
import Listgroup from "../docs/Listgroup.js";
import Markers from "../docs/Markers.js";
import Modals from "../docs/Modals.js";
import NavTabs from "../docs/NavTabs.js";
import OffCanvas from "../docs/OffCanvas.js";
import Paginations from "../docs/Paginations.js";
import Placeholders from "../docs/Placeholders.js";
import Popovers from "../docs/Popovers.js";
import Progress from "../docs/Progress.js";
import Spinners from "../docs/Spinners.js";
import Toasts from "../docs/Toasts.js";
import Tooltips from "../docs/Tooltips.js";
import Tables from "../docs/Tables.js";
import FormElements from "../docs/FormElements.js";
import FormSelects from "../docs/FormSelects.js";
import FormChecksRadios from "../docs/FormChecksRadios.js";
import FormRange from "../docs/FormRange.js";
import FormPickers from "../docs/FormPickers.js";
import FormLayouts from "../docs/FormLayouts.js";
import UtilBackground from "../docs/UtilBackground.js";
import UtilBorder from "../docs/UtilBorder.js";
import UtilColors from "../docs/UtilColors.js";
import UtilDivider from "../docs/UtilDivider.js";
import UtilFlex from "../docs/UtilFlex.js";
import UtilSizing from "../docs/UtilSizing.js";
import UtilSpacing from "../docs/UtilSpacing.js";
import UtilOpacity from "../docs/UtilOpacity.js";
import UtilPosition from "../docs/UtilPosition.js";
import UtilTypography from "../docs/UtilTypography.js";
import UtilShadows from "../docs/UtilShadows.js";
import UtilExtras from "../docs/UtilExtras.js";
import ApexCharts from "../docs/ApexCharts.js";
import ChartJs from "../docs/ChartJs.js";
import MapLeaflet from "../docs/MapLeaflet.js";
import MapVector from "../docs/MapVector.js";
import IconRemix from "../docs/IconRemix.js";
import IconFeather from "../docs/IconFeather.js";

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