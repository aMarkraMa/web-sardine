/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //点击任何nav__link 移除show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
  }
window.addEventListener('scroll', blurHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //scroll高于350viewpoint加入scrollup
    this.scrollY >= 350?scrollUp.classList.add('show-scroll'):scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY 

    SpeechRecognitionResult.forEach(current=>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*=' +sectionId + ']')
    
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin:'top',
    distance:'40px',
    opacity:1,
    scale:1.1,
    duration:2500,
    delay:300,
})

sr.reveal('.home__data, .about__img, .about__data, .visit__data')

sr.reveal('.home__image', {rotate : {z : -15}})
sr.reveal('.home__bread, .about__bread', {rotate : {z : 15}})
sr.reveal('.home__footer', {scale : 1, origin : 'bottom'})

sr.reveal('.new__card:nth-child(1) img',{rotate : {z:-30}, distance:0})
sr.reveal('.new__card:nth-child(2) img',{rotate : {z:15}, distance:0, delay:600})
sr.reveal('.new__card:nth-child(3) img',{rotate : {z:-30}, distance:0, delay:900})

sr.reveal('.favorite__card:nth-child(1) img')
sr.reveal('.favorite__card:nth-child(2) img', {delay:200})
sr.reveal('.favorite__card:nth-child(3) img', {delay:400})
sr.reveal('.favorite__card:nth-child(4) img', {delay:600})
sr.reveal('.favorite__card:nth-child(5) img', {delay:800})
sr.reveal('.favorite__card:nth-child(6) img', {delay:1000})

/* sr.reveal('.favorite__card img', {interval:100, rotate:{z:15}, distance:0}) */

sr.reveal('.favorite__container img', {scale:1})







document.addEventListener('DOMContentLoaded', function () {
    const cartQuantity = document.querySelector('.nav__cart span'); // 选择显示数量的元素
    const addToCartButtons = document.querySelectorAll('.favorite__button'); // 选择所有的添加到购物车按钮
    const cart = {}; // 购物车对象，用来存储产品信息和数量

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            let currentQuantity = parseInt(cartQuantity.textContent) || 0; // 获取当前数量，如果未定义则默认为0
            cartQuantity.textContent = currentQuantity + 1; // 数量加1

            // 获取产品信息
            const card = button.closest('.favorite__card');
            const productId = card.querySelector('.favorite__img').src.split('/').pop().split('.')[0]; // 使用图片名作为产品ID
            const productName = card.querySelector('.favorite__title').textContent;
            const productDescription = card.querySelector('.favorite__subtitle').textContent;
            const productPrice = card.querySelector('.favorite__price').textContent;

            // 更新购物车对象
            if (cart[productId]) {
                cart[productId].quantity += 1; // 如果产品已存在，增加数量
            } else {
                cart[productId] = {
                    name: productName,
                    description: productDescription,
                    price: productPrice,
                    quantity: 1 // 新增产品，数量设置为1
                };
            }

            console.log(cart); // 打印当前的购物车状态，用于调试
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const cartModal = document.getElementById('cartModal');
    const cartItems = document.getElementById('cartItems');
    const closeBtn = document.querySelector('.close');
    const cartIcon = document.querySelector('.nav__cart');

    // 显示购物车模态窗口
    cartIcon.addEventListener('click', function () {
        cartItems.innerHTML = ''; // 清空当前列表
        for (const id in cart) {
            const item = cart[id];
            const li = document.createElement('li');
            li.textContent = `${item.name} - Quantity: ${item.quantity}`;
            cartItems.appendChild(li);
        }
        cartModal.style.display = 'block';
    });

    // 关闭模态窗口
    closeBtn.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    // 点击窗口外部时关闭模态窗口
    window.onclick = function(event) {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    };
});

