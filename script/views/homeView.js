class HomeView{
    // NAV POPUPS SELECTION ELEMENTS
    _navContainer = document.querySelector(".nav__list");
    _previewContainer = document.querySelector(".nav-preview");
    _popUps = this._previewContainer.children;
    // MENU CLICK SELECTION ELEMENTS
    _menu = document.querySelector(".nav__icon--menu");
    _sideNav = document.querySelector(".side-nav");
    _closeBtn = document.querySelector(".side-nav__close");
    _overlay = document.querySelector(".overlay");
    addHandlerNavPopup(){
        this._navContainer.addEventListener('mouseover',(function(e){
            const target = e.target.closest(".nav__item");
            if (!target) return;
            const dataPopup = target.classList[1].slice(11);
            const popUp = [...this._popUps].find(popUp => popUp.dataset.popup === dataPopup);
            [...this._popUps].forEach(popUp => popUp.style.display = "none");
            popUp.style.display = "flex";
        }).bind(this));

        this._navContainer.addEventListener('mouseout',(function(e){
            [...this._popUps].forEach(popUp => popUp.style.display = "none");
        }).bind(this));

        [...this._popUps].forEach((popUp) => {
            popUp.addEventListener("mouseover", function(){
                this.style.display = "flex"
            })
            popUp.addEventListener("mouseout", function(){
                this.style.display = "none"
            })
        })

    }

    _toogleSideView(offsetPercent,overlayDisplay){
        this._sideNav.style.transform = `translateX(${offsetPercent}%)`;
        this._closeBtn.style.transform =  `translateX(${offsetPercent < 0 ? offsetPercent + 125 : offsetPercent}%)`;
        this._overlay.style.display = overlayDisplay;
    }

    addHandlerSideView(){
        this._menu.addEventListener("click", this._toogleSideView.bind(this,0,"block"));
        this._closeBtn.addEventListener("click", this._toogleSideView.bind(this,-150,"none"));
        this._overlay.addEventListener("click", this._toogleSideView.bind(this,-150,"none"));
        window.addEventListener("keydown",(function(e){
            if (e.key !== 'ESCAPE') return;
            this._toogleSideView(-150,"none");
        }.bind(this)))
    }

}

export default new HomeView();