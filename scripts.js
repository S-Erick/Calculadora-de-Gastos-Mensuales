const incomes = [];
const expenses = [];

function addIncome() {
  const desc = document.getElementById("income-description").value.trim();
  const amount = parseFloat(document.getElementById("income-amount").value);
  if (!desc || isNaN(amount) || amount <= 0) return;
  incomes.push({ id: crypto.randomUUID(), desc, amount });
  document.getElementById("income-description").value = "";
  document.getElementById("income-amount").value = "";
  render();
}

function addExpense() {
  const desc = document.getElementById("expense-description").value.trim();
  const amount = parseFloat(document.getElementById("expense-amount").value);
  if (!desc || isNaN(amount) || amount <= 0) return;
  expenses.push({ id: crypto.randomUUID(), desc, amount });
  document.getElementById("expense-description").value = "";
  document.getElementById("expense-amount").value = "";
  render();
}

function removeItem(arr, id) {
  const index = arr.findIndex(item => item.id === id);
  if (index !== -1) arr.splice(index, 1);
}

function render() {
  const incomeList = document.getElementById("income-list");
  const expenseList = document.getElementById("expense-list");
  const expensePercentages = document.getElementById("expense-percentages");

  incomeList.innerHTML = incomes.map(i => `
    <div class="entry">
      <span>${i.desc}</span>
      <span>$${i.amount.toFixed(2)} <button onclick="removeIncome('${i.id}')">x</button></span>
    </div>`).join("");

  expenseList.innerHTML = expenses.map(e => `
    <div class="entry">
      <span>${e.desc}</span>
      <span>$${e.amount.toFixed(2)} <button onclick="removeExpense('${e.id}')">x</button></span>
    </div>`).join("");

  const totalIncome = incomes.reduce((sum, i) => sum + i.amount, 0);
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

  document.getElementById("total-income").textContent = totalIncome.toFixed(2);
  document.getElementById("total-expense").textContent = totalExpense.toFixed(2);
  document.getElementById("total-percentage").textContent = totalIncome > 0 ? `${((totalExpense / totalIncome) * 100).toFixed(2)}%` : '0%';

  expensePercentages.innerHTML = expenses.map(e => {
    const percent = totalIncome > 0 ? ((e.amount / totalIncome) * 100).toFixed(2) : 0;
    return `<div class="entry"><span>${e.desc}</span><span>${percent}%</span></div>`;
  }).join("");
}

function removeIncome(id) {
  removeItem(incomes, id);
  render();
}

function removeExpense(id) {
  removeItem(expenses, id);
  render();
}