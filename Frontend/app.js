
const cordlessprod = [
    {
        id: 1,
        title: "50+ PRODUCTS",
        img: "./assets/xgt.png",
        desc: "The XGT® System is a new 40V | 80V max system <br> of cordless equipment and tools"
    },
    {
        id: 2,
        title: "275+ PRODUCTS",
        img: "./assets/lxt.png",
        desc: " The LXT® System is the world’s largest compatible <br> 18V slide-style battery system."
    },
    {
        id: 3,
        title: "70+ PRODUCTS",
        img: "./assets/cxt.png",
        desc: "  The CXT® System provides the most compact solution <br> with superior comfort and capacity."
    },
]

const menu = [
    {
        id: 1,
        title: "DEMOLITION HAMMER KIT",
        subtitle: "GMH02PM",
        img: "./assets/xgt1.png",
        desc: "80V max (40V max X2) XGT® Brushless 28 lb. AVT® <br> Demolition Hammer Kit, accepts SDS-MAX bits,<br> AWS® Capable (4.0Ah)"
    },
    {
        id: 2,
        title: "DUST EXTRACTOR KIT",
        subtitle: "XCV21PTX",
        img: "./assets/xgt1.png",
        desc: "36V (18V X2) LXT® Brushless 2.1 Gallon HEPA <br> Filter Dry Dust Extractor Kit"
    },
    {
        id: 3,
        title: "DEMOLITION HAMMER KIT",
        subtitle: "GMH02PM",
        img: "./assets/xgt1.png",
        desc: "80V max (40V max X2) XGT® Brushless 28 lb. AVT® <br> Demolition Hammer Kit, accepts SDS-MAX bits,<br> AWS® Capable (4.0Ah)"
    },
    {
        id: 4,
        title: "ANGLE GRINDER KIT",
        subtitle: "GAG03M1",
        img: "./assets/xgt1.png",
        desc: "40V max XGT® Brushless Cordless 4-1/2” / 5”<br> Paddle Switch Angle Grinder Kit, with Electric <br> Brake (4.0Ah)"
    },
    {
        id: 5,
        title: "COMPOUND MITER SAW KIT",
        subtitle: "XSL06PM",
        img: "./assets/xgt1.png",
        desc: "36V (18V X2) LXT® Brushless 10” Dual-Bevel <br>Sliding Compound Miter Saw Kit"
    },
    {
        id: 6,
        title: "ANGLE GRINDER KIT",
        subtitle: "GAG03M1",
        img: "./assets/xgt1.png",
        desc: "40V max XGT® Brushless Cordless 4-1/2” / 5”<br> Paddle Switch Angle Grinder Kit, with Electric <br> Brake (4.0Ah)"
    }

]


const prod = [
    {
        id: 1,
        title: "TOP HANDLE CHAIN SAW",
        img: "./assets/product1.png",
        desc: "18V LXT® Brushless <br> 12” Top Handle Chain Saw"
    },
    {
        id: 2,
        title: "TOP HANDLE CHAIN SAW",
        img: "./assets/product2.png",
        desc: "18V LXT® Brushless <br> 12” Top Handle Chain Saw"
    },
    {
        id: 3,
        title: "TOP HANDLE CHAIN SAW",
        img: "./assets/product3.png",
        desc: "18V LXT® Brushless <br> 12” Top Handle Chain Saw"
    },
    {
        id: 4,
        title: "TOP HANDLE CHAIN SAW",
        img: "./assets/product4.png",
        desc: "18V LXT® Brushless <br> 12” Top Handle Chain Saw"
    },
    {
        id: 5,
        title: "TOP HANDLE CHAIN SAW",
        img: "./assets/product1.png",
        desc: "18V LXT® Brushless<br>  12” Top Handle Chain Saw"
    },
    {
        id: 6,
        title: "TOP HANDLE CHAIN SAW",
        img: "./assets/product2.png",
        desc: "18V LXT® Brushless<br>  12” Top Handle Chain Saw"
    },
    {
        id: 7,
        title: "TOP HANDLE CHAIN SAW",
        img: "./assets/product3.png",
        desc: "18V LXT® Brushless <br>  12” Top Handle Chain Saw"
    },
    {
        id: 8,
        title: "TOP HANDLE CHAIN SAW",
        img: "./assets/product4.png",
        desc: "18V LXT® Brushless <br>  12” Top Handle Chain Saw"
    }
]


