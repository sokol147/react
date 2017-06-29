    $('.tabs__nav-link').on('click', function(e) {
        e.preventDefault();
        var
            $item = $(this).closest('.tabs__nav-item'),
            itemIndex = $item.data('tab'),
            $tabContent = $(".tabs__item"),
            navActiveClass = 'tabs__nav-item_active',
            tabActiveClass = 'tabs__item_active';

        $tabContent.filter('.tabs__item_' + itemIndex)
            .addClass(tabActiveClass)
            .siblings().removeClass(tabActiveClass);
        $item.addClass(navActiveClass)
            .siblings().removeClass(navActiveClass);
    });
