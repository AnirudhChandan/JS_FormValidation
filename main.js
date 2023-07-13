function validate() {
    var fname = document.forms.enroll.fname.value;
    var lname = document.forms.enroll.lname.value;
    var address = document.forms.enroll.address.value;
    var email = document.forms.enroll.email.value;
    var phonenum = document.forms.enroll.phonenum.value;
    var course = document.forms.enroll.course.value;
    var regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/;
    var regName = /\d+$/g;;
    if (fname == "" || regName.test(fname)) {
        window.alert("Please enter your first name properly.");
        fname.focus();
        return false;
    }
    if (lname == "" || regName.test(lname)) {
        window.alert("Please enter your last name properly.");
        fname.focus();
        return false;
    }
    if (address == "") {
        window.alert("Please enter your address.");
        address.focus();
        return false;
    }
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (phonenum == "" || !regPhone.test(phonenum)) {
        alert("Please enter valid phone number.");
        phonenum.focus();
        return false;
    }
    if (course.selectedIndex == -1) {
        alert("Please enter your course.");
        course.focus();
        return false;
    }
    return true;
}