const cordlessProducts = document.querySelector(".cordless-products");
const cordlessSystem = document.querySelector(".cordless-sytem");
const featuredProducts = document.querySelector(".featured-products");
const newArrivals = document.querySelector(".new-arrivals");


window.addEventListener("DOMContentLoaded", function () {
    displayCordlessItems(cordlessprod)
    displayMenuItems(menu);
    displayProductItems(prod);
    displayNewItems(prod);


});



function displayCordlessItems(cordlessItems) {

    let displayCordless = cordlessItems.map(function (cordlessprod) {

        return ` <div class="col">
        <div class="card text-white" style="width: 25rem">
          <img src=${cordlessprod.img} class="card-img" alt="..." />
          <div class="card-img-overlay mt-5 pt-5" style="margin-top: 25%!important;">
            <h5 class="card-title product">${cordlessprod.title}</h5>
           
            <p class="card-text productdetail">
            ${cordlessprod.desc}
            </p>
        
            <a href="#" class="btn btn-danger">Know more
              <img
                src="./assets/knowmore.png"
                class="img-fluid"
                alt="..."
              />
            </a>
          </div>
        </div>
      </div>`
    });
    displayCordless = displayCordless.join("")

    cordlessProducts.innerHTML = displayCordless;
}





function displayMenuItems(menuItems) {

    let displayMenu = menuItems.map(function (item) {

        return `<div class="col menu-item">
        <div class="card mb-3 border-0" style="width: 25rem;background-color:#DDDCD2";>
            <div class="row g-0">
              <div class="col-md-5">
                <img src=${item.img} class="img-fluid h-100 rounded-2" alt=${item.title}>
              </div>
              <div class="col-md-7 item-info">
                <div class="card-body">
                      <div class="row">
                          <div class="col">
                            <h5 class="card-title text-info bold">${item.title}</h5>
                            <h5 class="card-title bold">${item.subtitle}</h5>
                          </div>
                      </div>
                  <p class="card-text item-text" style="text-align:justify; font-size:12px">${item.desc}</p>
                  <div class="row" style=""display-flex>
                          <div class="col-6">
                  <a href="#" class="btn btn-danger quicklink">QUICK VIEW
                  <img src="./assets/quicklink.png" class="img-fluid" alt="..." style="width:12%">
                  </a>
                  </div>
                  <div class="col-6">
                  <a href class="btn btn-danger productlink">PRODUCT DETAILS
                  <img src="./assets/icon.png" class="img-fluid" alt="..." style="width:12%">
                  </a>
                  </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
    </div>`
    });
    displayMenu = displayMenu.join("")

    cordlessSystem.innerHTML = displayMenu;
}




function displayProductItems(productItems) {

    let displayProduct = productItems.map(function (product) {

        return `<div class="col">
        <div class="card bg-light text-center border-0">
          <img src=${product.img} class="card-img-top img-fluid" alt="...">
          <div class="card-body" style="margin-top:-25%">
            <h5 class="card-title text-info">${product.title}</h5>
            <p class="card-text" >${product.desc}</p>
            <a href="#" class="btn btn-danger">PRODUCT DETAILS
              <img src="./assets/icon.png" class="img-fluid" alt="..." style="width:10%">
            </a>
          </div>
        </div>
      </div>`
    });
    displayProduct = displayProduct.join("")

    featuredProducts.innerHTML = displayProduct;
}


function displayNewItems(newItems) {

    let displayNew = newItems.map(function (newprod) {

        return `<div class="col">
        <div class="card bg-light text-center border-0">
          <img src=${newprod.img} class="card-img-top img-fluid" alt="...">
          <div class="card-body" style="margin-top:-25%">
            <h5 class="card-title text-info">${newprod.title}</h5>
            <p class="card-text" >${newprod.desc}</p>
            <a href="#" class="btn btn-danger">PRODUCT DETAILS
              <img src="./assets/icon.png" class="img-fluid" alt="..." style="width:10%">
            </a>
          </div>
        </div>
      </div>`
    });
    displayNew = displayNew.join("")

    newArrivals.innerHTML = displayNew;
}
