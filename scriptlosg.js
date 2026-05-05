let upForm = document.querySelector("form");

if (upForm && document.getElementById("full_name")) {

    upForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("full_name").value;
        let email = document.getElementById("email").value;
        let studentNumber = document.getElementById("number1").value;
        let parentNumber = document.getElementById("number2").value;
        let password = document.getElementById("password").value;
        let agree = document.getElementById("agree").checked;
        let errMg = document.getElementById("errMg");
        let emaErr = document.getElementById("emaErr");
        let numErro = document.getElementById("numErro");
        let numErrt = document.getElementById("numErrt");
        let paErr = document.getElementById("paErr");
        let chErr = document.getElementById("chErr");



        if (name === "" || email === "" || studentNumber === "" || parentNumber === "" || password === "") {
            errMg.textContent = "من فضلك املأ كل البيانات"
            errMg.style.display = "block";
        }
        else if (!email.includes("@") || !email.includes(".")) {
            emaErr.textContent = "البريد الإلكتروني غير صحيح";
        }
        else if (isNaN(studentNumber) || studentNumber.length < 11) {
           numErro.textContent = "رقم الطالب يجب يكون 11  رقم علي الأقل";
        }
        else if  (isNaN(parentNumber) || parentNumber.length < 11) {
            numErrt.textContent = "رقم الطالب يجب يكون 11  رقم علي الأقل";
        }
        else if  (password.length < 8) {
            paErr.textContent = "كلمة المرور يجب تكون 8 حروف او ارقام  على الأقل";
        }
        else if  (agree === false) {
            chErr.textContent = "يجب أن  توافق على الشروط";
        }
        else {
            errMg.style.display = "none";

            let user = {
                name: name,
                email: email,
                studentNumber: studentNumber,
                parentNumber: parentNumber,
                password: password
            };

            localStorage.setItem("user", JSON.stringify(user))
            window.location.href = "login.html";
        }
    });
}

let inForm = document.getElementById("loginForm");
if (inForm) {
    inForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let emaErr = document.getElementById("emaErr");
        let paErr = document.getElementById("paErr");
        let errMg = document.getElementById("errMg");
        let rgi = document.getElementById("rgi");

        let user = JSON.parse(localStorage.getItem("user"));

        if (email === "" || password === "") {
            errMg.textContent = "من فضلك املأ كل البيانات"
            errMg.style.display = "block";
        }
        else if (!email.includes("@") || !email.includes(".")) {
            emaErr.textContent = "البريد الإلكتروني غير صحيح";
        }
        else if (user === null) {
            errMg.textContent = "أنشيء حساب اولا"
            errMg.style.display = "block";
        }
        else if (email === user.email && password === user.password) {
            rgi.textContent = "تم تسجيل الدخول بنجاح";

            localStorage.setItem("loggedIn", "true");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2010);
        }
        else {
            errMg.textContent = "الإيميل أو كلمة المرور خطأ";
            errMg.style.color = "red";
            errMg.style.display = "block";
        }
    });
}

let curtMode = localStorage.getItem("darkmode");
if (curtMode === "enabled") {
    document.body.classList.add("darkmode");
} else {
    document.body.classList.remove("darkmode");
};
