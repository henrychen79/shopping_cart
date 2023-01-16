<script setup>



</script>

<template>
    <footer>
        <div class='container'>
            <div class="footer-goup">
                <h3>關於我們</h3>
                <div>
                    <a>官網</a>
                    <a>招商專區</a>
                    <a>人才招募</a>
                </div>
            </div>
            <div class="footer-goup">
                <h3>特色服務</h3>
                <div>
                    <a>大宗採購方案</a>
                    <a>直配大陸</a>
                    <a>異業合作</a>
                </div>
            </div>
            <div class="footer-goup">
                <h3>會員權益</h3>
                <div>
                    <a>客戶隱私權政策</a>
                    <a>客戶權利義務</a>
                    <a>網路安全標章</a>
                    <a>包裝減量標章</a>
                    <a>防詐騙宣導</a>
                </div>
            </div>
            <div class="footer-goup">
                <h3>系列網站</h3>
                <div>
                    <a>FB粉絲團</a>
                    <a>官方IG</a>
                </div>
            </div>
            <div class="footer-goup">
                <h3>客戶服務</h3>
                <div>
                    <a>訂單/配送進度查詢</a>
                    <a>取消訂單/退貨</a>
                    <a>聯絡我們</a>
                </div>
            </div>
            <div class="footer-goup"></div>
        </div>
    </footer>

</template>
<style scoped lang="scss">
footer {
    background-color: var(--grey);
    text-align: center;
    position: relative;
    margin-bottom: 0px;

    .container {
        margin: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-around;

        .footer-goup {
            width: 15%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;

            h3 {
                font-weight: bolder;
            }

            a {
                padding: 0px;
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }
        }

        .footer-goup:last-child {
            display: none;
        }


    }

    @media only screen and (max-width: 452px) {
        .container {
            .footer-goup {
                width: 40%;
            }

            .footer-goup:last-child {
                display: block;
                width: 40%;
            }
        }
    }
}
</style>
