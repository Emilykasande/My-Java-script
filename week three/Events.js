//correction for the file path
const form = document.getElementById('orderForm');
const furniture=document.getElementById('furniture');
const customer=document.getElementById('customer');
const total=document.getElementById('total');
const calculateButton = document.getElementById('calculate');


function updateTotal() {
    const price=Number(document.getElementById('price').value);
    const qty=Number(document.getElementById('qty').value);

    const totalValue = price * qty;
    total.textContent=`Total:UGX ${cookieStore.tolocaleString(totalValue)}`;
}

 qty.addEventListener('input', updateTotal);
 price.addEventListener('input', updateTotal);

 // ccalcuaation weacj