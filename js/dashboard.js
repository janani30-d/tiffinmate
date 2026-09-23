/* =========================================================
   TIFFINMATE DASHBOARD
   COMPLETE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const html = document.documentElement;
    const body = document.body;

    const sidebar =
        document.getElementById("dashboardSidebar");

    const sidebarOverlay =
        document.getElementById(
            "dashboardSidebarOverlay"
        );

    const menuToggle =
        document.getElementById(
            "dashboardMenuToggle"
        );

    const sidebarClose =
        document.getElementById(
            "dashboardSidebarClose"
        );

    const darkModeToggle =
        document.getElementById(
            "dashboardDarkModeToggle"
        );

    const rtlToggle =
        document.getElementById(
            "dashboardRtlToggle"
        );

    const notificationButton =
        document.getElementById(
            "dashboardNotificationButton"
        );

    const settingsButton =
        document.getElementById(
            "dashboardSettingsButton"
        );

    const profileButton =
        document.getElementById(
            "dashboardProfileButton"
        );

    const logoutButton =
        document.getElementById(
            "dashboardLogoutButton"
        );

    const navigationItems =
        document.querySelectorAll(
            ".dashboard-nav-item"
        );


    /* =====================================================
       LOGOUT POPUP ELEMENTS
    ===================================================== */

    const logoutModal =
        document.getElementById(
            "dashboardLogoutModal"
        );

    const logoutBackdrop =
        document.getElementById(
            "dashboardLogoutBackdrop"
        );

    const logoutClose =
        document.getElementById(
            "dashboardLogoutClose"
        );

    const logoutCancel =
        document.getElementById(
            "dashboardLogoutCancel"
        );

    const logoutConfirm =
        document.getElementById(
            "dashboardLogoutConfirm"
        );


    /* =====================================================
       STORAGE KEYS
    ===================================================== */

    const DARK_MODE_KEY =
        "tiffinmate-dark-mode";

    const RTL_KEY =
        "tiffinmate-dashboard-rtl";


    /* =====================================================
       SIDEBAR OPEN
    ===================================================== */

    function openSidebar() {

        if (!sidebar) {
            return;
        }

        sidebar.classList.add(
            "sidebar-open"
        );

        if (sidebarOverlay) {

            sidebarOverlay.classList.add(
                "overlay-visible"
            );

        }

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Close menu"
            );

            menuToggle.setAttribute(
                "title",
                "Close menu"
            );

        }

        body.classList.add(
            "dashboard-menu-active"
        );

    }


    /* =====================================================
       SIDEBAR CLOSE
    ===================================================== */

    function closeSidebar() {

        if (!sidebar) {
            return;
        }

        sidebar.classList.remove(
            "sidebar-open"
        );

        if (sidebarOverlay) {

            sidebarOverlay.classList.remove(
                "overlay-visible"
            );

        }

        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );

            menuToggle.setAttribute(
                "title",
                "Open menu"
            );

        }

        body.classList.remove(
            "dashboard-menu-active"
        );

    }


    /* =====================================================
       SIDEBAR TOGGLE
    ===================================================== */

    function toggleSidebar() {

        if (!sidebar) {
            return;
        }

        if (
            sidebar.classList.contains(
                "sidebar-open"
            )
        ) {

            closeSidebar();

        } else {

            openSidebar();

        }

    }


    /* =====================================================
       HAMBURGER CLICK
    ===================================================== */

    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            toggleSidebar
        );

    }


    /* =====================================================
       SIDEBAR CLOSE BUTTON
    ===================================================== */

    if (sidebarClose) {

        sidebarClose.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* =====================================================
       SIDEBAR OVERLAY CLICK
    ===================================================== */

    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            closeSidebar
        );

    }


    /* =====================================================
       CLOSE SIDEBAR AFTER NAVIGATION
       MOBILE / TABLET ONLY
    ===================================================== */

    navigationItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                   if (window.innerWidth >= 1200) {
    closeSidebar();
}

                }
            );

        }
    );


    /* =====================================================
       ESCAPE KEY — SIDEBAR
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                sidebar &&
                sidebar.classList.contains(
                    "sidebar-open"
                ) &&
                !(
                    logoutModal &&
                    logoutModal.classList.contains(
                        "is-open"
                    )
                )
            ) {

                closeSidebar();

            }

        }
    );


    /* =====================================================
       CLOSE SIDEBAR WHEN WINDOW BECOMES DESKTOP
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth >= 1200) {
    closeSidebar();
}

        }
    );


    /* =====================================================
       DARK MODE
    ===================================================== */

    function applyDarkMode(enabled) {

        body.classList.toggle(
            "dark-mode",
            enabled
        );

        if (darkModeToggle) {

            darkModeToggle.setAttribute(
                "aria-pressed",
                String(enabled)
            );

            darkModeToggle.setAttribute(
                "aria-label",
                enabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

            darkModeToggle.setAttribute(
                "title",
                enabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        }

    }


    /* =====================================================
       GET SAVED DARK MODE
    ===================================================== */

    function getSavedDarkMode() {

        const savedMode =
            localStorage.getItem(
                DARK_MODE_KEY
            );

        if (savedMode === "true") {

            return true;

        }

        if (savedMode === "false") {

            return false;

        }

        return false;

    }


    /* =====================================================
       TOGGLE DARK MODE
    ===================================================== */

    function toggleDarkMode() {

        const enabled =
            !body.classList.contains(
                "dark-mode"
            );

        applyDarkMode(enabled);

        localStorage.setItem(
            DARK_MODE_KEY,
            String(enabled)
        );

    }


    /* =====================================================
       DARK MODE BUTTON
    ===================================================== */

    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "click",
            toggleDarkMode
        );

    }


    /* =====================================================
       APPLY SAVED DARK MODE
    ===================================================== */

    applyDarkMode(
        getSavedDarkMode()
    );


    /* =====================================================
       RTL
    ===================================================== */

    function applyRTL(enabled) {

        html.setAttribute(
            "dir",
            enabled
                ? "rtl"
                : "ltr"
        );

        if (rtlToggle) {

            rtlToggle.setAttribute(
                "aria-pressed",
                String(enabled)
            );

            rtlToggle.setAttribute(
                "aria-label",
                enabled
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );

            rtlToggle.setAttribute(
                "title",
                enabled
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );

        }

    }


    /* =====================================================
       GET SAVED RTL
    ===================================================== */

    function getSavedRTL() {

        const savedRTL =
            localStorage.getItem(
                RTL_KEY
            );

        return savedRTL === "true";

    }


    /* =====================================================
       TOGGLE RTL
    ===================================================== */

    function toggleRTL() {

        const enabled =
            html.getAttribute(
                "dir"
            ) !== "rtl";

        applyRTL(enabled);

        localStorage.setItem(
            RTL_KEY,
            String(enabled)
        );

        closeSidebar();

    }


    /* =====================================================
       RTL BUTTON
    ===================================================== */

    if (rtlToggle) {

        rtlToggle.addEventListener(
            "click",
            toggleRTL
        );

    }


    /* =====================================================
       APPLY SAVED RTL
    ===================================================== */

    applyRTL(
        getSavedRTL()
    );


    /* =====================================================
       NOTIFICATIONS
    ===================================================== */

    if (notificationButton) {

        notificationButton.addEventListener(
            "click",
            function () {

                alert(
                    "You have 3 new notifications."
                );

            }
        );

    }


    /* =====================================================
       SETTINGS
    ===================================================== */

    if (settingsButton) {

        settingsButton.addEventListener(
            "click",
            function () {

                alert(
                    "Settings will be available here."
                );

            }
        );

    }


    /* =====================================================
       PROFILE
    ===================================================== */

    if (profileButton) {

        profileButton.addEventListener(
            "click",
            function () {

                alert(
                    "Profile options will be available here."
                );

            }
        );

    }


    /* =====================================================
       LOGOUT POPUP
    ===================================================== */

    function openLogoutModal(event) {

        if (!logoutModal) {
            return;
        }

        if (event) {

            event.preventDefault();

            event.stopPropagation();

        }

        logoutModal.classList.add(
            "is-open"
        );

        logoutModal.setAttribute(
            "aria-hidden",
            "false"
        );

        body.classList.add(
            "dashboard-logout-modal-open"
        );


        /*
         * Close mobile sidebar if open.
         */

        closeSidebar();


        /*
         * Focus close button.
         */

        if (logoutClose) {

            setTimeout(
                function () {

                    logoutClose.focus();

                },
                50
            );

        }

    }


    /* =====================================================
       CLOSE LOGOUT POPUP
    ===================================================== */

    function closeLogoutModal() {

        if (!logoutModal) {
            return;
        }

        logoutModal.classList.remove(
            "is-open"
        );

        logoutModal.setAttribute(
            "aria-hidden",
            "true"
        );

        body.classList.remove(
            "dashboard-logout-modal-open"
        );

    }


    /* =====================================================
       SIDEBAR LOGOUT BUTTON
       
       IMPORTANT:
       There is NO confirm() here.
       The custom popup opens directly.
    ===================================================== */

    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            openLogoutModal
        );

    }


    /* =====================================================
       CANCEL — NO, STAY
    ===================================================== */

    if (logoutCancel) {

        logoutCancel.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                closeLogoutModal();

            }
        );

    }


    /* =====================================================
       CLOSE — X BUTTON
    ===================================================== */

    if (logoutClose) {

        logoutClose.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                closeLogoutModal();

            }
        );

    }


    /* =====================================================
       BACKDROP CLICK
    ===================================================== */

    if (logoutBackdrop) {

        logoutBackdrop.addEventListener(
            "click",
            function () {

                closeLogoutModal();

            }
        );

    }


    /* =====================================================
       CONFIRM — YES, LOGOUT
    ===================================================== */

    if (logoutConfirm) {

        logoutConfirm.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                /*
                 * Close popup.
                 */

                closeLogoutModal();


                /*
                 * Remove demo login/session data.
                 */

                localStorage.removeItem(
                    "tiffinmateLoggedIn"
                );

                sessionStorage.removeItem(
                    "tiffinmateLoggedIn"
                );


                /*
                 * Redirect to login page.
                 */

                window.location.href =
                    "login.html";

            }
        );

    }


    /* =====================================================
       LOGOUT POPUP — ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                logoutModal &&
                logoutModal.classList.contains(
                    "is-open"
                )
            ) {

                event.preventDefault();

                closeLogoutModal();

            }

        }
    );


    /* =====================================================
       LOGOUT POPUP — TAB FOCUS TRAP
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !== "Tab" ||
                !logoutModal ||
                !logoutModal.classList.contains(
                    "is-open"
                )
            ) {

                return;

            }


            const focusableElements =
                logoutModal.querySelectorAll(
                    "button, a, input, select, textarea, [tabindex]:not([tabindex='-1'])"
                );


            if (
                !focusableElements.length
            ) {

                return;

            }


            const firstElement =
                focusableElements[0];

            const lastElement =
                focusableElements[
                    focusableElements.length - 1
                ];


            /*
             * Shift + Tab from first element
             */

            if (
                event.shiftKey &&
                document.activeElement ===
                firstElement
            ) {

                event.preventDefault();

                lastElement.focus();

            }


            /*
             * Tab from last element
             */

            else if (
                !event.shiftKey &&
                document.activeElement ===
                lastElement
            ) {

                event.preventDefault();

                firstElement.focus();

            }

        }
    );


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    navigationItems.forEach(
        function (item) {

            item.addEventListener(
                "click",
                function () {

                    navigationItems.forEach(
                        function (navItem) {

                            navItem.classList.remove(
                                "active"
                            );

                            navItem.removeAttribute(
                                "aria-current"
                            );

                        }
                    );


                    item.classList.add(
                        "active"
                    );


                    item.setAttribute(
                        "aria-current",
                        "page"
                    );

                }
            );

        }
    );


});

