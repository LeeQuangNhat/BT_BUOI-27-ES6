function themHinhAnh(value, divClass) {
    let image = document.querySelector(divClass);
    image.innerHTML = '';
    if(divClass=='.background'){
        image.style.backgroundImage = `url(${value})`
    }else{
        let newImage = document.createElement('img');
        newImage.src = value;
        image.appendChild(newImage);
    }
}
let buttons = document.querySelectorAll('.well_item button');
buttons.forEach(function(button, index) {
    button.onclick = function () {
        let arrTenSanPham = tenSanPham()
        console.log(arrTenSanPham[index]);
        let imageURL = document.querySelectorAll('.well_item_hide img')[index].src;
        themHinhAnh(imageURL, `.${arrTenSanPham[index]}`);
    };
});
function tenSanPham() {
    let h3 = document.querySelectorAll('.well_item h3');
    let ketQua = [];
    for (let i of h3) {
        let tenSanPham = i.textContent.split(' ')[0];
        if (tenSanPham === 'Background') {
            tenSanPham = tenSanPham.toLowerCase();
        }
        ketQua.push(tenSanPham);
    }
    console.log(ketQua);
    return ketQua;
}



