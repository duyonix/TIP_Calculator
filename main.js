function tipCalculate(money, percent, people) {
    return (money * percent) / (100 * people);
}

document.getElementById("btnTinhTienTip").onclick = function () {
    var money = document.getElementById("txtTongTien").value;
    var percent = document.getElementById("slPhanTramTip").value;
    var people = document.getElementById("txtSoNguoi").value;
    var tip = tipCalculate(money, percent, people);
    document.getElementById("txtThongBaoTienTip").style.display = "block";
    if (isNaN(tip) || money <= 0 || people <= 0) {
        document.getElementById("tipMoney").className = "alert alert-danger";
        document.getElementById("tipMoney").innerHTML = "Vui lòng kiểm tra dữ liệu đầu vào của bạn";
    } else {
        document.getElementById("tipMoney").className = "alert alert-success";
        document.getElementById("tipMoney").innerHTML = "$" + tip + " mỗi người";
    }
}