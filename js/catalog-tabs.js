document.addEventListener('DOMContentLoaded', function() {
    const btns = document.querySelectorAll('.catalog-tabs-btn');
    const tabs = document.querySelectorAll('.catalog-tabs__tab-content');

    btns.forEach(function(tabsBtn, indexBtn) {
        tabsBtn.addEventListener('click', function() {
            btns.forEach(function(btn) {
                if (btn === tabsBtn) {
                    btn.classList.add('catalog-tabs-btn-active');
                } else {
                    btn.classList.remove('catalog-tabs-btn-active');
                }
            })
            tabs.forEach(function(tabContent, indexTab) {
                if (indexTab === indexBtn) {
                    tabContent.classList.add('catalog-tabs__content-active');
                } else {
                    tabContent.classList.remove('catalog-tabs__content-active');
                }
            })
        })
    })
});