export const colorOptions = [{
    key: 'primary',
    title: 'Primary'
}, {
    key: 'darkPrimary',
    title: 'Dark Primary'
}, {
    key: 'secondary',
    title: 'Secondary'
}, {
    key: 'success',
    title: 'Success'
}, {
    key: 'info',
    title: 'Info'
}, {
    key: 'warning',
    title: 'Warning'
}, {
    key: 'danger',
    title: 'Danger'
}, {
    key: 'white',
    title: 'White'
}, {
    key: 'light',
    title: 'Light'
}, {
    key: 'dark',
    title: 'Dark'
}, {
    key: 'darker',
    title: 'Darker'
}, {
    key: 'darkest',
    title: 'Darkest'
}, {
    key: 'black',
    title: 'Black'
}, {
    key: 'default',
    title: 'Default'
}]

export const enableDisableOptions = [{
        key: true,
        title: 'Enable'
    },
    {
        key: false,
        title: 'Disable'
    }
]

export const uiConfigComponents = [{
        heading: 'Navigation Menu',
        configurations: [{
            key: 'navMenuHorizontal',
            title: 'Type',
            options: [{
                    key: false,
                    title: 'Vertical'
                },
                {
                    key: true,
                    title: 'Horizontal'
                }
            ],
        }, {
            key: 'navMenuThumbOnRight',
            title: 'Icon Align',
            options: [{
                    key: false,
                    title: 'Left'
                },
                {
                    key: true,
                    title: 'Right'
                }
            ],
            message: 'This is overridden by \'Folded Sidebar Style\''
        }, {
            key: 'navMenuLetterIcon',
            title: 'Letter Icon',
            options: enableDisableOptions,
            message: 'Only shown when there is no icon set of the menu item.'
        }]
    },
    {
        heading: 'Top Navbar',
        configurations: [{
                key: 'topNavbarFixed',
                title: 'Fixed',
                options: [{
                        key: true,
                        title: 'Enable'
                    },
                    {
                        key: false,
                        title: 'Disable'
                    }
                ]
            },
            {
                key: 'topNavbarColor',
                title: 'Color',
                options: colorOptions
            },
            {
                key: 'topNavbarLogoLight',
                title: 'Light Logo',
                options: enableDisableOptions
            },
            {
                key: 'topNavbarHide',
                title: 'Hide',
                options: [{
                        key: true,
                        title: 'Enable'
                    },
                    {
                        key: false,
                        title: 'Disable'
                    }
                ]
            }
        ]
    },
    {
        heading: 'Left Sidebar',
        configurations: [{
                key: 'leftSidebarHeight',
                title: 'Height',
                options: [{
                        key: 'normal',
                        title: 'Normal'
                    },
                    {
                        key: 'full',
                        title: 'Full'
                    }
                ]
            },
            {
                key: 'leftSidebarStyle',
                title: 'Appearance Style',
                options: [{
                        key: 'push-content',
                        title: 'Push Content',
                        actions: {
                            leftSidebarBackdrop: false,
                            leftSidebarShadow: false,
                        }
                    },
                    {
                        key: 'push',
                        title: 'Push All'
                    },
                    {
                        key: 'over',
                        title: 'Over',
                        actions: {
                            leftSidebarBackdrop: true,
                            leftSidebarShadow: true,
                        }
                    },
                    {
                        key: 'folded',
                        title: 'Folded',
                        actions: {
                            leftSidebarBackdrop: true,
                            leftSidebarShow: false
                        }
                    },
                    {
                        key: 'off-canvas',
                        title: 'Off Canvas'
                    }
                ]
            },
            {
                key: 'leftSidebarColor',
                title: 'Color',
                options: [
                    ...colorOptions,
                    {
                        key: 'wallpaper',
                        title: 'Wallpaper',
                        dispatches: ['config/getWallpaper']
                    }
                ]
            },
            {
                key: 'leftSidebarLogoLight',
                title: 'Light Logo',
                options: enableDisableOptions
            },
            {
                key: 'leftSidebarBackdrop',
                title: 'Backdrop',
                options: [{
                        key: true,
                        title: 'Enable'
                    },
                    {
                        key: false,
                        title: 'Disable'
                    }
                ]
            },
            {
                key: 'leftSidebarBackdropColor',
                title: 'Backdrop Color',
                options: [{
                        key: 'transparent',
                        title: 'Transparent'
                    },
                    {
                        key: 'light',
                        title: 'Light'
                    },
                    {
                        key: 'dark',
                        title: 'Dark'
                    }
                ]
            },
            {
                key: 'leftSidebarShadow',
                title: 'Shadow',
                options: [{
                        key: true,
                        title: 'Enable'
                    },
                    {
                        key: false,
                        title: 'Disable'
                    }
                ]
            }
        ]
    },
    {
        heading: 'Right Sidebar',
        configurations: [{
                key: 'rightSidebarHeight',
                title: 'Height',
                options: [{
                        key: 'normal',
                        title: 'Normal'
                    },
                    {
                        key: 'full',
                        title: 'Full'
                    }
                ]
            },
            {
                key: 'rightSidebarStyle',
                title: 'Appearance Style',
                options: [{
                        key: 'push-content',
                        title: 'Push Content'
                    },
                    {
                        key: 'push',
                        title: 'Push All'
                    },
                    {
                        key: 'over',
                        title: 'Over'
                    },
                    {
                        key: 'folded',
                        title: 'Folded'
                    },
                    {
                        key: 'off-canvas',
                        title: 'Off Canvas'
                    }
                ]
            },
            {
                key: 'rightSidebarBackdrop',
                title: 'Backdrop',
                options: [{
                        key: true,
                        title: 'Enable'
                    },
                    {
                        key: false,
                        title: 'Disable'
                    }
                ]
            },
            {
                key: 'rightSidebarBackdropColor',
                title: 'Backdrop Color',
                options: [{
                        key: 'transparent',
                        title: 'Transparent'
                    },
                    {
                        key: 'light',
                        title: 'Light'
                    },
                    {
                        key: 'dark',
                        title: 'Dark'
                    }
                ]
            },
            {
                key: 'rightSidebarShadow',
                title: 'Shadow',
                options: [{
                        key: true,
                        title: 'Enable'
                    },
                    {
                        key: false,
                        title: 'Disable'
                    }
                ]
            }
        ]
    },
    {
        heading: 'Special Sidebar',
        configurations: [{
            key: 'specialSidebarShow',
            title: 'Show Special Sidebar',
            options: enableDisableOptions
        }]
    },
    {
        heading: 'Page',
        configurations: [{
            key: 'pageBackgroundColor',
            title: 'Background Color',
            options: colorOptions
        }, {
            key: 'pageContainerBackgroundColor',
            title: 'Container Background Color',
            options: colorOptions
        }, {
            key: 'pageHeaderBackgroundColor',
            title: 'Header Background Color',
            options: [{
                    key: 'transparent',
                    title: 'Transparent'
                },
                ...colorOptions
            ]
        }, {
            key: 'pageHeaderIsBoxed',
            title: 'Header Boxed',
            options: enableDisableOptions
        }]
    }
]

export default uiConfigComponents
