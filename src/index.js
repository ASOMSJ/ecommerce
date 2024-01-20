window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import '@fortawesome/fontawesome-free/js/all.min';


document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(item => new bootstrap.Tooltip(item))



var buttons = document.querySelectorAll('.add-to-cart-btn');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        alert('أضيف المنتج الى عربة الشراء');
    });
});
document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.size-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    });
});
document.querySelectorAll('.color-option input[type="radio"]').forEach(item => {
    item.addEventListener('change', () => {
        document.querySelectorAll('.color-option').forEach(i => {
            i.classList.remove('active')
        })
        item.parentNode.parentNode.classList.add('active')
    });
});

//حساب سعر اجمالي المنتج
document.querySelectorAll('[data-product-quantity]').forEach(item => {
    item.addEventListener('change', () => {
        const newQuantity = item.value;
        const parent = item.closest('[data-product-info]');
        const pricePerUbit = parent.getAttribute('[data-product-price]');
        const totalpriceforbroduct = newQuantity * pricePerUbit;
        parent.querySelector('.total-price-for-product').innerHTML= totalpriceforbroduct + "$"
    });

});


document.getElementById("copyright").innerHTML = "جميع الحقوق محفوظة سنة " + new Date().getFullYear();