/* =========================================================
   TIFFINMATE — GLOBAL DARK MODE + RTL SYNC
   MASTER CONTROLLER
========================================================= */

(function () {

    "use strict";

    /* =====================================================
       STORAGE KEYS
    ===================================================== */

    const DARK_MODE_KEY = "tiffinmate-dark-mode";
    const RTL_KEY = "tiffinmate-rtl";


    /* =====================================================
       BUTTON SELECTORS
    ===================================================== */

    const DARK_BUTTON_SELECTOR = [
        "#darkModeToggle",
        "#registerDarkModeToggle",
        "#loginDarkModeToggle",
        "#dashboardDarkModeToggle"
    ].join(",");


    const RTL_BUTTON_SELECTOR = [
        "#rtlToggle",
        "#registerRtlToggle",
        "#loginRtlToggle",
        "#dashboardRtlToggle"
    ].join(",");


    /* =====================================================
       APPLY DARK MODE
    ===================================================== */

    function applyDarkMode(enabled) {

        document.body.classList.toggle(
            "dark-mode",
            enabled
        );

        document.documentElement.classList.toggle(
            "dark-mode",
            enabled
        );

        updateDarkButtons(enabled);

    }


    /* =====================================================
       UPDATE DARK BUTTONS
    ===================================================== */

    function updateDarkButtons(enabled) {

        const buttons =
            document.querySelectorAll(
                DARK_BUTTON_SELECTOR
            );

        buttons.forEach(function (button) {

            button.setAttribute(
                "aria-pressed",
                String(enabled)
            );

            button.setAttribute(
                "aria-label",
                enabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

            button.setAttribute(
                "title",
                enabled
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        });

    }


    /* =====================================================
       APPLY RTL
    ===================================================== */

    function applyRTL(enabled) {

        document.documentElement.setAttribute(
            "dir",
            enabled ? "rtl" : "ltr"
        );

        document.documentElement.classList.toggle(
            "rtl-mode",
            enabled
        );

        document.body.classList.toggle(
            "rtl-mode",
            enabled
        );

        updateRTLButtons(enabled);

    }


    /* =====================================================
       UPDATE RTL BUTTONS
    ===================================================== */

    function updateRTLButtons(enabled) {

        const buttons =
            document.querySelectorAll(
                RTL_BUTTON_SELECTOR
            );

        buttons.forEach(function (button) {

            button.setAttribute(
                "aria-pressed",
                String(enabled)
            );

            button.setAttribute(
                "aria-label",
                enabled
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );

            button.setAttribute(
                "title",
                enabled
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );

        });

    }


    /* =====================================================
       READ SAVED SETTINGS
    ===================================================== */

    function getDarkMode() {

        return (
            localStorage.getItem(
                DARK_MODE_KEY
            ) === "true"
        );

    }


    function getRTL() {

        return (
            localStorage.getItem(
                RTL_KEY
            ) === "true"
        );

    }


    /* =====================================================
       APPLY SETTINGS IMMEDIATELY
    ===================================================== */

    const savedDarkMode =
        getDarkMode();

    const savedRTL =
        getRTL();


    /*
     * Apply before page-specific JavaScript
     * can change the visual state.
     */

    document.documentElement.classList.toggle(
        "dark-mode",
        savedDarkMode
    );

    document.documentElement.setAttribute(
        "dir",
        savedRTL ? "rtl" : "ltr"
    );


    /* =====================================================
       DOM READY
    ===================================================== */

    function initializeTheme() {

        applyDarkMode(
            getDarkMode()
        );

        applyRTL(
            getRTL()
        );

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initializeTheme
        );

    } else {

        initializeTheme();

    }


    /* =====================================================
       DARK MODE CLICK
       
       CAPTURE PHASE
       
       This prevents the old page-specific
       Dark Mode handler from also running.
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    DARK_BUTTON_SELECTOR
                );

            if (!button) {
                return;
            }


            event.preventDefault();

            event.stopImmediatePropagation();


            const current =
                getDarkMode();

            const newState =
                !current;


            localStorage.setItem(
                DARK_MODE_KEY,
                String(newState)
            );


            applyDarkMode(
                newState
            );

        },
        true
    );


    /* =====================================================
       RTL CLICK
       
       CAPTURE PHASE
       
       This prevents the old page-specific
       RTL handler from also running.
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    RTL_BUTTON_SELECTOR
                );

            if (!button) {
                return;
            }


            event.preventDefault();

            event.stopImmediatePropagation();


            const current =
                getRTL();

            const newState =
                !current;


            localStorage.setItem(
                RTL_KEY,
                String(newState)
            );


            applyRTL(
                newState
            );

        },
        true
    );


    /* =====================================================
       CROSS-TAB SYNC
    ===================================================== */

    window.addEventListener(
        "storage",
        function (event) {

            if (
                event.key ===
                DARK_MODE_KEY
            ) {

                applyDarkMode(
                    event.newValue === "true"
                );

            }


            if (
                event.key ===
                RTL_KEY
            ) {

                applyRTL(
                    event.newValue === "true"
                );

            }

        }
    );


    /* =====================================================
       EXPOSE GLOBAL FUNCTIONS
    ===================================================== */

    window.TiffinMateTheme = {

        setDarkMode: function (enabled) {

            localStorage.setItem(
                DARK_MODE_KEY,
                String(Boolean(enabled))
            );

            applyDarkMode(
                Boolean(enabled)
            );

        },

        setRTL: function (enabled) {

            localStorage.setItem(
                RTL_KEY,
                String(Boolean(enabled))
            );

            applyRTL(
                Boolean(enabled)
            );

        },

        isDarkMode: function () {

            return getDarkMode();

        },

        isRTL: function () {

            return getRTL();

        }

    };

})();