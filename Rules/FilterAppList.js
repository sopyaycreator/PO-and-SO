export default function FilterAppList(context) {
    let search = context.searchString;

    let data = [
        { Title: "Goods Issue", Description: "Goods Issue or Goods Received", Action: "/BusinessPartner/Actions/Goods_Received/NavToGoods_Received.action" },
        { Title: "Customer", Description: "Sales Data", Action: "/BusinessPartner/Actions/Business_Partner/A_Customer/NavToA_Customer_List.action" },
        { Title: "Supplier", Description: "Procurement", Action: "/BusinessPartner/Actions/Business_Partner/A_Supplier/NavToA_Supplier_List.action" }
    ];

    if (!search) return data;

    search = search.toLowerCase();

    return data.filter(item =>
        item.Title.toLowerCase().includes(search) ||
        item.Description.toLowerCase().includes(search)
    );
}