var owner_name_input_element = document.getElementById('ownerName');
var fixed_amount_input_element = document.getElementById('fixedAmount');
var add_fix_btn_element = document.getElementById('addFixBtn');
var tbl_body_element = document.getElementById('fixedDepositTableBody');
var update_interest_rate_btn_element = document.getElementById('updateInterestBtn');
var new_interest_rate_input_element = document.getElementById('newInterestRate');
/*
* owner_name
* fixed_amount
* interest_rate
* annual_interest
* */
var Account = /** @class */ (function () {
    function Account(owner_name, fixed_amount, rate, annual_interest) {
        this.owner_name = owner_name;
        this.fixed_amount = fixed_amount;
        this.interest_rate = rate;
        this.annual_interest = annual_interest;
    }
    Account.prototype.updateRate = function (rate) {
        this.interest_rate = rate;
        this.annual_interest = (this.fixed_amount * rate) / 100;
    };
    Account.prototype.getInterestRate = function () {
        return this.interest_rate;
    };
    Account.prototype.getAnnualInterest = function () {
        return this.annual_interest;
    };
    return Account;
}());
var rate = 12.5;
var accounts = [];
add_fix_btn_element.addEventListener('click', function () {
    console.log('add_fix_btn_element');
    var owner_name = owner_name_input_element.value;
    var fixed_amount = fixed_amount_input_element.value;
    var annual_interest = (+fixed_amount * rate) / 100;
    var account = new Account(owner_name, +fixed_amount, rate, annual_interest);
    accounts.push(account);
    updateTbl();
});
function updateTbl() {
    tbl_body_element.innerHTML = '';
    accounts.forEach(function (account) {
        var tr_element = document.createElement('tr');
        var td_owner_name = document.createElement('td');
        td_owner_name.innerText = account.owner_name;
        var td_fixed_amount = document.createElement('td');
        td_fixed_amount.innerText = account.fixed_amount.toString();
        var td_interest_rate = document.createElement('td');
        td_interest_rate.innerText = account.getInterestRate().toString();
        var td_annual_interest = document.createElement('td');
        td_annual_interest.innerText = account.getAnnualInterest().toString();
        tr_element.appendChild(td_owner_name);
        tr_element.appendChild(td_fixed_amount);
        tr_element.appendChild(td_interest_rate);
        tr_element.appendChild(td_annual_interest);
        tbl_body_element.appendChild(tr_element);
    });
}
update_interest_rate_btn_element.addEventListener('click', function () {
    console.log('update_interest_rate_btn_element');
    var new_rate = new_interest_rate_input_element.value;
    rate = +new_rate;
    accounts.forEach(function (account) {
        account.updateRate(rate);
    });
    updateTbl();
});
