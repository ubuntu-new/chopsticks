<template>
    <div class="home-slides owl-carousel owl-theme">
        <carousel
            :autoplay = true
            :autoplayTimeout = 3000
            :navigationEnabled = "true"
            navigationNextLabel="<i class='fas fa-arrow-right'></i>"
            navigationPrevLabel="<i class='fas fa-arrow-left'></i>"
            :paginationEnabled = true
            :perPage="1"
        >
            <slide>
                <div class="main-banner item-bg7">
                    <div class="d-table">
                        <div class="d-table-cell">
                            <div class="container">
                                <div class="main-banner-content">
                                    <span>Limited Time Offer!</span>
                                    <h1>Protect your eyes!</h1>
                                    <p>Take 20% Off ‘Sale Must-Haves'</p>

                                    <a href="#" class="btn btn-primary">Shop Women's</a>
                                    <a href="#" class="btn btn-light">Shop Men's</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>