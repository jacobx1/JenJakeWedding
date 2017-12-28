
export default class MenuActiveScroller {

    constructor(menuSelector) {
        this.jWindow = $(window);
        this.topMenu = $(menuSelector);
        this.topMenuHeight = this.topMenu.outerHeight() + 15;

        // All list items
        this.menuItems = this.topMenu.find('a');
        // Anchors corresponding to menu items
        this.scrollItems = this.menuItems.map(function() {
            const item = $($(this).attr('href'));
            if (item.length) { return item; }
        });

        this.selectActive();
        this.jWindow.scroll(() => this.selectActive());
    }

    selectActive() {
        // Get container scroll position
        const fromTop = this.jWindow.scrollTop() + this.topMenuHeight;

        // Get id of current scroll item
        let cur = this.scrollItems.map(function () {
            const windowTop = $(this).offset().top;
            if (windowTop < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        const id = cur && cur.length ? cur[0].id : '';
        // Set/remove active class
        this.menuItems
            .parent().removeClass('active')
            .end().filter("[href='#"+id+"']").parent().addClass('active');
    }
}
