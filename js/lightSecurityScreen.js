// 密码数组
let passwordArr = [];
// 获取所有密码框
const dots = document.querySelectorAll('.password > div > div')
// 密码框个数
const psdLen = dots.length
// 输入按钮
const btnNumber = document.querySelectorAll('.number > div')
// 输入按钮个数
const btnLen = btnNumber.length
// 删除按钮
const btnDelete = document.querySelector(".delete");
// 监听数组
let time = setInterval(() => {
    // 判断并渲染
    for (let i = 1; i <= dots.length; i++) {
        if (i >= passwordArr.length + 1) {
            dots[i - 1].classList.add('changer')
        } else {
            dots[i - 1].classList.remove('changer')
        }
    }
    // 更新的密码小点
    console.log(passwordArr)
}, 10)
//删除
btnDelete.onclick = function () {
    passwordArr.splice(-1, 1)
}
//输入
for (let j = 0; j < btnLen; j++) {
    btnNumber[j].onclick = function () {
        // 判断是否满足输入条件
        if (passwordArr.length < psdLen) {
            passwordArr.push(btnNumber[j].getAttribute('key'))
        }
    }
}


