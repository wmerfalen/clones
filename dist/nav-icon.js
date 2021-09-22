
function NavIcon(_ref) {
    var type = _ref.type,
        clickHandler = _ref.clickHandler,
        active = _ref.active;


    var twitter_icon = React.createElement(
        "svg",
        { viewBox: "0 0 24 24", "aria-hidden": "true", className: active ? "nav-icon active home-button" : "nav-icon home-button" },
        React.createElement(
            "g",
            null,
            React.createElement("path", { d: "M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" })
        )
    );
    var home_icon = React.createElement(
        "svg",
        { viewBox: "0 0 24 24", "aria-hidden": "true", className: active ? "nav-icon active home-button" : "nav-icon home-button" },
        React.createElement(
            "g",
            null,
            React.createElement("path", { d: "M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z" }),
            React.createElement("path", { d: "M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z" })
        )
    );
    var explore_icon = React.createElement(
        "svg",
        { viewBox: "0 0 24 24", "aria-hidden": "true", className: active ? "nav-icon active explore-icon" : "nav-icon explore-icon" },
        React.createElement(
            "g",
            null,
            React.createElement("path", { d: "M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" })
        )
    );
    var notifications_icon = React.createElement(
        "svg",
        { viewBox: "0 0 24 24", "aria-hidden": "true", className: active ? "nav-icon active notifications-icon" : "nav-icon notifications-icon" },
        React.createElement(
            "g",
            null,
            React.createElement("path", { d: "M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z" })
        )
    );
    var messages_icon = React.createElement(
        "svg",
        { viewBox: "0 0 24 24", "aria-hidden": "true", className: active ? "nav-icon active messages-icon" : "nav-icon messages-icon" },
        React.createElement(
            "g",
            null,
            React.createElement("path", { d: "M11.55 12.082c.273.182.627.182.9 0L22 5.716V5.5c0-1.24-1.01-2.25-2.25-2.25H4.25C3.01 3.25 2 4.26 2 5.5v.197l9.55 6.385z" }),
            React.createElement("path", { d: "M13.26 13.295c-.383.255-.82.382-1.26.382s-.877-.127-1.26-.383L2 7.452v11.67c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V7.47l-8.74 5.823z" })
        )
    );
    var bookmarks_icon = React.createElement(
        "svg",
        { viewBox: "0 0 24 24", "aria-hidden": "true", className: active ? "nav-icon active bookmarks-icon" : "nav-icon bookmarks-icon" },
        React.createElement(
            "g",
            null,
            React.createElement("path", { d: "M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z" })
        )
    );
    var lists_icon = React.createElement(
        "svg",
        { viewBox: "0 0 24 24", "aria-hidden": "true", className: active ? "nav-icon active lists-icon" : "nav-icon lists-icon" },
        React.createElement(
            "g",
            null,
            React.createElement("path", { d: "M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z" }),
            React.createElement("path", { d: "M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z" })
        )
    );
    var profile_icon = React.createElement(
        "svg",
        { viewBox: "0 0 24 24", "aria-hidden": "true", className: active ? "nav-icon active profile-icon" : "nav-icon profile-icon" },
        React.createElement(
            "g",
            null,
            React.createElement("path", { d: "M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z" })
        )
    );
    var more_icon = React.createElement(
        "svg",
        { viewBox: "0 0 24 24", "aria-hidden": "true", className: active ? "nav-icon active" : "nav-icon more-icon" },
        React.createElement(
            "g",
            null,
            React.createElement("circle", { cx: "17", cy: "12", r: "1.5" }),
            React.createElement("circle", { cx: "12", cy: "12", r: "1.5" }),
            React.createElement("circle", { cx: "7", cy: "12", r: "1.5" }),
            React.createElement("path", { d: "M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z" })
        )
    );
    switch (type) {
        default:
        case 'twitter':
            return React.createElement(
                "div",
                { onClick: function onClick() {
                        return clickHandler(type);
                    } },
                twitter_icon
            );
            break;
        case 'home':
            return React.createElement(
                "div",
                { onClick: function onClick() {
                        return clickHandler(type);
                    } },
                home_icon
            );
            break;
        case 'explore':
            return React.createElement(
                "div",
                { onClick: function onClick() {
                        return clickHandler(type);
                    } },
                explore_icon
            );
            break;
        case 'notifications':
            return React.createElement(
                "div",
                { onClick: function onClick() {
                        return clickHandler(type);
                    } },
                notifications_icon
            );
            break;
        case 'messages':
            return React.createElement(
                "div",
                { onClick: function onClick() {
                        return clickHandler(type);
                    } },
                messages_icon
            );
            break;
        case 'bookmarks':
            return React.createElement(
                "div",
                { onClick: function onClick() {
                        return clickHandler(type);
                    } },
                bookmarks_icon
            );
            break;
        case 'lists':
            return React.createElement(
                "div",
                { onClick: function onClick() {
                        return clickHandler(type);
                    } },
                lists_icon
            );
            break;
        case 'profile':
            return React.createElement(
                "div",
                { onClick: function onClick() {
                        return clickHandler(type);
                    } },
                profile_icon
            );
            break;
        case 'more':
            return React.createElement(
                "div",
                { onClick: function onClick() {
                        return clickHandler(type);
                    } },
                more_icon
            );
            break;
    }
}

export default NavIcon;