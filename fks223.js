// ==UserScript==
// @name         FKS-223 Filler
// @namespace    http://your.homepage/
// @version      0.1.1
// @description  enter something useful
// @author       You
// @match        https://zakupki-trunkfks-223.agilevlg-srv.ru/trade/create/Tender
// @include      http://localhost:25790/trade/create/Tender
// @grant        none
// ==/UserScript==

Date.prototype.addDays = function(days)
{
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
};

var toDateTime = function(dateTime){
    return dateTime.toLocaleDateString("ru-RU") + " " + dateTime.toLocaleTimeString("ru-RU").substring(0, 5);
}

$(".js-progress-content").prepend( "<div style='position: fixed;top: 50%; right: 0;'><button id='btnAuction' style='height: 40px; min-width: 40px; position: relative;'>Fill</button>" );

$("#btnAuction").click(function(){
    var currentDateTime = new Date();        
    var startPrice = 1000;
    alert(1);

    // Общие сведения о закупке.    
    $("#OrderName").focus().val("Конкурс №" + currentDateTime.getTime()).blur().change(); // Наименование закупки
    $("#IsRetradingEnabled").focus().prop( "checked", true ).blur().change();
    
    var applicatonEndDate = currentDateTime;
    $("#ApplicationEndDate").focus().val(toDateTime(applicatonEndDate)).blur().change(); // Дата и время окончания подачи заявок
    
    // Сведения о порядке работы комиссии.
    var considerationStartDate = applicatonEndDate.addDays(1);
    $("#ConsiderationStartDate").focus().val(toDateTime(considerationStartDate)).blur().change(); // Дата и время начала рассмотрения заявок
    var considerationDate = considerationStartDate.addDays(1);
    $("#ConsiderationDate").focus().val(toDateTime(considerationDate)).blur().change(); // Дата и время окончания срока рассмотрения заявок
    
    // Контактная информация.
    $("#ContactFio").focus().val("Контактное лицо").blur().change(); // Контактное лицо
    $("#ContactPhone").focus().val("+7 (999) 999-9999 доб. 999999").blur().change(); // Телефон (в международном формате)
    
    // Информация о лоте - Общие сведения.
    $("[aria-controls='AddLotTabs-1']").click(); // Общие сведения
    $("#CurrentLot_CommonInfo_Subject").focus().val("Наименование предмета договора").blur().change(); // Наименование предмета договора    
   
    $("#CurrentLot_CommonInfo_LotPrice").focus().val(startPrice).change().blur(); // Начальная (максимальная) цена, руб    
    $("#CurrentLot_CommonInfo_KeepGuaranteeForParticipantsCount").focus().val("0").change().blur(); // Количество участников, у которых сохраняется блокирование ГО   
    
    // Информация о лоте - Товары, работы и услуги.
    $("[aria-controls='AddLotTabs-2']").click(); // Товары, работы и услуги
    $("#CurrentObject_Name").focus().val("Наименование товара, работ, услуг").change().blur(); // Наименование товара, работ, услуг    
    $("#CurrentObject_Quantity").focus().val("1").change().blur(); // Количество
    $("#CurrentObject_UnitPrice").focus().val(startPrice).blur().change().prev('input').focus().blur(); // Цена за единицу измерения, руб.            
    
    $("[name='CurrentObject.Okei']").focus().val(260).blur().change();
    $("[name='CurrentObject.Okei_input']").focus().val("Ампер (260)").blur().change();
    
    $("#CurrentObject_Okdp").focus().val("A").blur().change();
    $("#CurrentObject_Okved").focus().val("РАЗДЕЛ A").blur().change();
    
    
    
    // Информация о лоте - Сведения об аукционе
    // $("[aria-controls='AddLotTabs-2']").click(); // Товары, работы и услуги
    
    // var auctionStartDate = considerationDate.addDays(1);
    // $("#CurrentLot_AuctionInfo_AuctionDate").val(toDateTime(auctionStartDate));
    
    // Информация о лоте - Сведения о переторжке
    
    $("[aria-controls='AddLotTabs-3']").click(); // Сведения о переторжке
    $("#CurrentLot_TraidingInfo_IsPublicTrading").focus().prop( "checked", true ).blur().change(); // Показывать ход переторжки
    var tradeStartDate = considerationDate.addDays(1);    
    var tradeEndDate = tradeStartDate.addDays(1);
    
    $("#CurrentLot_TraidingInfo_AuctionDate").focus().val(toDateTime(tradeStartDate)).blur().change(); // Дата и время начала переторжки
    $("#CurrentLot_TraidingInfo_AuctionEndDate").focus().val(toDateTime(tradeEndDate)).blur().change(); // Дата и время окончания переторжки
    
    $("#CurrentLot_TraidingInfo_WithStep").focus().prop( "checked", true ).blur().change(); // Переторжка с шагом
    
    var minPercent = 2;
    var maxPercent = minPercent + 10;
    $("#CurrentLot_TraidingInfo_MinStep").focus().val(minPercent).blur().change().prev('input').focus().blur(); // Величина шага
    $("#CurrentLot_TraidingInfo_MaxStep").focus().val(maxPercent).blur().change().prev('input').focus().blur(); // Величина шага
    
    
    // Информация о лоте - Сведения о заказчиках    
    $("[aria-controls='AddLotTabs-4']").click(); // Сведения о заказчиках
    $("#CustomersList_listbox li").last().click(); //Заказчик
    $("#CurrentCustomer_MaxPrice").focus().val(startPrice).change().blur(); // Начальная (максимальная цена) контракта, руб
    $("#CurrentCustomer_ApplicationAmount").focus().val(startPrice*0.1).change().blur(); // Обеспечение заявки, руб

    // Информация о лоте - Документы лота
    $("[aria-controls='AddLotTabs-5']").click(); // Документы лота*/
});
