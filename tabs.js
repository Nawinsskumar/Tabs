const allItems = [
    {
        title: 'Title 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores consequatur error, in iusto laboriosam laborum laudantium molestiae natus obcaecati porro praesentium quaerat quidem quo ratione sapiente voluptas voluptatem voluptates.',
    },
    {
        title: 'Title 2',
        content: 'Consectetur adipisicing elit. Ad asperiores consequatur error, in iusto laboriosam laborum laudantium molestiae natus obcaecati porro praesentium quaerat quidem quo ratione sapiente voluptas voluptatem voluptates, lorem ipsum dolor sit amet.',
    },
    {
        title: 'Title 3',
        content: 'Ad asperiores consequatur error, in iusto laboriosam laborum laudantium molestiae natus obcaecati porro praesentium quaerat quidem quo ratione sapiente voluptas voluptatem voluptates. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
];

let activeTabIndex = 0;

function openTab(tabIndex) {
    activeTabIndex = tabIndex;
    const selectedTab = document.getElementById('tab' + (tabIndex + 1));
    document.querySelectorAll('.tab').forEach(tab => {
        tab.style.display = 'none';
    });
    document.querySelectorAll('#tabs button').forEach(button => {
        button.classList.remove('active-tab');
    });
    selectedTab.style.display = 'block';
    const content = document.getElementById('content' + (tabIndex + 1));
    content.textContent = allItems[tabIndex].content;
    document.getElementById('tabBtn' + (tabIndex + 1)).classList.add('active-tab');
}

// function deleteContent(tabIndex) {
//   const tab = document.getElementById('tab' + (tabIndex + 1));
//   const tabButton = document.getElementById('tabBtn' + (tabIndex + 1));
//   tab.style.display = 'none';
//   tabButton.remove();
// }
function deleteContent(tabIndex) {
    const tab = document.getElementById('tab' + (tabIndex + 1));
    const tabButton = document.getElementById('tabBtn' + (tabIndex + 1));
    const isActiveTab = tabIndex === activeTabIndex;

    const deletedContent = {
        index: tabIndex,
        title: allItems[tabIndex].title,
        content: allItems[tabIndex].content
    };

    tab.style.display = 'none';
    tabButton.remove();


    if (isActiveTab) {

        if (activeTabIndex === allItems.length - 1) {
            openTab(activeTabIndex - 1);
        } else {
            openTab(activeTabIndex);
        }
    }

    return deletedContent;
}


    // function resetContent() {
    //   document.querySelectorAll('.tab').forEach(tab => {
    //     tab.style.display = 'block';
    //   });
    //   document.querySelectorAll('#content p').forEach(content => {
    //     content.textContent = '';
    //   });
    // }
    function resetContent() {
        document.querySelectorAll('.tab').forEach((tab, index) => {
            tab.style.display = 'block';
            if (index === 0) {
                openTab(index);
            }
        });
    }


    function moveTabs(direction) {
        if (direction === 'left' && activeTabIndex > 0) {
            openTab(activeTabIndex - 1);
        } else if (direction === 'right' && activeTabIndex < allItems.length - 1) {
            openTab(activeTabIndex + 1);
        }
    }


openTab(0);