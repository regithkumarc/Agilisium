
let productInfoList = [];

export function reloadProductDataCount() {
    getAllProductItem();
    return productInfoList.length;
}

export function getAllProductItem() {
    productInfoList = [];
    console.log(localStorage.getItem("productInfo"));
    let value = JSON.parse(localStorage.getItem("productInfo"));
    console.log(value)
    if (value != null && value.length > 0) {
        for (let i = 0; i < value.length; i++) {
            console.log("value[i]", value[i])
            productInfoList.push(value[i]);
        }
    }
    return productInfoList;
}

export function removeproductItem(productItem) {
    getAllProductItem();
    if (productInfoList && productInfoList.length > 0) {
        for (let i = 0; i < productInfoList.length; i++) {
            if (productInfoList[i].serial_no === productItem.serial_no) {
                console.log("productInfoList[i].serial_no",productInfoList[i].serial_no)
                console.log("productInfoList[i].serial_no",productItem.serial_no)
                var index = productInfoList.indexOf(i)
                productInfoList.splice(index, 1);
                localStorage.setItem("productInfo", JSON.stringify(productInfoList))
                return true;
            }
        }
    }
    return false;
}

export function addProductDetails(product) {
    getAllProductItem();
    console.log(productInfoList);
    if (productInfoList != null && productInfoList.length > 0) {
        //userArr = userInfo
        productInfoList.push(product);
        localStorage.setItem("productInfo", JSON.stringify(productInfoList))
        return "Product Added Succesfully";
    } else {
        productInfoList = [];
        productInfoList.push(product)
        localStorage.setItem("productInfo", JSON.stringify(productInfoList))
        return "Product Added Succesfully";
    }
}

export function registerUserDetails(user) {
    getAllProductItem();
    //console.log("UserInfo : ", userInfo)
    //let userArr = [];
    if (productInfoList != null && productInfoList.length > 0) {
        //userArr = userInfo
        productInfoList.push(user);
        localStorage.setItem("userInfo", JSON.stringify(productInfoList))
        return "Registered Succesfully";
    } else {
        productInfoList = [];
        productInfoList.push(user)
        localStorage.setItem("userInfo", JSON.stringify(productInfoList))
        return "Registered Succesfully";
    }
}

export function checkUserExists(userName) {
    getAllProductItem();
    console.log(userName)
    if (productInfoList && productInfoList.length > 0) {
        for (let i = 0; i < productInfoList.length; i++) {
            if (productInfoList[i].userName === userName) {
                console.log("Username : ", userName)
                console.log("userArr[i].userName", productInfoList[i].userName)
                return true;
            }
        }
    }
    return false;
}