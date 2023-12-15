class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="tab-container">
            <a class="tab-button" id="homeTab">Home</a>
            <a class="tab-button" id="calculatorTab">Calculator</a>
            <a class="tab-button" id="contactTab">Contact</a>
            <input class="search-bar" type="text" placeholder="Search...">
            <div class="sidebar">
                <ul>
                    <h1> TABLES</h1>
                    <li><a href="#">LaLiga</a></li>
                    <li><a href="#">Premier League</a></li>
                </ul>
            </div>
        </div>`;

        // Add event listeners for tab clicks
        const homeTab = this.querySelector("#homeTab");
        const calculatorTab = this.querySelector("#calculatorTab");
        const contactTab = this.querySelector("#contactTab");

        homeTab.addEventListener("click", () => {
            redirectToTab('index.html');
        });

        calculatorTab.addEventListener("click", () => {
            redirectToTab('tab2.html');
        });

        contactTab.addEventListener("click", () => {
            redirectToTab('contact.html');
        });
    }
}

customElements.define("my-header", MyHeader);
