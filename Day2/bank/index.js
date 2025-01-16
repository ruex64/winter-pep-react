let account = {
    name: "",
    balance: 0
};

function createAccount() {
    const accountNameInput = document.getElementById("accountName");
    account.name = accountNameInput.value;
    if (account.name) {
        alert(`Account "${account.name}" created successfully!`);
        accountNameInput.value = "";
        updateBalance();
    } else {
        alert("Please enter an account name.");
    }
}

function deposit() {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);
    if (!account.name) {
        alert("Please create an account first.");
    } else if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid deposit amount.");
    } else {
        account.balance += amount;
        alert(`Deposited ${amount.toFixed(2)} successfully!`);
        updateBalance();
        amountInput.value = "";
    }
}

function withdraw() {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);
    if (!account.name) {
        alert("Please create an account first.");
    } else if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid withdrawal amount.");
    } else if (amount > account.balance) {
        alert("Insufficient balance.");
    } else {
        account.balance -= amount;
        alert(`Withdrew ${amount.toFixed(2)} successfully!`);
        updateBalance();
        amountInput.value = "";
    }
}

function updateBalance() {
    const balanceDiv = document.getElementById("balance");
    balanceDiv.textContent = `Balance: ${account.balance.toFixed(2)}`;
}