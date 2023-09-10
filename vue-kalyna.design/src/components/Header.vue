<script setup lang="ts">
    import {
        onMounted
    } from 'vue'
    import {
        initFlowbite
    } from 'flowbite'

    // initialize components based on data attribute selectors
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <header>
        <div class="container">


            <RouterLink terLink to="/" class="logo"><img src="src/assets/logo2.svg" alt="Logo" /></RouterLink>

            <nav class="header-nav">

                <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path>
                    </svg>
                </button>
                <div id="mega-menu-full" class="items-center justify-between w-full md:flex md:w-auto md:order-1 hidden">
                    <ul class="nav-list">
                        <li class="list-item">
                            <RouterLink terLink to="/home">Home </RouterLink>
                        </li>
                        <li class="list-item">
                            <button id="mega-menu-full-dropdown-button" class="dropdown-button" data-collapse-toggle="mega-menu-full-dropdown">
                                Our articles
                                <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                        </li>
                        <li class="list-item">
                            <RouterLink to="/blog">Blog</RouterLink>
                        </li>
                        <li class="list-item">
                            <a href="Contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div id="mega-menu-full-dropdown" class="mega-menu-dropdown  hidden bg-white   shadow-sm border-y ">
                    <ul aria-labelledby="mega-menu-full-dropdown-button">
                        <li>
                            <a href="#" class=" ">
                                <div class=" ">Online Stores</div>
                                <span class=" ">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class=" ">
                                <div class=" ">Segmentation</div>
                                <span class=" ">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class=" ">
                                <div class=" ">Marketing CRM</div>
                                <span class=" ">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#" class=" ">
                                <div class=" ">Online Stores</div>
                                <span class=" ">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class=" ">
                                <div class=" ">Segmentation</div>
                                <span class=" ">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class=" ">
                                <div class=" ">Marketing CRM</div>
                                <span class=" ">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                    <ul class="hidden md:block">
                        <li>
                            <a href="#" class=" ">
                                <div class=" ">Audience Management</div>
                                <span class=" ">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class=" ">
                                <div class=" ">Creative Tools</div>
                                <span class=" ">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class=" ">
                                <div class=" ">Marketing Automation</div>
                                <span class=" ">Connect with third-party tools that you're already using.</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>

</template>

<style scoped>
    header {
        padding: 24px 0;
        background-color: var(--dark-bg);
        color: #fff;
        border-bottom: 1px solid #e9e9e9;
    }

    header .container {
        display: flex;
    }

    .logo {
        display: block;
        max-width: 200px;
        margin-right: 12px;
    }

    .nav-list {
        display: flex;
        align-items: center;
        padding: 0 12px;
        margin-left: auto;
    }

    .nav-list a {
        padding: 12px;
        font-size: 16px;
        font-weight: 600;
    }

    a:hover {
        color: var(--primary-color);
    }


    .dropdown-button {
        display: flex;
        align-items: center;
    }
</style>