(this["webpackJsonp@uniswap/interface"] = this["webpackJsonp@uniswap/interface"] || []).push([
    [2], {
        130: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        131: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAMAAABGrfvuAAABiVBMVEUAAAD76/P//v7//P/++/388vf////88/j//v/87fT////89Pn98fb97fT78/j97vX++Pr//f778vf/+Pv//P358PX57PT+8vj98Pf////99fn////68/j88fb77fP////99/v/9/r67vT58fX////99vr/3+/99vn+6vT+9Pn+8vj+8ff+7vb+5/L+AHr+7fX+8Pf9+Pv9AHr+6fL+7PT88Pb97fX+5fH+9vr78/j86vP68ff+4/D89fn77vX80eX85/H84+/+9/v77PP9y+L83ev85fD82On90+b+O5n9Hor84e783+z8zuT81ef+4O791un+t9n+0Ob8yOH+h8D+zOT+aLD+3e392uv+tNj+6fT+w9/+HYr+1Oj9xeD+ebn+arH+ptH+lsj+dbf9LZL+DoH+zuT+D4L++fz72ur+wN7+icH82er+xuH+sNb+W6n+LZH9DoL+oc3+mcn+k8b+Waj+HIn+yeH9e7r+V6f9TKL+SqH+hL/+K5D+rNP+SJ/+EIL+TKH8TKGqEu5DAAAAJ3RSTlMA/iAQQL+AoGDgoO/v7+DPgJBg4MAwIOCvcFAwsJCAUM+/kHCwcBDENSLTAAAK/0lEQVRYw51Y93vURhQ8gzsGQiohvWpPWmllVZ+sa77ei+9ccO+4gU0v6X955q1sQxLilLda6eMH5puZV3bPscviw3e/vn1zzE3lctfHhm5/Png19n/i6rsjE6nUtOvmcqkcYiA3MDBw8+vB/4ozODThplIpF4twUgM5AgqCIDc2cuU/4Lx7Y3p6mkBcVZERVxKqK4kFxYHcyIf/EucOcIhPUpmKcKZox+OKorm5IFMLMu6/4nVlaHo6gUeZnFFmlLNIAiyOhUcLgoEgE3z+j0DfXEtAWRIYEmZSMkoqceBMqXFaihtkEGOXS/wehFLTicnJSQkzBQxFikwoiqrGZeDLi5liJnjnMmU3EoQzEyFhJyOfpgggAQx86K25mWKxFnz2t0AfXEskEklCmQSPi4gTIcg7h1FVTVO9Yr1eHLp6CZAi+VywkS+CQMBtYJA8Le5qajFbrN28+nYgeH2GI9+04XOcGAEtqRIGoFQNzEyVZ2vZ7NugPryWBNA9KQ37nFE8QqPQwEXBBpQrVzabrY/8FQjlKHMWEMYZlPRGkf+bmCDguwkM1XVdU/OKtUL91p+RPiWge0DKH80A5oIS+BAvCEMZSFqAUTVT9UzX9eqAuvNHoHemk8SIsA5/Ou+RKTxgdF5FYKQBDNslbRo3eVDfr09c+UMhJRPTSH9USevPCYekHW90JIqSiGugRIUUGW6amuBcaGZQL+x/9SbSl6gj0IHfk3hePo+k+e14Z+25H1GReaPNoc1F7gR3TVcUC7Xs6BtTJJEkRgothL79mz8FgzpWpR0/3G5T9mXqyeol6CJlGuea5pleoV64/roUbiSmQYbERaWkV7fbMHvVsqq+erx8DKvIas3Ff36kaabpmkJzTejzvCKg3rmgNJ2QBUDyZshlvVSttmfivmUYh6ra2VttdzY7HV/TVnuLc6GpanAIVjncc7iZre9fkLpBdlOcpWxGP25Xq6tTSsWwfkX2Dy3LMrCWH3S0zb0e1zhkCVM4HuemG5T2a2ekBlFK9yCNhM1ERb2ht5dPHymA+IXSPmfIAN5yd23nESedpie4ZgJVLZSa1yOkETkACOZ15z6aCretNb9qWCtwOnsCSnjotbS2UTY5yJhETDg8yBZK4aA8jjABoOseOM2cz/+pTkcJXxrPV/esdRekVqqSkoV3d1O0gEQhoM8TQt9vFsYv/FYocUkMSekUpsga0vXcOCxXrSUqpZVlKQ+xtLjpeS4oCY87nHme7WQLC9fPOi4p5/VFr1G7bRwCYLmiqR3fVAnqlRRnVGtlo6dpAp3iccGZ4LodluazJO8aWpcCpwCts9n26LTTmbMeqNRhFKbamdsGq4r5ythreQ4MwoLrgXBYrVS6hQFHQwAWzURFEE3ZBLyGK5WQapugeLm66HGtvLS40XtgrMEjBw9xEh5jR80Smu9OVEwX+qJRu25ZlfUOVLmQBkZa2bKWX/UWlwLT5CsnMFsw7gj8A7yCVqE5EYt9liCbIkbxJB7Z/b9Yi9RrK73FtdAjUqrMHnZlblHbbUlxQhdQyQTUHWWuxD6V1TQFMDpqgQIs9djYo4rUKi83tteoMTjvycqUhbB8wIRDGDY+jAk7XCj4X8SGkDpCmUxGxy1xUjesbRWj0SS3NjRoQPNvESfaiC3HAyUBq3RbMGYXyvujsRtkOOKikmg+rhkvVUpbea2HMsQyuWc+fioLXcYPxIcBBBKB1EwXhmO43Ui7Z8jvCEdTqlYPs8gkgfDbJW897nWfREB478wLwABKt5lvs2apeSuGa9IMoOJR3shwLb5pGSs0bE0Q89AammTFD1h38+lZM29xWwjbs3VQ04NSuzxOnCArKgCQQlWqYRUlCXcIiAMHW3BonDM3u87DiiR2YjsMshjeiIVSGkjTboRCoVI5UTGtUm2bONVociN1FM6TpWVjqy92X4DTHkqAYASDUXoz3RyPTYBTFPKYhVOHlnECAMgzVcjyJAzjHq/ch7blx479+KlxajM7kIR0R9gr7fnh2Nh04uLeJu8Sx2j4bYijhxzCkYTZAYG7xm7FQFR3xcHOj0wnFEqco+vl9MJwbMhNKcrFYML5WKXqW+EobILycIAIwhGtk1esF82DAzb3ArpsHXB38cmm04UvYiOpVDyCiYrpkUz0dmhqcaKFpXFINBdPqrvO/I5FpX7af/gTcQogkfmc1dOz/mDsG9iqTCUlUjKhquvWg1cGjqcVYKieiqyJpd5c5dR40gWxh1E5vbBtEiYCXddtmy3k0+bV2J1UzqVbBN0l6Ox/YK2XZYNtUmly3uo9eTC3tflwXjgmGrYiO29vQVAN4KXfBVYzn/4IYxwXeFgNThQKNcq6bNS9ME5FtESDljsoAsYDxvo7ktQBJd8mz/0sC9Pp9LeYmTdTOWRPQiWA1TEsWogVmq5mt1tuRZY7GP4OTKe4DwxbR/jYYbsh7waf5QZSsuWw6NSm3FFYNc1bXN8h1MpjD5jMEQFqpyKR7ABW+dDm+367Ocuv0MGJO39CdoqqULo2SBv5xBcrRE9ynOPwBE/AxH1C6qMAhM3gke/rs43GezGKiVzgggyWFqfmrxCh6qK5bkVAO9EYEc5dxyGXUeg/kt8A85l9l/n53fKwRPp8IJVDLSmERPKWjNMKxltvW47IJ/37959Yxh5jDvQ4OmcvLOOxbwOI+T4Eho10WpA4ZA+/20wilVARqMSlLMobjdLdAp3uw4MfunNwRhY1KAQvjArJ0u+Gslvm0/3G+7EohoKBXNQp0IbLEY97SDwe3l02WotsqTe/Y/yg60IUxV2mV37s+wCVgU8+P6sPnv/ATGUGXGkUjQAME/SahxlAUE/Xhdh6KLaMORAAK8/Ozx35OvOZHvrwO2xd+C1JZYKieo5jqlh0GXGEJ7xG5XQZiVvYqXiMAQBg8Ah+Q6kNsLDZndW/eH31vR4UPVcFDNThyzWCYgLVLcR8i8bQlrHLaWpTewAGBPEAab68mh9/8zoeZBwuD25OQKbHMEu4kENOyK5wfj7pM3EgEXAG+GQRUtcq949Rla/j6kf4FckhC7rkS3C6RHgCExab0fO48vPWApPt4RM2bNJbsBsz7s34YCCTzWiqPAfi6FsPFpkApCMbJxsWNAU6CUNVwyOqJLvVT/dLX8b+GN9lEHEqJ6KlcepenNiMMwZ9WDT4zyLUQ5sRVDl/kH/vLz/Tb2Vq2SJyB414HPQrh1XwCOHgI2s6cgdQLdLY6D+b5Z/E/hJD2WIxkHclyCKvPWkRMwUJhM8O4eAlA4y6s/m8/vHb/pByMwssgRr3PHIqukkyBBc0+BlkUdKYTYWAdns2m56H22+HAqsAblPusaDQoTfCJiASx4BGWWvPNlZnAwC9Hep2Fj+4Q8d0YDK6hXkM+gRQHHCTWOBCnRKW8+ln+fho7G/jnUy2Vi9mkDu445EupJ3DbM6kN6Hc/vxu/lm+8R7M/vsYHasV8Js7IwIqS7oDggdskrUNf2wIDMFndTZ8H+m/LK7crhdK9XpBzzCJJY/HgGpSOCGVUrvdXy2vNq+dJe1yWvX9WqFQaOlwiTNKP5NVYENWs5+ebeTzrcsJvXZrrFaqL+yXSrVaDSPEQSUV9VZrAQdks53ON/T3//Xf2K6MfpRpleqlo1K5XS40SwvlNADS+XxjtnFkA+e/xODIRLZ01Cw0G810o5xupBv5ciO9YL83/D/+gDh4a+h6WJvPlsq42pZCX3w08jHs+Z/xyeDo8K3x8fHhj0c/+QcyvwPDImA6o85F+gAAAABJRU5ErkJggg=="
        },
        132: function(e, n, t) {
            e.exports = t.p + "static/media/blue-loader.904b44c2.svg"
        },
        133: function(e, n, t) {
            e.exports = t.p + "static/media/coinbaseWalletIcon.62578f59.svg"
        },
        134: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAb1BMVEUAAABoSP9nR/9kRf9nR/9nSP9nSP9nSf9jR/9mSv9oSf9oQv9nR/9nR/9mR/9oR/9nSP9nSP9nSP9nR/9mRv9nSP9oR/9pSP9tQ/9yO/9nSP9mSf9oSP9pRv9oRv9nR/9tSf9oSP9nSP9mSf9nSP8gE60+AAAAJHRSTlMAgO9ryP38nhLezBv59LPqwIzi14RzTC4OA858Y1dBORyYaiOM5j0ZAAABIElEQVR42u3OR1LDUBBF0bawLBm+cnbABrT/NQLDHoCqCNajuGcFx2YF8T0PHjx48OAx8/B4eDw8Hh4Pj4fHw+Ph8fB4eP/6EfLNrzuelh/Rnd0ADx48ePDg8Y6Hx8Pj4fHweHg8PB4eD4+Hx8NTfDzs52/abXnw4MGDBw8ePHjw4MGDBw8ePHgsP8Zu87nqcIvHsjT5I4+QazyyRORRaTyiTuRx0ngUvcajvko8QmkSj+io8SguGo9mknhklUk8ikHikT2ZxKO+Sjyy1iQezSjxKHpTeGStKTxCPik84kNqCo96MIVHcTaFx/5iAo/d9sUEHiEfTeCRVZOt/wj5o9nqj1C+LVZ/hG1vtvYjlN1g9rXH8w884qgp86Q9p/aBVykn/2qI7S2iAAAAAElFTkSuQmCC"
        },
        135: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAMAAAD8CC+4AAAC+lBMVEUAAABJdZlKbJtQcJ9ss9twr99dmr1BZpExWoRss9tKbJtKbJtMbJtSiq1wr9dKbJtNlrUvUnFss9tss9tIa5hEZ5RGiag6c4w1WHtss9s/fZs8YYpKbZtOhKgXOVBgoMRIaZdDZY88X4VXkbNLgKJprNJkpctKkrBJa5lss9tttNs4YIhrtNs2cpJKbJpLa5s4XoRJbJw9ZI1ss9pKbJw3XYRtstoWOUtKappss9w5dJRKbZpIjawTNERAZJA5Y4pJbJsTNUU8eZZKe5xGaZZEhKNCgqI9eJgTNUVJfp5qtdptf5MTNERBf5w9Y4tMgqQ7d5Vss9x3ZncQOEhrkaoyVXZFZ5JAY4tUjLBxc4UTNEQ5XoY3b44zY4ZDgKMaQlpalLdRS2M4cZV4ZnkTN0pmSmCZa5VUapkaQlofP1R+Y4k3cZIVOEsaQloUNEQ2bpBqU2oXOExik7NJjK18qM1LTWdoZpU8d5uInsJIaZdDfaB4YJASM0M+epuUjq9ZSmIbQlo5c5RQiKoaQllfSGCdhqhjSWAbQlqKWIcWO040WoCigKIYQFhgpMg5UmtEgqN3rNJWS2Q1Wn5PbJpwZJGRlbcTNERbSmE5dpN0Y3Uzboxss9tKbJs9VXgaQloTNERQnLpUfKgsRVpIbZoXOEsUNEZOmbhoq9IXPVMaO0wXO09Iapg+VHRno8Rbh6UhSGEdRV4VNklrq9BPlbVFaJUZQFdYkrNFTmkjRl9or9VPc5RCcY1DX4EyVndLR18mN0hrsdhgpchio8hQkrRVfJ1AY4tAU3ArUmchQ1UdPVIxOUwoTWhmrdJUmLlIcZtJaYtAWnxhlLNMhqpQlbZKSmNBQFRXnL02YnonSmVHRFpPj7JJeqJNgaBHeJ84XII1WX0sTmtan8BNk7NTiapLfqVIdJ1CZpA9aYMxWnFCUWxemr1PjK9HeJZNbpFHY4Y8X4YvUnEmS18fQlk6PVBrqs1XgaBcoMFOlrY+TGQ6O0tmmrhSlrc/RFdLkLGaCrPLAAAAm3RSTlMAH/AQ8BDw7x9A4IBAwCDA/vbggP727x/wwMDAsJwQ9vDo6Nxw/vz89tCwm3BW0HBXUNygkHBgQDCQcGD48OevoKCcPPvo3a9gVzDs4M/Oh4dQLSD77uviz8bBhzwt/PDp4950cC0f/eDPqJOQgIB5VDD+/vv18/Lv7uPW0MjCwcC6r6iUh3dgV1BKPCD+/PHw0s3EurCwraaLZPDw87oAABRTSURBVHja7N2xittAFIXhyWam0CYoIFWC5AFkREJQMDFpUrvz8x01ftOwLNldbK08kmzw3Pm/V/ibU93rAAAAAAAAAAAAAAAAAAAAACRn+80hM8EfPzjkZafjV4es7KXj8NkhJ81T9EeHjGz1FH345JCN4J+jP7Dl8tHrOfrAlstGof/R2XLZaF+is+Vy0eklOlsuE8G/RmfLZaLXa3S2XB4KvYnOlstDexr98aODbZ3eRmfL5SD48+gDW862XiPRvzgYVmgs+vDTwa72JDpbzr5OJ9HZcuYFfxqdLWder9PobDnrCp1FZ8tZ155HZ8sZ1+k8OlvOttKPRGfL2bbRSHS2nGmFxqKz5UyrRqOz5SyrNRqdLWdY6cejs+UM22g8OlvOrkJx0Yc/DlZUsdEf2HJW1IqNPvxyMKH08dGH3w4WbPRudLacUYXej86WM6qaiM6Ws6nWRHS2nEmln4rOljNpo6nobDmLCk1GZ8sZFKrp6Gw5g2pNR2fL2VPqQnS2nD3NpehsOXMOuhSdLWdNqC5GZ8tZU+tidLacMaUuR2fLGdOsi/7dITkHrYs+/HBITKhiorPlTKm1Nvrw1yEppdZE54Bokpq46Gw5Qw6Ki86WsyNUkdHZcnbUiozOljOjVGx0tpwZTXR0tpwVW0VHZ8sZEXx8dLacETvFR2fL2bDXjOhsORuaOdHZciZsNSc6W86C4GdFZ8tZsNNVo/OkMQF7zYvOljOguX50Hm7fua2uE50DoukI/gbRebh933aaG50tl7q9Zkdny6WumR+dLZe4reZHZ8ulLfgF0dlyadtpQXS2XNIKLYnOlktauyg6Wy5lnRZFZ8slLPhl0dlyCeu1LDpbLl2FFkZny6WrXRqdLZesTkujs+VSFfzNovOk8V71unZ0Dojeu0I3jc7D7XvU3jY6D7fvUKcV0dlySQp+TXS2XJJ6rYnOlktRoVXR2XIpatdFZ8slqNO66Gy59JR+ZXS23D/27tjGQTAIonBiAhICiGiBAk66Mq6+bfbk80oGDgP2j82M9KaFl3zRrt+GKIyO5exWR2l0LGe3tjg6lnNbF8XRsZzZmkt5dCxntiHKo2M5r9VxQHQs57X2XdE5OiW7Lj4RnSeNSmsu50fnSePmtBSX0bGc0epQiM7D7a1pKS6jYzmfdaERHcutTk1xGR3L2WwImehY7uH0FJfRsZzJqlYpOpZ7ND3FZXQs57EmtKJjuQ+sV4uO5d6+n1CLjuUWJqm4jI7lHNaFXnQsN5+o4jI6ljNYrxmdJ42TqSpuZ3SeNJ6+qlWNjuXGU1Xc/ug83H5yuopbj84BUZn1ytGxXE5YcRkdy2mvarWjY7nbhBWX0bGc9JpQj47lrlNWXEbHcsr7Cv3oWO46hWOgG9GxnO6+IwyiY7ncYU+yHaJjOWnF3aNjOc39Kc4iOpZTVtwoOpZT3E1xHtF50iisuEl0LCe3VJxLdJ40yipuPToHRJ+eg+L2R+fh9p5ZKG4WHcsp7a44n+hYTlRx8+hYTmcjxRlFx3KaivsXHcupbKw4p+hY7vQzUvuiYzmNTd4rekXHcoe8V/SKjuUEFbcUHcudv9mTbLPoWE5PcYvRsdwLM1LccnQs98ve/avEFQVxHL9NHmA7yzWVj5F+u5A/WAcUrEIIISGQLhAIhECSKpxbpF8NlmJpZ6F2voRW2rtz0IMe7xlnVkdm2N/vFb7Np7j3jHahFDccHZZTL5LihNFxpJFfLMXx0fGAqHShFCeMjiON/GIpTh4dB7ebi6a4dnRYTr5gimtHh+WkC6e42fYanWA56aIp7u9058d4uBMsJ1w0xb07Selfv7882AmWkyya4jYPUqLofX/8dCgULCebt/OK7W1v7lJyik7bWlq51QmWk8zfecVm8r3DlEr0vP9Ln+pOsNydi6O46Q7VLtHLRpXpYDnJfB3Jboz0Nhy9r00Hy905z4+BlpHe2tFr08Fy7EIoLuuNi16bDpbjFkFxRW9M9Np0sFx7ARRX9MZGr00HyzHzrrgj0pswem06PDo1OO+KI73potO2iulwpHFgrhWX9aaLXpsORxpvz7Pist700YvpXo5huaE5VlzRGxud3+gV1cLB7WpeFUd6U0Vvmg6Wq+ZVcaQ3ZXTGdLDcjblUXNabOjpvOliuzKPiit700e1N96vDasXZ642PzpsOlnvwPflpoDdldHvTrcNy1/fHQG/q6Pam+91hZd8t9KaPbm+6bx12tY8WetNHtzfdhw673FczvemjG5tuo8Py1t7b6k0f3c5062sdRvsyv95OUzKKbmW6zx12D8Vtn5PeLKPzpoPlHl1xU9KbeXTedLCcleL0erOPXkwHyz2a4o4OUvIQnUwHy1krrujNS3QyHSyn3dt59OYpejYdHhBV7YVeb96iZ9Ph4LZ8G2q9eYyeTYeD28I9n+r05jc6mQ7fy4k2UenNd3SV6Z51C7s3Gr35j04/QK7AcjrF8XqLEH2WfTSG5bitqvQWI/pso2VYrq24M5XewkSfme41LNfYRKe3QNHJdLAcozix3kJFz6aD5RjFyfQWLHo2HSxXKU6rt3DRezIdLFcpTqe3iNHJdLBc2UStt5jRyXQ40lgUp9Vb1OjZdLAcKU6vt7jRs+lwpHF1Dr1Fjt6T6Rb8AVFSnFpvwaOT6Rb64PZkHr2Fj37B3tm82hSFYXyZYGLGhDDwMTGR0h1dOjG4IgYMuBJCUYiBmaKIyIQBaW1Wra4ux5koXyXULV93TCihlK+UrwkycNc5tJx9zl5n7XX2Ou+737V+/8JTz37W+p29j9p04W65LS0vINqsNwKh1zddoFtuTepRbrfeSIRe33QhbrmmFffLer0RCf282nTBbTm14lzWG53Q1aYLbMvpFZfv8xGUQlebLqQtd9Z1vdEKvb7pgtlyv1zXG7XQ65sujC237u96QwB46OfVpgtgy42tOLXeUIAhdLXpyG+55Wq9IQFH6GrT0d5yS8DXG8LQ1abbwAhz5MY5NOAJfUcfo82B++eQgCX0jUcZebZtPocDJKHvnMFCYA+OjkcR+sG9LBTOYOh4BKFvD6DZ/+/4Wt6MCIa+K4xm1+zZlzMjcqEfPMHC43C+jicW+vZjLExydTyp0DcG1+yabTk6nlLoh0Jsds3hD7YZ0Ql9O/ULuM6ctOx4KqFv3MUitld0REI/FO7DHIOGsQ89qhUvHOjc8QRC37iVRTR9O+50yqj8oVcHQz2bt2HGwAohxGiHji976BevCCFWbI2PdMXqnf2iwXPjFV3JQx8SDforq1no9FWE5q6p40sdevWC0JwOe80N7BdNmDq+xKFfvCCaWTEQasvP2N0vWnmS1fGlDf3akGilf3eILb+3IjK40/74VtbQdbOnqITW8gODIpvRx+0yKmfoqtkz2T/AgmHG1hXCzJM2GqaMoV+7Ikyolg/j4b660i809h1fwtCrwoIK/Z9G9g0KO+6mO750oatmt2KQdMurqzd7vjcf30oWump2O0hf1OmrN1ue/9/x5Qq9KiwhfVHXlz6igXe8j9B1s+dnkNwRbuqtS8IF3fHlCV2pFQeGbp9itNjEh58KB7SGKU3oQ8KJZ1eTCYwWcznn17+K3GgNU5LQqxeEC4/uJWMwUizhdT7l7nitYUoRunOzJ3XmM0pM5w2G3wkHlIYpQ+hKrbjw+mrSYDGjxFr+j48PhBN3auhDd2z2b/eSfyxglBjPNS+QdPxY6ODHtLFmf5VopjBKcE0XHf8Bb+jXrjg2++XkH9SW3DLezAiGjpdQF3Cam2+TZhYyOqziad48dDu+PcYYumuzv9RpE1xyk3gLw7dcOx5b6K7N/kU3O8klN563YeS94xVdDVXors1+NWmF1J3cXN6W664djyd0x2Z/9FkHTXXJ8SycNQyO0F2b/fblJIOJjArLeCYjzhoGQehDBTQ72fk+mxsA0zASTK0YmMeoMIkbANMwEkitGJnGqLCWGwFS7RJArYxJczOLGBXG805cB7iikzBqRUP7zGYIHVDDSBi1YmYyowI3AqXaZY+leeqYRv2gzo1AqXbZy2a/mW526gf1JdwAnIaRgGqF/kHdcEyH1DCyl2olhp4CSLVLKGmehHA7M50bgNMwsjdqpaXZw7idMVzIQWoY2SO1EkPPAEK1y95I8xi6946/4yP0apHSPJB7WMPVO6SGkRBqJZh7WMMtLKSGkb7fR4yhO+Cu2mtWoXuW5jF0A1AaRnpVKzF0A3AaRnpUKzF0Q+iQGkb6k+YxdB16jzv+cYfQsTV7DN2/hpF+1EoM3RQ6tIaRXtRKDN0idDjVLj1I8xh6oaHz4aI1jCxcrcTQLUKH1TCyaLUSQ7cMHVC1y2LfR4yhO4TuVbWP/rAI3V2tXE5i6ClmcQt8a5if9w2hd61WYuhOPt2/hvmdDr0wtRJD9xa65lMhHS+BpLmZlYwGjdDRdbws5lOPZuLPpVJAaJjfNR16EWolhp7BbO6DF912vCxCrcTQHUIHUO0/P+jQu/vUoz3xDRcNkIZ5UquHXoRaiaFnwQ3AaJjfKnQAtWKC2CffuQEg1f7zxznZa2ke1vvpc7kBKA3zfbQItRJDd7h8B9Qw0GpFQ/KL75t4O+A1TDHSPN7C2t7OIOl4VM1O6RY2+wV1BBqmALUS72byHtThNQyAWjGwnlFhHM8GgYbpVprHuxmfB/UiPjyJR63QPrF1PLPBaxg7teKfpYwOs7gRDBrGWa3EE5vrmQ2Danf81GMc7+7zHYGG8aRWQvyKnPV8R6Bh3NRKdGztmcPtAFftDtI8jnfw+W7oeD+feow7DsWS0xoGs1qhffOec8mh0DDWaiXuODxLTqt2jNI8k+OMFHM5CErDIFUrpP/AxdednL2GwalWCH8X1oNSd1DtyKT5X0j/e7piCYdAaxh0aoX81QzcQ11rGGxqJYBHOtxDXWsYPNI8kEc65ENddzziZqf4SFcndXCGbyFSKyE80hmbyeEZeYBGrdD+1Yy+fsfAm4fw0jyDBYweyzgK/rB3xy5Ow1EcwHOLc4YzhQ4uop26OJaCUL0Wh+KNDiri6uDgIAgOuour2AxfqOQfCAjdWl3bG65QpEeHK1cQbj8HEUyUM7ae1/x6SX7f/PI+Y9fHe3nv/X5Jgw9PMhytGH37eelMncOnrwRHK6afpbMMbX8fw2g/WinCwBa62+Hxu8Z/YKns5h2r0tX302OYLzSV3aQ/Tqet76GPDGOa6dWdq753OkOXiqHVnau+dwZdl4mh1Z2svo+ogm5qdQ+vRxLxZy4RIzczDIfqy+xjl4d5R+ls+/ff8NnlYeLenePS1JIh4PIw8FQ1cqnD4gTg6eTM+Xoc5/2ZU98Bnk7O2CGdbFS3gX2XxLaxQzpXK9cHeDo5k9s4plZuCPA81A17hY12KzdCYM+lYNZb6cRbOR+BA5eCwds4rqkNoanLwMRbsJRT2xABkvWM4fMazwJ+ArB0cqbPazyp7gMsD3WTvhfIneoIcEzqxUh0hgXNEGCp7wVJdGtL+y52hADFpF6URCdIdRu/EKzfi5LoQaprfqr3cGrsqpFEz20DfwKQPNSLk+jaG3gfAYahrUiJrjnV+whQDG3mfXCEdgM/ADjqexG27iyHbT7AUd8LcLy27FFHlz7AUd/NP0fnuUIzADjqu9H3nsk2ND5AUd9NvxnHtKHpAxT1vVjjmubX1U8AivpesHFN79jmY8WRG4t0cYm4peO0rYeI6v5duric9nITRFTPV2XpntPvxXr4x7GbuduF7OJ0fTp0gID+Vs6g/8bPQYH3EdDeypn1p3vsBb6HgPZWrsjFXUOBH+FMC/d8UtyT9bqToR4iKls56dwDeV3RHCKiNrXJt0ZCebwQ3ffwH1M3M9v3LZHdDj5KdPWpTd5XTNi9joKEEz3WBXg5UD2Vv7ntENCe6pcLPq1FHqT8WI8SXXeqbxf2nEXHNcko0VUbeHmg/yVv03qU6IoNvKxfl+Xpo1MjYKNUl4sTqdlKu5nrYUncDbw0cStytaPxsdaBu0qauJTdSTXqA6znuWeQY5Yz5OOlxqiLUxrbpHFflaeoTxCJ38tJ436mnLTwQ8QzXt7Lyfb1DHmJev8bQuoFXv6B6//Y32WdIKBa4GVYOw/9uD5AJE4HLzE/Xx6i3vOgYCoxX4s/6n0fSo4k5mvRR30CRQuJ+VrkUT+EKm9PYr4WddQHUDfuSszXIo76EJv43JWYr0Ub9Z6HDaMuMc/e1lU9MY+iLjGPhW4jG8ZcZ9RvXLGEmnsaerilqMsZSzxMJ61vgAtGXb4epcHda53NTaAg+Xl9W+5MbOjO9c6Geh4ScCD34TTYutTrbGLgQUHyx+u3H1hic83vQ/U0HyEp3sJVt/eiZImLaHzzFcN+6CFBU9V+bvG5ZYkLqlZgH/biV/ZvSNiRQti7R2O7ZokLK+0A8Ad9LSEPeXHDvjgGHCntyWgh4H1fF/fexENK9teHfW/fA1C2REKqdfziT4b/jfiJjzSNz0v37uwYocp7SySm1Map+WiwEvn+cOJ7SN94f9H9N95BwMf4bUdKe7Ke2vjbfO6PQv58jkxNpwezWTe0mM2Opx7+sHctkbDSDqhJmqdi1wYtSfO0lNogJWmeolodhCqyj0nXK7oab8tsnroHTVDZkW+9ZqHmgEZdKntWnlRAodKwRHYaBGGXh3nWrpRtaGWXZUzLXkkh7BJyY5R0FfmKhFynRh1Zm0v7pt0TB1l69vyJJfSrNivIhvfwcdUSJFoO0vfj+StLMKm+fIY0zSXJKT19UUEk4bL+1BKkqu06EldpS46Tu9/aQXL237bkFC0fWs0kEv7Hw8c35U3EPCntvnRwAU57V7ZuuVR913agzGm25JQ85+7Xyk3HRgy20yzvStNmkGqtUS47jlPHinrwY7ncqEm0hRBCCCGEEEIIIYT42R4cEgAAAAAI+v/aGwYAAAAAAADgL922vIvzjSw1AAAAAElFTkSuQmCC"
        },
        136: function(e, n, t) {
            e.exports = t.p + "static/media/walletConnectIcon.8215855c.svg"
        },
        137: function(e, n, t) {
            e.exports = t.p + "static/media/repeat.f7e5cc6b.svg"
        },
        186: function(e, n, t) {
            var a = {
                "./Bsc-banner-h5.png": 215,
                "./Bsc-banner-header.png": 216,
                "./Bsc-banner-pc.png": 217,
                "./Discord.png": 218,
                "./Discord_h5.png": 207,
                "./Fund_h5.png": 209,
                "./Github.png": 219,
                "./Github_h5.png": 208,
                "./Medium.png": 220,
                "./Medium_h5.png": 211,
                "./Telegram.png": 221,
                "./Telegram_h5.png": 212,
                "./Twitter.png": 222,
                "./Twitter_h5.png": 210,
                "./add-liquidity.svg": 223,
                "./arrow-down-blue.svg": 500,
                "./arrow-down-grey.svg": 501,
                "./arrow-right-white.png": 502,
                "./arrow-right.svg": 503,
                "./banner.jpg": 504,
                "./blue-loader.svg": 132,
                "./boardroom.png": 224,
                "./bsc-logo.png": 213,
                "./circle-grey.svg": 505,
                "./circle.svg": 506,
                "./coinbaseWalletIcon.svg": 133,
                "./dropdown-blue.svg": 507,
                "./dropdown.svg": 508,
                "./dropup-blue.svg": 509,
                "./empty-proposals.svg": 225,
                "./ethereum-logo.png": 510,
                "./ex-change.svg": 226,
                "./exchange-active.svg": 227,
                "./exchange.png": 511,
                "./farm.png": 228,
                "./fortmaticIcon.png": 134,
                "./fund.png": 229,
                "./home.png": 230,
                "./ht-logo.png": 512,
                "./link.svg": 513,
                "./logo.png": 206,
                "./magnifying-glass.svg": 514,
                "./marker.png": 231,
                "./mdex.png": 515,
                "./menu.svg": 516,
                "./metamask.png": 214,
                "./plus-blue.svg": 517,
                "./plus-grey.svg": 518,
                "./portisIcon.png": 135,
                "./question-mark.svg": 519,
                "./question.svg": 520,
                "./removed-to.svg": 232,
                "./repeat.svg": 137,
                "./setting.png": 521,
                "./spinner.svg": 522,
                "./star.svg": 523,
                "./token-logo.png": 131,
                "./trustWallet.png": 524,
                "./wallet.png": 233,
                "./walletConnectIcon.svg": 136,
                "./x.svg": 525
            };

            function r(e) {
                var n = i(e);
                return t(n)
            }

            function i(e) {
                if (!t.o(a, e)) {
                    var n = new Error("Cannot find module '" + e + "'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                return a[e]
            }
            r.keys = function() {
                return Object.keys(a)
            }, r.resolve = i, e.exports = r, r.id = 186
        },
        203: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        204: function(e) {
            e.exports = JSON.parse('[{"name":"TokenPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"eth_sold","indexed":true},{"type":"uint256","name":"tokens_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"EthPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"tokens_sold","indexed":true},{"type":"uint256","name":"eth_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"AddLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"RemoveLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"setup","outputs":[],"inputs":[{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"addLiquidity","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_liquidity"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"removeLiquidity","outputs":[{"type":"uint256","name":"outA"},{"type":"uint256","name":"outB"}],"inputs":[{"type":"uint256","name":"amount"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"__default__","outputs":[],"inputs":[],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"tokenToEthSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"getEthToTokenInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getEthToTokenOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"tokenAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"factoryAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"}],"constant":true,"payable":false,"type":"function"},{"name":"transfer","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"transferFrom","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"allowance","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true,"payable":false,"type":"function"},{"name":"name","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"symbol","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"decimals","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]')
        },
        205: function(e) {
            e.exports = JSON.parse('[{"name":"NewExchange","inputs":[{"type":"address","name":"token","indexed":true},{"type":"address","name":"exchange","indexed":true}],"anonymous":false,"type":"event"},{"name":"initializeFactory","outputs":[],"inputs":[{"type":"address","name":"template"}],"constant":false,"payable":false,"type":"function"},{"name":"createExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":false,"payable":false,"type":"function"},{"name":"getExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":true,"payable":false,"type":"function"},{"name":"getToken","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"exchange"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenWithId","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"token_id"}],"constant":true,"payable":false,"type":"function"},{"name":"exchangeTemplate","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"tokenCount","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]')
        },
        206: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAABCCAMAAABNe7wDAAABLFBMVEUAAAD////////////////////////////////////////////////////r9v/////////////////////////////////////////////////d9P////////////9Mqt3///////////////////9Nqt3///////////////////////////////////////////////////////////////////////9asu7///9Mqt3///9Nqt3///////////////9TsOT///////9Nqt1Nq93///9Nqt5Mqt1Nqt3///////9Nq97///9Mqt1Mqt1Nqt1Mqt3///9Mqt3///////9OrN7///9PrN9RreFNqt5Mqt1Nq97///9Nqd1Nqt1PruFNqt3///9MqdzkGM1dAAAAYnRSTlMAortEdh/9y/Uo63E/8QMFh/rdsV4RcNWaFwgBUgvu4Bu2pDLmqGlLItCVjDDYgmzD98e/qlUsFQjptZBsZGFINxENnp2JfHfQfnRPRDv48OnA4cimWjauKxtf2VM0/ZEj/CfTscoAAAqMSURBVHja7Zz5X9pYEMBH0AgtJIBQLqFgaQGhoqKg4n1t69Faj2rbdbs7/v//wyrv4pHk8UDdo598fykFIeGbybyZSRQ8/nWsYPllJ3U5tbTXOTpuWeDxHGwf+gLYy0Jz7jQLHk9KMBJDJ0q1Ong8GaGiga74tsDjSXgzj2omT8Hj0ST2DBzIZQE8Hoe/hD2Em6nxjeXj5c2jlC+PPeSnweMRmBERzsb8y7oJgmyr0TSQk8qAx6jkppARiEyAncJcGBnzCfAYjfYkL5k7abcUHuHF9fsKeIzCLvNspAqqw1GLIiHmLYmjkGmyFfAY1IRWkZBsg8fQXDJ7QRhEYZHlaW/+MTQNJCzlYDDWLBJq4Ep6OT6hOoGCPPHcjvfw7nj7l15l39DEOwN6RJDgmmaWH+qTQ3DjZR7Rl6aPUcZovvxls79ZpbkgA3pkl+iUaRccCS50X26AM0fdV6sZIVomWpPC+gU68A4euPnxmrAPffz2mvIVFFjTkWKsFDaQM9vv5rRWrJaiL5LNsXhC7u5QjbGw+r54KFKx+K6xNuiSWWS75cghrRPr4MQ2PX9CkmiJ/JWeaFi/o6yD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"
        },
        207: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAflBMVEUAAACiosuAjraAj7aBj7aAj7aBj7aBj7aGlLmDkLeFkriAjraAj7aAj7aBj7aAj7aCj7aCkbaSl8GBj7aCj7aBj7aBj7eCj7aKk7+Bj7aAj7aBj7aCkLeCj7iAjraBj7aBkLeBjraBj7aDj7eGkLqAj7WBj7aGlbuBj7iAjrVZc91uAAAAKXRSTlMABfjz6KjcoRw6Kcm7kYqFd1gMzXFoXUUQwbSZST/UbWKvfDUY7+whS5vWKnwAAAGoSURBVDjLhZTrmoIgEIYHFCXPpmV52Kyslvu/wU0YyFXM9w8088UcH+E/QcbOnvP4ifwDh1V44okJYba3yk4JFTPcC1nqjk9hwdvNdYmwQ3uYsq/FKvFUiDo76XZc5GjqEN+hd+zLU2xQLAI77HKj6pb1zcPYczkPamTlcIv8W952bX7z6/J0cXQ7yfTBkLf9Cz68jh3/mTxp5rs7zQdG9i36GEBgHgQb+KRDIBNIbxVe0FsB081a2SksNYMzCmuwU+PETS0HZe/KQJ47POGgq9GtCrSZjrf8fapVxGLP8MCysEi1VzIhX5lc6Y+k6zPOENcqQqG6jj/wFFdlbanwhjFFR7iYZCz9CfgC/6HglWrTUJ2UARtd6qqa0XZHJ7KviCn7DhyrGm0kbX6JnnPb+IMJ7cr8JZEMGVydkKVlygqn6KQ+1gHNsN0DedsLoXnysZ8ejnrMxBVaytKr+FCkTLtCXJBNOpW2t6W7gmJHv+tcDkgv1sHtQOLtDwWSrr+HOs2RruS3+EDeC5uu5rAkX7Qp7MAKyZkzCdpUsA6pspidIz8p57n9AVefiuZw7inpAAAAAElFTkSuQmCC"
        },
        208: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAh1BMVEUAAACAjraBj7azs9yCkLeRm76Aj7aBj7aBj7aBj7aBkLeCkLiNlb2Bj7aAjraEkLeBj7aBkLeCj7aGkrmJlryAjrWAj7aAj7aAj7aAj7WBj7aBjreBj7iCkLeFkriAjraBj7eCj7aCj7eCj7eHlLmHkbuBj7aBjrWAj7aBj7aEkreAj7aAjrX517uuAAAALHRSTlMA+doDTAnxx6KYZUAO5rYy0XRtIxTszpCHqZxfXFQoyoF3RzkbGN6+r5Msq6qBjn8AAAGYSURBVDjLfZXpgoIgFIXBFPfdymVap6apue//fKNwMRTo/CL8uJx7BCNL3arg4TDmPILqRqxKyhMo8svEiG2qLay0rTY6FztgkBOvuYiCUTRabrsHq/bq9shZyDf3BR/1Jbmc+8ueO62VwOc+cwQLPjv+OvaiAdHY3zjj8lGhbky55/hyvXuEePf44k6/G1H6wDsWAabEKCY8TFUGsYgZOQ/dDuM4w3FtAo/4MBvXUOzQM1Ys8AV55IBrYrPHHB+7JMQzZcTezkI5uNjASJrcqTvb29mRVAyONrABjJmq4dhBSvD8f9vAGm8FwRsQ2UCMzyG+GPzawF7GF6KH2mKRyhwH+FgymE95DajSGjemMl+As3bbNyWgTrioCLZT+tclF2OjGErCADqv4ZM/e1dS11b5dDB+BsupdJI4Yn8JtqCoIvOlCciLTSVnn55SsMDZmALQhry6wh/eDp8zR8X7xc17azJQLWMNkyXoSi5UA5tIlnVdroO9MLhq0tXAs3acUhOYuoZPfUjXIOW+dd3bVDnoedqq/yD/Gd5vQKPB3DUAAAAASUVORK5CYII="
        },
        209: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAoCAMAAAC/1ZhiAAAAflBMVEUAAACNm8WAj7aAj7aBj7aAjraBj7WBj7aBj7aGkbmRkbmBjraBj7eCkLeBjraAj7aBj7WBjraFlLumptOAj7aEkLiHlLuBjraAjraBjraBj7aDj7eCkLeEkLiWm72FkLiBj7aAj7aAj7aBj7aAkLaBjraDkbiBjraBjraAjrWbwHTsAAAAKXRSTlMADN2BaOfxlnojDtNzXPjFoYwdBcA+FOLX0KVTSCsHL+vMsqqHbjm8TapREDsAAAGQSURBVDjLlZXploIwDIWRpWUbUAFlUXFBZ/L+LziE1jZVsYf7Q3uSD0jpTXBMbf31b80yN795vfNFcXgBoj0/zoCnlMGr1ttP5GEPH5R572QKM7quTLBYw6ySyECRnJW7I2RIq+OH4+NeU7YsFPlHwk0vKhooy5/kKsCKkmSP7zKmT8IoJqGiwXGfPzqG980BYPz3MZuL2I4pVIRW3XRKHUGhm1APNLrBQA7wwFtQ9DKhCUFDfHIGkOJBUxTwhCNQqNwqhyDChIHe8UQp6gonFg4yBlqOy5ai0Gmj1QbKxmVpoGflOg4alUBNUGQP4g3e4AUdy2cK7RtxtJ6fthmgWoJWBEV754ZvIoeiqgDZRtVVZtggrTfoAkq5bCXct1hxKG3TNaC31erWeIh0dL6dhGN8VyXZS1OVYvuuN7kmDWhKnB9RUz3R0Gz1O17dGKHNEw3A0Faa0I5epLVtqPZGaEdz1YZWtFLNbUM5GRnf0bL4OIh4HMfuMP4EdBARnazjbfnQtI/i5QN++WfD/jH6B35Qjzw7mA9aAAAAAElFTkSuQmCC"
        },
        210: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAe1BMVEUAAACAj7aBj7eAj7WAj7aBj7aDj7eTlcCAjraEkreBj7WAjraCj7WLl7uUo8eDlLqAjraBj7aDj7aEkLeBjraBj7aCkLaBkLeDkLeGkbuBj7aAj7aAjraCj7aqqsyBj7aAj7eBj7aBkLeAjraAj7WAjraDj7eEkbmAjrXmFsW6AAAAKHRSTlMA84DUv6tTDNkj6KVxFQkg6n1PK+GFal0zGM2xj3gFxpuVSO3Ps0A6I/H2ZAAAAWFJREFUOMuVldmagyAMhQNSFlFra7X7Ohvv/4RTR01Q9NP5r2hzJJgcIvQxiRWaMS1ssoZJUh45j4inozLFmRvANirUydiNkG+HOu4m2IBPtnKTrDIgUDeqDPLOZpduhvaNVDwnzNVkYnbZvyrxXnzkmPzY1vnuteXzCDXXszR/UVb3qOwOkp5wP+yzujfn4u91t5GBzLbLC3QcilXTdwDjWg4AsG2eeqHw9mija0g64bUpVZ2/CCucgB3UAI6yIis+uqgFgZ263DAe9laApjOGUFQDupWPeZ46QEJWhMK9J9S43v0EQoFB7a3dWQ50BcUE2MBNxBfFLCT0IzbhCangxnnKvV9KkzvCAPQvPTVlvfP/7/s2SjLyja9znIwr5HcKSFb2DZ96DtGVwrKUuB1t6F+u03NTXZ/nyA2I1cLrKhcOAL50pPxvSM1m58sGaSyXjWauxod9uWDYh5+Pged+AWhIi6X+1m9KAAAAAElFTkSuQmCC"
        },
        211: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAflBMVEUAAACAj7aAj7aAjrWAj7WBkLeAj7aBj7eBj7aElr2Ll7qLormEkreAjraBj7aCj7WVlb+Llb2WpMWDj7eAj7aCkLaBj7aDkLimpsyBj7aBj7eBj7aBj7eCkLeDkLiBj7WAj7WBjraCj7eCkLaDkbaDkbeDkLmAjrWCjreAjrW+Q+zpAAAAKXRSTlMAo/To02O/f4MbFgsj2apyDBAIUp1+bTkFs5SMW1BA7t/McGtLLyjFeDL2nucAAAFvSURBVDjLlZXreoIwDIbTUgtyEPAIU1Cnbuv93+BoCpQUGez7Y/PklZBDA1DFKZMJ54lkaQyTCgOhBhJB+BaLDlw54n425ipPvZG3c7mDmpBPsO1GTWqzBSvKueR8XDd6pWbUZhR5c6CX2cCiAJTsvUdAffTBQ1PnPaCefbFztANjhHg0+jRk10WG1rG1goFHfaFr1VontFjXd4BYdVqhq/BaDwFVDKkFTQt+TCpbCqbALLiutC/nmMqFggzkAPxG5xlrICkoIRmAJoO1TqX2KJgAH4Jl6xXAHJBT0JTopR45d0ESuutPmT/UKLQkIA8xcRAuKEl5sFdaJ+WCDFIKXnGi9iMwHbTwknezkfERGNuhEBHO3q3AwXBAYcfsGgMUUj8Y4N78lHTM7ODWOMQ3/eeXzjKCvp9dMXx9PEeoujk+mze495d5b+9htvRywW7ZdcXgf8pfulL+t6Rmo/vgaDezSK0yf2Y1L1z2iz8fvwR8ksp1MMKjAAAAAElFTkSuQmCC"
        },
        212: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAeFBMVEUAAACBj7eAj7aAj7aAj7aHlLyAjraTl7+Bj7WAjraAjrWDkreAjraAj7aCj7WDj7eSpMSPkr6Bj7aBj7aCj7aCj7eEkriBjrWBj7aBjraBj7aAjraCkLiBkLeBj7WBj7aAj7aBkbeDkLeFj7mCk7eBjrWAjrWAjrWjmTXwAAAAJ3RSTlMAf/S/1BelDOjZgyL5q3JSCBB5bWVdJePNsZiRVz/wqaBRSDEu3sXDrGrSAAABVElEQVQ4y52V65KDIAyFIyCKWtt6v+72tsv7v+HiDbOiw7TnB+NkPgyGkwj/FcacCkIE5XEIh3IDJpFY4O5inkPkRsTxTO7syx355y3nyAM5gHU5yUOdLgjEnEkaea3Zz9Ki+Ys83wb6HkpsT+4SO0hcBQbyQD9OkS3PgQLZLhXxHgBe+t4Bwj2sSq8wqNOREGKD+mqfw9ETtbQ6GAPfYLQbryyvCrX+6jAHiqnSmexaUOYOFiDrfhDr+b8fs0WSiI5nfEotAcumUp1/Us9kPTkmQ5XU4GPGro2UDUy6oS8EoRPnwys7H7mF4dQUFZmmtVoz3UW4GEZ5ojss6lGYGwXnoJWgcGxcYbuCNQqHAMywXlZMYImGgWmzVGUk+WhUFA1M4+bjxpsHcMfGNVth3iZe0ODzHDdXVOHmeq9d7QPgzZFiH1IfjD37ILWP5o+Hvf338Qf9YZt7cySKzwAAAABJRU5ErkJggg=="
        },
        213: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAulBMVEUAAADvrxDvtwjvuAnxuQvwuQrwuQvwuQrwugvwugvvtwvxuAvxugvvtwjvtgrwuQvxugnwuwryuQvxuwvvugvvtQvwuQvvtwzvuQ3wuAvvvxDvuAvvuArwugvvtwrvuQrvtgvvuAzvuAvvtwvvtgvwuQvFmQvFmQwZGRAZGRELDhF+Yw5EOQ82LhDirgs2Lg9wWQ4oIxDTpAxhTg7TowsnIxBhTw59ZA6Mbg1vWQ6Lbw6Lbg1EOA////8DpA4OAAAAJXRSTlMAEEBwj6/P3++/YJ+fIFDfb69fjzAw70BQvxCQsM+gUHCQcKCQAtJYUgAAAAFiS0dEPdBtUVkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflARoNBSomjRAaAAADq0lEQVRo3sWabXeaMBSAg4gglrG1Vqrtttr2FgZrt6KOvf3/37UPakngJrk32LP70ZzzPOblXiCJEKTwRv44mIQRAEAUToOxP/LEqcKLZyEgMTmLkxPQ/SkYYjrQMTLS9xG8c//zIZAijZ347yMgh4NiFAIrmIrkA7DjjDHd5xE4BLkT3hgc44KUfEkIzpEShmkewYBIL63DDwPj3LL4YXD4b8w3Ggjj85gPGKU5gV98IRgundfnY1GWBMMCXa0ejU8ypFjGjYl8kuGiz4/JfJLhnD8BLZ9i6E3DGYdPMQTMAVL5FEOmCEImn2BIOR3o8wkGn94BjG83LDxqB3C+3eATO6DjWw2vs3DlyLcajgspYPCrimGYHpKYwwfgGDzrFPf5LMN+mpc8PscwtYwQzucYPPMIfcX5XcOTnhCb6+jzNwnzXW6RDS+1njATQkyAZNioLRWJD6kQK2OqvBo23ZaKwgfwxAgohk2/paLwIRM++vtWNbT87VYxSPytJhOu8fW5kQ0Sf/ciGyT+D3y1XqOF6LGQ//RzI/HLUjL8lPiafLjB8nifX8iwb3dlqRhkPm74iDwLjvn7C+djhkab06mI9PWhwfl9Q6OvGgthqj8Nzu8aGlNdEsb61uB81dAYK19XkBea+larglpT+QqbQDFUcoNsUPO3MvChP8mtoVIbWkO3PlR6/gJZpkdD1W04Gvr1p9LxIcWqda5LtL0Bq2+Vhg9TtFTkSqnY/lYMEv+PUvkKvFSgxS4v5PomrdZ6J/EbebVWhabY4eW6Vte/ZKiV9S8Zak25ziwPnB1WNdr8etnaHjiWR+YTXpfa/LUYPPOr9Su/Z2jKkmL4KIT4ROJ3DE1Zkgwz84vX31JT+RrOi5dhEtTK1xpUfmF4dUwsL7+4gc7ffyD4wDPQ+bDf6DQu1L6BwYfDfsKSY+Dwbw7faOZkzg0fgWY+fKZ9xuoNBfEz1jjNBoOFD+1e9ipyMdj48m7ILfANNj7EnO2cvqFgbefYngp9g5UPndOEgGew82fdTcGIY7Dz+ycJ9m3N1mDnA3LcsiYbCPw1svO7ComGwnFrmTANkBc0fuK8vZ8XBD7MdQcIMcFA4BvO027hBHFnOsS5fWM+aZScx+cw0+EQfDT//0eNQqzWrvw19aZC7NSJiHFmndzz+QHvfgK3E2nGPtXnKKI7p3sJVEXqO19DuQrs+GUmhkQSG99cl/4J7tAk8T26eRvO4hPe0Mn8h2B5vP4zCR78jAj/BxvHMSB40+znAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTI2VDEzOjA0OjUyKzAwOjAwvapJxgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0yNlQxMzowNDo1MiswMDowMMz38XoAAAAASUVORK5CYII="
        },
        214: function(e, n, t) {
            e.exports = t.p + "static/media/metamask.7195f2eb.png"
        },
        215: function(e, n, t) {
            e.exports = t.p + "static/media/Bsc-banner-h5.88fa5021.png"
        },
        216: function(e, n) {
            e.exports = "data:image/png;base64,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"
        },
        217: function(e, n, t) {
            e.exports = t.p + "static/media/Bsc-banner-pc.8cbb9b47.png"
        },
        218: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAAjVBMVEUAAABIUmZHT2VHUmVCUmE/VWdIUmZIUmZIUmZIUmZIUmZHUmVIUmZIUmVHUmZIUmZIUmZHU2ZIUmZIUWZHUmVGUmNIUmZIUmZIUmZIUmZIUmZIUmdIUmVIUmZIUmdIUmZIUWZHUGVHUWVIUmZIU2ZHUWdJUmZIUmdIUmZIUWVHTGFCUGZIUWZHUmZIUmaRnOXOAAAALnRSTlMA+RAeCART8uPRr0SRK+rhlzkyxLkW2720iHXJyamgez02JYRsaGReST8ZC+++Lpkr4QAAAaVJREFUOMuFk+m6giAQQEdQVNxupaXt2b7x/o9305mUEvP8AjnfyCzAB0yEs8S13GQWCgZ9BNJSLZYMjNZoob5ZjDqW/adM/NmfGveVGZ/rWuSpPrxIi0aaWWwi2r76hW+Tp6VgToYKoobA8izb0q7FSeJydr4UcVPHugtt/NtpVYiIOQ4rg836wDbv/lSdkW/txEUGGveAX+hIAjCL1okDXSZ0IQZCEXOD1pwKCN85ZCbPoVxCeJKXghEK84SEvKPZ21LzwCWvxJovl/V0XvzJGH+M5y5QujF2On59YgDZ69TD/HO8PTz065XVckd/wznZULxE77Xz2sV3APZo4gksLqTobWhgZT6u75lKms8xthvCtsqODZ+waoapfkLrxvnAtJcl9tUuo35Qf+Oo/kmez6/8bvPtYeUfncrOqb+wUpjR+esJbKv9DvcrALgqYjofce0JeOX4OKP1FWdniAllPgS2EIoBLQTEWfzUlk1Zb9Mf2vQGDXzar3HQyCZ9qWZfD6GwDJZVdB9hlHa0NAITu7WrSe56B33YwV76Xuz5ch/YoPMPiaGV/tQm4G4AAAAASUVORK5CYII="
        },
        219: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAMAAABKdvqKAAAAkFBMVEUAAABIUmZIUmZHUmZIUmZIUmZIUmZGUFpIUmZHUmZIUmZIUmZIUmZHUmZIUmZIUWZIU2ZIVGNFUGVIUmZIUmZIUmZIUmZIUWZJUmZIUmVHU2dEUmRIUmZIUmZJUmZIUmZIUmZIUmdJVGdEUmRIUmZIUWZHUmZIUmZIUWZIUWZIU2dHU2dHUmZIUmZIU2VIUmbN6wULAAAAL3RSTlMA8bj79eXMBS0O0quKfmg6GBQI6N/HwXNgTyYL2qSeeW1ANRzsvK+Zg1RLIpJaRcxu+j4AAAGRSURBVDjLhdTZYoIwEAXQG3ZQoCoCat33df7/71ocQhDH9jxFMwRmAbwYPvpWpmzHHR/vX/goOCoybGsC0bVnU0d0EeIKhwS9AV6FFsmyDdoGHn2i1jBmHCdzWmce6C+jplAJVYpy3snHO5XPeu3Bvp6/lA+EsUMqyq295xLl1S17VCk5cMGXczEDnV6KSsw3n1XrLdc5h2RFT6tq3ef1NyRxa9OtWzuEYE4sBVJiMSTTuhB9YMkr14eoTzrVnj5Qtq0fzEekH0Km96fY8WIAmb7jGjYv8MmR9yeo0wr/OfGiyxjggzHvbxDpJslmtk7moAslS5q+LYlN5AMz3h0DqZljwYKaFvo7Yt9bvLlR7VF306lyV0mn3wFnrMds+rtIcFbVZJzSJvZa5tQo9MzZJ6y5DokehhEZbmhergQFv3BaSca99WJEQOHSznyVfEWaZQa+rqPf6R3LzGQNPSLnjFcWMRV0P1LebRkP3wLV+rVV9d9hN9DtjpW/dKTAg9DYqfUWmE0gChaj1jMu8rMP4webhXIMM82RYgAAAABJRU5ErkJggg=="
        },
        220: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAMAAABKdvqKAAAAh1BMVEUAAABIU2dIUmVJV2hIUmZIU2dIUmZFTGNEUldIUmZIUmZIUmZHUmVIU2ZJUWVIUmZIUmZIUmZHUWVIUmZIUmZIUmZIUmZIUWZIUmZIUmZIUmVJUmdIUmZIUGVIUmZIUmZIUmZJU2ZET2ZEUmJIUmZIUWZHUmZEUGRIUmVHUWRHUmZJU2ZIUmYuOFDXAAAALHRSTlMAvzwQ/IvLCQT698VQRSjy558h7ePbkV+1q4JoSS7WuHZjFhPdjVkaaTUybPG8lToAAAGOSURBVDjLlZWJjoIwEEBbQG65BVxRcb32mP//vmWm2/RQJL6EhKaPptOZDswgGFb9pY7iIilPFZvlu8xBI9kFT7XsCDbF7lELPyJ4gp9Z3mcCz8lTw6s2MIf3pa+H3iyd2l8Cr/AcKa7gNc1ZeD8engQnfC1gTsQAUAqRw8TBFYOD9Gpx2msUvT2+OkD0IU2cpHilYRrTYIvvWxC0IrAGBBnlPvqP586YG8s19mSOQHAauHJunBYHiSPmRGHcdJG+a5VYqcMqwsoQ45BxJa4pr3fc10cwSlFuudFEnyElgFd1K1NMWa6JsKbC9KBniSV2zNPFI0N6SDOwxJ25IogUNGFri52+x0FmdQhqW0yNqDEKMm9gixlrdVEmMkHROsfUFPMzxg22yLVcF+65wKOe5q8P4qiqJ3amcCOqw6DGD8zqUfXYyWr8xVCgD0Q9CnMrdq7qFEO7hHyaCZlgiKjC1Z3Z+MQGbwU+XIJi+eYtXL7X73WK5d7zbjdb7o82+5mOu9zDfbOH23+F48xf4Q+GTJc2RcQZxQAAAABJRU5ErkJggg=="
        },
        221: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAMAAABKdvqKAAAAilBMVEUAAABIUmZIUmZBUGRIUmZIUmZFUWZIUmZJUmZJUmZIUmZIUWRIUmZIUWVHUmZIUmZIUmZJUWVIUWdIUmdHUWdGUmZFU2ZEUmJARmZIUmZIUmZIUmVIUmVIVGhGUGVIUmZHUmZIUmZHUWZIUmZHUmZIUWdHUmVBUWJISGBJU2dIUmVIUWdJU2ZIUmbxK/IjAAAALXRSTlMA+vQEyeYXqYtqZSDbu7WihErEUi8pJBII7uGSXUE13de/mXRgOzcPCpp7WlBnRoqyAAABXElEQVQ4y52Vi66CMAxAO14CyksFEeEqoPi6/f/fk+cYDFj0xBATTpqu7QoMeHi6fT4SSVUccw2z/DkSMihmOKntLRyjGjKnyS7BCZRg5GlbnEbaDbz1BucgBhuP8XiufX4KLkFunajjMuqhLR9BAc9G3KKQfeUlOIdEc19V4mpGU4w7fUc0gDuZzF/3B0FygB1vEftfBih/QOtrAZzG2iXXSuWQ7cpHn64M1jD/rICK6zkpnx5SfIgYLY0fteanal0QFyke0FmN3HamQ5dcmr92L8bQHdrsZjTZ4Lbt2bEXTRrx5DeD5CDa7RUIkI0Y9cfVb7JZBsm62G9G9IanrsK/Wm1YOZ+rowsUBZk6cp15Uy9kmmvxvfYA2jIV2JPz01OAQfT6OAbTfY2fx+DVXWcHKauJCU+b5GNgm7tfuDM2k9Lzy1sovtffbQrx7vllm4n3o3jj/rzDxV+FD/DuruH6CcV6AAAAAElFTkSuQmCC"
        },
        222: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAMAAABKdvqKAAAAh1BMVEUAAABIUmZHUWZIUmZIUmZEUGZIUmZJUmZGT2BIUmZHR2FIUmZIUmZIUmZIUWZIUmZIUmVITmVIUmZHUmVIUmZJUmZIUmdIUmdJUWZIUmdHUWZIU2ZIUmZIUmZIUmZIUmZIUWZIU2dHUGNIUWZIUmdIUmZJU2lIUmZIUmZHUmVIUGdIUmZIUmbh5CNtAAAALHRSTlMA/CDG+AXzVA/cCemE8KaTNha6rZ+NbGRhSTIs5eGziXM+G8K9XCfjfU5DzODoJBUAAAFvSURBVDjLlZXZloIwDEDDXigCCrKIMMi4zUz+//vmsDVUquh9gpN70oamASS84mvnbjT7aCS5Dk+JAhtnGLml1ModPnLMl5rla6jAeNzA1kA1mx/J0118hpbP85GnMB3an4GvMKNJ3ONrXDZ4Bw1X2A/it2Jf4YGxU4zI6/712nmnMXjfkVdAT1Z4Q5ake4vH6NYLaKmJr5j39TAAZo5ZACAdn3XxPawGe1IAB5GietwVxoEyjsEaIJzEZjiju2HfqO3ESQKcp2feirAQW6T1qqnSyIEFByH+gujVEpakQnRAHEuoEAMhXiijdll4zJ5lrFCQ6IuVaY9UNfKylT3LJVGHkF58kGkotOlPhkxP+jYmRer+rInbnlT9iERK3dNhBlTOtULCZNSPdehftiDIpKGRzDrc9Fsq1/mTG/4q3Rnt7DunMiqagKNM+OYtrNhn93p9Unw2e9an2SfzcX3iZu/N8MwCQv1X4EaSPSz6D0znlWTxXXtkAAAAAElFTkSuQmCC"
        },
        223: function(e, n, t) {
            e.exports = t.p + "static/media/add-liquidity.9579deaa.svg"
        },
        224: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAB6VBMVEUAAAD///////+/v7+qqqqSkrafn7+ZmbOLoqKioqKJnbGSkqSImaqWlqWUlKGSkqqSnqqLl6KQkKaPmaOJk6eOl6qJkqSIkKGPl6ePlqWJlaKIlKaLkaKIk6SNkqGKlKOLlKKJkqSKk6SIkKGMlKWLk6OJkaSLkqGJkKOMlKaKkqSOlaSIk6SKkaKKkKGJk6OLkaGJk6OLkaSLlKSJkqKKkKOIkaOKk6GIkaKKkqOIkaKJkqOLkKSKkqOJkaOKkqGJkKKKkaOIkqOIkqOJkKGKkaGJkqKJkqKKkKKKk6KIkaGJkKKJkqKIkaOIkKGJkaOJkaGJkaOJkaKKkaGJkaOIkaKJkKKIkaGIkaKIkaKJkaOIkaKJkaKKkKGJkaKJkKKJkaGJkaGIkKKJkaOIkKKIkaGKkaOJkaKIkaKJkKGJkKKIkaKJkKKIkaKIkaKJkaKIkaKJkaKJkKGIkaGJkaKJkaGIkKKJkaGJkaKIkKKKkqKKkqOJkaKIkKGJkaOKkqOIkaKJkKGJkaGIkKKJkaGJkKKIkaGJkKKIkaKJkKGIkaGJkKKIkaKJkaGIkaKJkKGJkaKIkKGJkaGIkKKJkKKIkaKIkaKIkaKIkaKJkaGIkKKIkaKJkaGIkKKJkaKIkKGIkKKJkaKIkKF1MeegAAAAonRSTlMAAQIEBgcICgsLDQ4PERMVFRYXGRobHB4gIikrLC0xMjc4Ozw+QENERUVGRklKTE5PUFFRUlNWV1hZWltcXmFiY2RnaWptbnBxcXJzc3R4f4CChIuNjo+QkpSVlpeYmZqbnp+goaOjpKWmqqytsLKztLW2ubq8vb6+v7+/wMHBwsPEx8jJy8zN0tTX2Nnf4eLj5OXm6ezu8fP4+fr6+/z9/v4dBScFAAACAklEQVQYGd3B+V/LcQDH8fe6WIflNmmOqJzlPnJTznKF3FcUSSWRKZKjslxJtLLa6y/13fbYPtPju69+8oPnU/+f+VWNHU1nfIpKP/2ksWqBHGTWBolqWyhLJZbg+SylktNL3LBP0kWi3uQqhVaMrx5pyXei2mRvE5ZvNesP9WK5KimnuGYIy1bZ6gb68iSlXQGC2YrIewf0yE5OCChURNZHYLOiCoCJXNkoAL4o5gVwTzGfgULZ8AGDinkG+BXzAVgqGx4gPEdRnYBfUZ4JYLbs9ANNLkV0An5FuB4AA5oiI+oYlq61+W63+yXwyu1256/2YzmZEaOY0iGmaahUEQGmLaCIAaZtQBFFgWDCWGgynGwyNBY0AkX6d7zVJXJUcsKrJJ4R2C4HO2DEI2MjcFcOGoAyGTuB+3LwENgiowJokINmoFzGHqBeDlqADTL2Arfk4DGwTsYB4KYctANrZBwErslBB1As4zBwWUlcETKeA6tkVAJ1SvC+DwO/WmcqrhtYKeMIcEEJ9cRUKe41sELGcaBWCXeIqVRcL7BcxlGgTgmL3obC4fBo8wzF9QM+GbuALqWWOQ7Mk1EAjC5WSvuB4TQlGQT65iqFZT+A60q2G8vI2fIiGxU3QsC4V8lcj/iLav0p+ymOzmmq9FM/SenTNtmYte92e4+Nlktlmfqv/AZLfo7KSOhvZAAAAABJRU5ErkJggg=="
        },
        225: function(e, n, t) {
            e.exports = t.p + "static/media/empty-proposals.d384030e.svg"
        },
        226: function(e, n, t) {
            e.exports = t.p + "static/media/ex-change.619e0792.svg"
        },
        227: function(e, n, t) {
            e.exports = t.p + "static/media/exchange-active.e3e18185.svg"
        },
        228: function(e, n) {
            e.exports = "data:image/png;base64,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"
        },
        229: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAMAAABKdvqKAAAAjVBMVEUAAABIUmZIUmZJU2ZIU2ZJUWdBTl9IUWZIUWdIUmZITWRIUGZIUWZFT2VIUmZIUmZIUmZIUmZJUWdIUWVIUWZIUmZIUmZHUmZHUmZIUmZIU2dGUGZIUmZIUmZHUmZIUmZIUmdIUmZHTmZIUmZIUmZIUWZIUmZJUmdJU2hIUmVIU2dIUWZJUmZHUmRIUmb3fWXHAAAALnRSTlMA9t9Gi14FpDv7ECJAGvjx48uQJcSvnH1TTTcv7tbQv7WqCurn2bpuMZJmcXAs/aBJ+gAAAa1JREFUOMuNlOl6gjAQRQfEBWQTQTYVcWtr2/v+j9ckIhkQpeeH+ZzvGK6ZIdTBya2rubWDMN5MPXrJYm6Acc1mg9pnhT6X7FmbWTYGOPQDeCsMcy463trEK4yc79f1uiF8V+dbMWmzmNHyI2TmdvkQv1ix+blzYOaqOaYCQBBF0U6sE2o47gHUUZRI8/teiwGYYp0Dic49EdXFfUHgyIoLLWYycbpZy/pZi0hlIWGiNG7AXtavTDzPRGyfib9i+QEuUqy0qLJnYGKumpl8SjHkYiTOhos1tbjQogpTcdF2WRO46IsnaJHNwLFGR4RHQUeEb62FNt2paqHFkuxWPDYdNk7NLLqkxULvKINNL+1w1PKv8x3Ne110Q5GtVAD9tc14fWwxL5smx7C85gG7dnyJIvaCLEgyFVUV2WSTRpSDEecP0UlPYFiiYoCzbEQLHVx1fONiqO6Hf4gpSapRcesosbTHxBvdsUbEuB2p+K148vS1eHkjBgW/U3SvDMOXH3brucRxKgxjlv37MfWHvLlDT6yTJ20/oUHKzZZZfsK1fgA3rffmKdwdrLz30D+waJQ1NzE9JgAAAABJRU5ErkJggg=="
        },
        230: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACH1BMVEUAAAD///////+qqqq/v7+ZmcyqqqqSkraZmbOLoqKVlaqSkqSImaqPn6+WlqWOnKqMmaaSkqqQkKaKlaqPmaOJk6eOl6qJkqSNlaeIkKGMlKWPl6eLk6KKkqiOlaOKkaWNlKGJlqOMk6aJlaKMkqSIlKaLkaKIk6SLkKaNkqOKlaWKlKOMkKSJkqWJkqSLlKGIkaOIkKGKkqOMlKWLk6OJkaWLk6KJkaSIk6KKkaOIk6SKkaKIkqOKkKGLkqKJk6OJk6OLkaSKkKOJkqSKk6GKkqOIkaKLkKSJkaKKkqOKkqGJkKKKkaOKkaOIkqOJkaKJkKOKkKKIkaGJkKKIkaKJkqOJkaKJkaOJkaGIkKKJkaOJkKGJkqKIkaKJkKKIkaGJkKKJkqGJkKKJkaKIkaKJkaOIkKKJkaKIkaGJkaKIkaKJkKGJkaKJkaGJkKKJkaGIkaKJkKKIkaGJkKKIkaKJkKGIkaKJkaKIkaKJkKGJkaKIkaGJkaKIkaKJkaGIkKKJkaGIkKKJkaKIkKGJkaKIkaKJkaKIkKKJkaGIkaKJkKKIkaKJkaGIkaKJkaKIkaKIkaGJkKKIkaKJkaGIkKKIkKKIkKGIkaKJkKGJkaKIkKGJkaGIkKKJkaGIkaKJkKKIkaGJkKKIkaKJkKGIkaKJkKGIkKGJkKGIkaKJkKKIkaGJkKKIkaGJkaGIkKKJkaGIkKKJkaKIkKGJkaKIkKFp9opCAAAAtHRSTlMAAQIDBAUGBwoLDA4PEBESFBUXGBkaGxwdHh8gISMkJSYnKCkqKywtLi8wMjU2ODk6PD0+QEFCQ0dISUpLTE1OUFFTVFdZWlxdXmJjZGZnaGxxcnN2d3l/gIGCiIyOj5CRk5qcnaChoqOkpaanqaqrrK2ur7CxsrO0tre5uru8vb6/wMHCw8XIycrLztHS09XX2Nna293f4eLj5OXm5+jp6uvs7e7v8PLz9PX29/j5+vv8/f7+4CG6AAACqklEQVQYGe3B62OVAxzA8e9WrK00FV1EQyGjXFpREnJXhuWeoVynSRYlw1JWc8kqiy5i7EjRnJ093z/Q73nOOTvn9Ga87/Phov+h9aUDx8+PHHzh1jpqzNvwwcnzI4M72+dRbdFuy/ZfT8X01wqWjL06gwkd/1gx+jxl6362yvD9lLRbq+tSMpvGrTF2H5k144Z898Z7nujJm/ryMsK0z00NPLdm/ctHTI3eSag7ZDiwmFTr96YGryJM6dQzj5Ka8nTeMEBYZ/i6kaKmXaZO30LqscNLKHmgYLgb2G5YRln9K6bOrSVVx4Quw9vAt+ogVTbmDYWnqHW74SDwh9pDtZU5U5vrqDbbkAMS9S1qtBw11d1AlSZDAiTqO9Sa2Wfqq2YqphsKQKK+y4QbmgiXbDV1pIUJMwx5IFHfo2ztue8WkOoYN4zcRdlMwyiQqNsoWV/QX5aTuvesYewRSpoNfwOJ2k3R0r8MI82klh435FdQdLnhHJCo71O0zXB2BUVzfzD0UzTL8CeQqNvJNI4a2ii74oShhcxswxkgUXeQaTX0UfGM4UEycww5IFE/JNNm6KSizfAkmSsNvwOJupPMckMnFSsNj5OZaxgGEvUjMvMN+6joMKwiM9/wK5Cou8jUnVTHl1HWOKTmZ5BZYDgNJOpuirYYhpoo2WrYQ9FCwykgUT+haOGo4ZtWUs1vmrqDoqsNJ4BE3UPJi6YK3R2rN2wZNtVFyTWGn4BE/ZSS+h3WGphGySLDj0Ci9lLW8IbVepspu9ZwDEjUz6h4+Jhlv22qZ8J1hiEgUb+gytSHuk4lOvJxexNVFhuOAonaxwWmzmrgAksMh4GcupfJ3WjoB3rVfUzuJsNmYFWi+5nczWpuAeHZgv1MrlVzq8nctq2HybUeen0OF/03/wJkkNRU+HD3lAAAAABJRU5ErkJggg=="
        },
        231: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABUFBMVEUAAAD///////+qqqq/v7+ZmcyqqqqOqqqJnbGSkqSImaqWlqWOnKqSkqqQkKaJkqSPlqWOlaOJlaKMkqSIlKaLkaKKlaWNkqGKlKOJk6KJkqWLlKKKk6SMlKWKkqKLk6OJkaWIk6KKkaOKkaKIkqOKkKGJk6OLkaGLkaSKkKOJkqSKk6GIkaKLkKSKkqGKkaOIkqKJkaKJkKGJkKOIkaGJkKKJkqGIkaKKkKOJkaOJkaOIkKKJkaKJkKOIkaGJkKKIkaKJkaKJkaGJkaKIkaKJkaGIkKKJkaKJkKKJkaGJkKKJkKKIkaKJkaKJkaKIkaKJkaGJkaGIkKKJkaKJkaKJkKKJkaGIkKKIkaGJkKKIkaKJkKGJkaKJkKGIkaKJkKKIkKKJkaGIkKKJkaKJkaKJkaGJkKGJkKGIkKGJkKGIkaGIkKKJkaKIkKGJkaKIkKGjO51IAAAAb3RSTlMAAQIDBAUGCQ0ODxESFRccIiQpKissMDEyNDY3Oz4/QEFHSEpLTE5PUVNUV1hcYmRlaGpscnN1dnp/goOEipCRlpebnJ2en6Koq62vsLO3u7y+v8LFxsfIzM3Oz9PU1djb3N3g4+ft7/Dy9fn8/f4hFCMdAAABmElEQVRIx92VV1fCMBiGv4qA4sLBcCFDWVZFFCcuQFw4KopVcOEe0P9/ZyKclGKT5s5zeG/gpc8DyXeSA0ALxRLN5ku3uinls1FLM+8vK8yU/Vo+XlEMUok38j5DHhk+lTc/og+qqZBjSDeOUKqKgAczEcKYD7JGEsRGmNQ0ahn2EDMISZMmoRZhCxGESKQVUXOxBRdCihrBqQXMq6dSLVu9uDuNhEV1nsdcwrYq3HMJ7ncizHMJ0DXuXcLDV9aBTwAYflN5HkHDcwg1PgkGgnhdruez8fubhSvUBvCbhPZEJ4EiLCtKyYRe16h8kwCBmA1A2NTg3ytAF3BMuxj7mLLX0wFswXKA+dcRymn9I1hPMP/iAE6hM4/5p37qfXCjxzdq7ZZ/j2Uf/QJNo+dnpLVfYr7Yw7hx+wjYIW0B8xc2Bj+LiQCpeMPPkxO0eOdymC+1EeFI4cjXmPqDMR5ebFihkDPk5VHNnoSZvXN6pMMNj/A//1qCfVA3dsp6rAXajgtWXUGkz0jUFTx0waO/poR8pxs5Aa2VH44WN8WcCsM7AAAAAElFTkSuQmCC"
        },
        232: function(e, n, t) {
            e.exports = t.p + "static/media/removed-to.267e4f4d.svg"
        },
        233: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAMAAADSK7iXAAAAbFBMVEUAAAAwMjQvMTMuMDMvMjQuMDMuMTMuMTMuNjYzMzUvMTMwMTQvMDQvMTMvMTUuMTQyNjYvMTMvMDQuMDQvMTMxMTQuMjUuMTMwMDUvMTQuMDMuMDMvMTQxMTSAgID///8vNDQxMTpVVVUuMDPxOhLeAAAAI3RSTlMAgL/kZ/jh0iEU+1ujmGBTD5+ZfnNJKeo18cizrFkCATEfBjy9sTgAAADbSURBVDjLzZPZroJAEERrFnYYQJR73Zf6/390iFHU4LSJPnieT6ozNd2YZve/dUeEyYryj572BLyM6Va8UoZjPKZck+zxzH6MyXV32APes08x2zGmrRtgQJEdRvqNIS/EulI3NKmVx6bwuJwCkQPSiCJRCkuajQqRkBaKVAgyGD+lNfX8rr92WsuqxzL1pNbHpKxlg5XMrkPjF1pFLgvc0NNak5MFRK32E4GFMYugNidngCHNR5o8VH6CXMgH9UqfJX+9vEhf3l5LJko8wHfPGS4SLQdPalUQ67POQqc4ncL9BJUAAAAASUVORK5CYII="
        },
        243: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IMdx","name":"_mdx","type":"address"},{"internalType":"contract IMdexFactory","name":"_factory","type":"address"},{"internalType":"contract IOracle","name":"_oracle","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"address","name":"_targetToken","type":"address"},{"internalType":"uint256","name":"_mdxPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"address","name":"_pair","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"addPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addToken","type":"address"}],"name":"addWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_delToken","type":"address"}],"name":"delWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"contract IMdexFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_lastRewardBlock","type":"uint256"}],"name":"getMdxReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getPoolInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"outputToken","type":"address"},{"internalType":"uint256","name":"outputAmount","type":"uint256"},{"internalType":"address","name":"anchorToken","type":"address"}],"name":"getQuantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"getUserReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"getWhitelist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhitelistLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"halvingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"isWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massMintPools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mdx","outputs":[{"internalType":"contract IMdx","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mdxPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"oracle","outputs":[{"internalType":"contract IOracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pairOfPid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"phase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"phase","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"totalQuantity","type":"uint256"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"allocMdxAmount","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"reward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"router","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"setHalvingPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPerBlock","type":"uint256"}],"name":"setMdxPerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IOracle","name":"_oracle","type":"address"}],"name":"setOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"setPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newRouter","type":"address"}],"name":"setRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"input","type":"address"},{"internalType":"address","name":"output","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"takerWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"targetToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"stateMutability":"view","type":"function"}]')
        },
        265: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"bytes32[]","name":"_codes","type":"bytes32[]"},{"internalType":"address[]","name":"_implementations","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"CodeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"ImplementationAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"acceptedCodes","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint128","name":"index","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"acceptedImplementations","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint128","name":"index","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"addCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_argentWallet","type":"address"}],"name":"addCodeAndImplementationFromWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_impl","type":"address"}],"name":"addImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCodes","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getImplementations","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"isArgentWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')
        },
        266: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factoryV1","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        267: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        332: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        333: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        334: function(e) {
            e.exports = JSON.parse('[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_approved","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_operator","indexed":true},{"type":"bool","name":"_approved","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[],"constant":false,"payable":false,"type":"constructor"},{"name":"tokenURI","outputs":[{"type":"string","name":"out"}],"inputs":[{"type":"uint256","name":"_tokenId"}],"constant":true,"payable":false,"type":"function","gas":22405},{"name":"tokenByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":631},{"name":"tokenOfOwnerByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":1248},{"name":"transferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":259486},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"},{"type":"bytes","name":"_data"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[],"inputs":[{"type":"address","name":"_approved"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":38422},{"name":"setApprovalForAll","outputs":[],"inputs":[{"type":"address","name":"_operator"},{"type":"bool","name":"_approved"}],"constant":false,"payable":false,"type":"function","gas":38016},{"name":"mint","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"}],"constant":false,"payable":false,"type":"function","gas":182636},{"name":"changeMinter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"constant":false,"payable":false,"type":"function","gas":35897},{"name":"changeURI","outputs":[],"inputs":[{"type":"address","name":"_newURI"}],"constant":false,"payable":false,"type":"function","gas":35927},{"name":"name","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6612},{"name":"symbol","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6642},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":873},{"name":"minter","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":903},{"name":"socks","outputs":[{"type":"address","name":"out","unit":"Socks"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":933},{"name":"newURI","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":963},{"name":"ownerOf","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1126},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1195},{"name":"getApproved","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1186},{"name":"isApprovedForAll","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"constant":true,"payable":false,"type":"function","gas":1415},{"name":"supportsInterface","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"bytes32","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1246}]')
        },
        335: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        339: function(e, n, t) {
            e.exports = t.p + "static/media/notice.d7ffac46.svg"
        },
        340: function(e, n, t) {
            e.exports = t.p + "static/media/arrowRight.23b51c57.svg"
        },
        349: function(e, n, t) {
            e.exports = t.p + "static/media/reward_pc.c9950519.png"
        },
        350: function(e, n, t) {
            e.exports = t.p + "static/media/reward_h5.14a8e00d.png"
        },
        351: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ISwapMining","name":"_swapMining","type":"address"},{"internalType":"contract IMdexFactory","name":"_mdexFactory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"}],"name":"getPoolReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"outputToken","type":"address"},{"internalType":"uint256","name":"outputAmount","type":"uint256"},{"internalType":"address","name":"anchorToken","type":"address"}],"name":"getPrice","outputs":[{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mdexFactory","outputs":[{"internalType":"contract IMdexFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapMining","outputs":[{"internalType":"contract ISwapMining","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')
        },
        370: function(e, n, t) {
            e.exports = t(650)
        },
        380: function(e, n) {},
        500: function(e, n, t) {
            e.exports = t.p + "static/media/arrow-down-blue.cd061363.svg"
        },
        501: function(e, n, t) {
            e.exports = t.p + "static/media/arrow-down-grey.c0dedd2f.svg"
        },
        502: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdQAAAGdCAMAAACcrnL6AAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMAOb8X1mTZYhnXZp9t/GDs8VjjJyLeE/bnd1EtHQ3PyH1xRDUxPi7eX1AAAAUqSURBVHja7NHJSWUBAEXB14vudvFRcUBBVw4//xC9EQiCG49VKdTBcZwuD2JO57PVmJ1ajdmp1ZidWo3ZqdWYnVqN2anVmJ1ajdmp1ZidWo3ZqdWYnVqN2anVmNP5E/8PfqCdWo3ZqdWYnVqN2anVmJ1ajdmp1ZidWo3ZqdWYnVqN2anVmJ1ajdmp1ZidWo3ZqdWYnVqN2anVmJ1ajdmp1ZidWo3ZqdWYnVqN2anVmJ1ajdmp1ZidWo3ZqdWalwerPVaLrBZZLbJaZLXIapHVIqtFVousFr1bDbJaZLXIapHVIqtF79dWe6wWWS36YzXIapHVIqtFVousFlkterUaZLXIapHVIqtFVousFr1dWe2xWmS1yGqR1SKrRVaLrBY9WQ2yWvT9q38PvsgqVn8pq0VWi54erfZYLbJadGs1yGqR1SKrRVaLrBZZLbJadHtjtcdqkdUiq0V3VoOsFlktslpktchqkdUiq0VWi+7urfZYLbJa9Gw1yGqR1SKrRVaLrBZZLbJa9PzPao/VogurQVaLrH6wd0cpTkRBAEXHGXlUSkQUCShEwQ/3v0R3IAgZg9dztnBpku6uV12kapGqRaoWqVr0clG1R9Wil7eq9qhapGqRqkWqFqlapGrRVdWg6zdVe1QtUrVI1SJVi1QtUrVI1SJVi1QtUrVI1SJVi+5fdZ94tOt3VXtULVK16KZqkKpFqhapWqRqkapFqhapWqRqkapFqhbdnlXtUbVI1aIHVP38hlf249PfrvruJ/+eFTVoRQ1aUYNW1KAVNWhFDVpRg1bUoBU1aEUNWlGDVtSgFTVoRQ1aUYNW1KAVNWhFDVpRg1bUoBU1aEUNWlGDVtSgFTVoRQ1aUYNW1KAVtedyE7XmjCu15ozf1Joz/v3WnHGfWnPGE6WaM5791pzxlqbmjPepNWdMPtScMaNUc8Y0Yc0Zc781Z0zo15xxlqbmjFNvNWecT6054yR5zRk7H2rO2M5Sc8YepZozNp7VnLGbsOaMLaI1Z+z7rTljM3fNGTv0a8742kXN75s+fXnmtX24d9PLPPFYX9/f+zrV9A9piqb/IU17NO3RtEfTHk17NO3RtEfTHk17NO3RtEfTHk17NO35qGmOpj2a9mjao2mPpj2a/mLPDlIiBgIACLqoiCLOgJeVuSgJ/v+J+4ZATp2qL/Sxe85v+vzEIZqi6QVp2qNpj6Y9mvZo2qNpj6Y9mvZo2qNpz+lN3zU9SFM0vaAvTXM07dG0R9MeTXs07dG0R9MeTXs07dG0R9MeTXs07dG05+1f0xpNezTt0bRH055XTXM07dG0R9MeTXs07fnQNEfTHk17NO3RtEfTHk17NO3RtEfTHk17PjXN0bRH0x5NezTt0bRH0x5NezTt0bRH0x5NezTt0bRH0x5Ne/7Obvqi6UGaoukFadqjaY+mPZr2aNqjaY+mPZr2aNqjac+Ppjma9mjao2mPpj2a9mjao2mPpj2a9mjao2mPpj2a9mja86tpjqY9mvZo2qNpj6Y9mvZo2qNpj6Y9mvZo2qNpj6Y9XlvQbWrac5ua9mxT055tatqzTU17tqlpzzY17dmHpj370LRnH5r27EPTnjU07VlD0541NO1ZQ9OeNTTtWXdNe77vmvY82qNjGgBgGIiBW9X5k0gdwh9neVg+ClfPU556nvLU85Snnqc8FU95Kp7yVDzl6XjK0/GUp+MpT8dTno6nPD2e8vR4yrPjKc+Opzw7nvLseMqz4ynPHk957vGU5x5PeS7s9APK++sCdNF+CwAAAABJRU5ErkJggg=="
        },
        503: function(e, n, t) {
            e.exports = t.p + "static/media/arrow-right.d285b6cf.svg"
        },
        504: function(e, n, t) {
            e.exports = t.p + "static/media/banner.b2d7d038.jpg"
        },
        505: function(e, n, t) {
            e.exports = t.p + "static/media/circle-grey.ed2a1dad.svg"
        },
        506: function(e, n, t) {
            e.exports = t.p + "static/media/circle.2d975615.svg"
        },
        507: function(e, n, t) {
            e.exports = t.p + "static/media/dropdown-blue.b20914ec.svg"
        },
        508: function(e, n, t) {
            e.exports = t.p + "static/media/dropdown.7d32d2fa.svg"
        },
        509: function(e, n, t) {
            e.exports = t.p + "static/media/dropup-blue.b96d70e1.svg"
        },
        510: function(e, n) {
            e.exports = "data:image/png;base64,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"
        },
        511: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAACQ1BMVEUAAAD///////+qqqq/v7+ZmcyqqqqSkrafn7+OqqqLoqKVlaqJnbGSkqSWlqWOnKqUlKGMmaaLl6KQkKaPmaOJk6eOl6qJkqSNlaePl6eLk6KPlqWKkqiKkaWNlKGJlqOMk6aJlaKIlKaLkaKLkKaNkqONkqGKlKOMkaWJk6KMkKSLlKKJkqSLlKGIkaOKk6SIkKGKkqOMlKWKkqKLk6OJkaWJkaSJkKOKkqSIk6KKkaOIk6SKkaKIkqOKkKGLkqKJk6OLkaGJk6OLkaSJkqKJkqSKkKKIkaOKkqOJkqOLkKSKkqOJkaGJkaOJkKKKkaOKkaOIkqOJkaKIkqOJkKGKkaKJkKOKkaGJkqKKkaOJkqKJkKKIkaKJkqOIkKGKkKOKkqKKkqKJkaOJkaGIkKKJkaOJkaKKkaGJkqKIkaKJkKKJkKKIkaKJkqGJkaOIkaKJkaKKkKGJkaGJkaKIkKKJkaKJkaKIkaKJkKGJkaGJkKKJkaGIkaKJkKKIkaGJkKKIkaKJkKGIkaKJkaKJkaKJkKGJkKKJkaKIkaKJkaGIkKKJkaKIkKGJkaKIkaKJkKGJkKKJkaGIkKKJkaGJkKKJkKKIkaKJkKGIkaKJkaGJkaKJkKGJkKKIkaGJkKKIkaKIkKKJkaGIkKKJkaKIkKGJkaKIkaKJkKGIkKGJkaGIkKKJkaGIkaKJkKKIkaGIkaKIkaKJkKGIkKGIkaKJkKGIkaKJkKKJkKKIkaGJkaGIkKKJkaGIkKKJkaKIkKGJkaKIkKH+mPsPAAAAwHRSTlMAAQIDBAUGBwgJCwwNDhESExQWFxkaGxwdICEiIyUmJygpKywuLzEyMzQ1Nzg5Ojs8PT4/QEFDRUZHSElKS0xNTk9QUVJUVVZZW1xeX2FjZGZnaGlqa2xtbm9wc3Z3eHp8fn+AgYKEi4yOj5GSk5WWl5ibnJ+ipKWmqaqrrK2ur7CxsrO1tri6u76/wMHCw8TGx8jJy83Oz9DR09TW19jZ29zd3t/g4eLk5ebn6Onq7O7v8PHy8/T29/j5+vv8/f4cqSaEAAAC0ElEQVQYGd3B91/UdQDH8fd1sUKw44CUItGkbJENtMKkJK1Mk9FC0iaR0lIrCIwoWiRCEdiCMiEaZlKG6Hnevf60Pt9132E96mefT13krusdPtTf1VSqf7Ws/eOZs2fmBtpKZBSdxJbqXSOpvKFUEcnX0rgWOgulK/BkupesWuB4UiG3nCDgm6Q0SM7RN4EdCtqYImQqqdgN65u27f8dT4sCVv2FMf14dUHi1s5TGNOlssXv/g7HVvlik0D2mbhsS9/G2C9XwVvYtsj3IEazPPEeIFsjV/wdLJvkGwN65MufBV6W5/KTGBuUU5aBbJUCtgMjymnHWK+cRmBcQfFJaFfO0hRQr5wWYJ9Cljx0hwL6gGrl7Aa6dKGC5ddXFchy1aG5nfK1AIOKWLvnByzH9t6mqLuAYwq56TC+sTqFFaeBBvku6SJsT1whQ8DXcXku+wBbanZiJoXto2IF1WP05csRO4hlsLFIUuHGASzvxhR0EOOTlbI9izG3Vp66WYxOBZVNY2SHbpR0ZQo4UiZfYgI4V62gxCSW9LVSL/BrpYLKfwb6FFLyKZadSmaABxR2P5CtkKeidUNMsYePwuJK7QC+jCliAmiVK28OXpBxc9sKaQDYpagO4H251gFH5PkKWKOo1cC3cj0HnJbnBFCmqFJgXq5hjHK5FoEiReUB5+QoPIOxXa4ZoEpRy4Cf5KjH8plcY0CjohqAcTlexLZJjr3AAUW9DrwixxfY5pfLdjuwkFRY4hSwTo5FyJ4FjtfJEv8FOKCwfcBveXJ8CENtGKmXEjKaMR5R0DaMx+Qq6ego1htYUoOP1urSKSD9hHxtaeD7PIU8ncHxvK5ZwHivRo4VAxinaxVxz4/Y5qV7z2NkRndvrt+8a+Q8RqZJF8h/cgpjVNKdfxD2Z4P+Ue1TPa9Wyrh6hKDRGv2nxs+zOLLj9+l/qWju7h/u726t1EXmb95N5TLDE3BvAAAAAElFTkSuQmCC"
        },
        512: function(e, n) {
            e.exports = "data:image/png;base64,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"
        },
        513: function(e, n, t) {
            e.exports = t.p + "static/media/link.50c67f3c.svg"
        },
        514: function(e, n, t) {
            e.exports = t.p + "static/media/magnifying-glass.67440097.svg"
        },
        515: function(e, n) {
            e.exports = "data:image/png;base64,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"
        },
        516: function(e, n, t) {
            e.exports = t.p + "static/media/menu.4f2c4440.svg"
        },
        517: function(e, n, t) {
            e.exports = t.p + "static/media/plus-blue.e8021e51.svg"
        },
        518: function(e, n, t) {
            e.exports = t.p + "static/media/plus-grey.d8e0be7d.svg"
        },
        519: function(e, n, t) {
            e.exports = t.p + "static/media/question-mark.1ae4d9f4.svg"
        },
        520: function(e, n, t) {
            e.exports = t.p + "static/media/question.a46e8bc1.svg"
        },
        521: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAllBMVEUAAAAuMDMuMDMuMDM0Pj5LS0suMTMxMjYuMDMuMDQ1OTkuMTQvMTQvMjMxMzUzNzcyMjovMDMuMDMuMDMuMDMvMDQvMTQvMDMuMDQvMTQwMTQuMDMvMDMvMDMuMDMuMTMyMjUvMTMvMDMvMDMwNDQxMzgvMTMvMTQvMDMxMTYuMDMuMDMvMDQvMTMwMDUvMjQvMjUuMDM9lWibAAAAMXRSTlMA9fnxCQVtLM1zD6lHPScXFN/Tw7CWgtW/Xk7p5bSajiO4o4cxH9pkVDnj13x2OjVXRBXwcwAAAhtJREFUOMulVOmaojAQDHKKKIKAOF7oeI7HTL3/y23ZiQ75nF33260fkKYrSXV1gvoPDMOB/xe0fg7AWXqveBsHgvUrYo/LjTMyB79jxEkS8+UCoVIFEDD4PDzTA27pXlTKJ6MuUKpNBGA+tHkVBKsFEDF8A8ZVRz7lFpMJ5DkEFeNUk9wV36s2MeIevv8OoifGnEFEjfoi87NFZBjfPOwVk7ud1aLraxf2LeIMmPzcJWbe7FqcH42jT7N2P70TMHoEzaPQA+wFaS1LNOJGTGbdR58WLZafdNfAScZLaIy2JtoFiXc30WXCTO2C+OjAKNk6IJyz8EJtbnQTNmCilyo/4Ft2n0hSj9eUVAZ9mUTLa916ftTLXBY59ZuuHJVBDRy0bK40bLl8UzyWg0VYkz6ARgbfjFGrK3M5h0RKYfdiUxabal2YjsrGSJumYqApOz6vMqrYyTiDeHIjeDsyg+OBWtG/5XLJdRK99FqMLBRx7cBgKe4IreYcg+3krum6E5rTvfepDK1LvmdOi/eCeVS/m6NU2gdcOsK9ntGXrti3OfeeeWKJG7difZttSN6n2UnrI3feUF45nc1NhRcH9eCZWNC+TZiLGSFjv5DSJ8M5n+2tGxcPlIwTfCOwBF2F6ey/dOsC+r85mf+BjaZw3N5AbalB/KMrXjXrRPbVsuvfh8dMSvgjFtBw/RfEYabPy5t6hbiqx9E6VP+MX+rhU82Vyq0/AAAAAElFTkSuQmCC"
        },
        522: function(e, n, t) {
            e.exports = t.p + "static/media/spinner.be00fc4a.svg"
        },
        523: function(e, n, t) {
            e.exports = t.p + "static/media/star.ffa2ffc1.svg"
        },
        524: function(e, n) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADtCAMAAABkkwK9AAAAsVBMVEUAAAAvc70vc70MUaEscbcmbLQvc70vdbwvc70rcLorcrkuc74uc74uc74vdb0eZrEvc70ucr4vdbwvc70vc74ucrouc70vc70uc74udL4uc74vcr0vc70uc70uc70uc74uc74uc74uc70uc70uc70udL4sc7wuc70uc74vc74uc74tc70uc70uc74uc70vc74uc74udb0vdL0vc70vc74uc70ucr0uc70udL4uc70vc73pOQcUAAAAOnRSTlMA/PgDDAb0HPAXEMfo4jkI7XQp5VUU2c+INcL23tQ+MI5kt7G9JSB4akNvLaunnn5aS0iYX6OTy4NRvu2WKwAADfBJREFUeNrs3OmWmjAYgOGPPayKooLigiju+/7d/4U1ba2dNrFVq63RPn85c868k5AAjsDfpqiDdW8289fNkgKvzljsO7EuSSRO954KL03zZraMR6S97sILs/qpix/UV4kFL0rz9q6EP5DdffMlz17F6Ld1ZOhpYL5er3FYuchVDwcmvJTcYluR8QzSmS1f6PSlK/FOx19w7NmrnL45s7HN469JbhipL9CrGMuwjheoJ01TA6Fp2WBbxwtVZ0uRlyvNWK4cCS+ml/eeIeh8LhUWWwev5LQGWQmEY0Z+O483cKZ+JNSEVtSssS/LeCNZpAmtmNF64iDjygldMJ5/hVas5jK0a/jHnM7q0H3qKyyl1B34FRnvpJYOvaz0nCOsGaOBn+p4CamYly9dshYjMwdPRbGy6LC1dbwMqfbCDsHL6PY+GBnWswyxSgd1uKnjpeR429XUaBvreCm7NVyMDBX+LaWUjRrJ5YNK6XEaaEBpwdiVr/g5u5V4hX81xopqFrxFb2rr122l40SFI7NfLcp4Bae68g/NgvlXkzXVMo3Rspe6eB2J7OYGfNBo7QheR6qPe4fIMC01Bw+l5FSrZBp0l5lWHRmvJel131B+Xsh7RR2vJtNRThYFwyzRaOWOhTRRpZElw+hGC781qbg63kIm5ZUBHMY+liW8iVNJW8nc6xomzbZUVdOUi2dnyfzIoLKs63nB0O9tx22XyHg7Kd8eFuCMxaScl/B2slO3x9u9vw6WjW6WGZT5A0tVflxbl/62Y3+wc12XSMi4sdVOSvALhcTOy3gfcp7+6jv7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"
        },
        525: function(e, n, t) {
            e.exports = t.p + "static/media/x.5b8e2186.svg"
        },
        650: function(e, n, t) {
            "use strict";
            t.r(n);
            var a, r = t(43),
                i = (t(372), t(0)),
                o = t.n(i),
                c = t(110),
                u = t.n(c),
                l = t(20),
                s = t(38),
                d = t(32),
                p = t(22),
                m = t(9),
                f = t(1),
                b = t(202),
                v = t(317),
                y = t(164),
                g = t(318),
                h = t(319),
                E = t(5),
                O = t.n(E),
                k = t(10),
                j = t(28),
                x = t(8),
                A = t(12),
                w = t(14),
                C = t(15),
                I = t(320),
                T = (a = {}, Object(m.a)(a, f.a.MAINNET, void 0), Object(m.a)(a, f.a.ROPSTEN, "ropsten"), Object(m.a)(a, f.a.RINKEBY, "rinkeby"), Object(m.a)(a, f.a.KOVAN, "kovan"), a),
                U = function(e) {
                    Object(w.a)(a, e);
                    var n = Object(C.a)(a);

                    function a() {
                        return Object(x.a)(this, a), n.apply(this, arguments)
                    }
                    return Object(A.a)(a, [{
                        key: "activate",
                        value: function() {
                            var e = Object(j.a)(O.a.mark((function e() {
                                var n, a, r, i, o, c, u, l, s, d, p = this;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (this.fortmatic) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 3, t.e(1).then(t.t.bind(null, 658, 7));
                                        case 3:
                                            if (n = e.sent, a = n.default, i = (r = this).apiKey, !((o = r.chainId) in T)) {
                                                e.next = 10;
                                                break
                                            }
                                            this.fortmatic = new a(i, T[o]), e.next = 11;
                                            break;
                                        case 10:
                                            throw new Error("Unsupported network ID: ".concat(o));
                                        case 11:
                                            return c = this.fortmatic.getProvider(), u = new Promise((function(e) {
                                                var n = setInterval((function() {
                                                    c.overlayReady && (clearInterval(n), p.emit("OVERLAY_READY"), e())
                                                }), 200)
                                            })), e.next = 15, Promise.all([c.enable().then((function(e) {
                                                return e[0]
                                            })), u]);
                                        case 15:
                                            return l = e.sent, s = Object(k.a)(l, 1), d = s[0], e.abrupt("return", {
                                                provider: this.fortmatic.getProvider(),
                                                chainId: this.chainId,
                                                account: d
                                            });
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), a
                }(I.a),
                S = t(103),
                R = t(142),
                N = t(62),
                K = t(19),
                M = function(e) {
                    Object(w.a)(t, e);
                    var n = Object(C.a)(t);

                    function t(e, a, r) {
                        var i;
                        return Object(x.a)(this, t), (i = n.call(this, e)).code = a, i.data = r, i
                    }
                    return t
                }(Object(R.a)(Error)),
                B = function e(n, t, a) {
                    var r = this;
                    Object(x.a)(this, e), this.isMetaMask = !1, this.chainId = void 0, this.url = void 0, this.host = void 0, this.path = void 0, this.batchWaitTimeMs = void 0, this.nextId = 1, this.batchTimeoutId = null, this.batch = [], this.clearBatch = Object(j.a)(O.a.mark((function e() {
                        var n, t, a, i, o, c, u, l, s, d, p, m, f, b;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return console.debug("Clearing batch", r.batch), n = r.batch, r.batch = [], r.batchTimeoutId = null, e.prev = 4, e.next = 7, fetch(r.url, {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            accept: "application/json"
                                        },
                                        body: JSON.stringify(n.map((function(e) {
                                            return e.request
                                        })))
                                    });
                                case 7:
                                    t = e.sent, e.next = 14;
                                    break;
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(4), n.forEach((function(e) {
                                        return (0, e.reject)(new Error("Failed to send batch call"))
                                    })), e.abrupt("return");
                                case 14:
                                    if (t.ok) {
                                        e.next = 17;
                                        break
                                    }
                                    return n.forEach((function(e) {
                                        return (0, e.reject)(new M("".concat(t.status, ": ").concat(t.statusText), -32e3))
                                    })), e.abrupt("return");
                                case 17:
                                    return e.prev = 17, e.next = 20, t.json();
                                case 20:
                                    a = e.sent, e.next = 27;
                                    break;
                                case 23:
                                    return e.prev = 23, e.t1 = e.catch(17), n.forEach((function(e) {
                                        return (0, e.reject)(new Error("Failed to parse JSON response"))
                                    })), e.abrupt("return");
                                case 27:
                                    i = n.reduce((function(e, n) {
                                        return e[n.request.id] = n, e
                                    }), {}), o = Object(S.a)(a);
                                    try {
                                        for (o.s(); !(c = o.n()).done;) u = c.value, l = i[u.id], s = l.resolve, d = l.reject, p = l.request.method, s && d && ("error" in u ? d(new M(null === u || void 0 === u || null === (m = u.error) || void 0 === m ? void 0 : m.message, null === u || void 0 === u || null === (f = u.error) || void 0 === f ? void 0 : f.code, null === u || void 0 === u || null === (b = u.error) || void 0 === b ? void 0 : b.data)) : "result" in u ? s(u.result) : d(new M("Received unexpected JSON-RPC response to ".concat(p, " request."), -32e3, u)))
                                    } catch (v) {
                                        o.e(v)
                                    } finally {
                                        o.f()
                                    }
                                    case 30:
                                    case "end":
                                        return e.stop()
                            }
                        }), e, null, [
                            [4, 10],
                            [17, 23]
                        ])
                    }))), this.sendAsync = function(e, n) {
                        r.request(e.method, e.params).then((function(t) {
                            return n(null, {
                                jsonrpc: "2.0",
                                id: e.id,
                                result: t
                            })
                        })).catch((function(e) {
                            return n(e, null)
                        }))
                    }, this.request = function() {
                        var e = Object(j.a)(O.a.mark((function e(n, t) {
                            var a, i;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("string" === typeof n) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", r.request(n.method, n.params));
                                    case 2:
                                        if ("eth_chainId" !== n) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", "0x".concat(r.chainId.toString(16)));
                                    case 4:
                                        return i = new Promise((function(e, a) {
                                            r.batch.push({
                                                request: {
                                                    jsonrpc: "2.0",
                                                    id: r.nextId++,
                                                    method: n,
                                                    params: t
                                                },
                                                resolve: e,
                                                reject: a
                                            })
                                        })), r.batchTimeoutId = null !== (a = r.batchTimeoutId) && void 0 !== a ? a : setTimeout(r.clearBatch, r.batchWaitTimeMs), e.abrupt("return", i);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n, t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.chainId = n, this.url = t;
                    var i = new URL(t);
                    this.host = i.host, this.path = i.pathname, this.batchWaitTimeMs = null !== a && void 0 !== a ? a : 50
                },
                L = function(e) {
                    Object(w.a)(t, e);
                    var n = Object(C.a)(t);

                    function t(e) {
                        var a, r = e.urls,
                            i = e.defaultChainId;
                        return Object(x.a)(this, t), Object(K.a)(i || 1 === Object.keys(r).length, "defaultChainId is a required argument with >1 url"), (a = n.call(this, {
                            supportedChainIds: Object.keys(r).map((function(e) {
                                return Number(e)
                            }))
                        })).providers = void 0, a.currentChainId = void 0, a.currentChainId = i || Number(Object.keys(r)[0]), a.providers = Object.keys(r).reduce((function(e, n) {
                            return e[Number(n)] = new B(Number(n), r[Number(n)]), e
                        }), {}), a
                    }
                    return Object(A.a)(t, [{
                        key: "activate",
                        value: function() {
                            var e = Object(j.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", {
                                                provider: this.providers[this.currentChainId],
                                                chainId: this.currentChainId,
                                                account: null
                                            });
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getProvider",
                        value: function() {
                            var e = Object(j.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.providers[this.currentChainId]);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getChainId",
                        value: function() {
                            var e = Object(j.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.currentChainId);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getAccount",
                        value: function() {
                            var e = Object(j.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", null);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "deactivate",
                        value: function() {}
                    }, {
                        key: "provider",
                        get: function() {
                            return this.providers[this.currentChainId]
                        }
                    }]), t
                }(N.a),
                F = "https://bsc-dataseed.binance.org/",
                W = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://cdn.jsdelivr.net/gh/mdexSwap/bscswap@main",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed.binance.org/"
                }).REACT_APP_FORTMATIC_KEY,
                D = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "https://cdn.jsdelivr.net/gh/mdexSwap/bscswap@main",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed.binance.org/"
                }).REACT_APP_PORTIS_ID,
                q = parseInt(null !== "56" ? "56" : "1");
            var G, J = new L({
                urls: Object(m.a)({}, q, F)
            });
            var z, P, V, Y = new v.a({
                    supportedChainIds: [1, 3, 4, 5, 42, 128, 256, 97, 56]
                }),
                Z = new y.a({
                    rpc: {
                        1: F
                    },
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: !0,
                    pollingInterval: 15e3
                }),
                H = new U({
                    apiKey: null !== W && void 0 !== W ? W : "",
                    chainId: 1
                }),
                Q = new h.a({
                    dAppId: null !== D && void 0 !== D ? D : "",
                    networks: [1]
                }),
                X = new g.a({
                    url: F,
                    appName: "Uniswap",
                    appLogoUrl: "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg"
                }),
                _ = (new Map([
                    [2, "# Uniswap Grants Program v0.1\n\n*co-authored with [Ken Ng](https://twitter.com/nkennethk?lang=en)*\n\n## Summary:\n\n**This post outlines a framework for funding Uniswap ecosystem development with grants from the[ UNI Community Treasury](https://uniswap.org/blog/uni/).** The program starts small\u2014sponsoring hackathons, [for example](https://gov.uniswap.org/c/proposal-discussion/5)\u2014but could grow in significance over time (with renewals approved by governance) to fund core protocol development. Grants administration is a subjective process that cannot be easily automated, and thus we propose a nimble committee of 6 members \u20141 lead and 5 reviewers\u2014to deliver an efficient, predictable process to applicants, such that funding can be administered without having to put each application to a vote. We propose the program start with an initial cap of $750K per quarter and a limit of 2 quarters before renewal\u2014a sum that we feel is appropriate for an MVP relative to the size of the treasury that UNI token holders are entrusted with allocating.\n\n**Purpose:**\n\n**The mission of the UGP is to provide valuable resources to help grow the Uniswap ecosystem.** Through public discourse and inbound applications, the community will get first-hand exposure to identify and respond to the most pressing needs of the ecosystem, as well as the ability to support innovative projects expanding the capabilities of Uniswap. By rewarding talent early with developer incentives, bounties, and infrastructure support, UGP acts as a catalyst for growth and helps to maintain Uniswap as a nexus for DeFi on BSC.\n\n**Quarterly Budget:**\n\n* Max quarterly budget of up to $750k\n* Budget and caps to be assessed every six months\n\n**Grant Allocation Committee:**\n\n* Of 6 committee members: 1 lead and 5 reviewers\n* Each committee has a term of 2 quarters (6 months) after which the program needs to be renewed by UNI governance\n* Committee functions as a 4 of 5 multi-sig\n\n**Committee Members**\n\nWhile the goals and priorities of the grant program will be thoroughly discussed and reviewed by the community through public discourse, **the decision to start UGP by operating as a small committee is to ensure that the application and decision process will be efficient and predictable, so applicants have clear objectives and timely decisions.**\n\nStarting with just six members enables the committee to efficiently fund projects with tight feedback loops and rapid iterations. The purpose of this committee would be to test the hypothesis that the Grants Program can successfully provide value for the UNI ecosystem before scaling the program.\n\n**We suggest the grants program is administered by a single lead. Here we propose Kenneth Ng, a co-author of this post**. Ken has helped grow the Ethereum Foundation Grants Program over the last two years in establishing high level priorities and adapting for the ecosystems needs.\n\n**The other 5 committee members should be thought of as \u201creviewers\u201d \u2014 UNI community members who will keep the grants program functional by ensuring Ken is leading effectively and, of course, not absconding with funds.** Part of the reviewers job is to hold the program accountable for success (defined below) and/or return any excess funds to the UNI treasury. Reviewers are not compensated as part of this proposal as we expect their time commitment to be minimal. Compensation for the lead role is discussed below, as we expect this to be a labor intensive role.\n\n**Program Lead:** [Ken Ng](https://twitter.com/nkennethk?lang=en) (HL Creative Corp)\n*Ecosystem Support Program at the Ethereum Foundation*\n\n1. Reviewer: [Jesse Walden](https://twitter.com/jessewldn) (o/b/o Unofficial LLC dba [Variant Fund](http://twitter.com/variantfund))\n*Founder and Investor at Variant Fund (holds UNI)*\n\n2. Reviewer: [Monet Supply](https://twitter.com/MonetSupply)\n*Risk Analyst at MakerDAO*\n\n3. Reviewer: [Robert Leshner](https://twitter.com/rleshner)\n*Founder and CEO of Compound Finance*\n\n4. Reviewer: [Kain Warwick](https://twitter.com/kaiynne)\n*Founder of Synthetix*\n\n5. Reviewer: [Ashleigh Schap](https://twitter.com/ashleighschap)\n*Growth Lead, Uniswap (Company)*\n\n## Methodology\n\n**1.1 Budget**\n\nThis proposal recommends a max cap of $750K per quarter, with the ability to reevaluate biannually at each epoch (two fiscal quarters). While the UGP Grants Committee will be the decision makers around individual grants, respective budgets, roadmaps, and milestones, any top-level changes to UGP including epochs and max cap, will require full community quorum (4% approval).\n\nThe UGP will be funded by the UNI treasury according to the[ release schedule](https://uniswap.org/blog/uni/) set out by the Uniswap team, whereby 43% of the UNI treasury is released over a four-year timeline. In Year 1 this will total to 172,000,000 UNI (~$344M as of writing).\n\nTaking into consideration the current landscape of ecosystem funding across Ethereum, the community would be hard-pressed to allocate even 5% of Year 1\u2019s treasury. For context Gitcoin CLR Round 7 distributed $725k ($450k in matched) across 857 projects and YTD, Moloch has granted just under $200k but in contrast, the EF has committed to somewhere in the 8 figure range.\n\n**1.2 Committee Compensation**\n\nOperating a successful grants program takes considerable time and effort. Take, for instance, the EF Ecosystem Support Program, which has awarded grants since 2018, consists of an internal team at the Foundation as well as an ever increasing roster of community advisors in order to keep expanding and adapting to best serve the needs of the Ethereum ecosystem. While the structure of the allocation committee has six members, we propose that only the lead will be remunerated for their work in establishing the initial processes, vetting applications, and managing the program overall as this role is expected to be time consuming if the program is to be succesful. We propose that the other committee members be unpaid UNI ecosystem stakeholders who have an interest in seeing the protocol ecosystem continue to operate and grow.\n\n**We propose the lead be compensated 25 UNI/hr (approximately $100 USD at time of this writing) capped at 30 hours/week. This compensation, along with the quarterly budget, will be allocated to the UGP multisig from the UNI treasury**. In keeping with the committee\u2019s commitment to the community, hours and duties will be logged publicly and transparently .\n\n**2.1 Priorities**\n\nInitially, the program aims to start narrow in scope, funding peripheral ecosystem initiatives, such as targeted bounties, hackathon sponsorships, and other low-stakes means of building out the Uniswap developer ecosystem. Over time, if the program proves effective, the grant allocations can grow in scope to include, for example, improved frontends, trading interfaces, and eventually, core protocol development.\n\n![|624x199](upload://vNP0APCOjiwQMurCmYI47cTLklc.png)\n\nWith the initial priorities in mind, some effective measures for quick successes might look like:\n\n* Total number of projects funded\n* Quarterly increase in applications\n* Project engagement post-event/funding\n* Overall community engagement/sentiment\n\n**2.2 Timeline**\n\nIn keeping with the fast pace of the UNI ecosystem, we organize time in epochs, or two calendar quarters. Each epoch will see two funding rounds, one per quarter, after which the community can review and create proposals to improve or revamp the program as they deem fit.\n\n**![|624x245](upload://n56TSh5X3mt4TSqVVMFhbnZM0eM.png)**\n\n**Rolling Wave 1 & 2 Applications**\n\n* Starting in Q1 2021, UGP will start accepting applications for events looking for support in the form of bounties or prizes that in parallel can be proactively sourced. During these first two waves of funding projects, the allocation committee lead can begin laying out guardrails for continued funding\n\n* Considering the immediate feedback loops for the first epoch, we expect these allocation decisions to be discussed and reviewed by the larger community. Should this not be of value, the community can submit a formal governance proposal to change any piece of UGP that was not effective\n\n**Wave 3 & Beyond**\n\n* Beginning with Wave 3, there should have been enough time with impactful projects funded to be considered for follow-on funding, should it make sense. In the same vein, projects within scope will be expanded to also include those working on integrations and and other key components.\n\n* Beyond the second epoch, as the community helps to review and help adapt UGP to be most effective, the scope will continue to grow in order to accommodate the state of the ecosystem including that of core protocol improvements\n\n## Conclusion:\n\n**If this proposal is successfully approved, UGP will start accepting applications on a rolling basis beginning at the start of 2021.** With the phases and priorities laid out above, UGP will aim to make a significant impact by catalyzing growth and innovation in the UNI ecosystem.\n\n**This program is meant to be the simplest possible MVP of a Uniswap Ecosystem Grants initiative.** While the multi-sig committee comes with trust assumptions about the members, our hope is the community will approve this limited engagement to get the ball rolling in an efficient structure. **After the first epoch (2 fiscal quarters) the burden of proof will be on UGP to show empirical evidence that the program is worth continuing in its existing form and will submit to governance to renew treasury funding.**\n\nIf this program proves successful, we hope it will inspire others to follow suit and create their own funding committees for allocating treasury capital\u2014ideally with different specializations.\n"]
                ]), "0x7DAe51BD3E3376B8c7c4900E9107f12Be3AF1bA8"),
                $ = "0x782395303692aBeD877d2737Aa7982345eB44c11",
                ee = "0x55d398326f99059ff775485246999027b3197955",
                ne = "0x9C65AB58d8d978DB963e63f2bfB7121627e3a739",
                te = "https://gateway.mdex.cc/v2",
                ae = (new f.k(f.a.MAINNET, "0xc00e94Cb662C3520282E6f5717214004A7f26888", 18, "COMP", "Compound"), new f.k(f.a.MAINNET, "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", 18, "MKR", "Maker"), new f.k(f.a.MAINNET, "0xD46bA6D942050d489DBd938a2C909A5d5039A161", 9, "AMPL", "Ampleforth"), new f.k(f.a.MAINNET, "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599", 8, "WBTC", "Wrapped BTC")),
                re = new f.k(f.a.BSC, "0x2170ed0880ac9a755fd29b2688956bd959f933f8", 18, "ETH", "Binance-Peg Ethereum Token"),
                ie = (new f.k(f.a.BSC, "0x250632378e573c6be1ac2f97fcdf00515d0aa91b", 18, "BETH", "Binance-Peg BETH Ethereum Token"), new f.k(f.a.BSC, ee, 18, "USDT", "Binance-Peg BUSD-T")),
                oe = new f.k(f.a.BSC, "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", 18, "USDC", "Binance-Peg USD Coin"),
                ce = new f.k(f.a.BSC, "0xe9e7cea3dedca5984780bafc599bd69add087d56", 18, "BUSD", "Binance-Peg BUSD Coin"),
                ue = new f.k(f.a.BSC, "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", 18, "DAI", "Binance-Peg DAI Coin"),
                le = new f.k(f.a.BSC, "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", 18, "BTCB", "Binance-Peg BTCB Coin"),
                se = new f.k(f.a.BSC, "0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094", 18, "PAX", "Binance-Peg Paxos Coin"),
                de = new f.k(f.a.BSC, ne, 18, "MDX", "Binance-Peg MDX Coin"),
                pe = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
                me = (z = {}, Object(m.a)(z, f.a.MAINNET, new f.k(f.a.MAINNET, pe, 18, "UNI", "Uniswap")), Object(m.a)(z, f.a.RINKEBY, new f.k(f.a.RINKEBY, pe, 18, "UNI", "Uniswap")), Object(m.a)(z, f.a.ROPSTEN, new f.k(f.a.ROPSTEN, pe, 18, "UNI", "Uniswap")), Object(m.a)(z, f.a.G\u00d6RLI, new f.k(f.a.G\u00d6RLI, pe, 18, "UNI", "Uniswap")), Object(m.a)(z, f.a.KOVAN, new f.k(f.a.KOVAN, pe, 18, "UNI", "Uniswap")), Object(m.a)(z, f.a.TESTHECO, new f.k(f.a.TESTHECO, pe, 18, "UNI", "Uniswap")), Object(m.a)(z, f.a.HECO, new f.k(f.a.HECO, pe, 18, "UNI", "Uniswap")), Object(m.a)(z, f.a.TESTBSC, new f.k(f.a.HECO, pe, 18, "UNI", "Uniswap")), Object(m.a)(z, f.a.BSC, new f.k(f.a.HECO, pe, 18, "UNI", "Uniswap")), z),
                fe = (P = {}, Object(m.a)(P, "0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F", "Governance"), Object(m.a)(P, "0x1a9C8182C09F50C8318d769245beA52c32BE35BC", "Timelock"), Object(m.a)({}, f.a.MAINNET, "0x090D4613473dEE047c3f2706764f49E0821D256e")),
                be = (V = {}, Object(m.a)(V, f.a.MAINNET, [f.o[f.a.MAINNET]]), Object(m.a)(V, f.a.ROPSTEN, [f.o[f.a.ROPSTEN]]), Object(m.a)(V, f.a.RINKEBY, [f.o[f.a.RINKEBY]]), Object(m.a)(V, f.a.G\u00d6RLI, [f.o[f.a.G\u00d6RLI]]), Object(m.a)(V, f.a.KOVAN, [f.o[f.a.KOVAN]]), Object(m.a)(V, f.a.TESTHECO, [f.o[f.a.TESTHECO]]), Object(m.a)(V, f.a.HECO, [f.o[f.a.HECO]]), Object(m.a)(V, f.a.BSC, [f.o[f.a.BSC]]), Object(m.a)(V, f.a.TESTBSC, [f.o[f.a.TESTBSC]]), V),
                ve = Object(p.a)(Object(p.a)({}, be), {}, Object(m.a)({}, f.a.BSC, [].concat(Object(d.a)(be[f.a.BSC]), [re, le, ie, oe, ce, ue, se, de]))),
                ye = Object(m.a)({}, f.a.BSC, {}),
                ge = Object(p.a)(Object(p.a)({}, be), {}, Object(m.a)({}, f.a.BSC, [].concat(Object(d.a)(be[f.a.BSC]), [re, le, ie, oe, ce, ue, se, de]))),
                he = Object(p.a)(Object(p.a)({}, be), {}, Object(m.a)({}, f.a.BSC, [].concat(Object(d.a)(be[f.a.BSC]), [re, le, ie, oe, ce, ue, se, de]))),
                Ee = Object(m.a)({}, f.a.HECO, []),
                Oe = {
                    INJECTED: {
                        connector: Y,
                        name: "Injected",
                        iconName: "arrow-right.svg",
                        description: "Injected web3 provider.",
                        href: null,
                        color: "#010101",
                        primary: !0
                    },
                    METAMASK: {
                        connector: Y,
                        name: "MetaMask",
                        iconName: "metamask.png",
                        description: "Easy-to-use browser extension.",
                        href: null,
                        color: "#E8831D"
                    },
                    WALLET_CONNECT: {
                        connector: Z,
                        name: "WalletConnect",
                        iconName: "walletConnectIcon.svg",
                        description: "Connect to Trust Wallet, Rainbow Wallet and more...",
                        href: null,
                        color: "#4196FC",
                        mobile: !0
                    },
                    WALLET_LINK: {
                        connector: X,
                        name: "Coinbase Wallet",
                        iconName: "coinbaseWalletIcon.svg",
                        description: "Use Coinbase Wallet app on mobile device",
                        href: null,
                        color: "#315CF5"
                    },
                    COINBASE_LINK: {
                        name: "Open in Coinbase Wallet",
                        iconName: "coinbaseWalletIcon.svg",
                        description: "Open in Coinbase Wallet app.",
                        href: "https://go.cb-w.com/mtUDhEZPy1",
                        color: "#315CF5",
                        mobile: !0,
                        mobileOnly: !0
                    },
                    FORTMATIC: {
                        connector: H,
                        name: "Fortmatic",
                        iconName: "fortmaticIcon.png",
                        description: "Login using Fortmatic hosted wallet",
                        href: null,
                        color: "#6748FF",
                        mobile: !0
                    },
                    Portis: {
                        connector: Q,
                        name: "Portis",
                        iconName: "portisIcon.png",
                        description: "Login using Portis hosted wallet",
                        href: null,
                        color: "#4A6C9B",
                        mobile: !0
                    }
                },
                ke = (f.e.BigInt(604800), f.e.BigInt(0)),
                je = new f.g(f.e.BigInt(1), f.e.BigInt(1e4)),
                xe = f.e.BigInt(1e4),
                Ae = new f.g(f.e.BigInt(100), xe),
                we = new f.g(f.e.BigInt(300), xe),
                Ce = new f.g(f.e.BigInt(500), xe),
                Ie = new f.g(f.e.BigInt(1e3), xe),
                Te = new f.g(f.e.BigInt(1500), xe),
                Ue = f.e.exponentiate(f.e.BigInt(10), f.e.BigInt(16)),
                Se = (new f.g(f.e.BigInt(75), f.e.BigInt(1e4)), ["0x7F367cC41522cE07553e823bf3be79A889DEbe1B", "0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b", "0x901bb9583b24D97e995513C6778dc6888AB6870e", "0xA7e5d5A720f06526557c513402f2e6B5fA20b008"]),
                Re = t(13);

            function Ne() {
                var e = Object(r.d)(),
                    n = Object(r.d)("NETWORK");
                return e.active ? e : n
            }

            function Ke(e) {
                var n = e.children,
                    t = Ne().account;
                return Object(i.useMemo)((function() {
                    return Boolean(t && -1 !== Se.indexOf(t))
                }), [t]) ? o.a.createElement("div", null, "Blocked address") : o.a.createElement(o.a.Fragment, null, n)
            }
            var Me = t(81),
                Be = t(24),
                Le = t(324),
                Fe = t.n(Le),
                We = t(325),
                De = t.n(We);
            Me.a.use(Fe.a).use(De.a).use(Be.a).init({
                backend: {
                    loadPath: "./locales/{{lng}}.json"
                },
                react: {
                    useSuspense: !0
                },
                fallbackLng: "en",
                preload: ["en"],
                keySeparator: !1,
                interpolation: {
                    escapeValue: !1
                }
            });
            Me.a;
            var qe = t(2),
                Ge = t(42),
                Je = t(3),
                ze = t(36),
                Pe = t(87),
                Ve = t(245),
                Ye = (t(419), t(25)),
                Ze = t(326);

            function He() {
                var e = Object(qe.a)(["\n          width: 92vw;\n          border-radius: 10px;\n          // border-bottom-left-radius: 0;\n          // border-bottom-right-radius: 0;\n        "]);
                return He = function() {
                    return e
                }, e
            }

            function Qe() {
                var e = Object(qe.a)(["\n      width:  85vw;\n      ", "\n    "]);
                return Qe = function() {
                    return e
                }, e
            }

            function Xe() {
                var e = Object(qe.a)(["\n      width: 65vw;\n      margin: 0;\n    "]);
                return Xe = function() {
                    return e
                }, e
            }

            function _e() {
                var e = Object(qe.a)(["\n        min-height: ", "vh;\n      "]);
                return _e = function() {
                    return e
                }, e
            }

            function $e() {
                var e = Object(qe.a)(["\n        max-height: ", "vh;\n      "]);
                return $e = function() {
                    return e
                }, e
            }

            function en() {
                var e = Object(qe.a)(["\n  overflow-y: ", ";\n\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n    padding: 0px;\n    width: 50vw;\n    overflow-y: ", ";\n    overflow-x: hidden;\n\n    align-self: center;\n\n    max-width: 468px;\n    ", "\n    ", "\n    display: flex;\n    border-radius: 10px;\n    ", "\n    ", "\n  }\n"]);
                return en = function() {
                    return e
                }, e
            }

            function nn() {
                var e = Object(qe.a)(["\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: ", ";\n  }\n"]);
                return nn = function() {
                    return e
                }, e
            }
            var tn = Object(Pe.a)(Ve.b),
                an = Object(Je.default)(tn)(nn(), (function(e) {
                    return e.theme.modalBG
                })),
                rn = Object(Pe.a)(Ve.a),
                on = Object(Je.default)((function(e) {
                    e.minHeight, e.maxHeight, e.mobile, e.isOpen;
                    var n = Object(ze.a)(e, ["minHeight", "maxHeight", "mobile", "isOpen"]);
                    return o.a.createElement(rn, n)
                })).attrs({
                    "aria-label": "dialog"
                })(en(), (function(e) {
                    return e.mobile ? "scroll" : "hidden"
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.d)(.95, n.shadow1)
                }), (function(e) {
                    return e.mobile ? "scroll" : "hidden"
                }), (function(e) {
                    var n = e.maxHeight;
                    return n && Object(Je.css)($e(), n)
                }), (function(e) {
                    var n = e.minHeight;
                    return n && Object(Je.css)(_e(), n)
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Xe())
                }), (function(e) {
                    var n = e.theme,
                        t = e.mobile;
                    return n.mediaWidth.upToSmall(Qe(), t && Object(Je.css)(He()))
                }));

            function cn(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    a = e.minHeight,
                    r = void 0 !== a && a,
                    i = e.maxHeight,
                    c = void 0 === i ? 90 : i,
                    u = e.initialFocusRef,
                    l = e.children,
                    s = Object(Pe.c)(n, null, {
                        config: {
                            duration: 200
                        },
                        from: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        }
                    }),
                    d = Object(Pe.b)((function() {
                        return {
                            y: 0,
                            config: {
                                mass: 1,
                                tension: 210,
                                friction: 20
                            }
                        }
                    })),
                    m = Object(k.a)(d, 2),
                    f = m[0].y,
                    b = m[1],
                    v = Object(Ze.a)({
                        onDrag: function(e) {
                            b({
                                y: e.down ? e.movement[1] : 0
                            }), (e.movement[1] > 300 || e.velocity > 3 && e.direction[1] > 0) && t()
                        }
                    });
                return o.a.createElement(o.a.Fragment, null, s.map((function(e) {
                    var n = e.item,
                        a = e.key,
                        i = e.props;
                    return n && o.a.createElement(an, {
                        key: a,
                        style: i,
                        onDismiss: t,
                        initialFocusRef: u
                    }, o.a.createElement(on, Object.assign({}, Re.isMobile ? Object(p.a)(Object(p.a)({}, v()), {}, {
                        style: {
                            transform: f.interpolate((function(e) {
                                return "translateY(".concat(e > 0 ? e : 0, "px)")
                            }))
                        }
                    }) : {}, {
                        "aria-label": "dialog content",
                        minHeight: r,
                        maxHeight: c,
                        mobile: Re.isMobile
                    }), !u && Re.isMobile ? o.a.createElement("div", {
                        tabIndex: 1
                    }) : null, l))
                })))
            }

            function un() {
                var e = Object(qe.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"]);
                return un = function() {
                    return e
                }, e
            }

            function ln() {
                var e = Object(qe.a)(["\n  width: 100%;\n  align-items: center;\n"]);
                return ln = function() {
                    return e
                }, e
            }

            function sn() {
                var e = Object(qe.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);
                return sn = function() {
                    return e
                }, e
            }
            var dn = Je.default.div(sn()),
                pn = Object(Je.default)(dn)(ln()),
                mn = Je.default.div(un(), (function(e) {
                    var n = e.gap;
                    return ("sm" === n ? "8px" : "md" === n && "12px") || "lg" === n && "24px" || n
                }), (function(e) {
                    var n = e.justify;
                    return n && n
                })),
                fn = dn;

            function bn() {
                var e = Object(qe.a)(["\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  height: 1px;\n"]);
                return bn = function() {
                    return e
                }, e
            }

            function vn() {
                var e = Object(qe.a)(["\n  padding: 1rem;\n  z-index: 1;\n  opacity: ", ";\n"]);
                return vn = function() {
                    return e
                }, e
            }

            function yn() {
                var e = Object(qe.a)(["\n  background-size: cover;\n  mix-blend-mode: overlay;\n  border-radius: 12px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.15;\n  position: absolute;\n  top: 0;\n  left: 0;\n  user-select: none;\n"]);
                return yn = function() {
                    return e
                }, e
            }

            function gn() {
                var e = Object(qe.a)(["\n  width: 1200px;\n  height: 1200px;\n  position: absolute;\n  border-radius: 12px;\n  top: -300px;\n  left: -300px;\n  opacity: 0.4;\n  user-select: none;\n\n  ", "\n"]);
                return gn = function() {
                    return e
                }, e
            }

            function hn() {
                var e = Object(qe.a)(["\n  width: 1000px;\n  height: 600px;\n  position: absolute;\n  border-radius: 12px;\n  opacity: 0.4;\n  top: -100px;\n  left: -100px;\n  transform: rotate(-15deg);\n  user-select: none;\n\n  ", "\n"]);
                return hn = function() {
                    return e
                }, e
            }

            function En() {
                var e = Object(qe.a)(["\n  border-radius: 12px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n"]);
                return En = function() {
                    return e
                }, e
            }

            function On() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px 12px;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 20px;\n  width: fit-content;\n  justify-self: flex-end;\n"]);
                return On = function() {
                    return e
                }, e
            }
            Je.default.div(On());
            var kn = Object(Je.default)(mn)(En()),
                jn = Je.default.span(hn(), (function(e) {
                    return e.desaturate && "filter: saturate(0)"
                })),
                xn = Je.default.span(gn(), (function(e) {
                    return e.desaturate && "filter: saturate(0)"
                })),
                An = Je.default.span(yn()),
                wn = Object(Je.default)(mn)(vn(), (function(e) {
                    return e.disabled && "0.4"
                })),
                Cn = Je.default.div(bn()),
                In = t(115);

            function Tn() {
                var e = Object(qe.a)(["\n  width: fit-content;\n  margin: ", ";\n"]);
                return Tn = function() {
                    return e
                }, e
            }

            function Un() {
                var e = Object(qe.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"]);
                return Un = function() {
                    return e
                }, e
            }

            function Sn() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);
                return Sn = function() {
                    return e
                }, e
            }

            function Rn() {
                var e = Object(qe.a)(["\n  justify-content: space-between;\n"]);
                return Rn = function() {
                    return e
                }, e
            }

            function Nn() {
                var e = Object(qe.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]);
                return Nn = function() {
                    return e
                }, e
            }
            var Kn, Mn = Object(Je.default)(In.Box)(Nn(), (function(e) {
                    var n = e.align;
                    return n || "center"
                }), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.borderRadius
                })),
                Bn = Object(Je.default)(Mn)(Rn()),
                Ln = Je.default.div(Sn()),
                Fn = Object(Je.default)(Mn)(Un(), (function(e) {
                    var n = e.gap;
                    return n && "-".concat(n)
                }), (function(e) {
                    var n = e.justify;
                    return n && n
                }), (function(e) {
                    return e.gap
                })),
                Wn = Object(Je.default)(Mn)(Tn(), (function(e) {
                    var n = e.gap;
                    return n && "-".concat(n)
                })),
                Dn = Mn,
                qn = t(157),
                Gn = t.n(qn),
                Jn = t(179),
                zn = function(e) {
                    Object(w.a)(t, e);
                    var n = Object(C.a)(t);

                    function t(e, a) {
                        var r;
                        return Object(x.a)(this, t), (r = n.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0, r.tags = void 0, r.tokenInfo = e, r.tags = a, r
                    }
                    return Object(A.a)(t, [{
                        key: "logoURI",
                        get: function() {
                            return this.tokenInfo.logoURI
                        }
                    }]), t
                }(f.k),
                Pn = (Kn = {}, Object(m.a)(Kn, f.a.KOVAN, {}), Object(m.a)(Kn, f.a.RINKEBY, {}), Object(m.a)(Kn, f.a.ROPSTEN, {}), Object(m.a)(Kn, f.a.G\u00d6RLI, {}), Object(m.a)(Kn, f.a.MAINNET, {}), Object(m.a)(Kn, f.a.TESTHECO, {}), Object(m.a)(Kn, f.a.HECO, {}), Object(m.a)(Kn, f.a.TESTBSC, {}), Object(m.a)(Kn, f.a.BSC, {}), Kn),
                Vn = "undefined" !== typeof WeakMap ? new WeakMap : null;

            function Yn(e) {
                var n = Object(l.d)((function(e) {
                    return e.lists.byUrl
                }));
                return Object(i.useMemo)((function() {
                    var t;
                    if (!e) return Pn;
                    var a = null === (t = n[e]) || void 0 === t ? void 0 : t.current;
                    if (!a) return Pn;
                    try {
                        return function(e) {
                            var n = null === Vn || void 0 === Vn ? void 0 : Vn.get(e);
                            if (n) return n;
                            var t = e.tokens.reduce((function(n, t) {
                                var a, r, i, o = null !== (a = null === (r = t.tags) || void 0 === r || null === (i = r.map((function(n) {
                                        var t;
                                        if (null === (t = e.tags) || void 0 === t ? void 0 : t[n]) return Object(p.a)(Object(p.a)({}, e.tags[n]), {}, {
                                            id: n
                                        })
                                    }))) || void 0 === i ? void 0 : i.filter((function(e) {
                                        return Boolean(e)
                                    }))) && void 0 !== a ? a : [],
                                    c = new zn(t, o);
                                if (void 0 !== n[c.chainId][c.address]) throw Error("Duplicate tokens.");
                                return Object(p.a)(Object(p.a)({}, n), {}, Object(m.a)({}, c.chainId, Object(p.a)(Object(p.a)({}, n[c.chainId]), {}, Object(m.a)({}, c.address, c))))
                            }), Object(p.a)({}, Pn));
                            return null === Vn || void 0 === Vn || Vn.set(e, t), t
                        }(a)
                    } catch (r) {
                        return console.error("Could not show token list due to error", r), Pn
                    }
                }), [n, e])
            }

            function Zn() {
                return Object(l.d)((function(e) {
                    return e.lists.selectedListUrl
                }))
            }

            function Hn() {
                return Yn(Zn())
            }
            var Qn, Xn = t(21);
            ! function(e) {
                e[e.WALLET = 0] = "WALLET", e[e.SETTINGS = 1] = "SETTINGS", e[e.SELF_CLAIM = 2] = "SELF_CLAIM", e[e.ADDRESS_CLAIM = 3] = "ADDRESS_CLAIM", e[e.CLAIM_POPUP = 4] = "CLAIM_POPUP", e[e.MENU = 5] = "MENU", e[e.DELEGATE = 6] = "DELEGATE", e[e.VOTE = 7] = "VOTE"
            }(Qn || (Qn = {}));
            var _n = Object(Xn.b)("application/updateBlockNumber"),
                $n = Object(Xn.b)("application/setOpenModal"),
                et = Object(Xn.b)("application/addPopup"),
                nt = Object(Xn.b)("application/removePopup");

            function tt() {
                var e = Ne().chainId;
                return Object(l.d)((function(n) {
                    return n.application.blockNumber[null !== e && void 0 !== e ? e : -1]
                }))
            }

            function at(e) {
                return Object(l.d)((function(e) {
                    return e.application.openModal
                })) === e
            }

            function rt(e) {
                var n = at(e),
                    t = Object(l.c)();
                return Object(i.useCallback)((function() {
                    return t($n(n ? null : e))
                }), [t, e, n])
            }

            function it() {
                return rt(Qn.WALLET)
            }

            function ot() {
                var e = Object(l.c)();
                return Object(i.useCallback)((function(n) {
                    e(nt({
                        key: n
                    }))
                }), [e])
            }
            var ct = /^0x[a-fA-F0-9]{40}$/,
                ut = /^0x[a-f0-9]*$/;

            function lt(e) {
                if (!ct.test(e.address)) throw new Error("Invalid address: ".concat(e.address));
                if (!ut.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData));
                return "".concat(e.address, "-").concat(e.callData)
            }

            function st(e) {
                var n = e.split("-");
                if (2 !== n.length) throw new Error("Invalid call key: ".concat(e));
                return {
                    address: n[0],
                    callData: n[1]
                }
            }
            var dt = Object(Xn.b)("multicall/addMulticallListeners"),
                pt = Object(Xn.b)("multicall/removeMulticallListeners"),
                mt = Object(Xn.b)("multicall/fetchingMulticallResults"),
                ft = Object(Xn.b)("multicall/errorFetchingMulticallResults"),
                bt = Object(Xn.b)("multicall/updateMulticallResults");

            function vt(e) {
                return -1 !== ["string", "number"].indexOf(typeof e)
            }

            function yt(e) {
                return void 0 === e || Array.isArray(e) && e.every((function(e) {
                    return vt(e) || Array.isArray(e) && e.every(vt)
                }))
            }
            var gt = {
                    valid: !1,
                    blockNumber: void 0,
                    data: void 0
                },
                ht = {
                    blocksPerFetch: 1 / 0
                };

            function Et(e, n) {
                var t = Ne().chainId,
                    a = Object(l.d)((function(e) {
                        return e.multicall.callResults
                    })),
                    r = Object(l.c)(),
                    o = Object(i.useMemo)((function() {
                        var n, t, a;
                        return JSON.stringify(null !== (n = null === e || void 0 === e || null === (t = e.filter((function(e) {
                            return Boolean(e)
                        }))) || void 0 === t || null === (a = t.map(lt)) || void 0 === a ? void 0 : a.sort()) && void 0 !== n ? n : [])
                    }), [e]);
                return Object(i.useEffect)((function() {
                    var e = JSON.parse(o);
                    if (t && 0 !== e.length) {
                        var a = e.map((function(e) {
                            return st(e)
                        }));
                        return r(dt({
                                chainId: t,
                                calls: a,
                                options: n
                            })),
                            function() {
                                r(pt({
                                    chainId: t,
                                    calls: a,
                                    options: n
                                }))
                            }
                    }
                }), [t, r, n, o]), Object(i.useMemo)((function() {
                    return e.map((function(e) {
                        var n;
                        if (!t || !e) return gt;
                        var r, i = null === (n = a[t]) || void 0 === n ? void 0 : n[lt(e)];
                        return (null === i || void 0 === i ? void 0 : i.data) && "0x" !== (null === i || void 0 === i ? void 0 : i.data) && (r = i.data), {
                            valid: !0,
                            data: r,
                            blockNumber: null === i || void 0 === i ? void 0 : i.blockNumber
                        }
                    }))
                }), [a, e, t])
            }
            var Ot = {
                    valid: !1,
                    result: void 0,
                    loading: !1,
                    syncing: !1,
                    error: !1
                },
                kt = {
                    valid: !0,
                    result: void 0,
                    loading: !0,
                    syncing: !0,
                    error: !1
                };

            function jt(e, n, t, a) {
                if (!e) return Ot;
                var r = e.valid,
                    i = e.data,
                    o = e.blockNumber;
                if (!r) return Ot;
                if (r && !o) return kt;
                if (!n || !t || !a) return kt;
                var c = i && i.length > 2,
                    u = (null !== o && void 0 !== o ? o : 0) < a,
                    l = void 0;
                if (c && i) try {
                    l = n.decodeFunctionResult(t, i)
                } catch (s) {
                    return console.debug("Result data parsing failed", t, i), {
                        valid: !0,
                        loading: !1,
                        error: !0,
                        syncing: u,
                        result: l
                    }
                }
                return {
                    valid: !0,
                    loading: !1,
                    syncing: u,
                    result: l,
                    error: !c
                }
            }

            function xt(e, n, t, a) {
                var r = Object(i.useMemo)((function() {
                        var t;
                        return null === e || void 0 === e || null === (t = e.interface) || void 0 === t ? void 0 : t.getFunction(n)
                    }), [e, n]),
                    o = Et(Object(i.useMemo)((function() {
                        return e && r && t && t.length > 0 ? t.map((function(n) {
                            return {
                                address: e.address,
                                callData: e.interface.encodeFunctionData(r, n)
                            }
                        })) : []
                    }), [t, e, r]), a),
                    c = tt();
                return Object(i.useMemo)((function() {
                    return o.map((function(n) {
                        return jt(n, null === e || void 0 === e ? void 0 : e.interface, r, c)
                    }))
                }), [r, e, o, c])
            }

            function At(e, n, t, a, r) {
                var o = Object(i.useMemo)((function() {
                        return n.getFunction(t)
                    }), [n, t]),
                    c = Object(i.useMemo)((function() {
                        return o && yt(a) ? n.encodeFunctionData(o, a) : void 0
                    }), [a, n, o]),
                    u = Et(Object(i.useMemo)((function() {
                        return o && e && e.length > 0 && c ? e.map((function(e) {
                            return e && c ? {
                                address: e,
                                callData: c
                            } : void 0
                        })) : []
                    }), [e, c, o]), r),
                    l = tt();
                return Object(i.useMemo)((function() {
                    return u.map((function(e) {
                        return jt(e, n, o, l)
                    }))
                }), [o, u, n, l])
            }

            function wt(e, n, t, a) {
                var r = Object(i.useMemo)((function() {
                        var t;
                        return null === e || void 0 === e || null === (t = e.interface) || void 0 === t ? void 0 : t.getFunction(n)
                    }), [e, n]),
                    o = Et(Object(i.useMemo)((function() {
                        return e && r && yt(t) ? [{
                            address: e.address,
                            callData: e.interface.encodeFunctionData(r, t)
                        }] : []
                    }), [e, r, t]), a)[0],
                    c = tt();
                return Object(i.useMemo)((function() {
                    return jt(o, null === e || void 0 === e ? void 0 : e.interface, r, c)
                }), [o, e, r, c])
            }
            var Ct = t(94),
                It = t(31),
                Tt = t(653),
                Ut = t(26),
                St = t(328);

            function Rt(e) {
                try {
                    return Object(It.getAddress)(e)
                } catch (n) {
                    return !1
                }
            }
            var Nt = {
                1: "",
                3: "ropsten.",
                4: "rinkeby.",
                5: "goerli.",
                42: "kovan.",
                128: "hecoinfo",
                256: "scan-testnet.",
                56: "bscscan",
                97: "testnet.bscscan"
            };

            function Kt(e, n, t) {
                var a = "";
                switch (a = 256 == e ? "https://".concat(Nt[e], "hecochain.com") : 128 == e || 56 == e || 97 == e ? "https://".concat(Nt[e], ".com") : "https://".concat(Nt[e] || Nt[1], "etherscan.io"), t) {
                    case "transaction":
                        return "".concat(a, "/tx/").concat(n);
                    case "token":
                        return "".concat(a, "/token/").concat(n);
                    case "block":
                        return "".concat(a, "/block/").concat(n);
                    case "address":
                    default:
                        return "".concat(a, "/address/").concat(n)
                }
            }

            function Mt(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    t = Rt(e);
                if (!t) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return "".concat(t.substring(0, n + 2), "...").concat(t.substring(42 - n))
            }

            function Bt(e) {
                return e.mul(Ut.a.from(1e4).add(Ut.a.from(2e3))).div(Ut.a.from(1e4))
            }

            function Lt(e, n) {
                if (n < 0 || n > 1e4) throw Error("Unexpected slippage value: ".concat(n));
                return [f.e.divide(f.e.multiply(e.raw, f.e.BigInt(1e4 - n)), f.e.BigInt(1e4)), f.e.divide(f.e.multiply(e.raw, f.e.BigInt(1e4 + n)), f.e.BigInt(1e4))]
            }

            function Ft(e, n, t, a) {
                if (!Rt(e) || e === Tt.a) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return new Ct.a(e, n, function(e, n) {
                    return n ? function(e, n) {
                        return e.getSigner(n).connectUnchecked()
                    }(e, n) : e
                }(t, a))
            }

            function Wt(e, n, t) {
                return Ft(_, St.a, n, t)
            }
            t(329), t(330);
            var Dt, qt, Gt = t(168),
                Jt = t(331),
                zt = t(169),
                Pt = t(265),
                Vt = t(332),
                Yt = t(333),
                Zt = t(122),
                Ht = t(130),
                Qt = t(203),
                Xt = new Zt.b(Ht),
                _t = (new Zt.b(Qt), Xt),
                $t = (t(266), t(334)),
                ea = t(335),
                na = t(267),
                ta = (Dt = {}, Object(m.a)(Dt, f.a.MAINNET, "0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441"), Object(m.a)(Dt, f.a.ROPSTEN, "0x53C43764255c17BD724F74c4eF150724AC50a3ed"), Object(m.a)(Dt, f.a.KOVAN, "0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A"), Object(m.a)(Dt, f.a.RINKEBY, "0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821"), Object(m.a)(Dt, f.a.G\u00d6RLI, "0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e"), Object(m.a)(Dt, f.a.TESTHECO, "0xC3fabD44c0a09Eca9D95e91c62f9C79BC6eADa4B"), Object(m.a)(Dt, f.a.HECO, "0xD2e398b9EFbEcF73Fe8d025f2DA4C66111f11884"), Object(m.a)(Dt, f.a.TESTBSC, "0xD2e398b9EFbEcF73Fe8d025f2DA4C66111f11884"), Object(m.a)(Dt, f.a.BSC, "0xf779142b772f8A1e440f35d33dc073Cd12B17483"), Dt),
                aa = t(204),
                ra = t(205),
                ia = (qt = {}, Object(m.a)(qt, f.a.MAINNET, "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95"), Object(m.a)(qt, f.a.ROPSTEN, "0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351"), Object(m.a)(qt, f.a.RINKEBY, "0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36"), Object(m.a)(qt, f.a.G\u00d6RLI, "0x6Ce570d02D73d4c384b46135E87f8C592A8c86dA"), Object(m.a)(qt, f.a.KOVAN, "0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30"), Object(m.a)(qt, f.a.TESTHECO, "0x79f903f9933d46b3e520873a1f1b1ad16e4d479a"), Object(m.a)(qt, f.a.HECO, "0xa351b6a5ec41b7f841c9982fae9587d7c059feee"), Object(m.a)(qt, f.a.TESTBSC, "0xa351b6a5ec41b7f841c9982fae9587d7c059feee"), Object(m.a)(qt, f.a.BSC, "0xa226CF377478e0fe070F9548D888d5a1CA4ff351"), qt);
            new Zt.b(ra), new Zt.b(aa);

            function oa(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    a = Ne(),
                    r = a.library,
                    o = a.account;
                return Object(i.useMemo)((function() {
                    if (!e || !n || !r) return null;
                    try {
                        return Ft(e, n, r, t && o ? o : void 0)
                    } catch (a) {
                        return console.error("Failed to get contract", a), null
                    }
                }), [e, n, r, t, o])
            }

            function ca() {
                var e = Ne().chainId;
                return oa(e && ia[e], ra, !1)
            }

            function ua(e, n) {
                return oa(e, aa, n)
            }

            function la(e, n) {
                return oa(e, Ht, n)
            }

            function sa(e) {
                var n, t = Ne().chainId;
                if (t) switch (t) {
                    case f.a.MAINNET:
                    case f.a.G\u00d6RLI:
                    case f.a.ROPSTEN:
                    case f.a.RINKEBY:
                        n = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                }
                return oa(n, Yt, e)
            }

            function da(e, n) {
                return oa(e, Vt, n)
            }

            function pa() {
                var e = Ne().chainId;
                return oa(e && ta[e], na, !1)
            }

            function ma() {
                var e = Ne().chainId;
                return oa(e ? fe[e] : void 0, Jt.a, !0)
            }

            function fa() {
                var e = Ne().chainId,
                    n = Ka(),
                    t = Hn();
                return Object(i.useMemo)((function() {
                    return e ? n.reduce((function(e, n) {
                        return e[n.address] = n, e
                    }), Object(p.a)({}, t[1 == e ? 56 : e])) : {}
                }), [e, n, t])
            }
            var ba = /^0x[a-fA-F0-9]{64}$/;

            function va(e, n, t) {
                return e && e.length > 0 ? e : n && ba.test(n) ? Object(Jn.b)(n) : t
            }

            function ya(e) {
                var n = Ne().chainId,
                    t = fa(),
                    a = Rt(e),
                    r = la(a || void 0, !1),
                    o = function(e, n) {
                        return oa(e, Qt, n)
                    }(a || void 0, !1),
                    c = a ? t[a] : void 0,
                    u = wt(c ? void 0 : r, "name", void 0, ht),
                    l = wt(c ? void 0 : o, "name", void 0, ht),
                    s = wt(c ? void 0 : r, "symbol", void 0, ht),
                    d = wt(c ? void 0 : o, "symbol", void 0, ht),
                    p = wt(c ? void 0 : r, "decimals", void 0, ht);
                return Object(i.useMemo)((function() {
                    if (c) return c;
                    if (n && a) {
                        if (p.loading || s.loading || u.loading) return null;
                        var e, t, r, i;
                        if (p.result) return new f.k(n, a, p.result[0], va(null === (e = s.result) || void 0 === e ? void 0 : e[0], null === (t = d.result) || void 0 === t ? void 0 : t[0], "UNKNOWN"), va(null === (r = u.result) || void 0 === r ? void 0 : r[0], null === (i = l.result) || void 0 === i ? void 0 : i[0], "Unknown Token"))
                    }
                }), [a, n, p.loading, p.result, s.loading, s.result, d.result, c, u.loading, u.result, l.result])
            }

            function ga(e) {
                var n = "BNB" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
                    t = ya(n ? void 0 : e);
                return n ? f.d : t
            }
            var ha = Object(Xn.b)("user/updateMatchesDarkMode"),
                Ea = Object(Xn.b)("user/updateUserDarkMode"),
                Oa = Object(Xn.b)("user/updateUserExpertMode"),
                ka = Object(Xn.b)("user/updateUserSlippageTolerance"),
                ja = Object(Xn.b)("user/updateUserDeadline"),
                xa = Object(Xn.b)("user/addSerializedToken"),
                Aa = Object(Xn.b)("user/removeSerializedToken"),
                wa = Object(Xn.b)("user/addSerializedPair"),
                Ca = Object(Xn.b)("user/removeSerializedPair"),
                Ia = Object(Xn.b)("app/toggleURLWarning");

            function Ta(e) {
                return {
                    chainId: e.chainId,
                    address: e.address,
                    decimals: e.decimals,
                    symbol: e.symbol,
                    name: e.name
                }
            }

            function Ua(e) {
                return new f.k(e.chainId, e.address, e.decimals, e.symbol, e.name)
            }

            function Sa() {
                return Object(l.d)((function(e) {
                    return e.user.userExpertMode
                }))
            }

            function Ra() {
                var e = Object(l.c)(),
                    n = Sa(),
                    t = Object(i.useCallback)((function() {
                        e(Oa({
                            userExpertMode: !n
                        }))
                    }), [n, e]);
                return [n, t]
            }

            function Na() {
                var e = Object(l.c)();
                return [Object(l.d)((function(e) {
                    return e.user.userSlippageTolerance
                })), Object(i.useCallback)((function(n) {
                    e(ka({
                        userSlippageTolerance: n
                    }))
                }), [e])]
            }

            function Ka() {
                var e = Ne().chainId,
                    n = Object(l.d)((function(e) {
                        return e.user.tokens
                    }));
                return Object(i.useMemo)((function() {
                    var t;
                    return e ? Object.values(null !== (t = n[e]) && void 0 !== t ? t : {}).map(Ua) : []
                }), [n, e])
            }

            function Ma(e) {
                return {
                    token0: Ta(e.token0),
                    token1: Ta(e.token1)
                }
            }

            function Ba(e) {
                var n = Object(k.a)(e, 2),
                    t = n[0],
                    a = n[1];
                return new f.k(t.chainId, f.f.getAddress(t, a), 18, "UNI-V2", "Uniswap V2")
            }
            var La = t(11),
                Fa = t(665),
                Wa = t(666);

            function Da() {
                var e = Object(qe.a)(["\n    display: block;\n  "]);
                return Da = function() {
                    return e
                }, e
            }

            function qa() {
                var e = Object(qe.a)(["\n  display: none;\n  ", ";\n"]);
                return qa = function() {
                    return e
                }, e
            }

            function Ga() {
                var e = Object(qe.a)(["\n    display: none;\n  "]);
                return Ga = function() {
                    return e
                }, e
            }

            function Ja() {
                var e = Object(qe.a)(["\n  ", ";\n"]);
                return Ja = function() {
                    return e
                }, e
            }

            function za() {
                var e = Object(qe.a)(["\n    display: none;\n  "]);
                return za = function() {
                    return e
                }, e
            }

            function Pa() {
                var e = Object(qe.a)(["\n  ", ";\n"]);
                return Pa = function() {
                    return e
                }, e
            }

            function Va() {
                var e = Object(qe.a)(["\n  height: ", ";\n  width: ", ";\n"]);
                return Va = function() {
                    return e
                }, e
            }

            function Ya() {
                var e = Object(qe.a)(["\n  color: ", ";\n"]);
                return Ya = function() {
                    return e
                }, e
            }

            function Za() {
                var e = Object(qe.a)(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"]);
                return Za = function() {
                    return e
                }, e
            }

            function Ha() {
                var e = Object(qe.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
                return Ha = function() {
                    return e
                }, e
            }

            function Qa() {
                var e = Object(qe.a)(["\n  animation: ", " 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;\n  padding: 2rem 0 0 0;\n  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));\n"]);
                return Qa = function() {
                    return e
                }, e
            }

            function Xa() {
                var e = Object(qe.a)(["\n  0% {\n    transform: perspective(1000px) rotateY(0deg);\n  }\n\n  100% {\n    transform: perspective(1000px) rotateY(360deg);\n  }\n"]);
                return Xa = function() {
                    return e
                }, e
            }

            function _a() {
                var e = Object(qe.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
                return _a = function() {
                    return e
                }, e
            }

            function $a() {
                var e = Object(qe.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
                return $a = function() {
                    return e
                }, e
            }

            function er() {
                var e = Object(qe.a)(["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ", ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
                return er = function() {
                    return e
                }, e
            }

            function nr() {
                var e = Object(qe.a)(["\n  cursor: pointer;\n"]);
                return nr = function() {
                    return e
                }, e
            }

            function tr() {
                var e = Object(qe.a)(["\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ", ";\n  color: ", ";\n  width: 100%;\n\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n\n  :active {\n    background-color: ", ";\n  }\n\n  :disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n  }\n"]);
                return tr = function() {
                    return e
                }, e
            }
            Je.default.button.attrs((function(e) {
                var n = e.warning,
                    t = e.theme;
                return {
                    backgroundColor: n ? t.red1 : t.primary1
                }
            }))(tr(), (function(e) {
                return e.backgroundColor
            }), (function(e) {
                return e.theme.white
            }), (function(e) {
                var n = e.backgroundColor;
                return Object(Ye.a)(.05, n)
            }), (function(e) {
                var n = e.backgroundColor;
                return Object(Ye.a)(.1, n)
            }), (function(e) {
                return e.theme.bg1
            }), (function(e) {
                return e.theme.text4
            }));
            var ar = Object(Je.default)(Fa.a)(nr()),
                rr = Je.default.button(er(), (function(e) {
                    return e.disabled ? "default" : "pointer"
                }), (function(e) {
                    var n = e.theme;
                    return e.disabled ? n.text2 : n.primary1
                }), (function(e) {
                    return e.disabled ? null : "underline"
                }), (function(e) {
                    return e.disabled ? null : "underline"
                })),
                ir = Object(Je.default)(s.b)($a(), (function(e) {
                    return e.theme.primary1
                })),
                or = Je.default.a(_a(), (function(e) {
                    return e.theme.primary1
                })),
                cr = Object(Je.keyframes)(Xa()),
                ur = Je.default.img(Qa(), cr);

            function lr(e) {
                var n = e.target,
                    t = void 0 === n ? "_self" : n,
                    a = e.href,
                    r = e.rel,
                    c = void 0 === r ? "noopener noreferrer" : r,
                    u = Object(ze.a)(e, ["target", "href", "rel"]),
                    l = Object(i.useCallback)((function(e) {
                        "_blank" === t || e.ctrlKey || e.metaKey
                    }), [a, t]);
                return o.a.createElement(or, Object.assign({
                    target: t,
                    rel: c,
                    href: a,
                    onClick: l
                }, u))
            }
            var sr = Object(Je.keyframes)(Ha()),
                dr = Je.default.img(Za(), sr);
            Object(Je.default)(ir)(Ya(), (function(e) {
                return e.theme.text1
            }));
            var pr = Object(Je.default)(dr)(Va(), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }));
            Je.default.span(Pa(), (function(e) {
                return e.theme.mediaWidth.upToSmall(za())
            })), Je.default.span(Ja(), (function(e) {
                return e.theme.mediaWidth.upToExtraSmall(Ga())
            })), Je.default.span(qa(), (function(e) {
                return e.theme.mediaWidth.upToExtraSmall(Da())
            }));

            function mr() {
                var e = Object(qe.a)(["\nhtml {\n  color: ", "\n}\n\nbody {\n  background-position: 0 -30vh;\n  background-repeat: no-repeat;\n}\n"]);
                return mr = function() {
                    return e
                }, e
            }

            function fr() {
                var e = Object(qe.a)(["\nhtml, input, textarea, button {\n  font-family: PingFangSC-Medium, PingFang SC, Microsoft Yahei;\n}\n\nh3, ul, h2, h5 {\n  margin-block-start: 0em;\n  margin-block-end: 0em;\n}\nul {\n  list-style-type: none;\n  padding-inline-start: 0;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  background: #F6F7FB;\n  height: 100%;\n}\n#root {\n  height: 100%;\n}\n a {\n   color: ", "; \n   text-decoration: none;\n }\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  user-select: none;\n}\n\nhtml {\n  font-size: 16px;\n  font-variant: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;\n  \n}\n"]);
                return fr = function() {
                    return e
                }, e
            }

            function br() {
                var e = Object(qe.a)(["\n  color: ", ";\n"]);
                return br = function() {
                    return e
                }, e
            }

            function vr() {
                var e = Object(qe.a)(["\n      display: flex;\n      flex-flow: row nowrap;\n    "]);
                return vr = function() {
                    return e
                }, e
            }

            function yr() {
                var e = Object(qe.a)(["\n      display: flex;\n      flex-flow: column nowrap;\n    "]);
                return yr = function() {
                    return e
                }, e
            }

            function gr() {
                var e = Object(qe.a)(["\n      @media (max-width: ", "px) {\n        ", "\n      }\n    "]);
                return gr = function() {
                    return e
                }, e
            }
            var hr = {
                    upToExtraSmall: 500,
                    upToSmall: 720,
                    upToMedium: 960,
                    upToLarge: 1280
                },
                Er = Object.keys(hr).reduce((function(e, n) {
                    return e[n] = function(e, t, a) {
                        return Object(Je.css)(gr(), hr[n], Object(Je.css)(e, t, a))
                    }, e
                }), {});

            function Or(e) {
                return {
                    white: "#FFFFFF",
                    black: "#000000",
                    text1: e ? "#FFFFFF" : "#000000",
                    text2: e ? "#C3C5CB" : "#48587B",
                    text3: e ? "#6C7284" : "#888D9B",
                    text4: e ? "#565A69" : "#C3C5CB",
                    text5: e ? "#2C2F36" : "#EDEEF2",
                    bg1: e ? "#212429" : "#FFFFFF",
                    bg2: e ? "#2C2F36" : "#FFFFFF",
                    bg3: e ? "#40444F" : "#EDEEF2",
                    bg4: e ? "#565A69" : "#CED0D9",
                    bg5: e ? "#6C7284" : "#888D9B",
                    modalBG: e ? "rgba(0,0,0,.425)" : "rgba(0,0,0,0.3)",
                    advancedBG: e ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.6)",
                    primary1: e ? "#2172E5" : "#FFCA13FF",
                    primary2: e ? "#3680E7" : "#FF8CC3",
                    primary3: e ? "#4D8FEA" : "#05826b",
                    primary4: e ? "#376bad70" : "#6de0cb",
                    primary5: e ? "#153d6f70" : "#FDEAF1",
                    primaryText1: e ? "#6da8ff" : "#ff007a",
                    secondary1: e ? "#2172E5" : "#ff007a",
                    secondary2: e ? "#17000b26" : "#F6DDE8",
                    secondary3: e ? "#17000b26" : "#FDEAF1",
                    red1: "#FF6871",
                    red2: "#F82D3A",
                    green1: "#393939FF",
                    yellow1: "#FFE270",
                    yellow2: "#04C19E",
                    blue1: "#2172E5"
                }
            }

            function kr(e) {
                var n = e.children,
                    t = (Object(l.d)((function(e) {
                        var n = e.user,
                            t = n.matchesDarkMode;
                        return {
                            userDarkMode: n.userDarkMode,
                            matchesDarkMode: t
                        }
                    }), l.b).userDarkMode, !1),
                    a = Object(i.useMemo)((function() {
                        return function(e) {
                            return Object(p.a)(Object(p.a)({}, Or(e)), {}, {
                                grids: {
                                    sm: 8,
                                    md: 12,
                                    lg: 24
                                },
                                shadow1: e ? "#000" : "#2F80ED",
                                mediaWidth: Er,
                                flexColumnNoWrap: Object(Je.css)(yr()),
                                flexRowNoWrap: Object(Je.css)(vr())
                            })
                        }(t)
                    }), [t]);
                return o.a.createElement(Je.ThemeProvider, {
                    theme: a
                }, n)
            }
            var jr = Object(Je.default)(La.b)(br(), (function(e) {
                    var n = e.color;
                    return e.theme[n]
                })),
                xr = function(e) {
                    return o.a.createElement(jr, Object.assign({
                        fontWeight: 500,
                        color: "text2"
                    }, e))
                },
                Ar = function(e) {
                    return o.a.createElement(jr, Object.assign({
                        fontWeight: 500,
                        color: "text1"
                    }, e))
                },
                wr = function(e) {
                    return o.a.createElement(jr, Object.assign({
                        fontWeight: 500,
                        color: "white"
                    }, e))
                },
                Cr = function(e) {
                    return o.a.createElement(jr, Object.assign({
                        fontWeight: 400,
                        fontSize: 16,
                        color: "text1"
                    }, e))
                },
                Ir = function(e) {
                    return o.a.createElement(jr, Object.assign({
                        fontWeight: 600,
                        fontSize: 24
                    }, e))
                },
                Tr = function(e) {
                    return o.a.createElement(jr, Object.assign({
                        fontWeight: 400,
                        fontSize: 14
                    }, e))
                },
                Ur = function(e) {
                    return o.a.createElement(jr, Object.assign({
                        fontWeight: 500,
                        color: "primary1"
                    }, e))
                },
                Sr = function(e) {
                    return o.a.createElement(jr, Object.assign({
                        fontWeight: 500,
                        fontSize: 12,
                        fontStyle: "italic",
                        color: "text2"
                    }, e))
                },
                Rr = function(e) {
                    var n = e.error,
                        t = Object(ze.a)(e, ["error"]);
                    return o.a.createElement(jr, Object.assign({
                        fontWeight: 500,
                        color: n ? "red1" : "text2"
                    }, t))
                },
                Nr = Object(Je.createGlobalStyle)(fr(), Or(!1).blue1),
                Kr = Object(Je.createGlobalStyle)(mr(), (function(e) {
                    return e.theme.text1
                })),
                Mr = t(667);

            function Br() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  border: 1px solid ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n    box-shadow: none;\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n"]);
                return Br = function() {
                    return e
                }, e
            }

            function Lr() {
                var e = Object(qe.a)(["\n  background-color: #393939FF;\n  color: #FFCA13FF;\n  border: 1px solid ", ";\n\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"]);
                return Lr = function() {
                    return e
                }, e
            }

            function Fr() {
                var e = Object(qe.a)(["\n  border: 1px solid #edeef2;\n  background-color: ", ";\n  color: black;\n\n  &:focus {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"]);
                return Fr = function() {
                    return e
                }, e
            }

            function Wr() {
                var e = Object(qe.a)(["\n  background-color: transparent;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:focus {\n    text-decoration: underline;\n  }\n  &:hover {\n    text-decoration: underline;\n  }\n  &:active {\n    text-decoration: underline;\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"]);
                return Wr = function() {
                    return e
                }, e
            }

            function Dr() {
                var e = Object(qe.a)(["\n  border: 1px solid #EBEDF3FF;\n  background-color: transparent;\n  color: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:hover {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n"]);
                return Dr = function() {
                    return e
                }, e
            }

            function qr() {
                var e = Object(qe.a)(["\n  color: white;\n  padding: 4px 8px;\n  height: 36px;\n  font-weight: 500;\n  background-color: ", ";\n  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #ff007a 0%, #2172e5 100%), #edeef2;\n  width: fit-content;\n  position: relative;\n  cursor: pointer;\n  border: none;\n  white-space: no-wrap;\n  :hover {\n    opacity: 0.8;\n  }\n  :active {\n    opacity: 0.9;\n  }\n"]);
                return qr = function() {
                    return e
                }, e
            }

            function Gr() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  color: white;\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n    opacity: 50%;\n    cursor: auto;\n  }\n"]);
                return Gr = function() {
                    return e
                }, e
            }

            function Jr() {
                var e = Object(qe.a)(["\n    font-size: 14px;\n  "]);
                return Jr = function() {
                    return e
                }, e
            }

            function zr() {
                var e = Object(qe.a)(["\n    font-size: 16px;\n  "]);
                return zr = function() {
                    return e
                }, e
            }

            function Pr() {
                var e = Object(qe.a)(["\n  border: 1px solid ", ";\n  color: ", ";\n  background-color: transparent;\n  ", "\n  ", "\n  border-radius: 12px;\n  padding: ", ";\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    border: 1px solid ", ";\n  }\n  &:hover {\n    border: 1px solid ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    border: 1px solid ", ";\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n  a:hover {\n    text-decoration: none;\n  }\n"]);
                return Pr = function() {
                    return e
                }, e
            }

            function Vr() {
                var e = Object(qe.a)(["\n    font-size: 14px;\n  "]);
                return Vr = function() {
                    return e
                }, e
            }

            function Yr() {
                var e = Object(qe.a)(["\n    font-size: 16px;\n  "]);
                return Yr = function() {
                    return e
                }, e
            }

            function Zr() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  color: ", ";\n  ", "\n  ", "\n  font-weight: 500;\n  &:focus {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ", ";\n    background-color: ", ";\n  }\n"]);
                return Zr = function() {
                    return e
                }, e
            }

            function Hr() {
                var e = Object(qe.a)(["\n    font-size: 14px;\n  "]);
                return Hr = function() {
                    return e
                }, e
            }

            function Qr() {
                var e = Object(qe.a)(["\n    font-size: 16px;\n  "]);
                return Qr = function() {
                    return e
                }, e
            }

            function Xr() {
                var e = Object(qe.a)(["\n  background-color: #393939;\n  color: ", ";\n  ", "\n  ", "\n  font-weight: 500;\n  :disabled {\n    opacity: 0.4;\n    :hover {\n      cursor: auto;\n      background-color: ", ";\n      box-shadow: none;\n      border: 1px solid transparent;\n      outline: none;\n    }\n  }\n"]);
                return Xr = function() {
                    return e
                }, e
            }

            function _r() {
                var e = Object(qe.a)(["\n    font-size: 14px;\n  "]);
                return _r = function() {
                    return e
                }, e
            }

            function $r() {
                var e = Object(qe.a)(["\n  background-color: #393939FF;\n  color: ", ";\n  &:disabled {\n    background-color: ", ";\n    color: ", ";\n    cursor: auto;\n    box-shadow: none;\n    border: 1px solid transparent;\n    outline: none;\n    opacity: ", ";\n  }\n  ", "\n"]);
                return $r = function() {
                    return e
                }, e
            }

            function ei() {
                var e = Object(qe.a)(["\n    padding: 13px;\n  "]);
                return ei = function() {
                    return e
                }, e
            }

            function ni() {
                var e = Object(qe.a)(["\n  padding: ", ";\n  ", "\n  width: ", ";\n  font-weight: 500;\n  text-align: center;\n  border-radius: 10px;\n  border-radius: ", ";\n  outline: none;\n  border: 1px solid transparent;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  &:disabled {\n    cursor: auto;\n  }\n\n  > * {\n    user-select: none;\n  }\n"]);
                return ni = function() {
                    return e
                }, e
            }
            var ti = Object(Je.default)(In.Button)(ni(), (function(e) {
                    var n = e.padding;
                    return n || "18px"
                }), Re.isMobile && Object(Je.css)(ei()), (function(e) {
                    var n = e.width;
                    return n || "100%"
                }), (function(e) {
                    var n = e.borderRadius;
                    return n && n
                })),
                ai = Object(Je.default)(ti)($r(), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    var n = e.theme;
                    return e.altDisabledStyle ? n.primary1 : "#DDE2EB"
                }), (function(e) {
                    e.theme;
                    return e.altDisabledStyle ? "white" : "#808EB5"
                }), (function(e) {
                    return e.altDisabledStyle ? "0.7" : "1"
                }), Re.isMobile && Object(Je.css)(_r())),
                ri = Object(Je.default)(ti)(Xr(), (function(e) {
                    return e.theme.primary1
                }), !Re.isMobile && Object(Je.css)(Qr()), Re.isMobile && Object(Je.css)(Hr()), (function(e) {
                    return e.theme.primary1
                })),
                ii = (Object(Je.default)(ti)(Zr(), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.text2
                }), !Re.isMobile && Object(Je.css)(Yr()), Re.isMobile && Object(Je.css)(Vr()), (function(e) {
                    var n = e.theme;
                    return !e.disabled && Object(Ye.a)(.05, n.bg2)
                }), (function(e) {
                    var n = e.theme;
                    return !e.disabled && Object(Ye.a)(.05, n.bg2)
                }), (function(e) {
                    var n = e.theme;
                    return !e.disabled && Object(Ye.a)(.05, n.bg2)
                }), (function(e) {
                    var n = e.theme;
                    return !e.disabled && Object(Ye.a)(.1, n.bg2)
                }), (function(e) {
                    var n = e.theme;
                    return !e.disabled && Object(Ye.a)(.1, n.bg2)
                })), Object(Je.default)(ti)(Pr(), (function(e) {
                    return e.theme.primary4
                }), (function(e) {
                    return e.theme.primary1
                }), !Re.isMobile && Object(Je.css)(zr()), Re.isMobile && Object(Je.css)(Jr()), (function(e) {
                    var n = e.padding;
                    return n || "10px"
                }), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    return e.theme.primary1
                }))),
                oi = (Object(Je.default)(ti)(Gr(), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.05, n.primary1)
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.05, n.primary1)
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.05, n.primary1)
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.1, n.primary1)
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.1, n.primary1)
                }), (function(e) {
                    return e.theme.primary1
                })), Object(Je.default)(ai)(qr(), (function(e) {
                    return e.theme.bg3
                })), Object(Je.default)(ti)(Dr(), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.bg4
                }), (function(e) {
                    return e.theme.bg4
                }), (function(e) {
                    return e.theme.bg4
                }))),
                ci = Object(Je.default)(ti)(Wr(), (function(e) {
                    return e.theme.primary1
                })),
                ui = (Object(Je.default)(ti)(Fr(), (function(e) {
                    return e.theme.bg1
                }), Object(Ye.a)(.05, "#edeef2"), Object(Ye.a)(.1, "#edeef2"), Object(Ye.a)(.1, "#edeef2")), Object(Je.default)(ti)(Lr(), (function(e) {
                    return e.theme.green1
                }))),
                li = Object(Je.default)(ti)(Br(), (function(e) {
                    return e.theme.red1
                }), (function(e) {
                    return e.theme.red1
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.05, n.red1)
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.05, n.red1)
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.05, n.red1)
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.1, n.red1)
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.1, n.red1)
                }), (function(e) {
                    return e.theme.red1
                }), (function(e) {
                    return e.theme.red1
                }));

            function si(e) {
                var n = e.confirmed,
                    t = e.altDisabledStyle,
                    a = Object(ze.a)(e, ["confirmed", "altDisabledStyle"]);
                return n ? o.a.createElement(ui, a) : o.a.createElement(ai, Object.assign({}, a, {
                    altDisabledStyle: t
                }))
            }

            function di(e) {
                var n = e.error,
                    t = Object(ze.a)(e, ["error"]);
                return n ? o.a.createElement(li, t) : o.a.createElement(ai, t)
            }

            function pi(e) {
                var n = e.disabled,
                    t = void 0 !== n && n,
                    a = e.children,
                    r = Object(ze.a)(e, ["disabled", "children"]);
                return o.a.createElement(oi, Object.assign({}, r, {
                    disabled: t
                }), o.a.createElement(Bn, null, o.a.createElement("div", {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    }
                }, a), o.a.createElement(Mr.a, {
                    size: 24
                })))
            }
            var mi = Object(Xn.b)("transactions/addTransaction"),
                fi = Object(Xn.b)("transactions/clearAllTransactions"),
                bi = Object(Xn.b)("transactions/finalizeTransaction"),
                vi = Object(Xn.b)("transactions/checkedTransaction");

            function yi() {
                var e = Ne(),
                    n = e.chainId,
                    t = e.account,
                    a = Object(l.c)();
                return Object(i.useCallback)((function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = r.summary,
                        o = r.approval,
                        c = r.claim;
                    if (t && n) {
                        var u = e.hash;
                        if (!u) throw Error("No transaction hash found.");
                        a(mi({
                            hash: u,
                            from: t,
                            chainId: n,
                            approval: o,
                            summary: i,
                            claim: c
                        }))
                    }
                }), [a, n, t])
            }

            function gi() {
                var e, n = Ne().chainId,
                    t = Object(l.d)((function(e) {
                        return e.transactions
                    }));
                return n && null !== (e = t[n]) && void 0 !== e ? e : {}
            }

            function hi(e) {
                return (new Date).getTime() - e.addedTime < 864e5
            }

            function Ei(e) {
                var n = Ne().chainId,
                    t = "".concat(n, ":").concat(e),
                    a = Object(i.useState)({}),
                    r = Object(k.a)(a, 1)[0];
                return Object(i.useEffect)((function() {}), [e, n, t]), e && n ? r[t] : void 0
            }

            function Oi(e) {
                var n, t = Ei(e),
                    a = wt(ma(), "isClaimed", [null === t || void 0 === t ? void 0 : t.index]);
                return Boolean(t && !a.loading && !1 === (null === (n = a.result) || void 0 === n ? void 0 : n[0]))
            }

            function ki(e) {
                var n = Ne().chainId,
                    t = Ei(e),
                    a = Oi(e),
                    r = n ? me[n] : void 0;
                if (r) return a && t ? new f.l(r, f.e.BigInt(t.amount)) : new f.l(r, f.e.BigInt(0))
            }
            var ji = t(131),
                xi = t.n(ji),
                Ai = t(132),
                wi = t.n(Ai),
                Ci = t(79);

            function Ii(e) {
                return /^0x0*$/.test(e)
            }

            function Ti(e, n) {
                var t = Object(i.useState)(e),
                    a = Object(k.a)(t, 2),
                    r = a[0],
                    o = a[1];
                return Object(i.useEffect)((function() {
                    var t = setTimeout((function() {
                        o(e)
                    }), n);
                    return function() {
                        clearTimeout(t)
                    }
                }), [e, n]), r
            }

            function Ui(e) {
                var n, t, a, r = Ti(e, 200),
                    o = Object(i.useMemo)((function() {
                        if (!r) return [void 0];
                        try {
                            return r ? [Object(Ci.namehash)(r)] : [void 0]
                        } catch (e) {
                            return [void 0]
                        }
                    }), [r]),
                    c = wt(sa(!1), "resolver", o),
                    u = null === (n = c.result) || void 0 === n ? void 0 : n[0],
                    l = wt(da(u && !Ii(u) ? u : void 0, !1), "addr", o),
                    s = r !== e;
                return {
                    address: s ? null : null !== (t = null === (a = l.result) || void 0 === a ? void 0 : a[0]) && void 0 !== t ? t : null,
                    loading: s || c.loading || l.loading
                }
            }

            function Si(e) {
                var n, t, a, r = Ti(e, 200),
                    o = Object(i.useMemo)((function() {
                        if (!r || !Rt(r)) return [void 0];
                        try {
                            return r ? [Object(Ci.namehash)("".concat(r.toLowerCase().substr(2), ".addr.reverse"))] : [void 0]
                        } catch (e) {
                            return [void 0]
                        }
                    }), [r]),
                    c = wt(sa(!1), "resolver", o),
                    u = null === (n = c.result) || void 0 === n ? void 0 : n[0],
                    l = wt(da(u && !Ii(u) ? u : void 0, !1), "name", o),
                    s = r !== e;
                return {
                    ENSName: s ? null : null !== (t = null === (a = l.result) || void 0 === a ? void 0 : a[0]) && void 0 !== t ? t : null,
                    loading: s || c.loading || l.loading
                }
            }

            function Ri(e) {
                var n = Rt(e),
                    t = Si(n || void 0),
                    a = Ui(e);
                return {
                    loading: t.loading || a.loading,
                    address: n || a.address,
                    name: t.ENSName ? t.ENSName : !n && a.address && e || null
                }
            }

            function Ni() {
                var e = Object(qe.a)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
                return Ni = function() {
                    return e
                }, e
            }

            function Ki() {
                var e = Object(qe.a)(["\n  flex: 1;\n  padding: 1rem;\n"]);
                return Ki = function() {
                    return e
                }, e
            }

            function Mi() {
                var e = Object(qe.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"]);
                return Mi = function() {
                    return e
                }, e
            }

            function Bi() {
                var e = Object(qe.a)(["\n  ", "\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]);
                return Bi = function() {
                    return e
                }, e
            }
            var Li = Je.default.div(Bi(), (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    return e.theme.bg1
                })),
                Fi = Je.default.div(Mi(), (function(e) {
                    var n = e.error,
                        t = e.theme;
                    return n ? t.red1 : t.bg2
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    return e.theme.bg1
                })),
                Wi = Je.default.div(Ki()),
                Di = Je.default.input(Ni(), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    var n = e.error,
                        t = e.theme;
                    return n ? t.red1 : t.primary1
                }), (function(e) {
                    return e.theme.text4
                }), (function(e) {
                    return e.theme.text4
                }));

            function qi(e) {
                var n = e.id,
                    t = e.value,
                    a = e.onChange,
                    r = Ne().chainId,
                    c = Object(i.useContext)(Je.ThemeContext),
                    u = Ri(t),
                    l = u.address,
                    s = u.loading,
                    d = u.name,
                    p = Object(i.useCallback)((function(e) {
                        var n = e.target.value.replace(/\s+/g, "");
                        a(n)
                    }), [a]),
                    m = Boolean(t.length > 0 && !s && !l);
                return o.a.createElement(Li, {
                    id: n
                }, o.a.createElement(Fi, {
                    error: m
                }, o.a.createElement(Wi, null, o.a.createElement(mn, {
                    gap: "md"
                }, o.a.createElement(Bn, null, o.a.createElement(Ar, {
                    color: c.text2,
                    fontWeight: 500,
                    fontSize: 14
                }, "Recipient"), l && r && o.a.createElement(lr, {
                    href: Kt(r, null !== d && void 0 !== d ? d : l, "address"),
                    style: {
                        fontSize: "14px"
                    }
                }, "(View on BSC)")), o.a.createElement(Di, {
                    className: "recipient-address-input",
                    type: "text",
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    placeholder: "Wallet Address or ENS name",
                    error: m,
                    pattern: "^(0x[a-fA-F0-9]{40})$",
                    onChange: p,
                    value: t
                })))))
            }
            var Gi = t(337),
                Ji = t.n(Gi),
                zi = "object" === typeof window;

            function Pi() {
                return {
                    width: zi ? window.innerWidth : void 0,
                    height: zi ? window.innerHeight : void 0
                }
            }

            function Vi(e) {
                var n = e.start,
                    t = e.variant,
                    a = function() {
                        var e = Object(i.useState)(Pi),
                            n = Object(k.a)(e, 2),
                            t = n[0],
                            a = n[1];
                        return Object(i.useEffect)((function() {
                            function e() {
                                a(Pi())
                            }
                            if (zi) return window.addEventListener("resize", e),
                                function() {
                                    window.removeEventListener("resize", e)
                                }
                        }), []), t
                    }(),
                    r = a.width,
                    c = a.height,
                    u = t || (c && r && c > 1.5 * r ? "bottom" : t);
                return n && r && c ? o.a.createElement(Ji.a, {
                    style: {
                        zIndex: 1401
                    },
                    numberOfPieces: 400,
                    recycle: !1,
                    run: !0,
                    width: r,
                    height: c,
                    confettiSource: {
                        h: c,
                        w: r,
                        x: 0,
                        y: "top" === u ? .25 * c : "bottom" === u ? .75 * c : .5 * c
                    },
                    initialVelocityX: 15,
                    initialVelocityY: 30,
                    gravity: .45,
                    tweenDuration: 100,
                    wind: .05
                }) : null
            }

            function Yi() {
                var e = Object(qe.a)(["\n  padding: 60px 0;\n"]);
                return Yi = function() {
                    return e
                }, e
            }

            function Zi() {
                var e = Object(qe.a)(["\n  width: 100%;\n  padding: 24px;\n  position: relative;\n  background: ", ";\n"]);
                return Zi = function() {
                    return e
                }, e
            }

            function Hi() {
                var e = Object(qe.a)(["\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);\n"]);
                return Hi = function() {
                    return e
                }, e
            }

            function Qi() {
                var e = Object(qe.a)(["\n  width: 100%;\n"]);
                return Qi = function() {
                    return e
                }, e
            }
            var Xi = Object(Je.default)(mn)(Qi()),
                _i = Object(Je.default)(kn)(Hi()),
                $i = Je.default.div(Zi(), (function(e) {
                    return e.activeBG && "radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;"
                })),
                eo = Object(Je.default)(pn)(Yi());

            function no(e) {
                var n, t, a = e.isOpen,
                    r = e.onDismiss,
                    c = Ne().chainId,
                    u = Object(i.useState)(""),
                    l = Object(k.a)(u, 2),
                    s = l[0],
                    d = l[1];
                var p = Ri(s).address,
                    m = Object(i.useState)(!1),
                    f = Object(k.a)(m, 2),
                    b = f[0],
                    v = f[1],
                    y = function(e) {
                        var n = Ne(),
                            t = n.library,
                            a = n.chainId,
                            r = Ei(e),
                            i = ki(e),
                            o = yi(),
                            c = ma();
                        return {
                            claimCallback: function() {
                                var n = Object(j.a)(O.a.mark((function n() {
                                    var u, l;
                                    return O.a.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (r && e && t && a && c) {
                                                    n.next = 2;
                                                    break
                                                }
                                                return n.abrupt("return");
                                            case 2:
                                                return l = [r.index, e, r.amount, r.proof], n.abrupt("return", (u = c.estimateGas).claim.apply(u, l.concat([{}])).then((function(n) {
                                                    return c.claim.apply(c, l.concat([{
                                                        value: null,
                                                        gasLimit: Bt(n)
                                                    }])).then((function(n) {
                                                        return o(n, {
                                                            summary: "Claimed ".concat(null === i || void 0 === i ? void 0 : i.toSignificant(4), " UNI"),
                                                            claim: {
                                                                recipient: e
                                                            }
                                                        }), n.hash
                                                    }))
                                                })));
                                            case 4:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function() {
                                    return n.apply(this, arguments)
                                }
                            }()
                        }
                    }(p).claimCallback,
                    g = ki(p),
                    h = Oi(p),
                    E = Object(i.useState)(),
                    x = Object(k.a)(E, 2),
                    A = x[0],
                    w = x[1],
                    C = function(e) {
                        var n = gi();
                        return !(!e || !n[e]) && !n[e].receipt
                    }(null !== A && void 0 !== A ? A : ""),
                    I = A && !C;

                function T() {
                    v(!1), w(void 0), d(""), r()
                }
                return o.a.createElement(cn, {
                    isOpen: a,
                    onDismiss: T,
                    maxHeight: 90
                }, o.a.createElement(Vi, {
                    start: Boolean(a && I && b)
                }), !b && o.a.createElement(Xi, {
                    gap: "lg"
                }, o.a.createElement(_i, null, o.a.createElement(jn, null), o.a.createElement(An, null), o.a.createElement(wn, {
                    gap: "md"
                }, o.a.createElement(Bn, null, o.a.createElement(wr, {
                    fontWeight: 500
                }, "Claim UNI Token"), o.a.createElement(ar, {
                    onClick: T,
                    style: {
                        zIndex: 99
                    },
                    stroke: "white"
                })), o.a.createElement(wr, {
                    fontWeight: 700,
                    fontSize: 36
                }, null === g || void 0 === g ? void 0 : g.toFixed(0, null !== (n = {
                    groupSeparator: ","
                }) && void 0 !== n ? n : "-"), " UNI")), o.a.createElement(Cn, null)), o.a.createElement(mn, {
                    gap: "md",
                    style: {
                        padding: "1rem",
                        paddingTop: "0"
                    },
                    justify: "center"
                }, o.a.createElement(Tr, {
                    fontWeight: 500
                }, "Enter an address to trigger a UNI claim. If the address has any claimable UNI it will be sent to them on submission."), o.a.createElement(qi, {
                    value: s,
                    onChange: function(e) {
                        d(e)
                    }
                }), p && !h && o.a.createElement(Rr, {
                    error: !0
                }, "Address has no available claim"), o.a.createElement(ai, {
                    disabled: !Object(Ci.isAddress)(null !== p && void 0 !== p ? p : "") || !h,
                    padding: "16px 16px",
                    width: "100%",
                    borderRadius: "12px",
                    mt: "1rem",
                    onClick: function() {
                        v(!0), y().then((function(e) {
                            w(e)
                        })).catch((function(e) {
                            v(!1), console.log(e)
                        }))
                    }
                }, "Claim UNI"))), (b || I) && o.a.createElement($i, {
                    activeBG: !0
                }, o.a.createElement(An, null), o.a.createElement(xn, {
                    desaturate: !0
                }), o.a.createElement(Bn, null, o.a.createElement("div", null), o.a.createElement(ar, {
                    onClick: T,
                    style: {
                        zIndex: 99
                    },
                    stroke: "black"
                })), o.a.createElement(eo, null, I ? o.a.createElement(ur, {
                    width: "72px",
                    src: xi.a
                }) : o.a.createElement(pr, {
                    src: wi.a,
                    alt: "loader",
                    size: "90px"
                })), o.a.createElement(mn, {
                    gap: "100px",
                    justify: "center"
                }, o.a.createElement(mn, {
                    gap: "12px",
                    justify: "center"
                }, o.a.createElement(Ir, {
                    fontWeight: 600,
                    color: "black"
                }, I ? "Claimed" : "Claiming"), !I && o.a.createElement(La.b, {
                    fontSize: 36,
                    color: "#ff007a",
                    fontWeight: 800
                }, null === g || void 0 === g ? void 0 : g.toFixed(0, null !== (t = {
                    groupSeparator: ","
                }) && void 0 !== t ? t : "-"), " UNI"), p && o.a.createElement(Ir, {
                    fontWeight: 600,
                    color: "black"
                }, "for ", Mt(p))), I && o.a.createElement(o.a.Fragment, null, o.a.createElement(Tr, {
                    fontWeight: 500,
                    color: "black"
                }, o.a.createElement("span", {
                    role: "img",
                    "aria-label": "party-hat"
                }, "\ud83c\udf89", " "), "Welcome to team Unicorn :)", " ", o.a.createElement("span", {
                    role: "img",
                    "aria-label": "party-hat"
                }, "\ud83c\udf89"))), b && !A && o.a.createElement(Tr, {
                    color: "black"
                }, "Confirm this transaction in your wallet"), b && A && !I && c && A && o.a.createElement(lr, {
                    href: Kt(c, A, "transaction"),
                    style: {
                        zIndex: 99
                    }
                }, "View transaction on Etherscan"))))
            }
            var to = t(206),
                ao = t.n(to);

            function ro() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  color: ", ";\n  border-radius: 12px;\n  width: fit-content;\n"]);
                return ro = function() {
                    return e
                }, e
            }

            function io() {
                var e = Object(qe.a)(["\n  background-color: rgba(255, 0, 122, 0.03);\n  color: ", ";\n  font-weight: 500;\n"]);
                return io = function() {
                    return e
                }, e
            }

            function oo() {
                var e = Object(qe.a)(["\n  background-color: #393939FF;\n  color: #fff;\n  font-weight: 500;\n"]);
                return oo = function() {
                    return e
                }, e
            }

            function co() {
                var e = Object(qe.a)(["\n  border: 1px solid ", ";\n"]);
                return co = function() {
                    return e
                }, e
            }

            function uo() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n"]);
                return uo = function() {
                    return e
                }, e
            }

            function lo() {
                var e = Object(qe.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
                return lo = function() {
                    return e
                }, e
            }

            function so() {
                var e = Object(qe.a)(["\n  width: 100%;\n  border-radius: 10px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]);
                return so = function() {
                    return e
                }, e
            }
            var po = Object(Je.default)(In.Box)(so(), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.borderRadius
                })),
                mo = po,
                fo = Object(Je.default)(po)(lo(), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.bg1
                })),
                bo = Object(Je.default)(po)(uo(), (function(e) {
                    return e.theme.bg3
                })),
                vo = (Object(Je.default)(po)(co(), (function(e) {
                    return e.theme.bg3
                })), Object(Je.default)(po)(oo())),
                yo = (Object(Je.default)(po)(io(), (function(e) {
                    return e.theme.primary1
                })), Object(Je.default)(po)(ro(), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    return e.theme.primary1
                })), t(669));

            function go(e, n) {
                var t = Object(i.useRef)(n);
                Object(i.useEffect)((function() {
                    t.current = n
                }), [n]), Object(i.useEffect)((function() {
                    var n = function(n) {
                        var a, r;
                        null !== (a = null === (r = e.current) || void 0 === r ? void 0 : r.contains(n.target)) && void 0 !== a && a || t.current && t.current()
                    };
                    return document.addEventListener("mousedown", n),
                        function() {
                            document.removeEventListener("mousedown", n)
                        }
                }), [e])
            }
            var ho = t(668),
                Eo = t(682);

            function Oo(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    a = Object(i.useRef)();
                Object(i.useEffect)((function() {
                    a.current = e
                }), [e]), Object(i.useEffect)((function() {
                    function e() {
                        var e = a.current;
                        e && e()
                    }
                    if (null !== n) {
                        t && e();
                        var r = setInterval(e, n);
                        return function() {
                            return clearInterval(r)
                        }
                    }
                }), [n, t])
            }
            var ko = t(165);

            function jo() {
                var e = Object(qe.a)(["\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ", ";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n"]);
                return jo = function() {
                    return e
                }, e
            }

            function xo() {
                var e = Object(qe.a)(["\n  display: inline-block;\n"]);
                return xo = function() {
                    return e
                }, e
            }

            function Ao() {
                var e = Object(qe.a)(["\n  z-index: 9999;\n\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0 4px 8px 0 ", ";\n  color: ", ";\n  border-radius: 8px;\n"]);
                return Ao = function() {
                    return e
                }, e
            }
            var wo = Je.default.div(Ao(), (function(e) {
                    return e.show ? "visible" : "hidden"
                }), (function(e) {
                    return e.show ? 1 : 0
                }), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.d)(.9, n.shadow1)
                }), (function(e) {
                    return e.theme.text2
                })),
                Co = Je.default.div(xo()),
                Io = Je.default.div(jo(), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.bg2
                }));

            function To(e) {
                var n, t, a = e.content,
                    r = e.show,
                    c = e.children,
                    u = e.placement,
                    l = void 0 === u ? "auto" : u,
                    s = Object(i.useState)(null),
                    d = Object(k.a)(s, 2),
                    p = d[0],
                    m = d[1],
                    f = Object(i.useState)(null),
                    b = Object(k.a)(f, 2),
                    v = b[0],
                    y = b[1],
                    g = Object(i.useState)(null),
                    h = Object(k.a)(g, 2),
                    E = h[0],
                    O = h[1],
                    j = Object(Eo.a)(p, v, {
                        placement: l,
                        strategy: "fixed",
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [8, 8]
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: E
                            }
                        }]
                    }),
                    x = j.styles,
                    A = j.update,
                    w = j.attributes;
                return Oo(Object(i.useCallback)((function() {
                    A && A()
                }), [A]), r ? 100 : null), o.a.createElement(o.a.Fragment, null, o.a.createElement(Co, {
                    ref: m
                }, c), o.a.createElement(ko.a, null, o.a.createElement(wo, Object.assign({
                    show: r,
                    ref: y,
                    style: x.popper
                }, w.popper), a, o.a.createElement(Io, Object.assign({
                    className: "arrow-".concat(null !== (n = null === (t = w.popper) || void 0 === t ? void 0 : t["data-popper-placement"]) && void 0 !== n ? n : ""),
                    ref: O,
                    style: x.arrow
                }, w.arrow)))))
            }

            function Uo() {
                var e = Object(qe.a)(["\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"]);
                return Uo = function() {
                    return e
                }, e
            }
            var So = Je.default.div(Uo());

            function Ro(e) {
                var n = e.text,
                    t = Object(ze.a)(e, ["text"]);
                return o.a.createElement(To, Object.assign({
                    content: o.a.createElement(So, null, n)
                }, t))
            }

            function No(e) {
                var n = e.children,
                    t = Object(ze.a)(e, ["children"]),
                    a = Object(i.useState)(!1),
                    r = Object(k.a)(a, 2),
                    c = r[0],
                    u = r[1],
                    l = Object(i.useCallback)((function() {
                        return u(!0)
                    }), [u]),
                    s = Object(i.useCallback)((function() {
                        return u(!1)
                    }), [u]);
                return o.a.createElement(Ro, Object.assign({}, t, {
                    show: c
                }), o.a.createElement("div", {
                    onMouseEnter: l,
                    onMouseLeave: s
                }, n))
            }

            function Ko() {
                var e = Object(qe.a)(["\n  font-size: 1rem;\n"]);
                return Ko = function() {
                    return e
                }, e
            }

            function Mo() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  width: 24px;\n  height: 24px;\n  background-color: rgba(255, 255, 255, 0.1);\n  color: ", ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]);
                return Mo = function() {
                    return e
                }, e
            }

            function Bo() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  // background-color: ", ";\n  color: ", ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]);
                return Bo = function() {
                    return e
                }, e
            }
            var Lo = Je.default.div(Bo(), (function(e) {
                return e.theme.bg2
            }), (function(e) {
                return e.theme.text2
            }));
            Je.default.div(Mo(), (function(e) {
                return e.theme.white
            })), Je.default.span(Ko());

            function Fo(e) {
                var n = e.text,
                    t = Object(i.useState)(!1),
                    a = Object(k.a)(t, 2),
                    r = a[0],
                    c = a[1],
                    u = Object(i.useCallback)((function() {
                        return c(!0)
                    }), [c]),
                    l = Object(i.useCallback)((function() {
                        return c(!1)
                    }), [c]);
                return o.a.createElement("span", {
                    style: {
                        marginLeft: 4
                    }
                }, o.a.createElement(Ro, {
                    text: n,
                    show: r
                }, o.a.createElement(Lo, {
                    onClick: u,
                    onMouseEnter: u,
                    onMouseLeave: l
                }, o.a.createElement(ho.a, {
                    size: 16
                }))))
            }

            function Wo() {
                var e = Object(qe.a)(["\n  border-radius: 12px;\n  border: none;\n  /* border: 1px solid ", "; */\n  background: ", ";\n  display: flex;\n  width: fit-content;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n  /* background-color: transparent; */\n"]);
                return Wo = function() {
                    return e
                }, e
            }

            function Do() {
                var e = Object(qe.a)(["\n  padding: 0.25rem 0.5rem;\n  border-radius: 14px;\n  background: ", ";\n  color: ", ";\n  font-size: 1rem;\n  font-weight: 400;\n\n  padding: 0.35rem 0.6rem;\n  border-radius: 12px;\n  background: ", ";\n  color: ", ";\n  font-size: 1rem;\n  font-weight: ", ";\n  :hover {\n    user-select: ", ";\n    background: ", ";\n    color: ", ";\n  }\n"]);
                return Do = function() {
                    return e
                }, e
            }
            var qo, Go, Jo = Je.default.span(Do(), (function(e) {
                    var n = e.theme,
                        t = e.isActive,
                        a = e.isOnSwitch;
                    return t ? a ? n.primary1 : n.text4 : "none"
                }), (function(e) {
                    var n = e.theme,
                        t = e.isActive,
                        a = e.isOnSwitch;
                    return t ? a ? n.white : n.text2 : n.text3
                }), (function(e) {
                    var n = e.theme,
                        t = e.isActive,
                        a = e.isOnSwitch;
                    return t ? a ? n.primary1 : n.text4 : "none"
                }), (function(e) {
                    var n = e.theme,
                        t = e.isActive,
                        a = e.isOnSwitch;
                    return t && a ? n.white : n.text2
                }), (function(e) {
                    return e.isOnSwitch ? "500" : "400"
                }), (function(e) {
                    return e.isOnSwitch ? "none" : "initial"
                }), (function(e) {
                    var n = e.theme,
                        t = e.isActive,
                        a = e.isOnSwitch;
                    return t ? a ? n.primary1 : n.text3 : "none"
                }), (function(e) {
                    var n = e.theme,
                        t = e.isActive,
                        a = e.isOnSwitch;
                    return t ? a ? n.white : n.text2 : n.text3
                })),
                zo = Je.default.button(Wo(), (function(e) {
                    var n = e.theme;
                    return e.isActive ? n.primary5 : n.text4
                }), (function(e) {
                    return e.theme.bg3
                }));

            function Po(e) {
                var n = e.id,
                    t = e.isActive,
                    a = e.toggle;
                return o.a.createElement(zo, {
                    id: n,
                    isActive: t,
                    onClick: a
                }, o.a.createElement(Jo, {
                    isActive: t,
                    isOnSwitch: !0
                }, "On"), o.a.createElement(Jo, {
                    isActive: !t,
                    isOnSwitch: !1
                }, "Off"))
            }

            function Vo() {
                var e = Object(qe.a)(["\n    display: none;  \n  "]);
                return Vo = function() {
                    return e
                }, e
            }

            function Yo() {
                var e = Object(qe.a)(["\n  color: #f3841e;\n  ", "\n"]);
                return Yo = function() {
                    return e
                }, e
            }

            function Zo() {
                var e = Object(qe.a)(["\n  height: 2rem;\n  position: relative;\n  padding: 0 0.75rem;\n  flex: 1;\n  border: ", ";\n  :hover {\n    border: ", ";\n  }\n\n  input {\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n  }\n"]);
                return Zo = function() {
                    return e
                }, e
            }

            function Ho() {
                var e = Object(qe.a)(["\n  background: ", ";\n  font-size: 16px;\n  width: auto;\n  outline: none;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  color: ", ";\n  text-align: right;\n"]);
                return Ho = function() {
                    return e
                }, e
            }

            function Qo() {
                var e = Object(qe.a)(["\n  margin-right: 8px;\n  :hover {\n    cursor: pointer;\n  }\n  background-color: ", ";\n  color: ", ";\n"]);
                return Qo = function() {
                    return e
                }, e
            }

            function Xo() {
                var e = Object(qe.a)(["\n    border-radius: 8px;\n  "]);
                return Xo = function() {
                    return e
                }, e
            }

            function _o() {
                var e = Object(qe.a)(["\n  color: ", ";\n  align-items: center;\n  height: 2rem;\n  border-radius: 36px;\n  ", ";\n  font-size: 1rem;\n  width: auto;\n  min-width: 3.5rem;\n  border: 1px solid ", ";\n  outline: none;\n  background: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n  }\n"]);
                return _o = function() {
                    return e
                }, e
            }! function(e) {
                e.InvalidInput = "InvalidInput", e.RiskyLow = "RiskyLow", e.RiskyHigh = "RiskyHigh"
            }(qo || (qo = {})),
            function(e) {
                e.InvalidInput = "InvalidInput"
            }(Go || (Go = {}));
            var $o = Je.default.button(_o(), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(Xo())
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.bg4
                }), (function(e) {
                    return e.theme.primary1
                })),
                ec = Object(Je.default)($o)(Qo(), (function(e) {
                    var n = e.active,
                        t = e.theme;
                    return n && t.primary1
                }), (function(e) {
                    var n = e.active,
                        t = e.theme;
                    return n ? t.white : t.text1
                })),
                nc = Je.default.input(Ho(), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    var n = e.theme;
                    return "red" === e.color ? n.red1 : n.text1
                })),
                tc = Object(Je.default)($o)(Zo(), (function(e) {
                    var n = e.theme,
                        t = e.active,
                        a = e.warning;
                    return t && "1px solid ".concat(a ? n.red1 : n.primary1)
                }), (function(e) {
                    var n = e.theme,
                        t = e.active,
                        a = e.warning;
                    return t && "1px solid ".concat(a ? Object(Ye.a)(.1, n.red1) : Object(Ye.a)(.1, n.primary1))
                })),
                ac = Je.default.span(Yo(), (function(e) {
                    return e.theme.mediaWidth.upToSmall(Vo())
                }));

            function rc(e) {
                var n, t, a = e.rawSlippage,
                    r = e.setRawSlippage,
                    c = e.deadline,
                    u = e.setDeadline,
                    l = Object(i.useContext)(Je.ThemeContext),
                    s = Object(i.useRef)(),
                    d = Object(i.useState)(""),
                    p = Object(k.a)(d, 2),
                    m = p[0],
                    f = p[1],
                    b = Object(i.useState)(""),
                    v = Object(k.a)(b, 2),
                    y = v[0],
                    g = v[1],
                    h = Object(Be.b)().t,
                    E = "" === m || (a / 100).toFixed(2) === Number.parseFloat(m).toFixed(2),
                    O = "" === y || (c / 60).toString() === y;

                function j(e) {
                    f(e);
                    try {
                        var n = Number.parseInt((100 * Number.parseFloat(e)).toString());
                        !Number.isNaN(n) && n < 5e3 && r(n)
                    } catch (t) {}
                }

                function x(e) {
                    g(e);
                    try {
                        var n = 60 * Number.parseInt(e);
                        !Number.isNaN(n) && n > 0 && u(n)
                    } catch (t) {}
                }
                return n = "" === m || E ? E && a < 50 ? qo.RiskyLow : E && a > 500 ? qo.RiskyHigh : void 0 : qo.InvalidInput, t = "" === y || O ? void 0 : Go.InvalidInput, o.a.createElement(mn, {
                    gap: "md"
                }, o.a.createElement(mn, {
                    gap: "sm"
                }, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontWeight: 400,
                    fontSize: 14,
                    color: l.text2
                }, h("Slippagetolerance")), o.a.createElement(Fo, {
                    text: "Your transaction will revert if the price changes unfavorably by more than this percentage."
                })), o.a.createElement(Bn, null, o.a.createElement(ec, {
                    onClick: function() {
                        f(""), r(10)
                    },
                    active: 10 === a
                }, "0.1%"), o.a.createElement(ec, {
                    onClick: function() {
                        f(""), r(50)
                    },
                    active: 50 === a
                }, "0.5%"), o.a.createElement(ec, {
                    onClick: function() {
                        f(""), r(100)
                    },
                    active: 100 === a
                }, "1%"), o.a.createElement(tc, {
                    active: ![10, 50, 100].includes(a),
                    warning: !E,
                    tabIndex: -1
                }, o.a.createElement(Bn, null, !m || n !== qo.RiskyLow && n !== qo.RiskyHigh ? null : o.a.createElement(ac, null, o.a.createElement("span", {
                    role: "img",
                    "aria-label": "warning"
                }, "\u26a0\ufe0f")), o.a.createElement(nc, {
                    ref: s,
                    placeholder: (a / 100).toFixed(2),
                    value: m,
                    onBlur: function() {
                        j((a / 100).toFixed(2))
                    },
                    onChange: function(e) {
                        return j(e.target.value)
                    },
                    color: E ? "" : "red"
                }), "%"))), !!n && o.a.createElement(Bn, {
                    style: {
                        fontSize: "14px",
                        paddingTop: "7px",
                        color: n === qo.InvalidInput ? "red" : "#F3841E"
                    }
                }, n === qo.InvalidInput ? "Enter a valid slippage percentage" : n === qo.RiskyLow ? "Your transaction may fail" : "Your transaction may be frontrun")), o.a.createElement(mn, {
                    gap: "sm"
                }, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontSize: 14,
                    fontWeight: 400,
                    color: l.text2
                }, h("transactionDeadline")), o.a.createElement(Fo, {
                    text: "Your transaction will revert if it is pending for more than this long."
                })), o.a.createElement(Wn, null, o.a.createElement(tc, {
                    style: {
                        width: "80px"
                    },
                    tabIndex: -1
                }, o.a.createElement(nc, {
                    color: t ? "red" : void 0,
                    onBlur: function() {
                        x((c / 60).toString())
                    },
                    placeholder: (c / 60).toString(),
                    value: y,
                    onChange: function(e) {
                        return x(e.target.value)
                    }
                })), o.a.createElement(Cr, {
                    style: {
                        paddingLeft: "8px"
                    },
                    fontSize: 14
                }, "minutes"))))
            }
            var ic = t(207),
                oc = t.n(ic),
                cc = t(208),
                uc = t.n(cc),
                lc = t(209),
                sc = t.n(lc),
                dc = t(210),
                pc = t.n(dc),
                mc = t(211),
                fc = t.n(mc),
                bc = t(212),
                vc = t.n(bc),
                yc = t(339),
                gc = t.n(yc),
                hc = t(340),
                Ec = t.n(hc);

            function Oc() {
                var e = Object(qe.a)(["\n  color: #9AA2B7;\n  font-size: 14px;\n  text-align: center;\n"]);
                return Oc = function() {
                    return e
                }, e
            }

            function kc() {
                var e = Object(qe.a)(["\n  width: 7px;\n  height: 12px;\n"]);
                return kc = function() {
                    return e
                }, e
            }

            function jc() {
                var e = Object(qe.a)(["\n  width: 20px;\n  height: 20px;\n  margin-right: 10px;\n"]);
                return jc = function() {
                    return e
                }, e
            }

            function xc() {
                var e = Object(qe.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 46px;\n  margin-top: 8px;\n  border-bottom: 1px solid #E9EAEC;\n  color: #10283F;\n  font-size: 16px;\n"]);
                return xc = function() {
                    return e
                }, e
            }

            function Ac() {
                var e = Object(qe.a)(["\n  width: 50%;\n  margin-top:20px;\n  display: flex;\n"]);
                return Ac = function() {
                    return e
                }, e
            }

            function wc() {
                var e = Object(qe.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);
                return wc = function() {
                    return e
                }, e
            }

            function Cc() {
                var e = Object(qe.a)(["\n  margin-right: 8px;\n  :hover {\n    cursor: pointer;\n  }\n  background-color: ", ";\n  color: ", ";\n"]);
                return Cc = function() {
                    return e
                }, e
            }

            function Ic() {
                var e = Object(qe.a)(["\n    border-radius: 8px;\n  "]);
                return Ic = function() {
                    return e
                }, e
            }

            function Tc() {
                var e = Object(qe.a)(["\n  color: ", ";\n  align-items: center;\n  height: 2rem;\n  border-radius: 36px;\n  ", ";\n  font-size: 1rem;\n  width: 50%;\n  min-width: 3.5rem;\n  border: 1px solid ", ";\n  outline: none;\n  background: ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n  }\n"]);
                return Tc = function() {
                    return e
                }, e
            }

            function Uc() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  background-color: ", ";\n  border-radius: 20px;\n"]);
                return Uc = function() {
                    return e
                }, e
            }

            function Sc() {
                var e = Object(qe.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]);
                return Sc = function() {
                    return e
                }, e
            }

            function Rc() {
                var e = Object(qe.a)(["\n  //   top: -22rem;\n  // "]);
                return Rc = function() {
                    return e
                }, e
            }

            function Nc() {
                var e = Object(qe.a)(["\n    min-width: 19.125rem;\n  "]);
                return Nc = function() {
                    return e
                }, e
            }

            function Kc() {
                var e = Object(qe.a)(["\n  min-width: 20.125rem;\n  background-color: ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 4rem;\n  right: 0rem;\n  z-index: 100;\n\n  ", ";\n\n  // ", ";\n"]);
                return Kc = function() {
                    return e
                }, e
            }

            function Mc() {
                var e = Object(qe.a)(["\n  margin-left: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  text-align: left;\n"]);
                return Mc = function() {
                    return e
                }, e
            }

            function Bc() {
                var e = Object(qe.a)(["\n  position: absolute;\n  bottom: -6px;\n  right: 0px;\n  font-size: 14px;\n"]);
                return Bc = function() {
                    return e
                }, e
            }

            function Lc() {
                var e = Object(qe.a)(["\n    padding: 2px 6px;\n    border-radius: 4px;\n    height: 30px;\n "]);
                return Lc = function() {
                    return e
                }, e
            }

            function Fc() {
                var e = Object(qe.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n  background-color: ", ";\n  padding: 0.15rem 0.5rem;\n  border-radius: 8px;\n  ", ";\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n    background-color: ", ";\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n"]);
                return Fc = function() {
                    return e
                }, e
            }

            function Wc() {
                var e = Object(qe.a)(["\n  height: 20px;\n  width: 20px;\n  :hover {\n    cursor: pointer;\n  }\n\n  > * {\n    stroke: ", ";\n  }\n"]);
                return Wc = function() {
                    return e
                }, e
            }

            function Dc() {
                var e = Object(qe.a)(["\n  height: 20px;\n  width: 20px;\n\n  > * {\n    stroke: ", ";\n  }\n"]);
                return Dc = function() {
                    return e
                }, e
            }
            var qc = Object(Je.default)(yo.a)(Dc(), (function(e) {
                    return e.theme.text1
                })),
                Gc = Object(Je.default)(Fa.a)(Wc(), (function(e) {
                    return e.theme.text1
                })),
                Jc = Je.default.button(Fc(), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Lc())
                }), (function(e) {
                    return e.theme.bg4
                })),
                zc = Je.default.div(Bc()),
                Pc = Je.default.div(Mc()),
                Vc = Je.default.span(Kc(), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.mediaWidth.upToExtraSmall(Nc())
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Rc())
                })),
                Yc = Je.default.div(Sc(), (function(e) {
                    return e.theme.bg3
                })),
                Zc = Je.default.div(Uc(), (function(e) {
                    return e.theme.bg2
                })),
                Hc = Je.default.button(Tc(), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(Ic())
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.bg4
                }), (function(e) {
                    return e.theme.primary1
                })),
                Qc = Object(Je.default)(Hc)(Cc(), (function(e) {
                    var n = e.active,
                        t = e.theme;
                    return n && t.primary1
                }), (function(e) {
                    var n = e.active,
                        t = e.theme;
                    return n ? t.white : t.text1
                })),
                Xc = Je.default.ul(wc()),
                _c = Je.default.a(Ac()),
                $c = Je.default.a(xc()),
                eu = Je.default.img(jc()),
                nu = Je.default.img(kc()),
                tu = Je.default.p(Oc());

            function au() {
                var e = Object(i.useRef)(),
                    n = at(Qn.SETTINGS),
                    t = rt(Qn.SETTINGS),
                    a = Object(Be.b)().t,
                    r = Object(i.useContext)(Je.ThemeContext),
                    c = Na(),
                    u = Object(k.a)(c, 2),
                    s = u[0],
                    d = u[1],
                    p = function() {
                        var e = Object(l.c)();
                        return [Object(l.d)((function(e) {
                            return e.user.userDeadline
                        })), Object(i.useCallback)((function(n) {
                            e(ja({
                                userDeadline: n
                            }))
                        }), [e])]
                    }(),
                    m = Object(k.a)(p, 2),
                    f = m[0],
                    b = m[1],
                    v = Ra(),
                    y = Object(k.a)(v, 2),
                    g = y[0],
                    h = y[1],
                    E = localStorage.getItem("i18nextLng") || "en",
                    O = Object(i.useState)(E),
                    j = Object(k.a)(O, 2),
                    x = j[0],
                    A = j[1],
                    w = Object(i.useState)(!1),
                    C = Object(k.a)(w, 2),
                    I = C[0],
                    T = C[1];
                return go(e, n ? t : void 0), o.a.createElement(Pc, {
                    ref: e
                }, o.a.createElement(cn, {
                    isOpen: I,
                    onDismiss: function() {
                        return T(!1)
                    },
                    maxHeight: 100
                }, o.a.createElement(Zc, null, o.a.createElement(mn, {
                    gap: "lg"
                }, o.a.createElement(Bn, {
                    style: {
                        padding: "0 2rem"
                    }
                }, o.a.createElement("div", null), o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20
                }, "Are you sure?"), o.a.createElement(Gc, {
                    onClick: function() {
                        return T(!1)
                    }
                })), o.a.createElement(Yc, null), o.a.createElement(mn, {
                    gap: "lg",
                    style: {
                        padding: "0 2rem"
                    }
                }, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20
                }, "Expert mode turns off the confirm transaction prompt and allows high slippage trades that often result in bad rates and lost funds."), o.a.createElement(La.b, {
                    fontWeight: 600,
                    fontSize: 20
                }, "ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING."), o.a.createElement(di, {
                    error: !0,
                    padding: "12px",
                    onClick: function() {
                        "confirm" === window.prompt('Please type the word "confirm" to enable expert mode.') && (h(), T(!1))
                    }
                }, o.a.createElement(La.b, {
                    fontSize: 20,
                    fontWeight: 500,
                    id: "confirm-expert-mode"
                }, "Turn On Expert Mode")))))), o.a.createElement(Jc, {
                    onClick: t,
                    id: "open-settings-dialog-button"
                }, o.a.createElement(qc, null), g ? o.a.createElement(zc, null, o.a.createElement("span", {
                    role: "img",
                    "aria-label": "wizard-icon"
                }, "\ud83e\uddd9")) : null), n && o.a.createElement(Vc, null, o.a.createElement(mn, {
                    gap: "sm",
                    style: {
                        padding: "1rem"
                    }
                }, o.a.createElement(La.b, {
                    fontWeight: 600,
                    fontSize: 14
                }, a("transactionSettings")), o.a.createElement(rc, {
                    rawSlippage: s,
                    setRawSlippage: d,
                    deadline: f,
                    setDeadline: b
                }), o.a.createElement(La.b, {
                    fontWeight: 400,
                    fontSize: 14
                }, a("interfaceSettings")), o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontWeight: 400,
                    fontSize: 14,
                    color: r.text2
                }, a("toggleExpertMode")), o.a.createElement(Fo, {
                    text: "Bypasses confirmation modals and allows high slippage trades. Use at your own risk."
                })), o.a.createElement(Po, {
                    id: "toggle-expert-mode-button",
                    isActive: g,
                    toggle: g ? function() {
                        h(), T(!1)
                    } : function() {
                        t(), T(!0)
                    }
                })), Re.isMobile && o.a.createElement(o.a.Fragment, null, o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontWeight: 400,
                    fontSize: 14
                }, a("langSet")))), o.a.createElement(Bn, null, o.a.createElement(Qc, {
                    onClick: function() {
                        A("en"), Me.a.changeLanguage("en")
                    },
                    active: "en" == x
                }, "English"), o.a.createElement(Qc, {
                    onClick: function() {
                        A("zh-CN"), Me.a.changeLanguage("zh-CN")
                    },
                    active: "zh-CN" == x
                }, "\u4e2d\u6587")), o.a.createElement(Xc, null, o.a.createElement(_c, {
                    href: "https://github.com/vkcapital",
                    target: "_blank"
                }, o.a.createElement("img", {
                    src: uc.a,
                    width: 20,
                    height: 20,
                    style: {
                        marginRight: "20px"
                    }
                }), o.a.createElement(La.b, {
                    fontWeight: 800,
                    fontSize: 14,
                    color: "#48587B"
                }, "Github")), o.a.createElement(_c, {
                    href: "https://medium.com/vkcapital.com",
                    target: "_blank"
                }, o.a.createElement("img", {
                    src: fc.a,
                    width: 20,
                    height: 20,
                    style: {
                        marginRight: "20px"
                    }
                }), o.a.createElement(La.b, {
                    fontWeight: 800,
                    fontSize: 14,
                    color: "#48587B"
                }, "Medium")), o.a.createElement(_c, {
                    href: "https://t.me/MixDex",
                    target: "_blank"
                }, o.a.createElement("img", {
                    src: vc.a,
                    width: 20,
                    height: 20,
                    style: {
                        marginRight: "20px"
                    }
                }), o.a.createElement(La.b, {
                    fontWeight: 800,
                    fontSize: 14,
                    color: "#48587B"
                }, "Telegram")), o.a.createElement(_c, {
                    href: "https://twitter.com/vkcapital",
                    target: "_blank"
                }, o.a.createElement("img", {
                    src: pc.a,
                    width: 20,
                    height: 20,
                    style: {
                        marginRight: "20px"
                    }
                }), o.a.createElement(La.b, {
                    fontWeight: 800,
                    fontSize: 14,
                    color: "#48587B"
                }, "Twitter")), o.a.createElement(_c, {
                    href: "https://discord.com/invite/3TYDPktjqC",
                    target: "_blank"
                }, o.a.createElement("img", {
                    src: oc.a,
                    width: 20,
                    height: 20,
                    style: {
                        marginRight: "20px"
                    }
                }), o.a.createElement(La.b, {
                    fontWeight: 800,
                    fontSize: 14,
                    color: "#48587B"
                }, "Discord")), o.a.createElement(_c, null, o.a.createElement("img", {
                    src: sc.a,
                    width: 20,
                    height: 20,
                    style: {
                        marginRight: "20px"
                    }
                }), o.a.createElement(La.b, {
                    fontWeight: 800,
                    fontSize: 14,
                    color: "#48587B"
                }, a("Fund")))), o.a.createElement($c, {
                    className: "Annocument",
                    href: "https://mdexcom.zendesk.com/hc/".concat("en" == E ? "en-gb" : "zh-cn"),
                    target: "_blank"
                }, o.a.createElement("span", {
                    style: {
                        display: "flex"
                    }
                }, o.a.createElement(eu, {
                    src: gc.a
                }), a("announcement")), o.a.createElement(nu, {
                    src: Ec.a
                })), o.a.createElement(tu, null, a("Cooperation"), "hello@vkcapital.com")))))
            }
            var ru, iu = t(341),
                ou = new Zt.b(Gt.a),
                cu = (new Zt.b(iu.a), t(171));

            function uu() {
                var e = Object(Ge.g)().search;
                return Object(i.useMemo)((function() {
                    return e && e.length > 1 ? Object(cu.parse)(e, {
                        parseArrays: !1,
                        ignoreQueryPrefix: !0
                    }) : {}
                }), [e])
            }! function(e) {
                e.v1 = "v1", e.v2 = "v2"
            }(ru || (ru = {}));
            var lu = ru.v2;

            function su() {
                var e = uu().use;
                return e && "string" === typeof e ? "v1" === e.toLowerCase() ? ru.v2 : lu : ru.v2
            }
            var du = t(234);

            function pu(e, n) {
                return n && e === f.d ? f.o[n] : e instanceof f.k ? e : void 0
            }

            function mu(e, n) {
                var t = e && n ? pu(e.currency, n) : void 0;
                return t && e ? new f.l(t, e.raw) : void 0
            }

            function fu(e) {
                return e.equals(f.o[e.chainId]) ? f.d : e
            }
            var bu, vu, yu = new Zt.b(zt.a);

            function gu(e) {
                var n = Ne().chainId,
                    t = Object(i.useMemo)((function() {
                        return e.map((function(e) {
                            var t = Object(k.a)(e, 2),
                                a = t[0],
                                r = t[1];
                            return [pu(a, n), pu(r, n)]
                        }))
                    }), [n, e]),
                    a = At(Object(i.useMemo)((function() {
                        return t.map((function(e) {
                            var n = Object(k.a)(e, 2),
                                t = n[0],
                                a = n[1];
                            if (1 != (null === t || void 0 === t ? void 0 : t.chainId) && 1 != (null === a || void 0 === a ? void 0 : a.chainId)) return t && a && !t.equals(a) ? f.f.getAddress(t, a) : void 0
                        }))
                    }), [t]), yu, "getReserves");
                return Object(i.useMemo)((function() {
                    return a.map((function(e, n) {
                        var a = e.result,
                            r = e.loading,
                            i = t[n][0],
                            o = t[n][1];
                        if (r) return [bu.LOADING, null];
                        if (!i || !o || i.equals(o)) return [bu.INVALID, null];
                        if (!a) return [bu.NOT_EXISTS, null];
                        var c = a.reserve0,
                            u = a.reserve1,
                            l = i.sortsBefore(o) ? [i, o] : [o, i],
                            s = Object(k.a)(l, 2),
                            d = s[0],
                            p = s[1];
                        return [bu.EXISTS, new f.f(new f.l(d, c.toString()), new f.l(p, u.toString()))]
                    }))
                }), [a, t])
            }

            function hu(e, n) {
                return gu([
                    [e, n]
                ])[0]
            }

            function Eu(e, n) {
                var t = Ne().chainId,
                    a = t ? ve[t] : [],
                    r = t ? [pu(e, t), pu(n, t)] : [void 0, void 0],
                    o = Object(k.a)(r, 2),
                    c = o[0],
                    u = o[1],
                    l = Object(i.useMemo)((function() {
                        return Gn()(a, (function(e) {
                            return a.map((function(n) {
                                return [e, n]
                            }))
                        })).filter((function(e) {
                            var n = Object(k.a)(e, 2),
                                t = n[0],
                                a = n[1];
                            return t.address !== a.address
                        }))
                    }), [a]),
                    s = gu(Object(i.useMemo)((function() {
                        return c && u ? [
                            [c, u]
                        ].concat(Object(d.a)(a.map((function(e) {
                            return [c, e]
                        }))), Object(d.a)(a.map((function(e) {
                            return [u, e]
                        }))), Object(d.a)(l)).filter((function(e) {
                            return Boolean(e[0] && e[1])
                        })).filter((function(e) {
                            var n = Object(k.a)(e, 2),
                                t = n[0],
                                a = n[1];
                            return t.address !== a.address
                        })).filter((function(e) {
                            var n = Object(k.a)(e, 2),
                                a = n[0],
                                r = n[1];
                            if (!t) return !0;
                            var i = ye[t];
                            if (!i) return !0;
                            var o = i[a.address],
                                c = i[r.address];
                            return !o && !c || !(o && !o.find((function(e) {
                                return r.equals(e)
                            }))) && !(c && !c.find((function(e) {
                                return a.equals(e)
                            })))
                        })) : []
                    }), [c, u, a, l, t]));
                return Object(i.useMemo)((function() {
                    return Object.values(s.filter((function(e) {
                        return Boolean(e[0] === bu.EXISTS && e[1])
                    })).reduce((function(e, n) {
                        var t, a = Object(k.a)(n, 2)[1];
                        return e[a.liquidityToken.address] = null !== (t = e[a.liquidityToken.address]) && void 0 !== t ? t : a, e
                    }), {}))
                }), [s])
            }! function(e) {
                e[e.LOADING = 0] = "LOADING", e[e.NOT_EXISTS = 1] = "NOT_EXISTS", e[e.EXISTS = 2] = "EXISTS", e[e.INVALID = 3] = "INVALID"
            }(bu || (bu = {})),
            function(e) {
                e.INPUT = "INPUT", e.OUTPUT = "OUTPUT"
            }(vu || (vu = {}));
            var Ou = Object(Xn.b)("swap/selectCurrency"),
                ku = Object(Xn.b)("swap/switchCurrencies"),
                ju = Object(Xn.b)("swap/typeInput"),
                xu = Object(Xn.b)("swap/replaceSwapState"),
                Au = Object(Xn.b)("swap/setRecipient"),
                wu = new f.g(f.e.BigInt(30), f.e.BigInt(1e4)),
                Cu = new f.g(f.e.BigInt(1e4), f.e.BigInt(1e4)),
                Iu = Cu.subtract(wu);

            function Tu(e) {
                var n = e ? Cu.subtract(e.route.pairs.reduce((function(e) {
                        return e.multiply(Iu)
                    }), Cu)) : void 0,
                    t = e && n ? e.priceImpact.subtract(n) : void 0;
                return {
                    priceImpactWithoutFee: t ? new f.g(null === t || void 0 === t ? void 0 : t.numerator, null === t || void 0 === t ? void 0 : t.denominator) : void 0,
                    realizedLPFee: n && e && (e.inputAmount instanceof f.l ? new f.l(e.inputAmount.token, n.multiply(e.inputAmount.raw).quotient) : f.c.ether(n.multiply(e.inputAmount.raw).quotient))
                }
            }

            function Uu(e, n) {
                var t, a, r = (a = n, new f.g(f.e.BigInt(a), f.e.BigInt(1e4)));
                return t = {}, Object(m.a)(t, vu.INPUT, null === e || void 0 === e ? void 0 : e.maximumAmountIn(r)), Object(m.a)(t, vu.OUTPUT, null === e || void 0 === e ? void 0 : e.minimumAmountOut(r)), t
            }

            function Su(e) {
                return (null === e || void 0 === e ? void 0 : e.lessThan(Te)) ? (null === e || void 0 === e ? void 0 : e.lessThan(Ce)) ? (null === e || void 0 === e ? void 0 : e.lessThan(we)) ? (null === e || void 0 === e ? void 0 : e.lessThan(Ae)) ? 0 : 1 : 2 : 3 : 4
            }

            function Ru() {
                return Object(l.d)((function(e) {
                    return e.swap
                }))
            }

            function Nu(e, n) {
                if (e && n) try {
                    var t = Object(du.parseUnits)(e, n.decimals).toString();
                    if ("0" !== t) return n instanceof f.k ? new f.l(n, f.e.BigInt(t)) : f.c.ether(f.e.BigInt(t))
                } catch (a) {
                    console.debug('Failed to parse input amount: "'.concat(e, '"'), a)
                }
            }
            var Ku = ["0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f", "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", "0x7DAe51BD3E3376B8c7c4900E9107f12Be3AF1bA8"];

            function Mu(e, n) {
                return e.route.path.some((function(e) {
                    return e.address === n
                })) || e.route.pairs.some((function(e) {
                    return e.liquidityToken.address === n
                }))
            }

            function Bu() {
                var e, n, t, a, r, o, c, u = Ne().account,
                    l = su(),
                    s = Object(Be.b)().t,
                    d = Ru(),
                    p = d.independentField,
                    b = d.typedValue,
                    v = d[vu.INPUT].currencyId,
                    y = d[vu.OUTPUT].currencyId,
                    g = d.recipient,
                    h = ga(v),
                    E = ga(y),
                    O = Ri(null !== g && void 0 !== g ? g : void 0),
                    j = null !== (e = null === g ? u : O.address) && void 0 !== e ? e : null,
                    x = Zu(null !== u && void 0 !== u ? u : void 0, [null !== h && void 0 !== h ? h : void 0, null !== E && void 0 !== E ? E : void 0]),
                    A = p === vu.INPUT,
                    w = Nu(b, null !== (n = A ? h : E) && void 0 !== n ? n : void 0),
                    C = function(e, n) {
                        var t = Eu(null === e || void 0 === e ? void 0 : e.currency, n);
                        return Object(i.useMemo)((function() {
                            var a;
                            return e && n && t.length > 0 && null !== (a = f.m.bestTradeExactIn(t, e, n, {
                                maxHops: 3,
                                maxNumResults: 1
                            })[0]) && void 0 !== a ? a : null
                        }), [t, e, n])
                    }(A ? w : void 0, null !== E && void 0 !== E ? E : void 0),
                    I = function(e, n) {
                        var t = Eu(e, null === n || void 0 === n ? void 0 : n.currency);
                        return Object(i.useMemo)((function() {
                            var a;
                            return e && n && t.length > 0 && null !== (a = f.m.bestTradeExactOut(t, e, n, {
                                maxHops: 3,
                                maxNumResults: 1
                            })[0]) && void 0 !== a ? a : null
                        }), [t, e, n])
                    }(null !== h && void 0 !== h ? h : void 0, A ? void 0 : w),
                    T = A ? C : I,
                    U = (t = {}, Object(m.a)(t, vu.INPUT, x[0]), Object(m.a)(t, vu.OUTPUT, x[1]), t),
                    S = (a = {}, Object(m.a)(a, vu.INPUT, null !== h && void 0 !== h ? h : void 0), Object(m.a)(a, vu.OUTPUT, null !== E && void 0 !== E ? E : void 0), a);
                (u || (r = s("connectWallet")), w) || (r = null !== (o = r) && void 0 !== o ? o : s("enterAmount"));
                S[vu.INPUT] && S[vu.OUTPUT] || (r = null !== (c = r) && void 0 !== c ? c : s("selectToken"));
                var R, N, K = Rt(j);
                j && K ? (-1 !== Ku.indexOf(K) || C && Mu(C, K) || I && Mu(I, K)) && (r = null !== (R = r) && void 0 !== R ? R : "Invalid recipient") : r = null !== (N = r) && void 0 !== N ? N : "Enter a recipient";
                var M = Na(),
                    B = Object(k.a)(M, 1)[0],
                    L = T && B && Uu(T, B),
                    F = [U[vu.INPUT], l === ru.v1 ? null : L ? L[vu.INPUT] : null],
                    W = F[0],
                    D = F[1];
                return W && D && W.lessThan(D) && (r = "Insufficient " + D.currency.symbol + " balance"), {
                    currencies: S,
                    currencyBalances: U,
                    parsedAmount: w,
                    v2Trade: null !== T && void 0 !== T ? T : void 0,
                    inputError: r
                }
            }

            function Lu(e) {
                if ("string" === typeof e) {
                    var n = Rt(e);
                    if (n) return n;
                    if ("BNB" === e.toUpperCase()) return "BNB";
                    if (!1 === n) return "BNB"
                }
                return null !== "BNB" ? "BNB" : ""
            }
            var Fu = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
                Wu = /^0x[a-fA-F0-9]{40}$/;

            function Du(e) {
                var n, t = Lu(e.inputCurrency),
                    a = Lu(e.outputCurrency);
                t === a && ("string" === typeof e.outputCurrency ? t = "" : a = "");
                var r, i = function(e) {
                    if ("string" !== typeof e) return null;
                    var n = Rt(e);
                    return n || (Fu.test(e) || Wu.test(e) ? e : null)
                }(e.recipient);
                return n = {}, Object(m.a)(n, vu.INPUT, {
                    currencyId: t
                }), Object(m.a)(n, vu.OUTPUT, {
                    currencyId: a
                }), Object(m.a)(n, "typedValue", "string" !== typeof(r = e.exactAmount) || isNaN(parseFloat(r)) ? "" : r), Object(m.a)(n, "independentField", function(e) {
                    return "string" === typeof e && "output" === e.toLowerCase() ? vu.OUTPUT : vu.INPUT
                }(e.exactField)), Object(m.a)(n, "recipient", i), n
            }

            function qu() {
                var e, n;
                return null === (e = wt(pa(), "getCurrentBlockTimestamp")) || void 0 === e || null === (n = e.result) || void 0 === n ? void 0 : n[0]
            }
            var Gu = Object(m.a)({}, f.a.MAINNET, [{
                tokens: [f.o[f.a.MAINNET], ue],
                stakingRewardAddress: "0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711"
            }, {
                tokens: [f.o[f.a.MAINNET], oe],
                stakingRewardAddress: "0x7FBa4B8Dc5E7616e59622806932DBea72537A56b"
            }, {
                tokens: [f.o[f.a.MAINNET], ie],
                stakingRewardAddress: "0x6C3e4cb2E96B01F4b866965A91ed4437839A121a"
            }, {
                tokens: [f.o[f.a.MAINNET], ae],
                stakingRewardAddress: "0xCA35e32e7926b96A9988f61d510E038108d8068e"
            }]);

            function Ju(e) {
                var n = Ne(),
                    t = n.chainId,
                    a = n.account,
                    r = qu(),
                    o = Object(i.useMemo)((function() {
                        var n, a;
                        return t && null !== (n = null === (a = Gu[t]) || void 0 === a ? void 0 : a.filter((function(n) {
                            return void 0 === e || null !== e && (e.involvesToken(n.tokens[0]) && e.involvesToken(n.tokens[1]))
                        }))) && void 0 !== n ? n : []
                    }), [t, e]),
                    c = t ? me[t] : void 0,
                    u = Object(i.useMemo)((function() {
                        return o.map((function(e) {
                            return e.stakingRewardAddress
                        }))
                    }), [o]),
                    l = Object(i.useMemo)((function() {
                        return [null !== a && void 0 !== a ? a : void 0]
                    }), [a]),
                    s = At(u, ou, "balanceOf", l),
                    d = At(u, ou, "earned", l),
                    p = At(u, ou, "totalSupply"),
                    m = At(u, ou, "rewardRate", void 0, ht),
                    b = At(u, ou, "periodFinish", void 0, ht);
                return Object(i.useMemo)((function() {
                    return t && c ? u.reduce((function(e, n, t) {
                        var a = s[t],
                            i = d[t],
                            u = p[t],
                            l = m[t],
                            v = b[t];
                        if (!(null === a || void 0 === a ? void 0 : a.loading) && !(null === i || void 0 === i ? void 0 : i.loading) && u && !u.loading && l && !l.loading && v && !v.loading) {
                            var y, g, h, E, O, k, j, x;
                            if ((null === a || void 0 === a ? void 0 : a.error) || (null === i || void 0 === i ? void 0 : i.error) || u.error || l.error || v.error) return console.error("Failed to load staking rewards info"), e;
                            var A = o[t].tokens,
                                w = new f.f(new f.l(A[0], "0"), new f.l(A[1], "0")),
                                C = new f.l(w.liquidityToken, f.e.BigInt(null !== (y = null === a || void 0 === a || null === (g = a.result) || void 0 === g ? void 0 : g[0]) && void 0 !== y ? y : 0)),
                                I = new f.l(w.liquidityToken, f.e.BigInt(null === (h = u.result) || void 0 === h ? void 0 : h[0])),
                                T = new f.l(c, f.e.BigInt(null === (E = l.result) || void 0 === E ? void 0 : E[0])),
                                U = function(e, n, t) {
                                    return new f.l(c, f.e.greaterThan(n.raw, f.e.BigInt(0)) ? f.e.divide(f.e.multiply(t.raw, e.raw), n.raw) : f.e.BigInt(0))
                                },
                                S = U(C, I, T),
                                R = null === (O = v.result) || void 0 === O || null === (k = O[0]) || void 0 === k ? void 0 : k.toNumber(),
                                N = 1e3 * R,
                                K = !R || !r || R > r.toNumber();
                            e.push({
                                stakingRewardAddress: n,
                                tokens: o[t].tokens,
                                periodFinish: N > 0 ? new Date(N) : void 0,
                                earnedAmount: new f.l(c, f.e.BigInt(null !== (j = null === i || void 0 === i || null === (x = i.result) || void 0 === x ? void 0 : x[0]) && void 0 !== j ? j : 0)),
                                rewardRate: S,
                                totalRewardRate: T,
                                stakedAmount: C,
                                totalStakedAmount: I,
                                getHypotheticalRewardRate: U,
                                active: K
                            })
                        }
                        return e
                    }), []) : []
                }), [s, t, r, d, o, b, m, u, p, c])
            }

            function zu(e) {
                var n = pa(),
                    t = Object(i.useMemo)((function() {
                        return e ? e.map(Rt).filter((function(e) {
                            return !1 !== e
                        })).sort() : []
                    }), [e]),
                    a = xt(n, "getEthBalance", t.map((function(e) {
                        return [e]
                    })));
                return Object(i.useMemo)((function() {
                    return t.reduce((function(e, n, t) {
                        var r, i, o = null === a || void 0 === a || null === (r = a[t]) || void 0 === r || null === (i = r.result) || void 0 === i ? void 0 : i[0];
                        return o && (e[n] = f.c.ether(f.e.BigInt(o.toString()))), e
                    }), {})
                }), [t, a])
            }

            function Pu(e, n) {
                var t = Object(i.useMemo)((function() {
                        var e;
                        return null !== (e = null === n || void 0 === n ? void 0 : n.filter((function(e) {
                            return !1 !== Rt(null === e || void 0 === e ? void 0 : e.address)
                        }))) && void 0 !== e ? e : []
                    }), [n]),
                    a = At(Object(i.useMemo)((function() {
                        return t.map((function(e) {
                            return e.address
                        }))
                    }), [t]), _t, "balanceOf", [e]),
                    r = Object(i.useMemo)((function() {
                        return a.some((function(e) {
                            return e.loading
                        }))
                    }), [a]);
                return [Object(i.useMemo)((function() {
                    return e && t.length > 0 ? t.reduce((function(e, n, t) {
                        var r, i, o = null === a || void 0 === a || null === (r = a[t]) || void 0 === r || null === (i = r.result) || void 0 === i ? void 0 : i[0],
                            c = o ? f.e.BigInt(o.toString()) : void 0;
                        return c && (e[n.address] = new f.l(n, c)), e
                    }), {}) : {}
                }), [e, t, a]), r]
            }

            function Vu(e, n) {
                return Pu(e, n)[0]
            }

            function Yu(e, n) {
                var t = Vu(e, [n]);
                if (n) return t[n.address]
            }

            function Zu(e, n) {
                var t = Object(i.useMemo)((function() {
                        var e;
                        return null !== (e = null === n || void 0 === n ? void 0 : n.filter((function(e) {
                            return e instanceof f.k
                        }))) && void 0 !== e ? e : []
                    }), [n]),
                    a = Vu(e, t),
                    r = zu(Object(i.useMemo)((function() {
                        var e;
                        return null !== (e = null === n || void 0 === n ? void 0 : n.some((function(e) {
                            return e === f.d
                        }))) && void 0 !== e && e
                    }), [n]) ? [e] : []);
                return Object(i.useMemo)((function() {
                    var t;
                    return null !== (t = null === n || void 0 === n ? void 0 : n.map((function(n) {
                        if (e && n) return n instanceof f.k ? a[n.address] : n === f.d ? r[e] : void 0
                    }))) && void 0 !== t ? t : []
                }), [e, n, r, a])
            }

            function Hu(e, n) {
                return Zu(e, [n])[0]
            }

            function Qu(e, n) {
                var t = Object(i.useState)(n && n(e) ? e : void 0),
                    a = Object(k.a)(t, 2),
                    r = a[0],
                    o = a[1];
                return Object(i.useEffect)((function() {
                    o((function(t) {
                        return !n || n(e) ? e : t
                    }))
                }), [n, e]), r
            }

            function Xu(e) {
                return null !== e && void 0 !== e
            }
            var _u = t(213),
                $u = t.n(_u),
                el = t(241),
                nl = t.n(el),
                tl = t(141),
                al = t(116);
            var rl = new TextDecoder;

            function il(e) {
                var n = function(e) {
                        if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0) throw new Error("hex must have length that is multiple of 2");
                        for (var n = new Uint8Array(e.length / 2), t = 0; t < n.length; t++) n[t] = parseInt(e.substr(2 * t, 2), 16);
                        return n
                    }(e),
                    t = Object(tl.getCodec)(n);
                switch (t) {
                    case "ipfs-ns":
                        var a = Object(tl.rmPrefix)(n),
                            r = new nl.a(a);
                        return "ipfs://".concat(Object(al.toB58String)(r.multihash));
                    case "ipns-ns":
                        var i = Object(tl.rmPrefix)(n),
                            o = new nl.a(i),
                            c = Object(al.decode)(o.multihash);
                        return "identity" === c.name ? "ipns://".concat(rl.decode(c.digest).trim()) : "ipns://".concat(Object(al.toB58String)(o.multihash));
                    default:
                        throw new Error("Unrecognized codec: ".concat(t))
                }
            }
            var ol = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/;

            function cl(e) {
                var n = e.match(ol);
                if (n) return {
                    ensName: "".concat(n[1].toLowerCase(), "eth"),
                    ensPath: n[4]
                }
            }

            function ul(e) {
                var n, t;
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https" + e.substr(4), e];
                    case "ipfs":
                        var a = null === (n = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(a, "/"), "https://ipfs.io/ipfs/".concat(a, "/")];
                    case "ipns":
                        var r = null === (t = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(r, "/"), "https://ipfs.io/ipns/".concat(r, "/")];
                    default:
                        return []
                }
            }

            function ll(e) {
                var n = Object(i.useMemo)((function() {
                        return e ? cl(e) : void 0
                    }), [e]),
                    t = function(e) {
                        var n, t, a, r = Object(i.useMemo)((function() {
                                if (!e) return [void 0];
                                try {
                                    return e ? [Object(Ci.namehash)(e)] : [void 0]
                                } catch (n) {
                                    return [void 0]
                                }
                            }), [e]),
                            o = wt(sa(!1), "resolver", r),
                            c = null === (n = o.result) || void 0 === n ? void 0 : n[0],
                            u = wt(da(c && Ii(c) ? void 0 : c, !1), "contenthash", r);
                        return {
                            contenthash: null !== (t = null === (a = u.result) || void 0 === a ? void 0 : a[0]) && void 0 !== t ? t : null,
                            loading: o.loading || u.loading
                        }
                    }(null === n || void 0 === n ? void 0 : n.ensName);
                return Object(i.useMemo)((function() {
                    return n ? t.contenthash ? ul(il(t.contenthash)) : [] : e ? ul(e) : []
                }), [n, t.contenthash, e])
            }
            var sl = {};

            function dl(e) {
                var n = e.srcs,
                    t = e.alt,
                    a = Object(ze.a)(e, ["srcs", "alt"]),
                    r = Object(i.useState)(0),
                    c = Object(k.a)(r, 2)[1],
                    u = n.find((function(e) {
                        return !sl[e]
                    }));
                return u ? o.a.createElement("img", Object.assign({}, a, {
                    alt: t,
                    src: u,
                    onError: function() {
                        u && (sl[u] = !0), c((function(e) {
                            return e + 1
                        }))
                    }
                })) : o.a.createElement(ho.a, a)
            }

            function pl() {
                var e = Object(qe.a)(["\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.08);\n"]);
                return pl = function() {
                    return e
                }, e
            }

            function ml() {
                var e = Object(qe.a)(["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n"]);
                return ml = function() {
                    return e
                }, e
            }
            var fl = function(e) {
                    return "https://vkcapital.com/token-icons/bsc/".concat(e.toLowerCase(), ".png")
                },
                bl = Je.default.img(ml(), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                })),
                vl = Object(Je.default)(dl)(pl(), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }));

            function yl(e) {
                var n, t = e.currency,
                    a = e.size,
                    r = void 0 === a ? "24px" : a,
                    c = e.style,
                    u = ll(t instanceof zn ? t.logoURI : void 0),
                    l = Object(i.useMemo)((function() {
                        return t === f.d ? [] : t instanceof f.k ? t instanceof zn ? [].concat(Object(d.a)(u), [fl(t.address)]) : [fl(t.address)] : []
                    }), [t, u]);
                return t === f.d ? o.a.createElement(bl, {
                    src: $u.a,
                    size: r,
                    style: c
                }) : o.a.createElement(vl, {
                    size: r,
                    srcs: l,
                    alt: "".concat(null !== (n = null === t || void 0 === t ? void 0 : t.symbol) && void 0 !== n ? n : "token", " logo"),
                    style: c
                })
            }

            function gl() {
                var e = Object(qe.a)(["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"]);
                return gl = function() {
                    return e
                }, e
            }
            var hl = Je.default.div(gl(), (function(e) {
                var n = e.theme;
                return e.disable ? "transparent" : n.bg3
            }), (function(e) {
                return !e.disable && "pointer"
            }), (function(e) {
                var n = e.theme;
                return !e.disable && n.bg2
            }), (function(e) {
                var n = e.theme;
                return e.disable && n.bg3
            }), (function(e) {
                return e.disable && "0.4"
            }));

            function El(e) {
                var n = e.chainId,
                    t = e.onSelect,
                    a = e.selectedCurrency,
                    r = Object(Be.b)().t;
                return o.a.createElement(mn, {
                    gap: "md"
                }, o.a.createElement(Fn, null, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 14
                }, r("commonbases")), o.a.createElement(Fo, {
                    text: r("text26")
                })), o.a.createElement(Fn, {
                    gap: "4px"
                }, o.a.createElement(hl, {
                    onClick: function() {
                        a && Object(f.p)(a, f.d) || t(f.d)
                    },
                    disable: a === f.d
                }, o.a.createElement(yl, {
                    currency: f.d,
                    style: {
                        marginRight: 8
                    }
                }), o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 16
                }, "BNB")), (n ? ge[1 == n ? 56 : n] : []).map((function(e) {
                    var n = a instanceof f.k && a.address === e.address;
                    return o.a.createElement(hl, {
                        onClick: function() {
                            return !n && t(e)
                        },
                        disable: n,
                        key: e.address
                    }, o.a.createElement(yl, {
                        currency: e,
                        style: {
                            marginRight: 8
                        }
                    }), o.a.createElement(La.b, {
                        fontWeight: 500,
                        fontSize: 16
                    }, e.symbol))
                }))))
            }
            var Ol = t(342);

            function kl() {
                var e = Object(qe.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]);
                return kl = function() {
                    return e
                }, e
            }

            function jl() {
                var e = Object(qe.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]);
                return jl = function() {
                    return e
                }, e
            }

            function xl() {
                var e = Object(qe.a)(["\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ", ";\n  border-style: solid;\n  border: 1px solid ", ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ", ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"]);
                return xl = function() {
                    return e
                }, e
            }

            function Al() {
                var e = Object(qe.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"]);
                return Al = function() {
                    return e
                }, e
            }

            function wl() {
                var e = Object(qe.a)(["\n  padding: 20px;\n  padding-bottom: 12px;\n"]);
                return wl = function() {
                    return e
                }, e
            }

            function Cl() {
                var e = Object(qe.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
                return Cl = function() {
                    return e
                }, e
            }

            function Il() {
                var e = Object(qe.a)(["\n  ", "\n  align-items: center;\n  padding: 1rem 1rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  flex: 1;\n  user-select: none;\n"]);
                return Il = function() {
                    return e
                }, e
            }
            Je.default.div(Il(), (function(e) {
                return e.theme.flexRowNoWrap
            }));
            var Tl = Object(Je.default)(Wn)(Cl(), (function(e) {
                    return e.theme.primary1
                })),
                Ul = Object(Je.default)(mn)(wl()),
                Sl = Object(Je.default)(Bn)(Al(), (function(e) {
                    return !e.disabled && "pointer"
                }), (function(e) {
                    return e.disabled && "none"
                }), (function(e) {
                    var n = e.theme;
                    return !e.disabled && n.bg2
                }), (function(e) {
                    var n = e.disabled,
                        t = e.selected;
                    return n || t ? .5 : 1
                })),
                Rl = Je.default.input(xl(), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.text3
                }), (function(e) {
                    return e.theme.primary1
                })),
                Nl = Je.default.div(jl(), (function(e) {
                    return e.theme.bg2
                })),
                Kl = Je.default.div(kl(), (function(e) {
                    return e.theme.bg3
                }));

            function Ml() {
                var e = Object(qe.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"]);
                return Ml = function() {
                    return e
                }, e
            }

            function Bl() {
                var e = Object(qe.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
                return Bl = function() {
                    return e
                }, e
            }
            var Ll = Object(Je.keyframes)(Bl()),
                Fl = Je.default.svg(Ml(), Ll, (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    var n = e.stroke,
                        t = e.theme;
                    return null !== n && void 0 !== n ? n : t.primary1
                }));

            function Wl(e) {
                var n = e.size,
                    t = void 0 === n ? "16px" : n,
                    a = e.stroke,
                    r = Object(ze.a)(e, ["size", "stroke"]);
                return o.a.createElement(Fl, Object.assign({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    size: t,
                    stroke: a
                }, r), o.a.createElement("path", {
                    d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                    strokeWidth: "2.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }))
            }

            function Dl() {
                var e = Object(qe.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);
                return Dl = function() {
                    return e
                }, e
            }

            function ql() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n"]);
                return ql = function() {
                    return e
                }, e
            }

            function Gl() {
                var e = Object(qe.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]);
                return Gl = function() {
                    return e
                }, e
            }

            function Jl(e) {
                return e instanceof f.k ? e.address : e === f.d ? "ETHER" : ""
            }
            var zl = Object(Je.default)(La.b)(Gl()),
                Pl = Je.default.div(ql(), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.text2
                }));

            function Vl(e) {
                var n = e.balance;
                return o.a.createElement(zl, {
                    title: n.toExact()
                }, n.toSignificant(8))
            }
            var Yl = Je.default.div(Dl());

            function Zl(e) {
                var n = e.currency;
                if (!(n instanceof zn)) return o.a.createElement("span", null);
                var t = n.tags;
                if (!t || 0 === t.length) return o.a.createElement("span", null);
                var a = t[0];
                return o.a.createElement(Yl, null, o.a.createElement(No, {
                    text: a.description
                }, o.a.createElement(Pl, {
                    key: a.id
                }, a.name)), t.length > 1 ? o.a.createElement(No, {
                    text: t.slice(1).map((function(e) {
                        var n = e.name,
                            t = e.description;
                        return "".concat(n, ": ").concat(t)
                    })).join("; \n")
                }, o.a.createElement(Pl, null, "...")) : null)
            }

            function Hl(e) {
                var n = e.currency,
                    t = e.onSelect,
                    a = e.isSelected,
                    r = e.otherSelected,
                    c = e.style,
                    u = Ne(),
                    s = u.account,
                    d = u.chainId,
                    p = Jl(n),
                    m = function(e, n) {
                        var t;
                        return n === f.d || Boolean(n instanceof f.k && (null === (t = e[n.chainId]) || void 0 === t ? void 0 : t[n.address]))
                    }(Hn(), n),
                    b = function(e) {
                        return !!Ka().find((function(n) {
                            return Object(f.p)(e, n)
                        }))
                    }(n),
                    v = Hu(null !== s && void 0 !== s ? s : void 0, n),
                    y = function() {
                        var e = Object(l.c)();
                        return Object(i.useCallback)((function(n, t) {
                            e(Aa({
                                chainId: n,
                                address: t
                            }))
                        }), [e])
                    }(),
                    g = function() {
                        var e = Object(l.c)();
                        return Object(i.useCallback)((function(n) {
                            e(xa({
                                serializedToken: Ta(n)
                            }))
                        }), [e])
                    }();
                return o.a.createElement(Sl, {
                    style: c,
                    className: "token-item-".concat(p),
                    onClick: function() {
                        return a ? null : t()
                    },
                    disabled: a,
                    selected: r
                }, o.a.createElement(yl, {
                    currency: n,
                    size: "24px"
                }), o.a.createElement(fn, null, o.a.createElement(La.b, {
                    title: n.name,
                    fontWeight: 500
                }, n.symbol), o.a.createElement(Tl, null, !m && b ? o.a.createElement(xr, {
                    fontWeight: 500
                }, "Added by user", o.a.createElement(rr, {
                    onClick: function(e) {
                        e.stopPropagation(), d && n instanceof f.k && y(d, n.address)
                    }
                }, "(Remove)")) : null, m || b ? null : o.a.createElement(xr, {
                    fontWeight: 500
                }, "Found by address", o.a.createElement(rr, {
                    onClick: function(e) {
                        e.stopPropagation(), n instanceof f.k && g(n)
                    }
                }, "(Add)")))), o.a.createElement(Zl, {
                    currency: n
                }), o.a.createElement(Wn, {
                    style: {
                        justifySelf: "flex-end"
                    }
                }, v ? o.a.createElement(Vl, {
                    balance: v
                }) : s ? o.a.createElement(Wl, null) : null))
            }

            function Ql(e) {
                var n = e.height,
                    t = e.currencies,
                    a = e.selectedCurrency,
                    r = e.onCurrencySelect,
                    c = e.otherCurrency,
                    u = e.fixedListRef,
                    l = e.showETH,
                    s = Object(i.useMemo)((function() {
                        return l ? [f.b.ETHER].concat(Object(d.a)(t)) : t
                    }), [t, l]),
                    p = Object(i.useCallback)((function(e) {
                        var n = e.data,
                            t = e.index,
                            i = e.style,
                            u = n[t],
                            l = Boolean(a && Object(f.p)(a, u)),
                            s = Boolean(c && Object(f.p)(c, u));
                        return o.a.createElement(Hl, {
                            style: i,
                            currency: u,
                            isSelected: l,
                            onSelect: function() {
                                return r(u)
                            },
                            otherSelected: s
                        })
                    }), [r, c, a]),
                    m = Object(i.useCallback)((function(e, n) {
                        return Jl(n[e])
                    }), []);
                return o.a.createElement(Ol.a, {
                    height: n,
                    ref: u,
                    width: "100%",
                    itemData: s,
                    itemCount: s.length,
                    itemSize: 56,
                    itemKey: m
                }, p)
            }

            function Xl() {
                var e = Object(qe.a)(["\n  padding: 8px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"]);
                return Xl = function() {
                    return e
                }, e
            }
            var _l = Object(Je.default)(Wn)(Xl(), (function(e) {
                return e.theme.bg2
            }), (function(e) {
                return e.theme.text1
            }));

            function $l(e) {
                var n = e.toggleSortOrder,
                    t = e.ascending;
                return o.a.createElement(_l, {
                    onClick: n
                }, o.a.createElement(La.b, {
                    fontSize: 14,
                    fontWeight: 500
                }, t ? "\u2191" : "\u2193"))
            }

            function es(e) {
                var n = function() {
                        var e = Ne().account,
                            n = fa(),
                            t = Vu(null !== e && void 0 !== e ? e : void 0, Object(i.useMemo)((function() {
                                return Object.values(null !== n && void 0 !== n ? n : {})
                            }), [n]));
                        return null !== t && void 0 !== t ? t : {}
                    }(),
                    t = Object(i.useMemo)((function() {
                        return function(e) {
                            return function(n, t) {
                                var a = function(e, n) {
                                    return e && n ? e.greaterThan(n) ? -1 : e.equalTo(n) ? 0 : 1 : e && e.greaterThan("0") ? -1 : n && n.greaterThan("0") ? 1 : 0
                                }(e[n.address], e[t.address]);
                                return 0 !== a ? a : n.symbol && t.symbol ? n.symbol.toLowerCase() < t.symbol.toLowerCase() ? -1 : 1 : n.symbol || t.symbol ? -1 : 0
                            }
                        }(null !== n && void 0 !== n ? n : {})
                    }), [n]);
                return Object(i.useMemo)((function() {
                    return e ? function(e, n) {
                        return -1 * t(e, n)
                    } : t
                }), [e, t])
            }
            var ns = t(343);

            function ts(e) {
                var n = e.selectedCurrency,
                    t = e.onCurrencySelect,
                    a = e.otherSelectedCurrency,
                    r = e.showCommonBases,
                    c = e.onDismiss,
                    u = e.isOpen,
                    l = (e.onChangeList, Object(Be.b)().t),
                    s = Ne().chainId,
                    p = Object(i.useRef)(),
                    m = Object(i.useState)(""),
                    b = Object(k.a)(m, 2),
                    v = b[0],
                    y = b[1],
                    g = Object(i.useState)(!1),
                    h = Object(k.a)(g, 2),
                    E = h[0],
                    O = h[1],
                    j = fa(),
                    x = Rt(v),
                    A = ya(v),
                    w = Object(i.useMemo)((function() {
                        var e = v.toLowerCase().trim();
                        return "" === e || "e" === e || "et" === e || "eth" === e
                    }), [v]),
                    C = es(E),
                    I = Object(i.useMemo)((function() {
                        return x ? A ? [A] : [] : function(e, n) {
                            if (0 === n.length) return e;
                            var t = Rt(n);
                            if (t) return e.filter((function(e) {
                                return e.address === t
                            }));
                            var a = n.toLowerCase().split(/\s+/).filter((function(e) {
                                return e.length > 0
                            }));
                            if (0 === a.length) return e;
                            var r = function(e) {
                                var n = e.toLowerCase().split(/\s+/).filter((function(e) {
                                    return e.length > 0
                                }));
                                return a.every((function(e) {
                                    return 0 === e.length || n.some((function(n) {
                                        return n.startsWith(e) || n.endsWith(e)
                                    }))
                                }))
                            };
                            return e.filter((function(e) {
                                var n = e.symbol,
                                    t = e.name;
                                return n && r(n) || t && r(t)
                            }))
                        }(Object.values(j), v)
                    }), [x, A, j, v]),
                    T = Object(i.useMemo)((function() {
                        if (A) return [A];
                        var e = I.sort(C),
                            n = v.toLowerCase().split(/\s+/).filter((function(e) {
                                return e.length > 0
                            }));
                        return n.length > 1 ? e : [].concat(Object(d.a)(A ? [A] : []), Object(d.a)(e.filter((function(e) {
                            var t;
                            return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) === n[0]
                        }))), Object(d.a)(e.filter((function(e) {
                            var t;
                            return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== n[0]
                        }))))
                    }), [I, v, A, C]),
                    U = Object(i.useCallback)((function(e) {
                        t(e), c()
                    }), [c, t]);
                Object(i.useEffect)((function() {
                    u && y("")
                }), [u]);
                var S = Object(i.useRef)(),
                    R = Object(i.useCallback)((function(e) {
                        var n, t = e.target.value,
                            a = Rt(t);
                        y(a || t), null === (n = p.current) || void 0 === n || n.scrollTo(0)
                    }), []),
                    N = Object(i.useCallback)((function(e) {
                        if ("Enter" === e.key)
                            if ("eth" === v.toLowerCase().trim()) U(f.d);
                            else if (T.length > 0) {
                            var n;
                            (null === (n = T[0].symbol) || void 0 === n ? void 0 : n.toLowerCase()) !== v.trim().toLowerCase() && 1 !== T.length || U(T[0])
                        }
                    }), [T, U, v]);
                return o.a.createElement(fn, {
                    style: {
                        width: "100%",
                        flex: "1 1"
                    }
                }, o.a.createElement(Ul, {
                    gap: "14px"
                }, o.a.createElement(Bn, null, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 16
                }, l("selectToken"), o.a.createElement(Fo, {
                    text: "Find a token by searching for its name or symbol or by pasting its address below."
                })), o.a.createElement(ar, {
                    onClick: c
                })), o.a.createElement(Rl, {
                    type: "text",
                    id: "token-search-input",
                    placeholder: l("tokenSearchPlaceholder"),
                    value: v,
                    ref: S,
                    onChange: R,
                    onKeyDown: N
                }), r && o.a.createElement(El, {
                    chainId: s,
                    onSelect: U,
                    selectedCurrency: n
                }), o.a.createElement(Bn, {
                    className: "tokenName"
                }, o.a.createElement(La.b, {
                    fontSize: 14,
                    fontWeight: 500
                }, l("tokenName")), o.a.createElement($l, {
                    ascending: E,
                    toggleSortOrder: function() {
                        return O((function(e) {
                            return !e
                        }))
                    }
                }))), o.a.createElement(Nl, null), o.a.createElement("div", {
                    style: {
                        flex: "1"
                    }
                }, o.a.createElement(ns.a, {
                    disableWidth: !0,
                    className: "CurrencyList"
                }, (function(e) {
                    var t = e.height;
                    return o.a.createElement(Ql, {
                        height: t,
                        showETH: w,
                        currencies: T,
                        onCurrencySelect: U,
                        otherCurrency: a,
                        selectedCurrency: n,
                        fixedListRef: p
                    })
                }))), o.a.createElement(Nl, null))
            }

            function as() {
                return (as = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function rs(e, n) {
                if (null == e) return {};
                var t, a, r = function(e, n) {
                    if (null == e) return {};
                    var t, a, r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) t = i[a], n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++) t = i[a], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
                }
                return r
            }
            var is = o.a.createElement("path", {
                    d: "M0.97168 1L6.20532 6L11.439 1",
                    stroke: "#AEAEAE"
                }),
                os = function(e) {
                    var n = e.svgRef,
                        t = e.title,
                        a = rs(e, ["svgRef", "title"]);
                    return o.a.createElement("svg", as({
                        width: 12,
                        height: 7,
                        viewBox: "0 0 12 7",
                        fill: "none",
                        ref: n
                    }, a), t ? o.a.createElement("title", null, t) : null, is)
                },
                cs = o.a.forwardRef((function(e, n) {
                    return o.a.createElement(os, as({
                        svgRef: n
                    }, e))
                })),
                us = (t.p, {
                    pending: Object(Xn.b)("lists/fetchTokenList/pending"),
                    fulfilled: Object(Xn.b)("lists/fetchTokenList/fulfilled"),
                    rejected: Object(Xn.b)("lists/fetchTokenList/rejected")
                });

            function ls() {
                return ss.apply(this, arguments)
            }

            function ss() {
                return (ss = Object(j.a)(O.a.mark((function e() {
                    var n, t;
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, fetch("".concat(te, "/mingpool/swap?mdex_chainid=56"), {
                                    method: "GET",
                                    headers: new Headers({
                                        "content-type": "application/json"
                                    })
                                });
                            case 3:
                                return n = e.sent, e.next = 6, n.json();
                            case 6:
                                return t = e.sent, e.abrupt("return", t);
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0), console.log("getRewards:" + e.t0);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 10]
                    ])
                })))).apply(this, arguments)
            }
            var ds = Object(Xn.b)("lists/acceptListUpdate"),
                ps = Object(Xn.b)("lists/addList"),
                ms = Object(Xn.b)("lists/removeList"),
                fs = Object(Xn.b)("lists/selectList"),
                bs = (Object(Xn.b)("lists/rejectVersionUpdate"), t(344)),
                vs = t(345),
                ys = new(t.n(vs).a)({
                    allErrors: !0
                }).compile(bs);

            function gs(e, n) {
                return hs.apply(this, arguments)
            }

            function hs() {
                return (hs = Object(j.a)(O.a.mark((function e(n, t) {
                    var a, r, i, o, c, u, l, s, d, p, m, f, b;
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(a = cl(n))) {
                                    e.next = 23;
                                    break
                                }
                                return e.prev = 2, e.next = 5, t(a.ensName);
                            case 5:
                                o = e.sent, e.next = 12;
                                break;
                            case 8:
                                throw e.prev = 8, e.t0 = e.catch(2), console.debug("Failed to resolve ENS name: ".concat(a.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(a.ensName));
                            case 12:
                                e.prev = 12, c = il(o), e.next = 20;
                                break;
                            case 16:
                                throw e.prev = 16, e.t1 = e.catch(12), console.debug("Failed to translate contenthash to URI", o), new Error("Failed to translate contenthash to URI: ".concat(o));
                            case 20:
                                r = ul("".concat(c).concat(null !== (i = a.ensPath) && void 0 !== i ? i : "")), e.next = 24;
                                break;
                            case 23:
                                r = ul(n);
                            case 24:
                                u = 0;
                            case 25:
                                if (!(u < r.length)) {
                                    e.next = 55;
                                    break
                                }
                                return l = r[u], s = u === r.length - 1, d = void 0, e.prev = 29, e.next = 32, fetch(l);
                            case 32:
                                d = e.sent, e.next = 41;
                                break;
                            case 35:
                                if (e.prev = 35, e.t2 = e.catch(29), console.debug("Failed to fetch list", n, e.t2), !s) {
                                    e.next = 40;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(n));
                            case 40:
                                return e.abrupt("continue", 52);
                            case 41:
                                if (d.ok) {
                                    e.next = 45;
                                    break
                                }
                                if (!s) {
                                    e.next = 44;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(n));
                            case 44:
                                return e.abrupt("continue", 52);
                            case 45:
                                return e.next = 47, d.json();
                            case 47:
                                if (p = e.sent, ys(p)) {
                                    e.next = 51;
                                    break
                                }
                                throw b = null !== (m = null === (f = ys.errors) || void 0 === f ? void 0 : f.reduce((function(e, n) {
                                    var t, a = "".concat(n.dataPath, " ").concat(null !== (t = n.message) && void 0 !== t ? t : "");
                                    return e.length > 0 ? "".concat(e, "; ").concat(a) : "".concat(a)
                                }), "")) && void 0 !== m ? m : "unknown error", new Error("Token list failed validation: ".concat(b));
                            case 51:
                                return e.abrupt("return", p);
                            case 52:
                                u++, e.next = 25;
                                break;
                            case 55:
                                throw new Error("Unrecognized list URL protocol.");
                            case 56:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 8],
                        [12, 16],
                        [29, 35]
                    ])
                })))).apply(this, arguments)
            }
            var Es = [{
                    constant: !0,
                    inputs: [{
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "resolver",
                    outputs: [{
                        name: "resolverAddress",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }],
                Os = [{
                    constant: !0,
                    inputs: [{
                        internalType: "bytes32",
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "contenthash",
                    outputs: [{
                        internalType: "bytes",
                        name: "",
                        type: "bytes"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }];

            function ks(e, n) {
                return new Ct.a(e, Os, n)
            }

            function js(e, n) {
                return xs.apply(this, arguments)
            }

            function xs() {
                return (xs = Object(j.a)(O.a.mark((function e(n, t) {
                    var a, r, i;
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a = new Ct.a("0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e", Es, t), r = Object(Ci.namehash)(n), e.next = 4, a.resolver(r);
                            case 4:
                                return i = e.sent, e.abrupt("return", ks(i, t).contenthash(r));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function As() {
                var e = Ne(),
                    n = e.chainId,
                    t = e.library,
                    a = Object(l.c)(),
                    r = Object(i.useCallback)((function(e) {
                        if (!t || n !== f.a.MAINNET) {
                            if (q === f.a.MAINNET) {
                                var a = function() {
                                    var e;
                                    return G = null !== (e = G) && void 0 !== e ? e : new b.a(J.provider)
                                }();
                                if (a) return js(e, a)
                            }
                            throw new Error("Could not construct mainnet ENS resolver")
                        }
                        return js(e, t)
                    }), [n, t]);
                return Object(i.useCallback)(function() {
                    var e = Object(j.a)(O.a.mark((function e(n) {
                        var t;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = Object(Xn.e)(), a(us.pending({
                                        requestId: t,
                                        url: n
                                    })), e.abrupt("return", gs(n, r).then((function(e) {
                                        return a(us.fulfilled({
                                            url: n,
                                            tokenList: e,
                                            requestId: t
                                        })), e
                                    })).catch((function(e) {
                                        throw console.debug("Failed to get list at url ".concat(n), e), a(us.rejected({
                                            url: n,
                                            requestId: t,
                                            errorMessage: e.message
                                        })), e
                                    })));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(), [a, r])
            }

            function ws(e) {
                return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch)
            }

            function Cs() {
                var e = Object(qe.a)(["\n  width: ", ";\n  height: ", ";\n"]);
                return Cs = function() {
                    return e
                }, e
            }
            var Is = Object(Je.default)(dl)(Cs(), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }));

            function Ts(e) {
                var n = e.logoURI,
                    t = e.style,
                    a = e.size,
                    r = void 0 === a ? "24px" : a,
                    i = e.alt,
                    c = ll(n);
                return o.a.createElement(Is, {
                    alt: i,
                    size: r,
                    srcs: c,
                    style: t
                })
            }

            function Us() {
                var e = Object(qe.a)(["\n  flex: 1;\n  overflow: auto;\n"]);
                return Us = function() {
                    return e
                }, e
            }

            function Ss() {
                var e = Object(qe.a)(["\n  max-width: 4rem;\n  margin-left: 1rem;\n  border-radius: 12px;\n  padding: 10px 18px;\n"]);
                return Ss = function() {
                    return e
                }, e
            }

            function Rs() {
                var e = Object(qe.a)(["\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);
                return Rs = function() {
                    return e
                }, e
            }

            function Ns() {
                var e = Object(qe.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n"]);
                return Ns = function() {
                    return e
                }, e
            }

            function Ks() {
                var e = Object(qe.a)(["\n  z-index: 100;\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ", ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n"]);
                return Ks = function() {
                    return e
                }, e
            }

            function Ms() {
                var e = Object(qe.a)(["\n  padding: 0;\n  font-size: 1rem;\n  opacity: ", ";\n"]);
                return Ms = function() {
                    return e
                }, e
            }
            var Bs = Object(Je.default)(rr)(Ms(), (function(e) {
                    return e.disabled ? "0.4" : "1"
                })),
                Ls = Je.default.div(Ks(), (function(e) {
                    return e.show ? "visible" : "hidden"
                }), (function(e) {
                    return e.show ? 1 : 0
                }), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.text2
                })),
                Fs = Je.default.div(Ns()),
                Ws = Je.default.div(Rs());

            function Ds(e) {
                var n = e.listUrl,
                    t = Object(i.useMemo)((function() {
                        var e;
                        return null === (e = cl(n)) || void 0 === e ? void 0 : e.ensName
                    }), [n]),
                    a = Object(i.useMemo)((function() {
                        if (!t) {
                            var e = n.toLowerCase();
                            if (e.startsWith("ipfs://") || e.startsWith("ipns://")) return n;
                            try {
                                return new URL(n).host
                            } catch (a) {
                                return
                            }
                        }
                    }), [n, t]);
                return o.a.createElement(o.a.Fragment, null, null !== t && void 0 !== t ? t : a)
            }

            function qs(e) {
                return "list-row-".concat(e.replace(/\./g, "-"))
            }
            var Gs = Object(i.memo)((function(e) {
                    var n = e.listUrl,
                        t = e.onBack,
                        a = Object(l.d)((function(e) {
                            return e.lists.byUrl
                        })),
                        r = Zn(),
                        c = Object(l.c)(),
                        u = a[n],
                        s = u.current,
                        d = u.pendingUpdate,
                        p = n === r,
                        m = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                n = Object(i.useState)(e),
                                t = Object(k.a)(n, 2),
                                a = t[0],
                                r = t[1],
                                o = Object(i.useCallback)((function() {
                                    return r((function(e) {
                                        return !e
                                    }))
                                }), []);
                            return [a, o]
                        }(!1),
                        f = Object(k.a)(m, 2),
                        b = f[0],
                        v = f[1],
                        y = Object(i.useRef)(),
                        g = Object(i.useState)(),
                        h = Object(k.a)(g, 2),
                        E = h[0],
                        O = h[1],
                        j = Object(i.useState)(),
                        x = Object(k.a)(j, 2),
                        A = x[0],
                        w = x[1],
                        C = Object(Eo.a)(E, A, {
                            placement: "auto",
                            strategy: "fixed",
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [8, 8]
                                }
                            }]
                        }),
                        I = C.styles,
                        T = C.attributes;
                    go(y, b ? v : void 0);
                    var U = Object(i.useCallback)((function() {
                            p || (c(fs(n)), t())
                        }), [c, p, n, t]),
                        S = Object(i.useCallback)((function() {
                            d && c(ds(n))
                        }), [c, n, d]),
                        R = Object(i.useCallback)((function() {
                            "REMOVE" === window.prompt("Please confirm you would like to remove this list by typing REMOVE") && c(ms(n))
                        }), [c, n]);
                    return s ? o.a.createElement(Dn, {
                        key: n,
                        align: "center",
                        padding: "16px",
                        id: qs(n)
                    }, s.logoURI ? o.a.createElement(Ts, {
                        style: {
                            marginRight: "1rem"
                        },
                        logoURI: s.logoURI,
                        alt: "".concat(s.name, " list logo")
                    }) : o.a.createElement("div", {
                        style: {
                            width: "24px",
                            height: "24px",
                            marginRight: "1rem"
                        }
                    }), o.a.createElement(fn, {
                        style: {
                            flex: "1"
                        }
                    }, o.a.createElement(Dn, null, o.a.createElement(La.b, {
                        fontWeight: p ? 500 : 400,
                        fontSize: 16,
                        style: {
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        }
                    }, s.name)), o.a.createElement(Dn, {
                        style: {
                            marginTop: "4px"
                        }
                    }, o.a.createElement(Ws, {
                        title: n
                    }, o.a.createElement(Ds, {
                        listUrl: n
                    })))), o.a.createElement(Fs, {
                        ref: y
                    }, o.a.createElement(oi, {
                        style: {
                            width: "2rem",
                            padding: ".8rem .35rem",
                            borderRadius: "12px",
                            fontSize: "14px",
                            marginRight: "0.5rem"
                        },
                        onClick: v,
                        ref: O
                    }, o.a.createElement(cs, null)), b && o.a.createElement(Ls, Object.assign({
                        show: !0,
                        ref: w,
                        style: I.popper
                    }, T.popper), o.a.createElement("div", null, s && ws(s.version)), o.a.createElement(Kl, null), o.a.createElement(lr, {
                        href: "https://tokenlists.org/token-list?url=".concat(n)
                    }, "View list"), o.a.createElement(Bs, {
                        onClick: R,
                        disabled: 1 === Object.keys(a).length
                    }, "Remove list"), d && o.a.createElement(Bs, {
                        onClick: S
                    }, "Update list"))), p ? o.a.createElement(ai, {
                        disabled: !0,
                        className: "select-button",
                        style: {
                            width: "5rem",
                            minWidth: "5rem",
                            padding: "0.5rem .35rem",
                            borderRadius: "12px",
                            fontSize: "14px"
                        }
                    }, "Selected") : o.a.createElement(o.a.Fragment, null, o.a.createElement(ai, {
                        className: "select-button",
                        style: {
                            width: "5rem",
                            minWidth: "4.5rem",
                            padding: "0.5rem .35rem",
                            borderRadius: "12px",
                            fontSize: "14px"
                        },
                        onClick: U
                    }, "Select"))) : null
                })),
                Js = Object(Je.default)(ii)(Ss()),
                zs = Je.default.div(Us());

            function Ps(e) {
                var n, t = e.onDismiss,
                    a = e.onBack,
                    r = Object(i.useState)(""),
                    c = Object(k.a)(r, 2),
                    u = c[0],
                    s = c[1],
                    d = Object(l.c)(),
                    p = Object(l.d)((function(e) {
                        return e.lists.byUrl
                    })),
                    m = Boolean(null === (n = p[u]) || void 0 === n ? void 0 : n.loadingRequestId),
                    f = Object(i.useState)(null),
                    b = Object(k.a)(f, 2),
                    v = b[0],
                    y = b[1],
                    g = Object(i.useCallback)((function(e) {
                        s(e.target.value), y(null)
                    }), []),
                    h = As(),
                    E = Object(i.useCallback)((function() {
                        m || (y(null), h(u).then((function() {
                            s("")
                        })).catch((function(e) {
                            y(e.message), d(ms(u))
                        })))
                    }), [m, d, h, u]),
                    O = Object(i.useMemo)((function() {
                        return ul(u).length > 0 || Boolean(cl(u))
                    }), [u]),
                    j = Object(i.useCallback)((function(e) {
                        O && "Enter" === e.key && E()
                    }), [E, O]),
                    x = Object(i.useMemo)((function() {
                        return Object.keys(p).filter((function(e) {
                            return Boolean(p[e].current)
                        })).sort((function(e, n) {
                            var t = p[e].current,
                                a = p[n].current;
                            return t && a ? t.name.toLowerCase() < a.name.toLowerCase() ? -1 : t.name.toLowerCase() === a.name.toLowerCase() ? 0 : 1 : t ? -1 : a ? 1 : 0
                        }))
                    }), [p]);
                return o.a.createElement(fn, {
                    style: {
                        width: "100%",
                        flex: "1 1"
                    }
                }, o.a.createElement(Ul, null, o.a.createElement(Bn, null, o.a.createElement("div", null, o.a.createElement(Wa.a, {
                    style: {
                        cursor: "pointer"
                    },
                    onClick: a
                })), o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20
                }, "Manage Lists"), o.a.createElement(ar, {
                    onClick: t
                }))), o.a.createElement(Nl, null), o.a.createElement(Ul, {
                    gap: "14px"
                }, o.a.createElement(La.b, {
                    fontWeight: 600
                }, "Add a list", " ", o.a.createElement(Fo, {
                    text: "Token lists are an open specification for lists of HRC20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BSC tokens."
                })), o.a.createElement(Dn, null, o.a.createElement(Rl, {
                    type: "text",
                    id: "list-add-input",
                    placeholder: "https:// or ipfs:// or ENS name",
                    value: u,
                    onChange: g,
                    onKeyDown: j,
                    style: {
                        height: "2.75rem",
                        borderRadius: 12,
                        padding: "12px"
                    }
                }), o.a.createElement(Js, {
                    onClick: E,
                    disabled: !O
                }, "Add")), v ? o.a.createElement(Rr, {
                    title: v,
                    style: {
                        textOverflow: "ellipsis",
                        overflow: "hidden"
                    },
                    error: !0
                }, v) : null), o.a.createElement(Nl, null), o.a.createElement(zs, null, x.map((function(e) {
                    return o.a.createElement(Gs, {
                        key: e,
                        listUrl: e,
                        onBack: a
                    })
                }))), o.a.createElement(Nl, null), o.a.createElement("div", {
                    style: {
                        padding: "16px",
                        textAlign: "center"
                    }
                }, o.a.createElement(lr, {
                    href: "https://tokenlists.org"
                }, "Browse lists")))
            }

            function Vs(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    a = e.onCurrencySelect,
                    r = e.selectedCurrency,
                    c = e.otherSelectedCurrency,
                    u = e.showCommonBases,
                    l = void 0 !== u && u,
                    s = Object(i.useState)(!1),
                    d = Object(k.a)(s, 2),
                    p = d[0],
                    m = d[1],
                    f = Qu(n);
                Object(i.useEffect)((function() {
                    n && !f && m(!1)
                }), [n, f]);
                var b = Object(i.useCallback)((function(e) {
                        a(e), t()
                    }), [t, a]),
                    v = Object(i.useCallback)((function() {
                        m(!0)
                    }), []),
                    y = Object(i.useCallback)((function() {
                        m(!1)
                    }), []);
                return o.a.createElement(cn, {
                    isOpen: n,
                    onDismiss: t,
                    maxHeight: 80,
                    minHeight: p ? 40 : 80
                }, p ? o.a.createElement(Ps, {
                    onDismiss: t,
                    onBack: y
                }) : o.a.createElement(ts, {
                    isOpen: n,
                    onDismiss: t,
                    onCurrencySelect: b,
                    onChangeList: v,
                    selectedCurrency: r,
                    otherSelectedCurrency: c,
                    showCommonBases: l
                }))
            }

            function Ys() {
                var e = Object(qe.a)(["\n"]);
                return Ys = function() {
                    return e
                }, e
            }

            function Zs() {
                var e = Object(qe.a)(["\n"]);
                return Zs = function() {
                    return e
                }, e
            }

            function Hs() {
                var e = Object(qe.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"]);
                return Hs = function() {
                    return e
                }, e
            }
            var Qs = Je.default.div(Hs(), (function(e) {
                    var n = e.sizeraw;
                    return e.margin && (n / 3 + 8).toString() + "px"
                })),
                Xs = Object(Je.default)(yl)(Zs()),
                _s = Object(Je.default)(yl)(Ys());

            function $s(e) {
                var n = e.currency0,
                    t = e.currency1,
                    a = e.size,
                    r = void 0 === a ? 16 : a,
                    i = e.margin,
                    c = void 0 !== i && i;
                return o.a.createElement(Qs, {
                    sizeraw: r,
                    margin: c
                }, n && o.a.createElement(Xs, {
                    currency: n,
                    size: r.toString() + "px",
                    style: {
                        zIndex: 2
                    }
                }), t && o.a.createElement(_s, {
                    currency: t,
                    size: r.toString() + "px",
                    style: {
                        position: "absolute",
                        left: "".concat(2 * r / 3, "px")
                    }
                }))
            }

            function ed() {
                var e = Object(qe.a)(["\n    padding: 0px;\n  "]);
                return ed = function() {
                    return e
                }, e
            }

            function nd() {
                var e = Object(qe.a)(["\n    padding: 5px 0;\n  "]);
                return nd = function() {
                    return e
                }, e
            }

            function td() {
                var e = Object(qe.a)(["\n  color: ", ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ", ";\n  font-size: ", ";\n  text-align: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  ", "\n  ", "\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
                return td = function() {
                    return e
                }, e
            }
            var ad = Je.default.input(td(), (function(e) {
                    var n = e.error,
                        t = e.theme;
                    return n ? t.red1 : t.text1
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    var n = e.fontSize;
                    return null !== n && void 0 !== n ? n : "24px"
                }), (function(e) {
                    var n = e.align;
                    return n && n
                }), Re.isMobile && Object(Je.css)(nd()), !Re.isMobile && Object(Je.css)(ed()), (function(e) {
                    return e.theme.text4
                })),
                rd = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                id = o.a.memo((function(e) {
                    var n = e.value,
                        t = e.onUserInput,
                        a = e.placeholder,
                        r = Object(ze.a)(e, ["value", "onUserInput", "placeholder"]);
                    return o.a.createElement(ad, Object.assign({}, r, {
                        value: n,
                        onChange: function(e) {
                            var n;
                            ("" === (n = e.target.value.replace(/,/g, ".")) || rd.test(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && t(n)
                        },
                        inputMode: "decimal",
                        title: "Token Amount",
                        autoComplete: "off",
                        autoCorrect: "off",
                        type: "text",
                        pattern: "^[0-9]*[.,]?[0-9]*$",
                        placeholder: a || "0.0",
                        minLength: 1,
                        maxLength: 79,
                        spellCheck: "false"
                    }))
                }));

            function od() {
                var e = Object(qe.a)(["\n    padding: 0 1rem;\n  "]);
                return od = function() {
                    return e
                }, e
            }

            function cd() {
                var e = Object(qe.a)(["\n    padding: 4px 0 4px 10px;\n  "]);
                return cd = function() {
                    return e
                }, e
            }

            function ud() {
                var e = Object(qe.a)(["\n  display: flex;\n  justify-content: space-between;\n  ", "\n  ", "\n"]);
                return ud = function() {
                    return e
                }, e
            }

            function ld() {
                var e = Object(qe.a)(["\n    padding: 0.75rem 0;\n  "]);
                return ld = function() {
                    return e
                }, e
            }

            function sd() {
                var e = Object(qe.a)(["\n    padding: 0;\n  "]);
                return sd = function() {
                    return e
                }, e
            }

            function dd() {
                var e = Object(qe.a)(["\n  flex: 1;\n  ", "\n  ", "\n"]);
                return dd = function() {
                    return e
                }, e
            }

            function pd() {
                var e = Object(qe.a)([""]);
                return pd = function() {
                    return e
                }, e
            }

            function md() {
                var e = Object(qe.a)(["\n    font-size: 12px;\n    height: 24px;\n    top: 16px;\n  "]);
                return md = function() {
                    return e
                }, e
            }

            function fd() {
                var e = Object(qe.a)(["\n    font-size: 0.875rem;\n    top: 18px;\n  "]);
                return fd = function() {
                    return e
                }, e
            }

            function bd() {
                var e = Object(qe.a)(["\n    margin-right: 0.5rem;\n  "]);
                return bd = function() {
                    return e
                }, e
            }

            function vd() {
                var e = Object(qe.a)(["\n  height: 28px;\n  background-color: rgba(255, 202, 19, 0.2);\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  color: #E8B400;\n  position: relative;\n  :focus {\n    outline: none;\n  }\n  :hover {\n    background-color: ", ";\n    color: #fff;\n  }\n  ", ";\n  ", "\n  ", "\n"]);
                return vd = function() {
                    return e
                }, e
            }

            function yd() {
                var e = Object(qe.a)(["\n    font-size:  12px;\n    margin-left: 10px;\n  "]);
                return yd = function() {
                    return e
                }, e
            }

            function gd() {
                var e = Object(qe.a)(["\n  ", "\n  font-size:  ", ";\n  ", "\n"]);
                return gd = function() {
                    return e
                }, e
            }

            function hd() {
                var e = Object(qe.a)(["\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
                return hd = function() {
                    return e
                }, e
            }

            function Ed() {
                var e = Object(qe.a)(["\n  ", "\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n  border: 1px solid #EBEDF3;\n"]);
                return Ed = function() {
                    return e
                }, e
            }

            function Od() {
                var e = Object(qe.a)(["\n  margin: 0 0.25rem 0 0.5rem;\n  height: 35%;\n\n  path {\n    stroke: ", ";\n    stroke-width: 1.5px;\n  }\n  transform: ", ";\n"]);
                return Od = function() {
                    return e
                }, e
            }

            function kd() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n"]);
                return kd = function() {
                    return e
                }, e
            }

            function jd() {
                var e = Object(qe.a)(["\n    padding: 0 10px;\n  "]);
                return jd = function() {
                    return e
                }, e
            }

            function xd() {
                var e = Object(qe.a)(["\n    padding: 0.75rem 1rem 0 1rem;\n  "]);
                return xd = function() {
                    return e
                }, e
            }

            function Ad() {
                var e = Object(qe.a)(["\n  ", "\n  align-items: center;\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ", ";\n  }\n  ", "\n  ", "\n"]);
                return Ad = function() {
                    return e
                }, e
            }

            function wd() {
                var e = Object(qe.a)(["\n    padding: 4px 0;\n    height: 30px;\n    margin-right: 0;\n  "]);
                return wd = function() {
                    return e
                }, e
            }

            function Cd() {
                var e = Object(qe.a)(["\n  align-items: center;\n  height: 2.2rem;\n  font-size: 20px;\n  font-weight: 500;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  box-shadow: ", ";\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n  margin-right: ", ";\n  ", "\n  width: 30%;\n  :hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"]);
                return Cd = function() {
                    return e
                }, e
            }

            function Id() {
                var e = Object(qe.a)(["\n    padding: 6px 10px;\n  "]);
                return Id = function() {
                    return e
                }, e
            }

            function Td() {
                var e = Object(qe.a)(["\n  ", "\n  align-items: center;\n  padding: ", ";\n  ", "\n"]);
                return Td = function() {
                    return e
                }, e
            }
            var Ud = Je.default.div(Td(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.selected ? "0 0.5rem 0 1rem" : "0"
                }), Re.isMobile && Object(Je.css)(Id())),
                Sd = Je.default.button(Cd(), (function(e) {
                    var n = e.selected,
                        t = e.theme;
                    return n ? t.bg1 : "rgba(255, 202, 19, 0.2)"
                }), (function(e) {
                    var n = e.selected,
                        t = e.theme;
                    return n ? t.text1 : "#E8B400"
                }), (function(e) {
                    return e.selected ? "none" : "0px 6px 10px rgba(0, 0, 0, 0.075)"
                }), (function(e) {
                    return e.selected ? "0" : "12px"
                }), Re.isMobile && Object(Je.css)(wd()), (function(e) {
                    var n = e.selected,
                        t = e.theme;
                    return n ? t.bg2 : "#E8B400"
                }), (function(e) {
                    var n = e.selected,
                        t = e.theme;
                    return n ? t.text1 : "#fff"
                })),
                Rd = Je.default.div(Ad(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.2, n.text2)
                }), !Re.isMobile && Object(Je.css)(xd()), Re.isMobile && Object(Je.css)(jd())),
                Nd = Je.default.span(kd()),
                Kd = Object(Je.default)(cs)(Od(), (function(e) {
                    var n = e.color;
                    e.selected;
                    return n || "#48587B"
                }), (function(e) {
                    return e.selected ? "rotateX(0)" : "rotate(180deg)"
                })),
                Md = Je.default.div(Ed(), (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    return e.hideInput ? "8px" : "10px"
                }), (function(e) {
                    return e.theme.bg2
                })),
                Bd = Je.default.div(hd(), (function(e) {
                    return e.hideInput ? "8px" : "10px"
                }), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.bg1
                })),
                Ld = Je.default.span(gd(), (function(e) {
                    return e.active ? "margin: 0 0.25rem 0 0.45rem;" : "  margin: 0 0.25rem 0 0.25rem;"
                }), (function(e) {
                    return e.active ? "20px" : "16px"
                }), Re.isMobile && Object(Je.css)(yd())),
                Fd = Je.default.button(vd(), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    return e.theme.mediaWidth.upToExtraSmall(bd())
                }), !Re.isMobile && Object(Je.css)(fd()), Re.isMobile && Object(Je.css)(md())),
                Wd = Je.default.div(pd()),
                Dd = Je.default.div(dd(), Re.isMobile && Object(Je.css)(sd()), !Re.isMobile && Object(Je.css)(ld())),
                qd = Je.default.div(ud(), Re.isMobile && Object(Je.css)(cd()), !Re.isMobile && Object(Je.css)(od()));

            function Gd(e) {
                var n = e.value,
                    t = e.onUserInput,
                    a = e.onMax,
                    r = e.showMaxButton,
                    c = e.label,
                    u = void 0 === c ? "Input" : c,
                    l = e.onCurrencySelect,
                    s = e.currency,
                    d = e.disableCurrencySelect,
                    p = void 0 !== d && d,
                    m = e.hideBalance,
                    f = void 0 !== m && m,
                    b = e.pair,
                    v = void 0 === b ? null : b,
                    y = e.hideInput,
                    g = void 0 !== y && y,
                    h = e.otherCurrency,
                    E = e.id,
                    O = e.showCommonBases,
                    j = e.customBalanceText,
                    x = Object(Be.b)().t,
                    A = Object(i.useState)(!1),
                    w = Object(k.a)(A, 2),
                    C = w[0],
                    I = w[1],
                    T = Ne().account,
                    U = Hu(null !== T && void 0 !== T ? T : void 0, null !== s && void 0 !== s ? s : void 0),
                    S = Object(i.useContext)(Je.ThemeContext),
                    R = Object(i.useCallback)((function() {
                        I(!1)
                    }), [I]);
                return o.a.createElement(Md, {
                    id: E
                }, o.a.createElement(Bd, {
                    hideInput: g
                }, o.a.createElement(Ud, {
                    id: "InputRow",
                    style: g ? {
                        padding: "0",
                        borderRadius: "8px"
                    } : {},
                    selected: p
                }, o.a.createElement(Dd, {
                    id: "RightContentDiv"
                }, o.a.createElement(qd, null, !g && o.a.createElement(o.a.Fragment, null, o.a.createElement(id, {
                    className: "token-amount-input",
                    value: n,
                    onUserInput: function(e) {
                        t(e)
                    },
                    fontSize: Re.isMobile ? "20px" : "24px"
                }), T && s && r && "To" !== u && o.a.createElement(Fd, {
                    id: "StyledBalanceMax",
                    onClick: a
                }, "MAX"))), o.a.createElement(Wd, null, !g && o.a.createElement(Rd, null, o.a.createElement(Bn, null, T && o.a.createElement(Cr, {
                    onClick: a,
                    color: S.text2,
                    fontWeight: 500,
                    fontSize: Re.isMobile ? 12 : 14,
                    style: {
                        display: "inline",
                        cursor: "pointer",
                        color: "#626E88FF"
                    }
                }, !f && s && U ? (null !== j && void 0 !== j ? j : "Balance: ") + (null === U || void 0 === U ? void 0 : U.toSignificant(8)) : " -"))))), o.a.createElement(Sd, {
                    selected: !!s,
                    className: "open-currency-select-button",
                    onClick: function() {
                        p || I(!0)
                    }
                }, o.a.createElement(Nd, null, v ? o.a.createElement($s, {
                    currency0: v.token0,
                    currency1: v.token1,
                    size: 30,
                    margin: !0
                }) : s ? o.a.createElement(yl, {
                    currency: s,
                    size: Re.isMobile ? "20px" : "30px"
                }) : null, o.a.createElement(Nd, null, v ? o.a.createElement(Ld, {
                    className: "pair-name-container"
                }, null === v || void 0 === v ? void 0 : v.token0.symbol, ":", null === v || void 0 === v ? void 0 : v.token1.symbol) : o.a.createElement(Ld, {
                    className: "token-symbol-container",
                    active: Boolean(s && s.symbol)
                }, (s && s.symbol && s.symbol.length > 20 ? s.symbol.slice(0, 4) + "..." + s.symbol.slice(s.symbol.length - 5, s.symbol.length) : null === s || void 0 === s ? void 0 : s.symbol) || x("selectToken"))), !p && o.a.createElement(Kd, {
                    selected: !!s,
                    color: s ? "#48587B" : "#E8B400"
                }))))), !p && l && o.a.createElement(Vs, {
                    isOpen: C,
                    onDismiss: R,
                    onCurrencySelect: l,
                    selectedCurrency: s,
                    otherSelectedCurrency: h,
                    showCommonBases: O
                }))
            }
            var Jd = t(675),
                zd = t(133),
                Pd = t.n(zd),
                Vd = t(134),
                Yd = t.n(Vd),
                Zd = t(135),
                Hd = t.n(Zd),
                Qd = t(136),
                Xd = t.n(Qd);

            function _d() {
                var e = Ne().account,
                    n = wt(oa(Ne().chainId === f.a.MAINNET ? "0x65770b5283117639760beA3F867b69b3697a91dd" : void 0, $t, !1), "balanceOf", [null !== e && void 0 !== e ? e : void 0], ht).result,
                    t = null === n || void 0 === n ? void 0 : n[0];
                return t ? f.e.BigInt(t.toString()) : void 0
            }
            var $d = t(346),
                ep = t.n($d);

            function np() {
                var e = Object(qe.a)(["\n  height: 1rem;\n  width: 1rem;\n  border-radius: 1.125rem;\n  background-color: ", ";\n"]);
                return np = function() {
                    return e
                }, e
            }
            var tp = Je.default.div(np(), (function(e) {
                return e.theme.bg4
            }));

            function ap() {
                var e = Object(i.useRef)(),
                    n = Ne().account;
                return Object(i.useEffect)((function() {
                    n && e.current && (e.current.innerHTML = "", e.current.appendChild(ep()(16, parseInt(n.slice(2, 10), 16))))
                }), [n]), o.a.createElement(tp, {
                    ref: e
                })
            }
            var rp = t(214),
                ip = t.n(rp);

            function op() {
                return (op = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
                    }
                    return e
                }).apply(this, arguments)
            }

            function cp(e, n) {
                if (null == e) return {};
                var t, a, r = function(e, n) {
                    if (null == e) return {};
                    var t, a, r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) t = i[a], n.indexOf(t) >= 0 || (r[t] = e[t]);
                    return r
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < i.length; a++) t = i[a], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t])
                }
                return r
            }
            var up = o.a.createElement("line", {
                    x1: 18,
                    y1: 6,
                    x2: 6,
                    y2: 18
                }),
                lp = o.a.createElement("line", {
                    x1: 6,
                    y1: 6,
                    x2: 18,
                    y2: 18
                }),
                sp = function(e) {
                    var n = e.svgRef,
                        t = e.title,
                        a = cp(e, ["svgRef", "title"]);
                    return o.a.createElement("svg", op({
                        width: 20,
                        height: 20,
                        viewBox: "0 0 20 20",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: 2,
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-x",
                        ref: n
                    }, a), t ? o.a.createElement("title", null, t) : null, up, lp)
                },
                dp = o.a.forwardRef((function(e, n) {
                    return o.a.createElement(sp, op({
                        svgRef: n
                    }, e))
                }));
            t.p;

            function pp(e) {
                var n = Object(i.useRef)();
                return Object(i.useEffect)((function() {
                    n.current = e
                }), [e]), n.current
            }
            var mp = t(347),
                fp = t.n(mp);
            var bp = t(670),
                vp = t(671);

            function yp() {
                var e = Object(qe.a)(["\n  margin-left: 0.25rem;\n  font-size: 0.825rem;\n  ", ";\n  align-items: center;\n"]);
                return yp = function() {
                    return e
                }, e
            }

            function gp() {
                var e = Object(qe.a)(["\n  color: ", ";\n  flex-shrink: 0;\n  display: flex;\n  text-decoration: none;\n  font-size: 0.825rem;\n  :hover,\n  :active,\n  :focus {\n    text-decoration: none;\n    color: ", ";\n  }\n"]);
                return gp = function() {
                    return e
                }, e
            }
            var hp = Object(Je.default)(rr)(gp(), (function(e) {
                    return e.theme.text3
                }), (function(e) {
                    return e.theme.text2
                })),
                Ep = Je.default.span(yp(), (function(e) {
                    return e.theme.flexRowNoWrap
                }));

            function Op(e) {
                var n = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
                            n = Object(i.useState)(!1),
                            t = Object(k.a)(n, 2),
                            a = t[0],
                            r = t[1],
                            o = Object(i.useCallback)((function(e) {
                                var n = fp()(e);
                                r(n)
                            }), []);
                        return Object(i.useEffect)((function() {
                            if (a) {
                                var n = setTimeout((function() {
                                    r(!1)
                                }), e);
                                return function() {
                                    clearTimeout(n)
                                }
                            }
                        }), [a, r, e]), [a, o]
                    }(),
                    t = Object(k.a)(n, 2),
                    a = t[0],
                    r = t[1];
                return o.a.createElement(hp, {
                    onClick: function() {
                        return r(e.toCopy)
                    }
                }, a ? o.a.createElement(Ep, null, o.a.createElement(bp.a, {
                    size: "16"
                }), o.a.createElement(Ep, null, "Copied")) : o.a.createElement(Ep, null, o.a.createElement(vp.a, {
                    size: "16"
                })), a ? "" : e.children)
            }
            var kp = t(672);

            function jp() {
                var e = Object(qe.a)(["\n  color: ", ";\n"]);
                return jp = function() {
                    return e
                }, e
            }

            function xp() {
                var e = Object(qe.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: #C2903F;\n"]);
                return xp = function() {
                    return e
                }, e
            }

            function Ap() {
                var e = Object(qe.a)(["\n  margin-right: 0.5rem;\n  display: flex;\n  align-items: center;\n  :hover {\n    text-decoration: underline;\n  }\n"]);
                return Ap = function() {
                    return e
                }, e
            }

            function wp() {
                var e = Object(qe.a)([""]);
                return wp = function() {
                    return e
                }, e
            }
            var Cp = Je.default.div(wp()),
                Ip = Je.default.div(Ap()),
                Tp = Object(Je.default)(lr)(xp()),
                Up = Je.default.div(jp(), (function(e) {
                    var n = e.pending,
                        t = e.success,
                        a = e.theme;
                    return n ? a.primary1 : t ? a.green1 : a.red1
                }));

            function Sp(e) {
                var n, t, a = e.hash,
                    r = Ne().chainId,
                    i = gi(),
                    c = null === i || void 0 === i ? void 0 : i[a],
                    u = null === c || void 0 === c ? void 0 : c.summary,
                    l = !(null === c || void 0 === c ? void 0 : c.receipt),
                    s = !l && c && (1 === (null === (n = c.receipt) || void 0 === n ? void 0 : n.status) || "undefined" === typeof(null === (t = c.receipt) || void 0 === t ? void 0 : t.status));
                return r ? o.a.createElement(Cp, {
                    className: "TransactionWrapper"
                }, o.a.createElement(Tp, {
                    href: Kt(r, a, "transaction"),
                    pending: l,
                    success: s
                }, o.a.createElement(Wn, null, o.a.createElement(Ip, null, null !== u && void 0 !== u ? u : a, " \u2197")), o.a.createElement(Up, {
                    pending: l,
                    success: s
                }, l ? o.a.createElement(Wl, null) : s ? o.a.createElement(bp.a, {
                    size: "16"
                }) : o.a.createElement(kp.a, {
                    size: "16"
                })))) : null
            }
            var Rp = t(674),
                Np = t(673);

            function Kp() {
                var e = Object(qe.a)(["\n    align-items: flex-end;\n  "]);
                return Kp = function() {
                    return e
                }, e
            }

            function Mp() {
                var e = Object(qe.a)(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  cursor: pointer;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"]);
                return Mp = function() {
                    return e
                }, e
            }

            function Bp() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]);
                return Bp = function() {
                    return e
                }, e
            }

            function Lp() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]);
                return Lp = function() {
                    return e
                }, e
            }

            function Fp() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"]);
                return Fp = function() {
                    return e
                }, e
            }

            function Wp() {
                var e = Object(qe.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]);
                return Wp = function() {
                    return e
                }, e
            }

            function Dp() {
                var e = Object(qe.a)(["\n  text-overflow: ellipsis;\n  width: 220px;\n  overflow: hidden;\n"]);
                return Dp = function() {
                    return e
                }, e
            }

            function qp() {
                var e = Object(qe.a)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"]);
                return qp = function() {
                    return e
                }, e
            }

            function Gp() {
                var e = Object(qe.a)(["\n  color: ", ";\n"]);
                return Gp = function() {
                    return e
                }, e
            }

            function Jp() {
                var e = Object(qe.a)(["\n  margin-top: 1rem;\n"]);
                return Jp = function() {
                    return e
                }, e
            }

            function zp() {
                var e = Object(qe.a)(["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"]);
                return zp = function() {
                    return e
                }, e
            }

            function Pp() {
                var e = Object(qe.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]);
                return Pp = function() {
                    return e
                }, e
            }

            function Vp() {
                var e = Object(qe.a)(["\n  padding: 2px;\n\n  ", "\n"]);
                return Vp = function() {
                    return e
                }, e
            }

            function Yp() {
                var e = Object(qe.a)(["\n  position: relative;\n"]);
                return Yp = function() {
                    return e
                }, e
            }
            var Zp = Je.default.div(Yp()),
                Hp = (Je.default.div(Vp(), (function(e) {
                    return e.clickable ? Object(Je.css)(Pp()) : null
                })), Je.default.div(zp(), (function(e) {
                    return e.theme.bg3
                }))),
                Qp = Je.default.div(Jp()),
                Xp = Object(Je.default)(La.b)(Gp(), (function(e) {
                    var n = e.theme,
                        t = e.severity;
                    return 3 === t || 4 === t ? n.red1 : 2 === t ? n.yellow2 : 1 === t ? n.text1 : n.green1
                })),
                _p = Je.default.button(qp(), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.text2
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.bg3
                })),
                $p = Object(Je.default)(La.b)(Dp()),
                em = Je.default.span(Wp()),
                nm = Je.default.div(Fp(), (function(e) {
                    var n = e.theme;
                    return Object(Ye.d)(.9, n.red1)
                }), (function(e) {
                    return e.theme.red1
                })),
                tm = Je.default.div(Lp(), (function(e) {
                    var n = e.theme;
                    return Object(Ye.d)(.9, n.red1)
                }));

            function am(e) {
                var n = e.error;
                return o.a.createElement(nm, null, o.a.createElement(tm, null, o.a.createElement(Np.a, {
                    size: 24
                })), o.a.createElement("p", null, n))
            }
            var rm = Object(Je.default)(mn)(Bp(), (function(e) {
                    var n = e.theme;
                    return Object(Ye.d)(.9, n.primary1)
                }), (function(e) {
                    return e.theme.primary1
                })),
                im = Je.default.div(Mp(), (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    var n = e.size;
                    return n ? n + "px" : "32px"
                }), (function(e) {
                    var n = e.size;
                    return n ? n + "px" : "32px"
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Kp())
                }));

            function om() {
                var e = Object(qe.a)(["\n  color: ", ";\n"]);
                return om = function() {
                    return e
                }, e
            }

            function cm() {
                var e = Object(qe.a)(["\n  width: fit-content;\n  font-weight: 400;\n  margin-left: 8px;\n  font-size: 0.825rem;\n  padding: 4px 6px;\n  :hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"]);
                return cm = function() {
                    return e
                }, e
            }

            function um() {
                var e = Object(qe.a)(["\n  ", ";\n"]);
                return um = function() {
                    return e
                }, e
            }

            function lm() {
                var e = Object(qe.a)(["\n  width: initial;\n  font-size: 0.825rem;\n  font-weight: 500;\n  color: ", ";\n"]);
                return lm = function() {
                    return e
                }, e
            }

            function sm() {
                var e = Object(qe.a)(["\n  path {\n    stroke: ", ";\n  }\n"]);
                return sm = function() {
                    return e
                }, e
            }

            function dm() {
                var e = Object(qe.a)(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]);
                return dm = function() {
                    return e
                }, e
            }

            function pm() {
                var e = Object(qe.a)(["\n  font-size: 0.825rem;\n  color: ", ";\n  margin-left: 1rem;\n  font-size: 0.825rem;\n  display: flex;\n  :hover {\n    color: ", ";\n  }\n"]);
                return pm = function() {
                    return e
                }, e
            }

            function mm() {
                var e = Object(qe.a)(["\n  display: flex;\n  justify-content: space-between;\n  min-width: 0;\n  width: 100%;\n\n  font-weight: 500;\n  font-size: 1.25rem;\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  p {\n    min-width: 0;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n"]);
                return mm = function() {
                    return e
                }, e
            }

            function fm() {
                var e = Object(qe.a)(["\n    padding: 0 1rem 1rem;\n  "]);
                return fm = function() {
                    return e
                }, e
            }

            function bm() {
                var e = Object(qe.a)(["\n  ", "\n  padding: 1.5rem;\n  flex-grow: 1;\n  overflow: auto;\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n\n  h5 {\n    margin: 0;\n    font-weight: 400;\n    color: ", ";\n  }\n  ", ";\n"]);
                return bm = function() {
                    return e
                }, e
            }

            function vm() {
                var e = Object(qe.a)(["\n  h5 {\n    margin: 0 0 1rem 0;\n    font-weight: 400;\n  }\n\n  h4 {\n    margin: 0;\n    font-weight: 500;\n  }\n"]);
                return vm = function() {
                    return e
                }, e
            }

            function ym() {
                var e = Object(qe.a)(["padding: 0rem 1rem 1rem;"]);
                return ym = function() {
                    return e
                }, e
            }

            function gm() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  padding: 0rem 1rem;\n  ", ";\n"]);
                return gm = function() {
                    return e
                }, e
            }

            function hm() {
                var e = Object(qe.a)(["\n  ", ";\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 400;\n  color: ", ";\n\n  div {\n    ", "\n    align-items: center;\n  }\n"]);
                return hm = function() {
                    return e
                }, e
            }

            function Em() {
                var e = Object(qe.a)(["\n  padding: 1rem;\n  border: 1px solid ", ";\n  border-radius: 20px;\n  position: relative;\n  display: grid;\n  grid-row-gap: 12px;\n  margin-bottom: 20px;\n"]);
                return Em = function() {
                    return e
                }, e
            }

            function Om() {
                var e = Object(qe.a)(["\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"]);
                return Om = function() {
                    return e
                }, e
            }

            function km() {
                var e = Object(qe.a)(["\n    padding: 1rem;\n  "]);
                return km = function() {
                    return e
                }, e
            }

            function jm() {
                var e = Object(qe.a)(["\n  ", ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ", ";\n  ", ";\n"]);
                return jm = function() {
                    return e
                }, e
            }
            var xm = Je.default.div(jm(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return "blue" === e.color ? function(e) {
                        return e.theme.primary1
                    } : "inherit"
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(km())
                })),
                Am = Je.default.div(Om()),
                wm = Je.default.div(Em(), (function(e) {
                    return e.theme.bg3
                })),
                Cm = Je.default.div(hm(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.flexRowNoWrap
                })),
                Im = Je.default.div(gm(), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(ym())
                })),
                Tm = Je.default.div(vm()),
                Um = Je.default.div(bm(), (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.text3
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(fm())
                })),
                Sm = Je.default.div(mm()),
                Rm = Object(Je.default)(lr)(pm(), (function(e) {
                    return e.theme.text3
                }), (function(e) {
                    return e.theme.text2
                })),
                Nm = Je.default.div(dm()),
                Km = Object(Je.default)(dp)(sm(), (function(e) {
                    return e.theme.text4
                })),
                Mm = Je.default.div(lm(), (function(e) {
                    return e.theme.text3
                })),
                Bm = Je.default.div(um(), (function(e) {
                    return e.theme.flexColumnNoWrap
                })),
                Lm = Object(Je.default)(ii)(cm()),
                Fm = Object(Je.default)(Lm)(om(), (function(e) {
                    return e.theme.primary1
                }));

            function Wm(e) {
                return o.a.createElement(Bm, null, e.map((function(e, n) {
                    return o.a.createElement(Sp, {
                        key: n,
                        hash: e
                    })
                })))
            }

            function Dm(e) {
                var n = e.toggleWalletModal,
                    t = e.pendingTransactions,
                    a = e.confirmedTransactions,
                    r = e.ENSName,
                    c = e.openOptions,
                    u = Ne(),
                    s = u.chainId,
                    d = u.account,
                    p = u.connector,
                    m = Object(i.useContext)(Je.ThemeContext),
                    f = Object(l.c)();

                function b() {
                    return p === Y ? o.a.createElement(im, {
                        size: 16
                    }, o.a.createElement(ap, null)) : p === Z ? o.a.createElement(im, {
                        size: 16
                    }, o.a.createElement("img", {
                        src: Xd.a,
                        alt: "wallet connect logo"
                    })) : p === X ? o.a.createElement(im, {
                        size: 16
                    }, o.a.createElement("img", {
                        src: Pd.a,
                        alt: "coinbase wallet logo"
                    })) : p === H ? o.a.createElement(im, {
                        size: 16
                    }, o.a.createElement("img", {
                        src: Yd.a,
                        alt: "fortmatic logo"
                    })) : p === Q ? o.a.createElement(o.a.Fragment, null, o.a.createElement(im, {
                        size: 16
                    }, o.a.createElement("img", {
                        src: Hd.a,
                        alt: "portis logo"
                    }), o.a.createElement(Fm, {
                        onClick: function() {
                            Q.portis.showPortis()
                        }
                    }, "Show Portis"))) : null
                }
                var v = Object(i.useCallback)((function() {
                    s && f(fi({
                        chainId: s
                    }))
                }), [f, s]);
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(Am, null, o.a.createElement(Nm, {
                    onClick: n
                }, o.a.createElement(Km, null)), o.a.createElement(xm, null, "Account"), o.a.createElement(Im, null, o.a.createElement(Tm, null, o.a.createElement(wm, null, o.a.createElement(Cm, null, function() {
                    var e = window.ethereum,
                        n = !(!e || !e.isMetaMask),
                        t = Object.keys(Oe).filter((function(e) {
                            return Oe[e].connector === p && (p !== Y || n === ("METAMASK" === e))
                        })).map((function(e) {
                            return Oe[e].name
                        }))[0];
                    return o.a.createElement(Mm, null, "Connected with ", t)
                }(), o.a.createElement("div", null, p !== Y && p !== X && o.a.createElement(Lm, {
                    style: {
                        fontSize: ".825rem",
                        fontWeight: 400,
                        marginRight: "8px"
                    },
                    onClick: function() {
                        p.close()
                    }
                }, "Disconnect"), o.a.createElement(Lm, {
                    style: {
                        fontSize: ".825rem",
                        fontWeight: 400
                    },
                    onClick: function() {
                        c()
                    }
                }, "Change"))), o.a.createElement(Cm, {
                    id: "web3-account-identifier-row"
                }, o.a.createElement(Sm, null, r ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", null, b(), o.a.createElement("p", null, " ", r))) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", null, b(), o.a.createElement("p", null, " ", d && Mt(d)))))), o.a.createElement(Cm, null, r ? o.a.createElement(o.a.Fragment, null, o.a.createElement(Sm, null, o.a.createElement("div", null, d && o.a.createElement(Op, {
                    toCopy: d
                }, o.a.createElement("span", {
                    style: {
                        marginLeft: "4px"
                    }
                }, "Copy Address")), s && d && o.a.createElement(Rm, {
                    hasENS: !!r,
                    isENS: !0,
                    href: s && Kt(s, r, "address")
                }, o.a.createElement(Rp.a, {
                    size: 16
                }), o.a.createElement("span", {
                    style: {
                        marginLeft: "4px"
                    }
                }, "View on BSC"))))) : o.a.createElement(o.a.Fragment, null, o.a.createElement(Sm, null, o.a.createElement("div", null, d && o.a.createElement(Op, {
                    toCopy: d
                }, o.a.createElement("span", {
                    style: {
                        marginLeft: "4px"
                    }
                }, "Copy Address")), s && d && o.a.createElement(Rm, {
                    hasENS: !!r,
                    isENS: !1,
                    href: Kt(s, d, "address")
                }, o.a.createElement(Rp.a, {
                    size: 16
                }), o.a.createElement("span", {
                    style: {
                        marginLeft: "4px"
                    }
                }, "View on BSC")))))))))), t.length || a.length ? o.a.createElement(Um, null, o.a.createElement(Fn, {
                    mb: "1rem",
                    style: {
                        justifyContent: "space-between"
                    }
                }, o.a.createElement(Cr, null, "Recent Transactions"), o.a.createElement(rr, {
                    onClick: v
                }, "(clear all)")), Wm(t), Wm(a)) : o.a.createElement(Um, null, o.a.createElement(Cr, {
                    color: m.text1
                }, "Your transactions will appear here...")))
            }

            function qm() {
                var e = Object(qe.a)(["\n    align-items: flex-end;\n  "]);
                return qm = function() {
                    return e
                }, e
            }

            function Gm() {
                var e = Object(qe.a)(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"]);
                return Gm = function() {
                    return e
                }, e
            }

            function Jm() {
                var e = Object(qe.a)(["\n  color: ", ";\n  margin-top: 10px;\n  font-size: 12px;\n"]);
                return Jm = function() {
                    return e
                }, e
            }

            function zm() {
                var e = Object(qe.a)(["\n  ", ";\n  color: ", ";\n  font-size: 1rem;\n  font-weight: 500;\n"]);
                return zm = function() {
                    return e
                }, e
            }

            function Pm() {
                var e = Object(qe.a)(["\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);
                return Pm = function() {
                    return e
                }, e
            }

            function Vm() {
                var e = Object(qe.a)(["\n  ", "\n  justify-content: center;\n  align-items: center;\n\n  &:first-child {\n    height: 8px;\n    width: 8px;\n    margin-right: 8px;\n    background-color: ", ";\n    border-radius: 50%;\n  }\n"]);
                return Vm = function() {
                    return e
                }, e
            }

            function Ym() {
                var e = Object(qe.a)(["\n  margin-top: 0;\n  &:hover {\n    cursor: ", ";\n    border: ", ";\n  }\n  opacity: ", ";\n"]);
                return Ym = function() {
                    return e
                }, e
            }

            function Zm() {
                var e = Object(qe.a)(["\n  ", ";\n  justify-content: center;\n  height: 100%;\n"]);
                return Zm = function() {
                    return e
                }, e
            }

            function Hm() {
                var e = Object(qe.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2rem;\n  padding: 1rem;\n"]);
                return Hm = function() {
                    return e
                }, e
            }

            function Qm() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  padding: 1rem;\n  outline: none;\n  border: 1px solid;\n  border-radius: 12px;\n  width: 100% !important;\n  &:focus {\n    box-shadow: 0 0 0 1px ", ";\n  }\n  border-color: ", ";\n"]);
                return Qm = function() {
                    return e
                }, e
            }
            var Xm = Je.default.button(Qm(), (function(e) {
                    var n = e.theme;
                    return e.active ? n.bg3 : n.bg2
                }), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    var n = e.theme;
                    return e.active ? "transparent" : n.bg3
                })),
                _m = Object(Je.default)(Xm)(Hm()),
                $m = Je.default.div(Zm(), (function(e) {
                    return e.theme.flexColumnNoWrap
                })),
                ef = Object(Je.default)(_m)(Ym(), (function(e) {
                    return e.clickable ? "pointer" : ""
                }), (function(e) {
                    var n = e.clickable,
                        t = e.theme;
                    return n ? "1px solid ".concat(t.primary1) : ""
                }), (function(e) {
                    return e.disabled ? "0.5" : "1"
                })),
                nf = Je.default.div(Vm(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.theme.green1
                })),
                tf = Je.default.div(Pm(), (function(e) {
                    return e.theme.green1
                })),
                af = Je.default.div(zm(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return "blue" === e.color ? function(e) {
                        return e.theme.primary1
                    } : function(e) {
                        return e.theme.text1
                    }
                })),
                rf = Je.default.div(Jm(), (function(e) {
                    return e.theme.text1
                })),
                of = Je.default.div(Gm(), (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    var n = e.size;
                    return n ? n + "px" : "24px"
                }), (function(e) {
                    var n = e.size;
                    return n ? n + "px" : "24px"
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(qm())
                }));

            function cf(e) {
                var n = e.link,
                    t = void 0 === n ? null : n,
                    a = e.clickable,
                    r = void 0 === a || a,
                    i = e.size,
                    c = e.onClick,
                    u = void 0 === c ? null : c,
                    l = e.color,
                    s = e.header,
                    d = e.subheader,
                    p = void 0 === d ? null : d,
                    m = e.icon,
                    f = e.active,
                    b = void 0 !== f && f,
                    v = e.id,
                    y = o.a.createElement(ef, {
                        id: v,
                        onClick: u,
                        clickable: r && !b,
                        active: b
                    }, o.a.createElement($m, null, o.a.createElement(af, {
                        color: l
                    }, b ? o.a.createElement(tf, null, o.a.createElement(nf, null, o.a.createElement("div", null))) : "", s), p && o.a.createElement(rf, null, p)), o.a.createElement( of , {
                        size: i
                    }, o.a.createElement("img", {
                        src: m,
                        alt: "Icon"
                    })));
                return t ? o.a.createElement(lr, {
                    href: t
                }, y) : y
            }

            function uf() {
                var e = Object(qe.a)(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n"]);
                return uf = function() {
                    return e
                }, e
            }

            function lf() {
                var e = Object(qe.a)(["\n  border-radius: 8px;\n  font-size: 12px;\n  color: ", ";\n  background-color: ", ";\n  margin-left: 1rem;\n  padding: 0.5rem;\n  font-weight: 600;\n  user-select: none;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ", ";\n  }\n"]);
                return lf = function() {
                    return e
                }, e
            }

            function sf() {
                var e = Object(qe.a)(["\n  ", ";\n  align-items: center;\n  justify-content: flex-start;\n"]);
                return sf = function() {
                    return e
                }, e
            }

            function df() {
                var e = Object(qe.a)(["\n  ", ";\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  color: ", ";\n  border: 1px solid ", ";\n\n  & > * {\n    padding: 1rem;\n  }\n"]);
                return df = function() {
                    return e
                }, e
            }

            function pf() {
                var e = Object(qe.a)(["\n  margin-right: 1rem;\n"]);
                return pf = function() {
                    return e
                }, e
            }

            function mf() {
                var e = Object(qe.a)(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  & > * {\n    width: 100%;\n  }\n"]);
                return mf = function() {
                    return e
                }, e
            }
            var ff = Je.default.div(mf(), (function(e) {
                    return e.theme.flexColumnNoWrap
                })),
                bf = Object(Je.default)(Wl)(pf()),
                vf = Je.default.div(df(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    var n = e.theme;
                    return e.error ? n.red1 : "inherit"
                }), (function(e) {
                    var n = e.theme;
                    return e.error ? n.red1 : n.text4
                })),
                yf = Je.default.div(sf(), (function(e) {
                    return e.theme.flexRowNoWrap
                })),
                gf = Je.default.div(lf(), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.bg4
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.1, n.text4)
                })),
                hf = Je.default.div(uf(), (function(e) {
                    return e.theme.flexRowNoWrap
                }));

            function Ef(e) {
                var n, a, r = e.connector,
                    i = e.error,
                    c = void 0 !== i && i,
                    u = e.setPendingError,
                    l = e.tryActivation,
                    s = null === (n = window) || void 0 === n || null === (a = n.ethereum) || void 0 === a ? void 0 : a.isMetaMask;
                return o.a.createElement(ff, null, o.a.createElement(vf, {
                    error: c
                }, o.a.createElement(hf, null, c ? o.a.createElement(yf, null, o.a.createElement("div", null, "Error connecting."), o.a.createElement(gf, {
                    onClick: function() {
                        u(!1), r && l(r)
                    }
                }, "Try Again")) : o.a.createElement(o.a.Fragment, null, o.a.createElement(bf, null), "Initializing..."))), Object.keys(Oe).map((function(e) {
                    var n = Oe[e];
                    if (n.connector === r) {
                        if (n.connector === Y) {
                            if (s && "MetaMask" !== n.name) return null;
                            if (!s && "MetaMask" === n.name) return null
                        }
                        return o.a.createElement(cf, {
                            id: "connect-".concat(e),
                            key: e,
                            clickable: !1,
                            color: n.color,
                            header: n.name,
                            subheader: n.description,
                            icon: t(186)("./" + n.iconName)
                        })
                    }
                    return null
                })))
            }

            function Of() {
                var e = Object(qe.a)(["\n  :hover {\n    cursor: pointer;\n  }\n"]);
                return Of = function() {
                    return e
                }, e
            }

            function kf() {
                var e = Object(qe.a)(["\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  "]);
                return kf = function() {
                    return e
                }, e
            }

            function jf() {
                var e = Object(qe.a)(["\n  display: grid;\n  grid-gap: 10px;\n  ", ";\n"]);
                return jf = function() {
                    return e
                }, e
            }

            function xf() {
                var e = Object(qe.a)(["\n    margin: 1rem;\n    font-size: 12px;\n  "]);
                return xf = function() {
                    return e
                }, e
            }

            function Af() {
                var e = Object(qe.a)(["\n  ", "\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n  ", ";\n"]);
                return Af = function() {
                    return e
                }, e
            }

            function wf() {
                var e = Object(qe.a)(["\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n"]);
                return wf = function() {
                    return e
                }, e
            }

            function Cf() {
                var e = Object(qe.a)(["padding: 1rem"]);
                return Cf = function() {
                    return e
                }, e
            }

            function If() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  padding: 2rem;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n\n  ", ";\n"]);
                return If = function() {
                    return e
                }, e
            }

            function Tf() {
                var e = Object(qe.a)(["\n    padding: 1rem;\n  "]);
                return Tf = function() {
                    return e
                }, e
            }

            function Uf() {
                var e = Object(qe.a)(["\n  ", ";\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ", ";\n  ", ";\n"]);
                return Uf = function() {
                    return e
                }, e
            }

            function Sf() {
                var e = Object(qe.a)(["\n  ", "\n  margin: 0;\n  padding: 0;\n  width: 100%;\n"]);
                return Sf = function() {
                    return e
                }, e
            }

            function Rf() {
                var e = Object(qe.a)(["\n  path {\n    stroke: ", ";\n  }\n"]);
                return Rf = function() {
                    return e
                }, e
            }

            function Nf() {
                var e = Object(qe.a)(["\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n"]);
                return Nf = function() {
                    return e
                }, e
            }
            var Kf = Je.default.div(Nf()),
                Mf = Object(Je.default)(dp)(Rf(), (function(e) {
                    return e.theme.text4
                })),
                Bf = Je.default.div(Sf(), (function(e) {
                    return e.theme.flexColumnNoWrap
                })),
                Lf = Je.default.div(Uf(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return "blue" === e.color ? function(e) {
                        return e.theme.primary1
                    } : "inherit"
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Tf())
                })),
                Ff = Je.default.div(If(), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Cf())
                })),
                Wf = Je.default.div(wf()),
                Df = Je.default.div(Af(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(xf())
                })),
                qf = Je.default.div(jf(), (function(e) {
                    return e.theme.mediaWidth.upToMedium(kf())
                })),
                Gf = Je.default.div(Of()),
                Jf = "options",
                zf = "account",
                Pf = "pending";

            function Vf(e) {
                var n = e.pendingTransactions,
                    a = e.confirmedTransactions,
                    c = e.ENSName,
                    u = Object(r.d)(),
                    l = u.active,
                    s = u.account,
                    d = u.connector,
                    p = u.activate,
                    m = u.error,
                    f = Object(i.useState)(zf),
                    b = Object(k.a)(f, 2),
                    v = b[0],
                    g = b[1],
                    h = Object(i.useState)(),
                    E = Object(k.a)(h, 2),
                    x = E[0],
                    A = E[1],
                    w = Object(i.useState)(),
                    C = Object(k.a)(w, 2),
                    I = C[0],
                    T = C[1],
                    U = at(Qn.WALLET),
                    S = it(),
                    R = pp(s);
                Object(i.useEffect)((function() {
                    s && !R && U && S()
                }), [s, R, S, U]), Object(i.useEffect)((function() {
                    U && (T(!1), g(zf))
                }), [U]);
                var N = pp(l),
                    K = pp(d);
                Object(i.useEffect)((function() {
                    U && (l && !N || d && d !== K && !m) && g(zf)
                }), [g, l, m, d, U, N, K]);
                var M = function() {
                    var e = Object(j.a)(O.a.mark((function e(n) {
                        var t, a, i;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    i = "", Object.keys(Oe).map((function(e) {
                                        return n !== Oe[e].connector || (i = Oe[e].name)
                                    })), console.log("name:", i), A(n), g(Pf), n instanceof y.a && (null === (t = n.walletConnectProvider) || void 0 === t || null === (a = t.wc) || void 0 === a ? void 0 : a.uri) && (n.walletConnectProvider = void 0), n && p(n, void 0, !0).catch((function(e) {
                                        e instanceof r.a ? p(n) : T(!0)
                                    }));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }();
                return Object(i.useEffect)((function() {
                    H.on("OVERLAY_READY", (function() {
                        S()
                    }))
                }), [S]), o.a.createElement(cn, {
                    isOpen: U,
                    onDismiss: S,
                    minHeight: !1,
                    maxHeight: 90
                }, o.a.createElement(Bf, null, m ? o.a.createElement(Wf, null, o.a.createElement(Kf, {
                    onClick: S
                }, o.a.createElement(Mf, null)), o.a.createElement(Lf, null, m instanceof r.a ? "Wrong Network" : "Error connecting"), o.a.createElement(Ff, null, m instanceof r.a ? o.a.createElement("h5", null, "Please connect to the appropriate BSC network.") : "Error connecting. Try refreshing the page.")) : s && v === zf ? o.a.createElement(Dm, {
                    toggleWalletModal: S,
                    pendingTransactions: n,
                    confirmedTransactions: a,
                    ENSName: c,
                    openOptions: function() {
                        return g(Jf)
                    }
                }) : o.a.createElement(Wf, null, o.a.createElement(Kf, {
                    onClick: S
                }, o.a.createElement(Mf, null)), v !== zf ? o.a.createElement(Lf, {
                    color: "blue"
                }, o.a.createElement(Gf, {
                    onClick: function() {
                        T(!1), g(zf)
                    }
                }, "Back")) : o.a.createElement(Lf, null, o.a.createElement(Gf, null, "Connect to a wallet, only support bsc network")), o.a.createElement(Ff, null, v === Pf ? o.a.createElement(Ef, {
                    connector: x,
                    error: I,
                    setPendingError: T,
                    tryActivation: M
                }) : o.a.createElement(qf, null, function() {
                    var e = window.ethereum && window.ethereum.isMetaMask;
                    return Object.keys(Oe).map((function(n) {
                        var a = Oe[n];
                        if (Re.isMobile) return a.connector === Q || window.web3 || window.ethereum || !a.mobile ? null : o.a.createElement(cf, {
                            onClick: function() {
                                a.connector !== d && !a.href && M(a.connector)
                            },
                            id: "connect-".concat(n),
                            key: n,
                            active: a.connector && a.connector === d,
                            color: a.color,
                            link: a.href,
                            header: a.name,
                            subheader: null,
                            icon: t(186)("./" + a.iconName)
                        });
                        if (a.connector === Y) {
                            if (!window.web3 && !window.ethereum) return "MetaMask" === a.name ? o.a.createElement(cf, {
                                id: "connect-".concat(n),
                                key: n,
                                color: "#E8831D",
                                header: "Install Metamask",
                                subheader: null,
                                link: "https://metamask.io/",
                                icon: ip.a
                            }) : null;
                            if ("MetaMask" === a.name && !e) return null;
                            if ("Injected" === a.name && e) return null
                        }
                        return !Re.isMobile && !a.mobileOnly && o.a.createElement(cf, {
                            id: "connect-".concat(n),
                            onClick: function() {
                                a.connector === d ? g(zf) : !a.href && M(a.connector)
                            },
                            key: n,
                            active: a.connector === d,
                            color: a.color,
                            link: a.href,
                            header: a.name,
                            subheader: null,
                            icon: t(186)("./" + a.iconName)
                        })
                    }))
                }()), v !== Pf && o.a.createElement(Df, null, o.a.createElement("span", null, "New to BSC? \xa0"), " ", o.a.createElement(lr, {
                    href: "https://www.binance.org/"
                }, "Learn more about BSC"))))))
            }
            var Yf = t(233),
                Zf = t.n(Yf);

            function Hf() {
                var e = Object(qe.a)(["\n  margin-left: 0.25rem;\n  margin-right: 0.5rem;\n  width: 16px;\n  height: 16px;\n"]);
                return Hf = function() {
                    return e
                }, e
            }

            function Qf() {
                var e = Object(qe.a)(["\n      font-size: 12px;\n  "]);
                return Qf = function() {
                    return e
                }, e
            }

            function Xf() {
                var e = Object(qe.a)(["\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0 0.5rem 0 0.25rem;\n  font-size: 1rem;\n  width: fit-content;\n  font-weight: 500;\n  ", "\n"]);
                return Xf = function() {
                    return e
                }, e
            }

            function _f() {
                var e = Object(qe.a)(["\n    padding: 6px 8px;\n    border-radius: 4px;\n  "]);
                return _f = function() {
                    return e
                }, e
            }

            function $f() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ", ";\n\n    :focus {\n      border: 1px solid ", ";\n    }\n  }\n  ", ";\n"]);
                return $f = function() {
                    return e
                }, e
            }

            function eb() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  border: none;\n  color: #393939;\n  font-weight: 500;\n  :focus,\n  :hover {\n    background-color: ", ";\n  }\n"]);
                return eb = function() {
                    return e
                }, e
            }

            function nb() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  color: ", ";\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ", ";\n  }\n"]);
                return nb = function() {
                    return e
                }, e
            }

            function tb() {
                var e = Object(qe.a)(["\n  ", "\n  width: 100%;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 12px;\n  cursor: pointer;\n  user-select: none;\n  :focus {\n    outline: none;\n  }\n"]);
                return tb = function() {
                    return e
                }, e
            }

            function ab() {
                var e = Object(qe.a)(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  & > * {\n    height: ", ";\n    width: ", ";\n  }\n"]);
                return ab = function() {
                    return e
                }, e
            }
            var rb = Je.default.div(ab(), (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    var n = e.size;
                    return n ? n + "px" : "32px"
                }), (function(e) {
                    var n = e.size;
                    return n ? n + "px" : "32px"
                })),
                ib = Object(Je.default)(ii)(tb(), (function(e) {
                    return e.theme.flexRowNoWrap
                })),
                ob = Object(Je.default)(ib)(nb(), (function(e) {
                    return e.theme.red1
                }), (function(e) {
                    return e.theme.red1
                }), (function(e) {
                    return e.theme.white
                }), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.1, n.red1)
                })),
                cb = Object(Je.default)(ib)(eb(), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    var n = e.selected,
                        t = e.theme;
                    return n ? t.bg2 : Object(Ye.a)(.05, t.primary1)
                })),
                ub = Object(Je.default)(ib)($f(), (function(e) {
                    var n = e.pending,
                        t = e.theme;
                    return n ? t.primary1 : t.bg2
                }), (function(e) {
                    var n = e.pending,
                        t = e.theme;
                    return n ? t.primary1 : t.bg3
                }), (function(e) {
                    var n = e.pending,
                        t = e.theme;
                    return n ? t.white : t.text1
                }), (function(e) {
                    var n = e.pending,
                        t = e.theme;
                    return n ? Object(Ye.a)(.05, t.primary1) : Object(Ye.b)(.05, t.bg2)
                }), (function(e) {
                    var n = e.pending,
                        t = e.theme;
                    return n ? Object(Ye.a)(.1, t.primary1) : Object(Ye.a)(.1, t.bg3)
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(_f())
                })),
                lb = Je.default.p(Xf(), Re.isMobile && Object(Je.css)(Qf())),
                sb = Object(Je.default)(Jd.a)(Hf());

            function db(e, n) {
                return n.addedTime - e.addedTime
            }
            var pb = o.a.createElement("span", {
                role: "img",
                "aria-label": "has socks emoji",
                style: {
                    marginTop: -4,
                    marginBottom: -4
                }
            }, "\ud83e\udde6");

            function mb(e) {
                var n = e.connector;
                return n === Y ? o.a.createElement(ap, null) : n === Z ? o.a.createElement(rb, {
                    size: 16
                }, o.a.createElement("img", {
                    src: Xd.a,
                    alt: ""
                })) : n === X ? o.a.createElement(rb, {
                    size: 16
                }, o.a.createElement("img", {
                    src: Pd.a,
                    alt: ""
                })) : n === H ? o.a.createElement(rb, {
                    size: 16
                }, o.a.createElement("img", {
                    src: Yd.a,
                    alt: ""
                })) : n === Q ? o.a.createElement(rb, {
                    size: 16
                }, o.a.createElement("img", {
                    src: Hd.a,
                    alt: ""
                })) : null
            }

            function fb() {
                var e = Object(Be.b)().t,
                    n = Object(r.d)(),
                    t = n.account,
                    a = n.connector,
                    c = n.error,
                    u = Si(null !== t && void 0 !== t ? t : void 0).ENSName,
                    l = gi(),
                    s = Object(i.useMemo)((function() {
                        return Object.values(l).filter(hi).sort(db)
                    }), [l]).filter((function(e) {
                        return !e.receipt
                    })).map((function(e) {
                        return e.hash
                    })),
                    d = !!s.length,
                    p = function() {
                        var e = _d();
                        return Object(i.useMemo)((function() {
                            return e && f.e.greaterThan(e, f.e.BigInt(0))
                        }), [e])
                    }(),
                    m = it(),
                    b = Ne().chainId;
                return t ? 1 == b ? o.a.createElement(ob, {
                    onClick: m
                }, o.a.createElement(sb, null), o.a.createElement(lb, null, "Wrong Network")) : o.a.createElement(ub, {
                    id: "web3-status-connected",
                    onClick: m,
                    pending: d
                }, d ? o.a.createElement(Bn, null, o.a.createElement(lb, null, null === s || void 0 === s ? void 0 : s.length, " Pending"), " ", o.a.createElement(Wl, {
                    stroke: "white"
                })) : o.a.createElement(o.a.Fragment, null, p ? pb : null, Re.isMobile && o.a.createElement("img", {
                    src: Zf.a,
                    width: 17
                }), !Re.isMobile && o.a.createElement(lb, null, u || Mt(t))), !d && a && !Re.isMobile && o.a.createElement(mb, {
                    connector: a
                })) : c ? o.a.createElement(ob, {
                    onClick: m
                }, o.a.createElement(sb, null), o.a.createElement(lb, null, c instanceof r.a ? "Wrong Network" : "Error")) : o.a.createElement(cb, {
                    id: "connect-wallet",
                    onClick: m,
                    faded: !t
                }, o.a.createElement(lb, null, e("Connect to a wallet")))
            }

            function bb() {
                var e = Object(r.d)(),
                    n = e.active,
                    t = e.account,
                    a = Object(r.d)("NETWORK"),
                    c = Si(null !== t && void 0 !== t ? t : void 0).ENSName,
                    u = gi(),
                    l = Object(i.useMemo)((function() {
                        return Object.values(u).filter(hi).sort(db)
                    }), [u]),
                    s = l.filter((function(e) {
                        return !e.receipt
                    })).map((function(e) {
                        return e.hash
                    })),
                    d = l.filter((function(e) {
                        return e.receipt
                    })).map((function(e) {
                        return e.hash
                    }));
                return a.active || n ? o.a.createElement(o.a.Fragment, null, o.a.createElement(fb, null), o.a.createElement(Vf, {
                    ENSName: null !== c && void 0 !== c ? c : void 0,
                    pendingTransactions: s,
                    confirmedTransactions: d
                })) : null
            }
            var vb, yb = t(217),
                gb = t.n(yb),
                hb = t(215),
                Eb = t.n(hb),
                Ob = t(216),
                kb = t.n(Ob);

            function jb() {
                var e = Object(qe.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-self: flex-end;\n"]);
                return jb = function() {
                    return e
                }, e
            }

            function xb() {
                var e = Object(qe.a)(["\n  color: #626E88;\n  line-height: 20px;\n  font-size: 14px;\n  padding:3px 15px;\n  &:hover {\n    cursor: pointer;\n  }\n"]);
                return xb = function() {
                    return e
                }, e
            }

            function Ab() {
                var e = Object(qe.a)(["\n  position: absolute;\n  right: 1rem;\n  top: 75px;\n  width: 100px;\n  height: 20px; \n  background: #fff;\n  box-shadow: 0px 2px 12px 6px rgba(0, 0, 0, 0.06);\n  border-radius: 8px;\n  padding:10px 0;\n  height: auto;\n"]);
                return Ab = function() {
                    return e
                }, e
            }

            function wb() {
                var e = Object(qe.a)(["\n    width: 104px;\n    height: 42px;\n    padding: 0 12px;\n    border-radius: 8px;\n    span {\n      font-size: 16px;\n    }\n    margin-left: 10px;\n  "]);
                return wb = function() {
                    return e
                }, e
            }

            function Cb() {
                var e = Object(qe.a)(["\n    width: 70px;\n    padding: 6px;\n    border-radius: 4px;\n    span {\n      font-size: 13px;\n    }\n  "]);
                return Cb = function() {
                    return e
                }, e
            }

            function Ib() {
                var e = Object(qe.a)(["\n  background: #FFFFFF;\n  display: flex;\n  align-items: center;\n  position: relative;\n  &:hover {\n    cursor: pointer;\n  }\n  ", "\n  ", "\n"]);
                return Ib = function() {
                    return e
                }, e
            }

            function Tb() {
                var e = Object(qe.a)(["\n//       display: none;\n// "]);
                return Tb = function() {
                    return e
                }, e
            }

            function Ub() {
                var e = Object(qe.a)(["\n      font-size: 12px;\n      margin: 0 3px;\n  "]);
                return Ub = function() {
                    return e
                }, e
            }

            function Sb() {
                var e = Object(qe.a)(["\n  ", "\n  align-items: left;\n  outline: none;\n  text-decoration: none;\n  color: #fff;\n  font-size: 16px;\n  width: fit-content;\n  margin: 0 12px;\n  font-weight: 500;\n\n  &.", " {\n    font-weight: 600;\n    color: ", ";\n  }\n  ", "\n  :hover,\n  :focus {\n    color: #FFCA13FF;\n  }\n\n//   ", "\n// "]);
                return Sb = function() {
                    return e
                }, e
            }

            function Rb() {
                var e = Object(qe.a)(["\n      height: 20px;\n    "]);
                return Rb = function() {
                    return e
                }, e
            }

            function Nb() {
                var e = Object(qe.a)(["\n  height: 28px;\n  ", "\n"]);
                return Nb = function() {
                    return e
                }, e
            }

            function Kb() {
                var e = Object(qe.a)(["\n      margin-top: 10px;\n      font-size: 12px;\n      line-height: 1.4;\n    "]);
                return Kb = function() {
                    return e
                }, e
            }

            function Mb() {
                var e = Object(qe.a)(["\n  font-size: 16px;\n  color: #fff;\n  padding: 0 2%;\n  text-align: center;\n  font-weight: normal;\n  line-height: 1.8;\n  color: #ffffffcc;\n  margin-top: 16px;\n  ", "\n"]);
                return Mb = function() {
                    return e
                }, e
            }

            function Bb() {
                var e = Object(qe.a)(["\n      font-size: 16px;\n      line-height: 1.4;\n      margin-top: 70px;\n    "]);
                return Bb = function() {
                    return e
                }, e
            }

            function Lb() {
                var e = Object(qe.a)(["\n  margin-top: 30px;\n  font-size: 36px;\n  color: #fff;\n  padding: 0 2%;\n  text-align: center;\n  line-height: 1.8;\n  font-weight: 500;\n  ", "\n"]);
                return Lb = function() {
                    return e
                }, e
            }

            function Fb() {
                var e = Object(qe.a)(["\n    font-size: 14px;\n    margin: 0 4px;\n  "]);
                return Fb = function() {
                    return e
                }, e
            }

            function Wb() {
                var e = Object(qe.a)(["\n  ", "\n  align-items: left;\n  outline: none;\n  text-decoration: none;\n  color: #fff;\n  font-size: 16px;\n  width: fit-content;\n  margin: 0 12px;\n  font-weight: 500;\n\n  &.", " {\n    font-weight: 600;\n    color: #FFCA13FF;\n  }\n  ", "\n  :hover,\n  :focus {\n    color: #FFCA13FF;\n  }\n"]);
                return Wb = function() {
                    return e
                }, e
            }

            function Db() {
                var e = Object(qe.a)(["\n  transition: transform 0.3s ease;\n  :hover {\n    transform: rotate(-5deg);\n  }\n"]);
                return Db = function() {
                    return e
                }, e
            }

            function qb() {
                var e = Object(qe.a)(["\n    justify-self: center;\n  "]);
                return qb = function() {
                    return e
                }, e
            }

            function Gb() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n  pointer-events: auto;\n  justify-self: flex-start;\n  margin-right: 12px;\n  ", ";\n  :hover {\n    cursor: pointer;\n  }\n"]);
                return Gb = function() {
                    return e
                }, e
            }

            function Jb() {
                var e = Object(qe.a)(["\n    margin: 0;\n    margin-right: 0.5rem;\n    width: initial;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    flex-shrink: 1;\n  "]);
                return Jb = function() {
                    return e
                }, e
            }

            function zb() {
                var e = Object(qe.a)(["\n  border-radius: 8px;\n  padding: 8px 12px;\n  background-color: #FFCA13FF;\n  color: #393939;\n  ", ";\n"]);
                return zb = function() {
                    return e
                }, e
            }

            function Pb() {
                var e = Object(qe.a)(["\n    display: none;\n  "]);
                return Pb = function() {
                    return e
                }, e
            }

            function Vb() {
                var e = Object(qe.a)(["\n  ", ";\n"]);
                return Vb = function() {
                    return e
                }, e
            }

            function Yb() {
                var e = Object(qe.a)(["\n    width: auto;\n    margin-left: 10px;\n  "]);
                return Yb = function() {
                    return e
                }, e
            }

            function Zb() {
                var e = Object(qe.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-radius: 8px;\n  white-space: nowrap;\n  width: 100%;\n  cursor: pointer;\n  :focus {\n    border: 1px solid blue;\n  }\n  ", ";\n"]);
                return Zb = function() {
                    return e
                }, e
            }

            function Hb() {
                var e = Object(qe.a)(["\n    padding: 1rem 0 1rem 1rem;\n    justify-content: flex-end;\n"]);
                return Hb = function() {
                    return e
                }, e
            }

            function Qb() {
                var e = Object(qe.a)(["\n  justify-content: center;\n  ", ";\n"]);
                return Qb = function() {
                    return e
                }, e
            }

            function Xb() {
                var e = Object(qe.a)(["\n   width: 100%;\n  "]);
                return Xb = function() {
                    return e
                }, e
            }

            function _b() {
                var e = Object(qe.a)(["\n  ", ";\n"]);
                return _b = function() {
                    return e
                }, e
            }

            function $b() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n"]);
                return $b = function() {
                    return e
                }, e
            }

            function ev() {
                var e = Object(qe.a)(["\n   flex-direction: row-reverse;\n    align-items: center;\n  "]);
                return ev = function() {
                    return e
                }, e
            }

            function nv() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  ", ";\n"]);
                return nv = function() {
                    return e
                }, e
            }

            function tv() {
                var e = Object(qe.a)(["\n  //   flex-direction: row;\n  //   justify-content: space-between;\n  //   justify-self: center;\n  //   width: 100%;\n  //   max-width: 960px;\n  //   padding: 1rem;\n  //   position: fixed;\n  //   bottom: 0px;\n  //   left: 0px;\n  //   width: 100%;\n  //   z-index: 99;\n  //   height: 72px;\n  //   border-radius: 12px 12px 0 0;\n  //   background-color: ", ";\n  // "]);
                return tv = function() {
                    return e
                }, e
            }

            function av() {
                var e = Object(qe.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-self: flex-end;\n\n  // ", ";\n"]);
                return av = function() {
                    return e
                }, e
            }

            function rv() {
                var e = Object(qe.a)(["\n        padding: 0 1rem;\n        background-color: rgba(0, 0, 0, 0);\n    "]);
                return rv = function() {
                    return e
                }, e
            }

            function iv() {
                var e = Object(qe.a)(["\n        padding: 8px 16px;\n        display: flex;\n        position:fixed;\n        z-index: 2;\n        background-image: url(", ");\n    "]);
                return iv = function() {
                    return e
                }, e
            }

            function ov() {
                var e = Object(qe.a)(["\n    grid-template-columns: 1fr;\n    width: calc(100%);\n    position: relative;\n    ", "\n    ", "\n  "]);
                return ov = function() {
                    return e
                }, e
            }

            function cv() {
                var e = Object(qe.a)(["\n  display: grid;\n  grid-template-columns: 1fr 120px;\n  align-items: center;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  padding: 1rem;\n  border-bottom: 1px solid rgb(255, 255, 255, 0.3);\n  ", ";\n"]);
                return cv = function() {
                    return e
                }, e
            }

            function uv() {
                var e = Object(qe.a)(["\n    height: 400px;\n    background-image: url(", ");\n  "]);
                return uv = function() {
                    return e
                }, e
            }

            function lv() {
                var e = Object(qe.a)(["\n    height: 268px;\n    background-image: url(", ");\n  "]);
                return lv = function() {
                    return e
                }, e
            }

            function sv() {
                var e = Object(qe.a)(["\n  width: 100%;\n  top: 0;\n  position: relative;\n  \n  ", "\n  ", "\n"]);
                return sv = function() {
                    return e
                }, e
            }
            var dv = Je.default.div(sv(), Re.isMobile && Object(Je.css)(lv(), Eb.a), !Re.isMobile && Object(Je.css)(uv(), gb.a)),
                pv = Je.default.div(cv(), (function(e) {
                    return e.theme.mediaWidth.upToMedium(ov(), Re.isMobile && Object(Je.css)(iv(), kb.a), !Re.isMobile && Object(Je.css)(rv()))
                })),
                mv = Je.default.div(av(), (function(e) {
                    return e.theme.mediaWidth.upToMedium(tv(), (function(e) {
                        return e.theme.bg1
                    }))
                })),
                fv = Je.default.div(nv(), (function(e) {
                    return e.theme.mediaWidth.upToMedium(ev())
                })),
                bv = Je.default.div($b()),
                vv = Object(Je.default)(Wn)(_b(), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Xb())
                })),
                yv = Object(Je.default)(Dn)(Qb(), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Hb())
                })),
                gv = Je.default.div(Zb(), (function(e) {
                    return e.theme.mediaWidth.upToSmall(Yb())
                })),
                hv = Je.default.span(Vb(), (function(e) {
                    return e.theme.mediaWidth.upToSmall(Pb())
                })),
                Ev = Object(Je.default)(vo)(zb(), (function(e) {
                    return e.theme.mediaWidth.upToSmall(Jb())
                })),
                Ov = Je.default.a(Gb(), (function(e) {
                    return e.theme.mediaWidth.upToSmall(qb())
                })),
                kv = Je.default.div(Db()),
                jv = Object(Je.default)(s.c).attrs({
                    activeClassName: "ACTIVE"
                })(Wb(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), "ACTIVE", Re.isMobile && Object(Je.css)(Fb())),
                xv = Je.default.h2(Lb(), Re.isMobile && Object(Je.css)(Bb())),
                Av = Je.default.h5(Mb(), Re.isMobile && Object(Je.css)(Kb())),
                wv = Je.default.img(Nb(), Re.isMobile && Object(Je.css)(Rb())),
                Cv = Object(Je.default)(lr).attrs({
                    activeClassName: "ACTIVE"
                })(Sb(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), "ACTIVE", (function(e) {
                    return e.theme.text1
                }), Re.isMobile && Object(Je.css)(Ub()), (function(e) {
                    return e.theme.mediaWidth.upToExtraSmall(Tb())
                })),
                Iv = Je.default.div(Ib(), Re.isMobile && Object(Je.css)(Cb()), !Re.isMobile && Object(Je.css)(wb())),
                Tv = Je.default.ul(Ab()),
                Uv = Je.default.li(xb()),
                Sv = Je.default.div(jb()),
                Rv = (vb = {}, Object(m.a)(vb, f.a.RINKEBY, "Rinkeby"), Object(m.a)(vb, f.a.ROPSTEN, "Ropsten"), Object(m.a)(vb, f.a.G\u00d6RLI, "G\xf6rli"), Object(m.a)(vb, f.a.KOVAN, "Kovan"), Object(m.a)(vb, f.a.TESTHECO, "TestHeco"), Object(m.a)(vb, f.a.HECO, "Heco"), Object(m.a)(vb, f.a.TESTBSC, "TestBsc"), Object(m.a)(vb, f.a.BSC, "Bsc"), vb),
                Nv = {
                    en: "English",
                    "zh-CN": "\u7b80\u4f53\u4e2d\u6587"
                };

            function Kv() {
                var e = Ne(),
                    n = e.account,
                    t = e.chainId,
                    a = Object(Be.b)().t,
                    r = localStorage.getItem("i18nextLng") || "en",
                    c = Object(i.useState)(r),
                    u = Object(k.a)(c, 2),
                    l = u[0],
                    s = u[1],
                    d = Object(i.useState)(!0),
                    p = Object(k.a)(d, 2),
                    m = p[0],
                    f = p[1],
                    b = function(e) {
                        f(!m), e != l && (console.log(e), s(e), Me.a.changeLanguage(e))
                    };
                return o.a.createElement(dv, {
                    id: "HeaderBox"
                }, o.a.createElement(pv, {
                    id: "HeaderFrame"
                }, o.a.createElement(vv, null, o.a.createElement(kv, null, o.a.createElement(Ov, {
                    href: "https://vkcapital.com/?lang=".concat(r)
                }, o.a.createElement(wv, {
                    src: ao.a,
                    alt: "logo"
                }))), !Re.isMobile && o.a.createElement(yv, null, o.a.createElement(Cv, {
                    id: "stake-nav-link",
                    href: "https://vkcapital.com/?lang=".concat(r)
                }, a("Home")), o.a.createElement(jv, {
                    id: "swap-nav-link",
                    to: "/swap"
                }, a("swap")), o.a.createElement(jv, {
                    id: "pool-nav-link",
                    to: "/pool",
                    isActive: function(e, n) {
                        var t = n.pathname;
                        return Boolean(e) || t.startsWith("/add") || t.startsWith("/remove") || t.startsWith("/create") || t.startsWith("/find")
                    }
                }, a("pool")), o.a.createElement(Cv, {
                    id: "stake-nav-link",
                    href: "https://vkcapital.com/#/liquidity?lang=".concat(r)
                }, a("liquidity")), o.a.createElement(Cv, {
                    id: "swap-nav-link",
                    href: "https://vkcapital.com/#/trading?lang=".concat(r)
                }, a("reward")), o.a.createElement(Cv, {
                    id: "boardroom-nav-link",
                    href: "https://vkcapital.com/#/boardroom?lang=".concat(r)
                }, a("boardroom")), o.a.createElement(Cv, {
                    id: "crossChain-nav-link",
                    href: "https://vkcapital.com/#/bridge?lang=".concat(r)
                }, a("crossChain")), o.a.createElement(Cv, {
                    id: "charts-nav-link",
                    href: "https://bsc-info.mdex.com"
                }, a("charts")), o.a.createElement(Cv, {
                    id: "charts-nav-link",
                    target: "_blank",
                    href: "https://mdexcom.zendesk.com/hc/".concat("en" == r ? "en-gb" : "zh-cn")
                }, a("announcement")))), !Re.isMobile && o.a.createElement(mv, null, o.a.createElement(fv, null, o.a.createElement(hv, null, t && Rv[t] && o.a.createElement(Ev, {
                    className: "HideSmall",
                    title: Rv[t]
                }, Rv[t])), o.a.createElement(gv, {
                    active: !!n,
                    style: {
                        pointerEvents: "auto"
                    },
                    className: "AccountElement"
                }, o.a.createElement(bb, null))), o.a.createElement(bv, null, o.a.createElement(au, null)), o.a.createElement(Iv, {
                    onClick: function() {
                        return f(!m)
                    },
                    id: "LangBody"
                }, o.a.createElement("span", null, Nv[l]), o.a.createElement(Kd, {
                    style: {
                        position: "absolute",
                        right: "6px"
                    },
                    selected: m,
                    color: "#48587B"
                }))), !m && !Re.isMobile && o.a.createElement(Tv, null, o.a.createElement(Uv, {
                    onClick: function() {
                        return b("zh-CN")
                    }
                }, "\u7b80\u4f53\u4e2d\u6587"), o.a.createElement(Uv, {
                    onClick: function() {
                        return b("en")
                    }
                }, "English")), Re.isMobile && 56 == t && !!n && o.a.createElement(Sv, null, o.a.createElement(Iv, {
                    onClick: function() {
                        return f(!m)
                    },
                    id: "setLangState"
                }, o.a.createElement("span", null, Rv[t]), o.a.createElement(Kd, {
                    style: {
                        position: "absolute",
                        right: "6px"
                    },
                    selected: m,
                    color: "#48587B"
                }))), Re.isMobile && o.a.createElement(o.a.Fragment, null, o.a.createElement(gv, {
                    active: !!n,
                    style: {
                        pointerEvents: "auto"
                    }
                }, o.a.createElement(bb, null)), o.a.createElement(bv, null, o.a.createElement(au, null)))), o.a.createElement(xv, {
                    className: "TitleSub"
                }, a("note")), !Re.isMobile && o.a.createElement(Av, null, a("note1")))
            }
            var Mv = t(64);

            function Bv() {
                var e = Object(qe.a)(["\n  max-height: 400px;\n  overflow: auto;\n"]);
                return Bv = function() {
                    return e
                }, e
            }
            var Lv = Je.default.ul(Bv());

            function Fv(e) {
                var n = e.popKey,
                    t = e.listUrl,
                    a = e.oldList,
                    r = e.newList,
                    c = e.auto,
                    u = ot(),
                    s = Object(i.useCallback)((function() {
                        return u(n)
                    }), [n, u]),
                    d = Object(l.c)(),
                    p = Object(i.useCallback)((function() {
                        c || (d(ds(t)), s())
                    }), [c, d, t, s]),
                    m = Object(i.useMemo)((function() {
                        return Object(Mv.b)(a.tokens, r.tokens)
                    }), [r.tokens, a.tokens]),
                    f = m.added,
                    b = m.changed,
                    v = m.removed,
                    y = Object(i.useMemo)((function() {
                        return Object.keys(b).reduce((function(e, n) {
                            return e + Object.keys(b[n]).length
                        }), 0)
                    }), [b]);
                return o.a.createElement(Fn, null, o.a.createElement(mn, {
                    style: {
                        flex: "1"
                    },
                    gap: "8px"
                }, c ? o.a.createElement(Cr, {
                    fontWeight: 500
                }, 'The token list "', a.name, '" has been updated to', " ", o.a.createElement("strong", null, ws(r.version)), ".") : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", null, o.a.createElement(La.b, null, 'An update is available for the token list "', a.name, '" (', ws(a.version), " to ", ws(r.version), ")."), o.a.createElement(Lv, null, f.length > 0 ? o.a.createElement("li", null, f.map((function(e, n) {
                    return o.a.createElement(o.a.Fragment, {
                        key: "".concat(e.chainId, "-").concat(e.address)
                    }, o.a.createElement("strong", {
                        title: e.address
                    }, e.symbol), n === f.length - 1 ? null : ", ")
                })), " ", "added") : null, v.length > 0 ? o.a.createElement("li", null, v.map((function(e, n) {
                    return o.a.createElement(o.a.Fragment, {
                        key: "".concat(e.chainId, "-").concat(e.address)
                    }, o.a.createElement("strong", {
                        title: e.address
                    }, e.symbol), n === v.length - 1 ? null : ", ")
                })), " ", "removed") : null, y > 0 ? o.a.createElement("li", null, y, " tokens updated") : null)), o.a.createElement(Fn, null, o.a.createElement("div", {
                    style: {
                        flexGrow: 1,
                        marginRight: 12
                    }
                }, o.a.createElement(ii, {
                    onClick: p
                }, "Accept update")), o.a.createElement("div", {
                    style: {
                        flexGrow: 1
                    }
                }, o.a.createElement(ii, {
                    onClick: s
                }, "Dismiss"))))))
            }
            var Wv = t(676);

            function Dv() {
                var e = Object(qe.a)(["\n  flex-wrap: nowrap;\n"]);
                return Dv = function() {
                    return e
                }, e
            }
            var qv = Object(Je.default)(Fn)(Dv());

            function Gv(e) {
                var n = e.hash,
                    t = e.success,
                    a = e.summary,
                    r = Ne().chainId,
                    c = Object(i.useContext)(Je.ThemeContext);
                return o.a.createElement(qv, null, o.a.createElement("div", {
                    style: {
                        paddingRight: 16
                    }
                }, t ? o.a.createElement(bp.a, {
                    color: c.green1,
                    size: 24
                }) : o.a.createElement(Wv.a, {
                    color: c.red1,
                    size: 24
                })), o.a.createElement(mn, {
                    gap: "8px"
                }, o.a.createElement(Cr, {
                    fontWeight: 500
                }, null !== a && void 0 !== a ? a : "Hash: " + n.slice(0, 8) + "..." + n.slice(58, 65)), r && o.a.createElement(lr, {
                    href: Kt(r, n, "transaction")
                }, "View on BSC")))
            }

            function Jv() {
                var e = Object(qe.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n"]);
                return Jv = function() {
                    return e
                }, e
            }

            function zv() {
                var e = Object(qe.a)(["\n    min-width: 290px;\n    &:not(:last-of-type) {\n      margin-right: 20px;\n    }\n  "]);
                return zv = function() {
                    return e
                }, e
            }

            function Pv() {
                var e = Object(qe.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ", ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ", "\n"]);
                return Pv = function() {
                    return e
                }, e
            }

            function Vv() {
                var e = Object(qe.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);
                return Vv = function() {
                    return e
                }, e
            }
            var Yv = Object(Je.default)(Fa.a)(Vv()),
                Zv = Je.default.div(Pv(), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(zv())
                })),
                Hv = Je.default.div(Jv(), (function(e) {
                    return e.theme.bg3
                })),
                Qv = Object(Pe.a)(Hv);

            function Xv(e) {
                var n = e.removeAfterMs,
                    t = e.content,
                    a = e.popKey,
                    r = ot(),
                    c = Object(i.useCallback)((function() {
                        return r(a)
                    }), [a, r]);
                Object(i.useEffect)((function() {
                    if (null !== n) {
                        var e = setTimeout((function() {
                            c()
                        }), n);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                }), [n, c]);
                var u, l = Object(i.useContext)(Je.ThemeContext);
                if ("txn" in t) {
                    var s = t.txn,
                        d = s.hash,
                        p = s.success,
                        m = s.summary;
                    u = o.a.createElement(Gv, {
                        hash: d,
                        success: p,
                        summary: m
                    })
                } else if ("listUpdate" in t) {
                    var f = t.listUpdate,
                        b = f.listUrl,
                        v = f.oldList,
                        y = f.newList,
                        g = f.auto;
                    u = o.a.createElement(Fv, {
                        popKey: a,
                        listUrl: b,
                        oldList: v,
                        newList: y,
                        auto: g
                    })
                }
                var h = Object(Pe.b)({
                    from: {
                        width: "100%"
                    },
                    to: {
                        width: "0%"
                    },
                    config: {
                        duration: null !== n && void 0 !== n ? n : void 0
                    }
                });
                return o.a.createElement(Zv, null, o.a.createElement(Yv, {
                    color: l.text2,
                    onClick: c
                }), u, null !== n ? o.a.createElement(Qv, {
                    style: h
                }) : null)
            }

            function _v() {
                var e = Object(qe.a)(["\n  animation: ", " 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;\n"]);
                return _v = function() {
                    return e
                }, e
            }

            function $v() {
                var e = Object(qe.a)(["\n  0% {\n    transform: perspective(1000px) rotateY(0deg);\n  }\n\n  100% {\n    transform: perspective(1000px) rotateY(360deg);\n  }\n"]);
                return $v = function() {
                    return e
                }, e
            }

            function ey() {
                var e = Object(qe.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);
                return ey = function() {
                    return e
                }, e
            }

            function ny() {
                var e = Object(qe.a)(["\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);\n  border-radius: 20px;\n  padding: 1.5rem;\n  overflow: hidden;\n  position: relative;\n  max-width: 360px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n"]);
                return ny = function() {
                    return e
                }, e
            }
            var ty = Object(Je.default)(mn)(ny()),
                ay = Object(Je.default)(Fa.a)(ey()),
                ry = Object(Je.keyframes)($v()),
                iy = Je.default.img(_v(), ry);

            function oy() {
                var e, n = Ne().account,
                    t = at(Qn.CLAIM_POPUP),
                    a = rt(Qn.CLAIM_POPUP),
                    r = at(Qn.SELF_CLAIM),
                    c = rt(Qn.SELF_CLAIM),
                    u = Oi(n),
                    l = ki(n);
                return Object(i.useEffect)((function() {
                    u && a()
                }), [u]), o.a.createElement(o.a.Fragment, null, t && !r && o.a.createElement(ty, {
                    gap: "md"
                }, o.a.createElement(jn, null), o.a.createElement(An, null), o.a.createElement(ay, {
                    stroke: "white",
                    onClick: a
                }), o.a.createElement(mn, {
                    style: {
                        padding: "2rem 0",
                        zIndex: 10
                    },
                    justify: "center"
                }, o.a.createElement(iy, {
                    width: "48px",
                    src: xi.a
                }), " ", o.a.createElement(wr, {
                    style: {
                        marginTop: "1rem"
                    },
                    fontSize: 36,
                    fontWeight: 600
                }, null === l || void 0 === l ? void 0 : l.toFixed(0, null !== (e = {
                    groupSeparator: ","
                }) && void 0 !== e ? e : "-"), " UNI"), o.a.createElement(wr, {
                    style: {
                        paddingTop: "1.25rem",
                        textAlign: "center"
                    },
                    fontWeight: 600,
                    color: "white"
                }, o.a.createElement("span", {
                    role: "img",
                    "aria-label": "party"
                }, "\ud83c\udf89"), " ", "UNI has arrived", " ", o.a.createElement("span", {
                    role: "img",
                    "aria-label": "party"
                }, "\ud83c\udf89")), o.a.createElement(Tr, {
                    style: {
                        paddingTop: "0.5rem",
                        textAlign: "center"
                    },
                    color: "white"
                }, "Thanks for being part of the Uniswap community <3")), o.a.createElement(mn, {
                    style: {
                        zIndex: 10
                    },
                    justify: "center"
                }, o.a.createElement(ai, {
                    padding: "8px",
                    borderRadius: "8px",
                    width: "fit-content",
                    onClick: c
                }, "Claim your UNI tokens"))))
            }

            function cy() {
                var e = Object(qe.a)(["\n    display: none;\n  "]);
                return cy = function() {
                    return e
                }, e
            }

            function uy() {
                var e = Object(qe.a)(["\n  position: fixed;\n  top: ", ";\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 3;\n\n  ", ";\n"]);
                return uy = function() {
                    return e
                }, e
            }

            function ly() {
                var e = Object(qe.a)(["\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);
                return ly = function() {
                    return e
                }, e
            }

            function sy() {
                var e = Object(qe.a)(["\n    display: block;\n  "]);
                return sy = function() {
                    return e
                }, e
            }

            function dy() {
                var e = Object(qe.a)(["\n  position: relative;\n  max-width: 100%;\n  height: ", ";\n  margin: ", ";\n  margin-bottom: ", "};\n\n  display: none;\n  ", ";\n"]);
                return dy = function() {
                    return e
                }, e
            }
            var py = Je.default.div(dy(), (function(e) {
                    return e.height
                }), (function(e) {
                    return e.height ? "0 auto;" : 0
                }), (function(e) {
                    return e.height ? "20px" : 0
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(sy())
                })),
                my = Je.default.div(ly()),
                fy = Object(Je.default)(mn)(uy(), (function(e) {
                    return e.extraPadding ? "108px" : "88px"
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(cy())
                }));

            function by() {
                var e = function() {
                        var e = Object(l.d)((function(e) {
                            return e.application.popupList
                        }));
                        return Object(i.useMemo)((function() {
                            return e.filter((function(e) {
                                return e.show
                            }))
                        }), [e])
                    }(),
                    n = Object(l.d)((function(e) {
                        return e.user.URLWarningVisible
                    }));
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(fy, {
                    gap: "20px",
                    extraPadding: n
                }, o.a.createElement(oy, null), e.map((function(e) {
                    return o.a.createElement(Xv, {
                        key: e.key,
                        content: e.content,
                        popKey: e.key,
                        removeAfterMs: e.removeAfterMs
                    })
                }))), o.a.createElement(py, {
                    height: (null === e || void 0 === e ? void 0 : e.length) > 0 ? "fit-content" : 0
                }, o.a.createElement(my, null, e.slice(0).reverse().map((function(e) {
                    return o.a.createElement(Xv, {
                        key: e.key,
                        content: e.content,
                        popKey: e.key,
                        removeAfterMs: e.removeAfterMs
                    })
                })))))
            }

            function vy() {
                var e = Object(qe.a)(["\n  color: ", ";\n"]);
                return vy = function() {
                    return e
                }, e
            }

            function yy() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"]);
                return yy = function() {
                    return e
                }, e
            }
            var gy = Je.default.div(yy()),
                hy = Je.default.h2(vy(), (function(e) {
                    return e.theme.secondary1
                }));

            function Ey(e) {
                var n = e.children,
                    t = Object(Be.b)().t,
                    a = Object(r.d)().active,
                    c = Object(r.d)("NETWORK"),
                    u = c.active,
                    l = c.error,
                    s = c.activate,
                    d = function() {
                        var e = Object(r.d)(),
                            n = e.activate,
                            t = e.active,
                            a = Object(i.useState)(!1),
                            o = Object(k.a)(a, 2),
                            c = o[0],
                            u = o[1];
                        return Object(i.useEffect)((function() {
                            Y.isAuthorized().then((function(e) {
                                e || Re.isMobile && window.ethereum ? n(Y, void 0, !0).catch((function() {
                                    u(!0)
                                })) : u(!0)
                            }))
                        }), [n]), Object(i.useEffect)((function() {
                            t && u(!0)
                        }), [t]), c
                    }();
                Object(i.useEffect)((function() {
                        !d || u || l || a || s(J)
                    }), [d, u, l, s, a]),
                    function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = Object(r.d)(),
                            t = n.active,
                            a = n.error,
                            o = n.activate,
                            c = window,
                            u = c.ethereum,
                            l = Ne(),
                            s = l.chainId,
                            d = function() {
                                u && u.request && u.request({
                                    method: "wallet_addEthereumChain",
                                    params: [{
                                        chainId: "0x38",
                                        chainName: "BSC Mainnet",
                                        nativeCurrency: {
                                            name: "BSC",
                                            symbol: "BNB",
                                            decimals: 18
                                        },
                                        rpcUrls: ["https://bsc-dataseed.binance.org"],
                                        blockExplorerUrls: ["https://bscscan.com/"]
                                    }]
                                })
                            },
                            p = function() {
                                56 != s && window.location.reload()
                            };
                        Object(i.useEffect)((function() {
                            if (u && u.on && s && u.on("chainChanged", p), s && 56 != s && d(), u && u.on && !t && !a && !e && s) {
                                var n = function() {
                                        o(Y, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after chain changed", e)
                                        }))
                                    },
                                    r = function(e) {
                                        e.length > 0 && o(Y, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after accounts changed", e)
                                        }))
                                    };
                                return u.on("chainChanged", n), u.on("accountsChanged", r),
                                    function() {
                                        u.removeListener && (u.removeListener("chainChanged", n), u.removeListener("accountsChanged", r))
                                    }
                            }
                        }), [t, a, e, o, s])
                    }(!d);
                var p = Object(i.useState)(!1),
                    m = Object(k.a)(p, 2),
                    f = m[0],
                    b = m[1];
                return Object(i.useEffect)((function() {
                    var e = setTimeout((function() {
                        b(!0)
                    }), 600);
                    return function() {
                        clearTimeout(e)
                    }
                }), []), d ? !a && l ? o.a.createElement(gy, null, o.a.createElement(hy, null, t("unknownError"))) : a || u ? n : f ? o.a.createElement(gy, null, o.a.createElement(Wl, null)) : null : null
            }

            function Oy(e) {
                var n = e.location.search,
                    t = Object(l.c)();
                return Object(i.useEffect)((function() {
                    var e = Object(cu.parse)(n, {
                        parseArrays: !1,
                        ignoreQueryPrefix: !0
                    });
                    e.lang && Me.a.changeLanguage(String(e.lang))
                }), [t, n]), null
            }
            var ky = t(677);

            function jy() {
                var e = Object(qe.a)(["\n  padding: 60px 0;\n"]);
                return jy = function() {
                    return e
                }, e
            }

            function xy() {
                var e = Object(qe.a)(["\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"]);
                return xy = function() {
                    return e
                }, e
            }

            function Ay() {
                var e = Object(qe.a)(["\n  padding: 24px;\n"]);
                return Ay = function() {
                    return e
                }, e
            }

            function wy() {
                var e = Object(qe.a)(["\n  width: 100%;\n"]);
                return wy = function() {
                    return e
                }, e
            }
            var Cy = Je.default.div(wy()),
                Iy = Object(Je.default)(mn)(Ay()),
                Ty = Object(Je.default)(Iy)(xy(), (function(e) {
                    return e.theme.bg2
                })),
                Uy = Object(Je.default)(pn)(jy());

            function Sy(e) {
                var n = e.onDismiss,
                    t = e.pendingText,
                    a = Object(Be.b)().t;
                return o.a.createElement(Cy, null, o.a.createElement(Iy, null, o.a.createElement(Bn, null, o.a.createElement("div", null), o.a.createElement(ar, {
                    onClick: n
                })), o.a.createElement(Uy, null, o.a.createElement(pr, {
                    src: wi.a,
                    alt: "loader",
                    size: "90px"
                })), o.a.createElement(mn, {
                    gap: "12px",
                    justify: "center"
                }, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20
                }, a("text14")), o.a.createElement(mn, {
                    gap: "12px",
                    justify: "center"
                }, o.a.createElement(La.b, {
                    fontWeight: 600,
                    fontSize: 14,
                    color: "",
                    textAlign: "center"
                }, t)), o.a.createElement(La.b, {
                    fontSize: 12,
                    color: "#565A69",
                    textAlign: "center"
                }, a("text15")))))
            }

            function Ry(e) {
                var n = e.onDismiss,
                    t = e.chainId,
                    a = e.hash,
                    r = Object(i.useContext)(Je.ThemeContext),
                    c = Object(Be.b)().t;
                return o.a.createElement(Cy, null, o.a.createElement(Iy, null, o.a.createElement(Bn, null, o.a.createElement("div", null), o.a.createElement(ar, {
                    onClick: n
                })), o.a.createElement(Uy, null, o.a.createElement(ky.a, {
                    strokeWidth: .5,
                    size: 90,
                    color: r.primary1
                })), o.a.createElement(mn, {
                    gap: "12px",
                    justify: "center"
                }, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20
                }, c("transactionSubmitted")), t && a && o.a.createElement(lr, {
                    href: Kt(t, a, "transaction")
                }, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: r.primary1
                }, "View on BSC")), o.a.createElement(ai, {
                    onClick: n,
                    style: {
                        margin: "20px 0 0 0"
                    }
                }, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20
                }, "Close")))))
            }

            function Ny(e) {
                var n = e.title,
                    t = e.bottomContent,
                    a = e.onDismiss,
                    r = e.topContent;
                return o.a.createElement(Cy, null, o.a.createElement(Iy, null, o.a.createElement(Bn, null, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20
                }, n), o.a.createElement(ar, {
                    onClick: a
                })), r()), o.a.createElement(Ty, {
                    gap: "12px"
                }, t()))
            }

            function Ky(e) {
                var n = e.message,
                    t = e.onDismiss,
                    a = Object(i.useContext)(Je.ThemeContext);
                return o.a.createElement(Cy, null, o.a.createElement(Iy, null, o.a.createElement(Bn, null, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20
                }, "Error"), o.a.createElement(ar, {
                    onClick: t
                })), o.a.createElement(mn, {
                    style: {
                        marginTop: 20,
                        padding: "2rem 0"
                    },
                    gap: "24px",
                    justify: "center"
                }, o.a.createElement(Np.a, {
                    color: a.red1,
                    style: {
                        strokeWidth: 1.5
                    },
                    size: 64
                }), o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 16,
                    color: a.red1,
                    style: {
                        textAlign: "center",
                        width: "85%"
                    }
                }, n))), o.a.createElement(Ty, {
                    gap: "12px"
                }, o.a.createElement(ai, {
                    onClick: t
                }, "Dismiss")))
            }

            function My(e) {
                var n = e.isOpen,
                    t = e.onDismiss,
                    a = e.attemptingTxn,
                    r = e.hash,
                    i = e.pendingText,
                    c = e.content,
                    u = Ne().chainId;
                return u ? o.a.createElement(cn, {
                    isOpen: n,
                    onDismiss: t,
                    maxHeight: 90
                }, a ? o.a.createElement(Sy, {
                    onDismiss: t,
                    pendingText: i
                }) : r ? o.a.createElement(Ry, {
                    chainId: u,
                    hash: r,
                    onDismiss: t
                }) : c()) : null
            }

            function By(e) {
                var n, t, a = null === (n = wt(la(null === e || void 0 === e ? void 0 : e.address, !1), "totalSupply")) || void 0 === n || null === (t = n.result) || void 0 === t ? void 0 : t[0];
                return e && a ? new f.l(e, a.toString()) : void 0
            }

            function Ly(e) {
                if (e === f.d) return "BNB";
                if (e instanceof f.k) return e.address;
                throw new Error("invalid currency")
            }
            var Fy = t(348),
                Wy = t.n(Fy),
                Dy = t(242);

            function qy() {
                return (qy = Object(j.a)(O.a.mark((function e(n) {
                    var t;
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n.chainId !== f.a.RINKEBY || "0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735" !== n.address) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve("#FAAB14"));
                            case 2:
                                return t = "https://vkcapital.com/token-icons/bsc/".concat(n.address.toLowerCase(), ".png"), e.abrupt("return", Wy.a.from(t).getPalette().then((function(e) {
                                    if (null === e || void 0 === e ? void 0 : e.Vibrant) {
                                        for (var n = e.Vibrant.hex, t = Object(Dy.a)(n, "#FFF"); t < 3;) n = Object(Ye.c)(.005, n), t = Object(Dy.a)(n, "#FFF");
                                        return n
                                    }
                                    return null
                                })).catch((function() {
                                    return null
                                })));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Gy(e) {
                var n = Object(i.useState)("#2172E5"),
                    t = Object(k.a)(n, 2),
                    a = t[0],
                    r = t[1];
                return Object(i.useLayoutEffect)((function() {
                    var n = !1;
                    return e && function(e) {
                            return qy.apply(this, arguments)
                        }(e).then((function(e) {
                            n || null === e || r(e)
                        })),
                        function() {
                            n = !0, r("#2172E5")
                        }
                }), [e]), a
            }

            function Jy() {
                var e = Object(qe.a)(["\n  display: flex;\n  justify-content: start;\n  flex-wrap: wrap;\n"]);
                return Jy = function() {
                    return e
                }, e
            }

            function zy() {
                var e = Object(qe.a)(["\n  display: flex;\n  width: 50%;\n  flex-direction: column;\n  margin-bottom: 10px;\n"]);
                return zy = function() {
                    return e
                }, e
            }

            function Py() {
                var e = Object(qe.a)(["\n    padding: 1rem;\n  "]);
                return Py = function() {
                    return e
                }, e
            }

            function Vy() {
                var e = Object(qe.a)(["\n  border: 1px solid #EBEDF3;\n  background: #fff;\n  position: relative;\n  overflow: hidden;\n  ", "\n"]);
                return Vy = function() {
                    return e
                }, e
            }

            function Yy() {
                var e = Object(qe.a)(["\n  border: 1px solid transparent;\n  :hover {\n    border: 1px solid ", ";\n  }\n"]);
                return Yy = function() {
                    return e
                }, e
            }

            function Zy() {
                var e = Object(qe.a)(["\n  height: 24px;\n"]);
                return Zy = function() {
                    return e
                }, e
            }
            var Hy = Object(Je.default)(Bn)(Zy()),
                Qy = (Object(Je.default)(mo)(Yy(), (function(e) {
                    var n = e.theme;
                    return Object(Ye.a)(.06, n.bg2)
                })), Object(Je.default)(fo)(Vy(), Re.isMobile && Object(Je.css)(Py()))),
                Xy = Je.default.div(zy()),
                _y = Je.default.div(Jy());

            function $y(e) {
                var n = e.pair,
                    t = e.showUnwrapped,
                    a = void 0 !== t && t,
                    r = e.border,
                    c = Ne().account,
                    u = Object(Be.b)().t,
                    l = a ? n.token0 : fu(n.token0),
                    s = a ? n.token1 : fu(n.token1),
                    d = Object(i.useState)(!1),
                    p = Object(k.a)(d, 2),
                    m = p[0],
                    b = p[1],
                    v = Yu(null !== c && void 0 !== c ? c : void 0, n.liquidityToken),
                    y = By(n.liquidityToken),
                    g = v && y && f.e.greaterThanOrEqual(y.raw, v.raw) ? new f.g(v.raw, y.raw) : void 0,
                    h = n && y && v && f.e.greaterThanOrEqual(y.raw, v.raw) ? [n.getLiquidityValue(n.token0, y, v, !1), n.getLiquidityValue(n.token1, y, v, !1)] : [void 0, void 0],
                    E = Object(k.a)(h, 2),
                    O = E[0],
                    j = E[1];
                return o.a.createElement(o.a.Fragment, null, v && f.e.greaterThan(v.raw, f.e.BigInt(0)) ? o.a.createElement(bo, {
                    border: r,
                    style: {
                        background: "#fff",
                        padding: 0
                    }
                }, o.a.createElement(mn, {
                    gap: "12px"
                }, o.a.createElement(Hy, null, o.a.createElement(Wn, null, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 16
                }, "Your position"))), o.a.createElement(Hy, {
                    onClick: function() {
                        return b(!m)
                    }
                }, o.a.createElement(Wn, null, o.a.createElement($s, {
                    currency0: l,
                    currency1: s,
                    margin: !0,
                    size: 18
                }), o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 14
                }, l.symbol, "/", s.symbol)), o.a.createElement(Wn, null, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 16
                }, v ? v.toSignificant(8) : "-"))), o.a.createElement(mn, {
                    gap: "4px"
                }, o.a.createElement(Hy, null, o.a.createElement(La.b, {
                    fontSize: 16,
                    fontWeight: 500
                }, "Your pool share:"), o.a.createElement(La.b, {
                    fontSize: 16,
                    fontWeight: 500
                }, g ? g.toFixed(6) + "%" : "-")), o.a.createElement(Hy, null, o.a.createElement(La.b, {
                    fontSize: 16,
                    fontWeight: 500
                }, l.symbol, ":"), O ? o.a.createElement(Wn, null, o.a.createElement(La.b, {
                    fontSize: 16,
                    fontWeight: 500,
                    marginLeft: "6px"
                }, null === O || void 0 === O ? void 0 : O.toSignificant(8))) : "-"), o.a.createElement(Hy, null, o.a.createElement(La.b, {
                    fontSize: 16,
                    fontWeight: 500
                }, s.symbol, ":"), j ? o.a.createElement(Wn, null, o.a.createElement(La.b, {
                    fontSize: 16,
                    fontWeight: 500,
                    marginLeft: "6px"
                }, null === j || void 0 === j ? void 0 : j.toSignificant(8))) : "-")))) : o.a.createElement(fo, null, o.a.createElement(Tr, {
                    style: {
                        textAlign: "center"
                    }
                }, o.a.createElement("span", {
                    role: "img",
                    "aria-label": "wizard-icon"
                }, "\u2b50\ufe0f"), " ", u("text30"))))
            }

            function eg(e) {
                var n = e.pair,
                    t = e.border,
                    a = e.stakedBalance,
                    r = Ne().account,
                    c = fu(n.token0),
                    u = fu(n.token1),
                    l = Object(i.useState)(!1),
                    d = Object(k.a)(l, 2),
                    p = d[0],
                    m = d[1],
                    b = Yu(null !== r && void 0 !== r ? r : void 0, n.liquidityToken),
                    v = By(n.liquidityToken),
                    y = a ? null === b || void 0 === b ? void 0 : b.add(a) : b,
                    g = y && v && f.e.greaterThanOrEqual(v.raw, y.raw) ? new f.g(y.raw, v.raw) : void 0,
                    h = n && v && y && f.e.greaterThanOrEqual(v.raw, y.raw) ? [n.getLiquidityValue(n.token0, v, y, !1), n.getLiquidityValue(n.token1, v, y, !1)] : [void 0, void 0],
                    E = Object(k.a)(h, 2),
                    O = E[0],
                    j = E[1],
                    x = Gy(null === n || void 0 === n ? void 0 : n.token0),
                    A = Object(Be.b)().t;
                return o.a.createElement(Qy, {
                    border: t,
                    bgColor: x,
                    id: "StyledPositionCard"
                }, o.a.createElement(An, null), o.a.createElement(mn, {
                    gap: "12px"
                }, o.a.createElement(Hy, null, o.a.createElement(Fn, {
                    gap: "8px"
                }, o.a.createElement($s, {
                    currency0: c,
                    currency1: u,
                    size: Re.isMobile ? 20 : 30
                }), o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: Re.isMobile ? 14 : 20,
                    style: {
                        position: "relative",
                        left: Re.isMobile ? "10px" : "20px"
                    }
                }, c && u ? "".concat(c.symbol, "/").concat(u.symbol) : o.a.createElement(em, null, "Loading"))), o.a.createElement(Wn, {
                    gap: "8px"
                }, o.a.createElement(ci, {
                    padding: "6px 8px",
                    borderRadius: "12px",
                    width: "fit-content",
                    onClick: function() {
                        return m(!p)
                    }
                }, p ? o.a.createElement(o.a.Fragment, null, o.a.createElement(Kd, {
                    selected: !1,
                    color: "#48587B"
                })) : o.a.createElement(o.a.Fragment, null, o.a.createElement(Kd, {
                    selected: !0,
                    color: "#48587B"
                }))))), p && o.a.createElement(_y, null, o.a.createElement(Xy, null, o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500,
                    color: "#808EB5"
                }, A("text31")), o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500,
                    color: "#626E88"
                }, y ? y.toSignificant(8) : "-")), a && o.a.createElement(Hy, null, o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500
                }, A("text32")), o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500
                }, a.toSignificant(8))), o.a.createElement(Xy, null, o.a.createElement(Wn, null, o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500,
                    color: "#808EB5"
                }, "Pooled ", c.symbol, ":")), O ? o.a.createElement(Wn, null, o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500,
                    color: "#626E88"
                }, null === O || void 0 === O ? void 0 : O.toSignificant(8)), o.a.createElement(yl, {
                    size: "20px",
                    style: {
                        marginLeft: "8px"
                    },
                    currency: c
                })) : "-"), o.a.createElement(Xy, null, o.a.createElement(Wn, null, o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500,
                    color: "#808EB5"
                }, "Pooled ", u.symbol, ":")), j ? o.a.createElement(Wn, null, o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500,
                    color: "#626E88"
                }, null === j || void 0 === j ? void 0 : j.toSignificant(8)), o.a.createElement(yl, {
                    size: "20px",
                    style: {
                        marginLeft: "8px"
                    },
                    currency: u
                })) : "-"), o.a.createElement(Xy, null, o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500,
                    color: "#808EB5"
                }, A("text33")), o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500,
                    color: "#626E88"
                }, g ? ("0.00" === g.toFixed(2) ? "<0.01" : g.toFixed(2)) + "%" : "-")), b && f.e.greaterThan(b.raw, ke) && o.a.createElement(Bn, {
                    marginTop: "10px"
                }, o.a.createElement(ai, {
                    padding: "8px",
                    as: s.b,
                    to: "/add/".concat(Ly(c), "/").concat(Ly(u)),
                    width: "48%"
                }, "Add"), o.a.createElement(ai, {
                    padding: "8px",
                    as: s.b,
                    width: "48%",
                    to: "/remove/".concat(Ly(c), "/").concat(Ly(u))
                }, "Remove")), a && f.e.greaterThan(a.raw, ke) && o.a.createElement(ai, {
                    padding: "8px",
                    borderRadius: "8px",
                    as: s.b,
                    to: "/uni/".concat(Ly(c), "/").concat(Ly(u)),
                    width: "100%"
                }, A("text34")))))
            }
            var ng = t(664);

            function tg(e) {
                var n, t;
                return null === (n = wt(ca(), "getExchange", Object(i.useMemo)((function() {
                    return [e]
                }), [e]))) || void 0 === n || null === (t = n.result) || void 0 === t ? void 0 : t[0]
            }
            var ag = function(e) {
                Object(w.a)(t, e);
                var n = Object(C.a)(t);

                function t(e, a) {
                    return Object(x.a)(this, t), n.call(this, a, new f.l(f.o[a.token.chainId], e))
                }
                return t
            }(f.f);

            function rg() {
                var e = Ne(),
                    n = e.account,
                    t = e.chainId,
                    a = function() {
                        var e = fa(),
                            n = ca(),
                            t = Object(i.useMemo)((function() {
                                return Object.keys(e).map((function(e) {
                                    return [e]
                                }))
                            }), [e]),
                            a = xt(n, "getExchange", t, ht);
                        return Object(i.useMemo)((function() {
                            var n;
                            return null !== (n = null === a || void 0 === a ? void 0 : a.reduce((function(n, a, r) {
                                var i = a.result;
                                return (null === i || void 0 === i ? void 0 : i[0]) && i[0] !== Tt.a && (n[i[0]] = e[t[r][0]]), n
                            }), {})) && void 0 !== n ? n : {}
                        }), [e, t, a])
                    }(),
                    r = Vu(null !== n && void 0 !== n ? n : void 0, Object(i.useMemo)((function() {
                        return t ? Object.keys(a).map((function(e) {
                            return new f.k(t, e, 18, "UNI-V1", "Uniswap V1")
                        })) : []
                    }), [t, a]));
                return Object(i.useMemo)((function() {
                    return Object.keys(r).some((function(e) {
                        var n, t = null === (n = r[e]) || void 0 === n ? void 0 : n.raw;
                        return t && f.e.greaterThan(t, f.e.BigInt(0))
                    }))
                }), [r])
            }

            function ig(e) {
                var n, t, a = null === e || void 0 === e || null === (n = e.route) || void 0 === n || null === (t = n.pairs) || void 0 === t ? void 0 : t.some((function(e) {
                    return e instanceof ag
                }));
                return a || !1 === a ? ru.v2 : void 0
            }

            function og(e) {
                return tg(Object(i.useMemo)((function() {
                    if (e && ig(e) === ru.v1) return e.inputAmount instanceof f.l ? e.inputAmount.token.address : e.outputAmount instanceof f.l ? e.outputAmount.token.address : void 0
                }), [e]))
            }
            var cg, ug;
            new f.g("0"), new f.g("1");

            function lg(e, n) {
                var t = Ne().account,
                    a = e instanceof f.l ? e.token : void 0,
                    r = function(e, n, t) {
                        var a = wt(la(null === e || void 0 === e ? void 0 : e.address, !1), "allowance", Object(i.useMemo)((function() {
                            return [n, t]
                        }), [n, t])).result;
                        return Object(i.useMemo)((function() {
                            return e && a ? new f.l(e, a.toString()) : void 0
                        }), [e, a])
                    }(a, null !== t && void 0 !== t ? t : void 0, n),
                    o = function(e, n) {
                        var t = gi();
                        return Object(i.useMemo)((function() {
                            return "string" === typeof e && "string" === typeof n && Object.keys(t).some((function(a) {
                                var r = t[a];
                                if (!r) return !1;
                                if (r.receipt) return !1;
                                var i = r.approval;
                                return !!i && (i.spender === n && i.tokenAddress === e && hi(r))
                            }))
                        }), [t, n, e])
                    }(null === a || void 0 === a ? void 0 : a.address, n),
                    c = Object(i.useMemo)((function() {
                        return e && n ? e.currency === f.d ? cg.APPROVED : r ? r.lessThan(e) ? o ? cg.PENDING : cg.NOT_APPROVED : cg.APPROVED : cg.UNKNOWN : cg.UNKNOWN
                    }), [e, r, o, n]),
                    u = la(null === a || void 0 === a ? void 0 : a.address),
                    l = yi(),
                    s = Object(i.useCallback)(Object(j.a)(O.a.mark((function t() {
                        var r, i;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (c === cg.NOT_APPROVED) {
                                        t.next = 3;
                                        break
                                    }
                                    return console.error("approve was called unnecessarily"), t.abrupt("return");
                                case 3:
                                    if (a) {
                                        t.next = 6;
                                        break
                                    }
                                    return console.error("no token"), t.abrupt("return");
                                case 6:
                                    if (u) {
                                        t.next = 9;
                                        break
                                    }
                                    return console.error("tokenContract is null"), t.abrupt("return");
                                case 9:
                                    if (e) {
                                        t.next = 12;
                                        break
                                    }
                                    return console.error("missing amount to approve"), t.abrupt("return");
                                case 12:
                                    if (n) {
                                        t.next = 15;
                                        break
                                    }
                                    return console.error("no spender"), t.abrupt("return");
                                case 15:
                                    return r = !1, t.next = 18, u.estimateGas.approve(n, ng.a).catch((function() {
                                        return r = !0, u.estimateGas.approve(n, e.raw.toString())
                                    }));
                                case 18:
                                    return i = t.sent, t.abrupt("return", u.approve(n, r ? e.raw.toString() : ng.a, {
                                        gasLimit: Bt(i)
                                    }).then((function(t) {
                                        l(t, {
                                            summary: "Approve " + e.currency.symbol,
                                            approval: {
                                                tokenAddress: a.address,
                                                spender: n
                                            }
                                        })
                                    })).catch((function(e) {
                                        throw console.debug("Failed to approve token", e), e
                                    })));
                                case 20:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), [c, a, u, e, n, l]);
                return [c, s]
            }

            function sg() {
                var e = Object(l.d)((function(e) {
                        return e.user.userDeadline
                    })),
                    n = qu();
                return Object(i.useMemo)((function() {
                    if (n && e) return n.add(e)
                }), [n, e])
            }! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.NOT_APPROVED = 1] = "NOT_APPROVED", e[e.PENDING = 2] = "PENDING", e[e.APPROVED = 3] = "APPROVED"
            }(cg || (cg = {})),
            function(e) {
                e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(ug || (ug = {}));
            var dg = Object(Xn.b)("mint/typeInputMint"),
                pg = Object(Xn.b)("mint/resetMintState"),
                mg = f.e.BigInt(0);

            function fg() {
                return Object(l.d)((function(e) {
                    return e.mint
                }))
            }

            function bg() {
                var e = Object(qe.a)(["\n  color: ", ";\n"]);
                return bg = function() {
                    return e
                }, e
            }

            function vg() {
                var e = Object(qe.a)(["\n  font-weight: 500;\n  font-size: 20px;\n  color: #fff;\n"]);
                return vg = function() {
                    return e
                }, e
            }

            function yg() {
                var e = Object(qe.a)(["\n  ", "\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: #626E88FF;\n  font-size: 16px;\n  margin-right: 20px;\n  &.", " {\n    font-weight: bold;\n    font-size: 24px;\n    position: relative;\n    color: #1D1D1EFF;\n    &:after {\n      content: '';\n      width: 50%;\n      position: absolute;\n      bottom: 0;\n      height: 3px;\n      background-color: #FFCA13FF;\n    }\n  }\n"]);
                return yg = function() {
                    return e
                }, e
            }

            function gg() {
                var e = Object(qe.a)(["\n", "\nalign-items: center;\njustify-content: center;\nheight: 3rem;\nborder-radius: 3rem;\noutline: none;\ncursor: pointer;\ntext-decoration: none;\ncolor: #626E88FF;\nfont-size: 16px;\nmargin-right: 20px;\n"]);
                return gg = function() {
                    return e
                }, e
            }

            function hg() {
                var e = Object(qe.a)(["\n    margin-bottom: 16px;\n  "]);
                return hg = function() {
                    return e
                }, e
            }

            function Eg() {
                var e = Object(qe.a)(["\n  ", "\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n  padding-left: 14px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #EBEDF3FF;\n  border-radius: 0;\n  ", "\n"]);
                return Eg = function() {
                    return e
                }, e
            }
            var Og = Je.default.div(Eg(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), Re.isMobile && Object(Je.css)(hg())),
                kg = Object(Je.default)(lr).attrs({
                    activeClassName: "ACTIVE"
                })(gg(), (function(e) {
                    return e.theme.flexRowNoWrap
                })),
                jg = Object(Je.default)(s.c).attrs({
                    activeClassName: "ACTIVE"
                })(yg(), (function(e) {
                    return e.theme.flexRowNoWrap
                }), "ACTIVE"),
                xg = Je.default.div(vg()),
                Ag = Object(Je.default)(Wa.a)(bg(), (function(e) {
                    return e.theme.text1
                }));

            function wg(e) {
                var n = e.active,
                    t = Object(Be.b)().t,
                    a = localStorage.getItem("i18nextLng") || "en";
                return o.a.createElement(Og, {
                    style: {
                        display: Re.isMobile ? "flex" : "none",
                        width: "100%",
                        justifyContent: "flex-start"
                    }
                }, o.a.createElement(jg, {
                    id: "swap-nav-link",
                    to: "/swap",
                    isActive: function() {
                        return "swap" === n
                    }
                }, t("swap")), o.a.createElement(jg, {
                    id: "pool-nav-link",
                    to: "/pool",
                    isActive: function() {
                        return "pool" === n
                    }
                }, t("pool")), o.a.createElement(kg, {
                    id: "crossChain-nav-link",
                    href: "https://vkcapital.com/#/bridge?lang=".concat(a)
                }, t("crossChain")))
            }

            function Cg() {
                var e = Object(Be.b)().t;
                return o.a.createElement(Og, {
                    id: "FindPoolTabs"
                }, o.a.createElement(Bn, {
                    style: {
                        padding: "0 0 1rem"
                    }
                }, o.a.createElement(s.b, {
                    to: "/pool"
                }, o.a.createElement(Ag, {
                    style: {
                        color: "#1D1D1EFF"
                    }
                })), o.a.createElement(xg, {
                    style: {
                        color: "#1D1D1EFF"
                    }
                }, e("importPool")), o.a.createElement(Fo, {
                    text: e("text21")
                })))
            }

            function Ig(e) {
                var n = e.adding,
                    t = e.creating,
                    a = Object(Be.b)().t;
                return o.a.createElement(Og, {
                    id: "AddRemoveTabs"
                }, o.a.createElement(Bn, {
                    style: {
                        padding: "0 0 1rem"
                    }
                }, o.a.createElement(s.b, {
                    to: "/pool"
                }, o.a.createElement(Ag, {
                    style: {
                        color: "#1D1D1EFF"
                    }
                })), o.a.createElement(xg, {
                    style: {
                        color: "#1D1D1EFF"
                    }
                }, a(t ? "createpair" : n ? "addLiquidity" : "removeLiquidity")), o.a.createElement(Fo, {
                    text: a(n ? "text22" : "text23")
                })))
            }

            function Tg(e) {
                if (e) return e.currency === f.d ? f.e.greaterThan(e.raw, Ue) ? f.c.ether(f.e.subtract(e.raw, Ue)) : f.c.ether(f.e.BigInt(0)) : e
            }

            function Ug() {
                var e = Object(qe.a)(["\n    padding: 2rem;\n    margin-top: 20px;\n  "]);
                return Ug = function() {
                    return e
                }, e
            }

            function Sg() {
                var e = Object(qe.a)(["\n      padding: 1rem;\n      margin-top: 6px;\n  "]);
                return Sg = function() {
                    return e
                }, e
            }

            function Rg() {
                var e = Object(qe.a)(["\n  position: relative;\n  max-width: 468px;\n  width: 100%;\n  box-shadow: 0px 20px 30px 0px rgba(20, 24, 68, 0.03);\n  border-radius: 10px;\n  background-color: #fff;\n  ", "\n  ", "\n"]);
                return Rg = function() {
                    return e
                }, e
            }
            var Ng = Je.default.div(Rg(), Re.isMobile && Object(Je.css)(Sg()), !Re.isMobile && Object(Je.css)(Ug()));

            function Kg(e) {
                var n = e.children;
                return o.a.createElement(Ng, {
                    id: "BodyWrapper"
                }, n)
            }

            function Mg() {
                var e = Object(qe.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]);
                return Mg = function() {
                    return e
                }, e
            }

            function Bg() {
                var e = Object(qe.a)(["\n    padding: 0.25rem 0.5rem;\n  "]);
                return Bg = function() {
                    return e
                }, e
            }

            function Lg() {
                var e = Object(qe.a)(["\n    font-size: 14px;\n  "]);
                return Lg = function() {
                    return e
                }, e
            }

            function Fg() {
                var e = Object(qe.a)(["\n    font-size: 1rem;\n  "]);
                return Fg = function() {
                    return e
                }, e
            }

            function Wg() {
                var e = Object(qe.a)(["\n  padding: 0.5rem 1rem;\n  background-color: #393939FF;\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  ", "\n  ", "\n  ", ";\n  font-weight: 500;\n  cursor: pointer;\n  margin: 0.25rem;\n  overflow: hidden;\n  :hover {\n    border: 1px solid ", ";\n  }\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"]);
                return Wg = function() {
                    return e
                }, e
            }

            function Dg() {
                var e = Object(qe.a)(["\n  :hover {\n    cursor: pointer;\n  }\n  color: ", ";\n"]);
                return Dg = function() {
                    return e
                }, e
            }

            function qg() {
                var e = Object(qe.a)(["\n  position: relative;\n"]);
                return qg = function() {
                    return e
                }, e
            }
            var Gg = Je.default.div(qg()),
                Jg = Object(Je.default)(La.b)(Dg(), (function(e) {
                    return e.theme.primary1
                })),
                zg = Je.default.button(Wg(), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    return e.theme.primary5
                }), !Re.isMobile && Object(Je.css)(Fg()), Re.isMobile && Object(Je.css)(Lg()), (function(e) {
                    return e.theme.mediaWidth.upToSmall(Bg())
                }), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    return e.theme.primary1
                })),
                Pg = Je.default.span(Mg());

            function Vg(e) {
                var n, t, a, r, i, c, u, l, s = e.noLiquidity,
                    d = e.price,
                    p = e.currencies,
                    m = e.parsedAmounts,
                    f = e.poolTokenPercentage,
                    b = e.onAdd;
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(Bn, null, o.a.createElement(Cr, null, null === (n = p[ug.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, " Deposited"), o.a.createElement(Wn, null, o.a.createElement(yl, {
                    currency: p[ug.CURRENCY_A],
                    style: {
                        marginRight: "8px"
                    }
                }), o.a.createElement(Cr, null, null === (t = m[ug.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(8)))), o.a.createElement(Bn, null, o.a.createElement(Cr, null, null === (a = p[ug.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol, " Deposited"), o.a.createElement(Wn, null, o.a.createElement(yl, {
                    currency: p[ug.CURRENCY_B],
                    style: {
                        marginRight: "8px"
                    }
                }), o.a.createElement(Cr, null, null === (r = m[ug.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(8)))), o.a.createElement(Bn, null, o.a.createElement(Cr, null, "Rates"), o.a.createElement(Cr, null, "1 ".concat(null === (i = p[ug.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol, " = ").concat(null === d || void 0 === d ? void 0 : d.toSignificant(4), " ").concat(null === (c = p[ug.CURRENCY_B]) || void 0 === c ? void 0 : c.symbol))), o.a.createElement(Bn, {
                    style: {
                        justifyContent: "flex-end"
                    }
                }, o.a.createElement(Cr, null, "1 ".concat(null === (u = p[ug.CURRENCY_B]) || void 0 === u ? void 0 : u.symbol, " = ").concat(null === d || void 0 === d ? void 0 : d.invert().toSignificant(4), " ").concat(null === (l = p[ug.CURRENCY_A]) || void 0 === l ? void 0 : l.symbol))), o.a.createElement(Bn, null, o.a.createElement(Cr, null, "Share of Pool:"), o.a.createElement(Cr, null, s ? "100" : null === f || void 0 === f ? void 0 : f.toSignificant(4), "%")), o.a.createElement(ai, {
                    style: {
                        margin: "20px 0 0 0"
                    },
                    onClick: b
                }, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20
                }, s ? "Create Pool & Supply" : "Confirm Supply")))
            }
            var Yg = t(225),
                Zg = t.n(Yg);

            function Hg() {
                var e = Object(qe.a)(["\n    justify-content: space-around;\n  "]);
                return Hg = function() {
                    return e
                }, e
            }

            function Qg() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 1rem;\n  ", "\n"]);
                return Qg = function() {
                    return e
                }, e
            }

            function Xg() {
                var e = Object(qe.a)(["\n  padding: 16px 12px;\n  min-height: 240px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);
                return Xg = function() {
                    return e
                }, e
            }

            function _g() {
                var e = Object(qe.a)(["\n    background-color: #F0F2F5FF;\n    padding-bottom: 0;\n    height: 32px;\n    font-size: 12px;\n  "]);
                return _g = function() {
                    return e
                }, e
            }

            function $g() {
                var e = Object(qe.a)(["\n    width: 96px;\n  "]);
                return $g = function() {
                    return e
                }, e
            }

            function eh() {
                var e = Object(qe.a)(["\n  width: 100%;\n  border: none;\n  color: #fff;\n  padding: 0 0 1rem;\n\n  ", ";\n  &:hover {\n    border: none;\n  }\n  &:active {\n    box-shadow: none;\n    border: none;\n  }\n  &:focus {\n    border: none;\n    box-shadow: none;\n  }\n  ", "\n"]);
                return eh = function() {
                    return e
                }, e
            }

            function nh() {
                var e = Object(qe.a)(["\n    flex-wrap: wrap;\n    gap: 12px;\n    width: 100%;\n    flex-direction: column-reverse;\n  "]);
                return nh = function() {
                    return e
                }, e
            }

            function th() {
                var e = Object(qe.a)(["\n  ", ";\n"]);
                return th = function() {
                    return e
                }, e
            }

            function ah() {
                var e = Object(qe.a)(["\n  max-width: 640px;\n  width: 100%;\n"]);
                return ah = function() {
                    return e
                }, e
            }
            var rh = Object(Je.default)(mn)(ah()),
                ih = (Object(Je.default)(Bn)(th(), (function(e) {
                    return e.theme.mediaWidth.upToSmall(nh())
                })), Object(Je.default)(ii)(eh(), (function(e) {
                    return e.theme.mediaWidth.upToSmall($g())
                }), Re.isMobile && Object(Je.css)(_g()))),
                oh = Je.default.div(Xg()),
                ch = Je.default.div(Qg(), Re.isMobile && Object(Je.css)(Hg())),
                uh = {
                    style: Re.isMobile ? {
                        borderRadius: 4,
                        color: "#FFCA13FF",
                        backgroundColor: "#393939FF"
                    } : {
                        color: "#1D1D1EFF",
                        borderRadius: 0,
                        borderBottom: "2px solid #393939FF"
                    }
                },
                lh = {
                    style: {
                        borderBottom: "1px solid #EBEDF3FF",
                        borderRadius: 4,
                        color: Re.isMobile ? "#8491B3FF" : "#9197a5"
                    }
                };

            function sh() {
                var e = Object(i.useContext)(Je.ThemeContext),
                    n = Ne().account,
                    t = Object(Be.b)().t,
                    a = function() {
                        var e = Ne().chainId,
                            n = fa(),
                            t = Object(i.useMemo)((function() {
                                var n;
                                return e && null !== (n = Ee[e]) && void 0 !== n ? n : []
                            }), [e]),
                            a = Object(i.useMemo)((function() {
                                return e ? Gn()(Object.keys(n), (function(t) {
                                    var a, r = n[t];
                                    return (null !== (a = he[e]) && void 0 !== a ? a : []).map((function(e) {
                                        return e.address === r.address ? null : [e, r]
                                    })).filter((function(e) {
                                        return null !== e
                                    }))
                                })) : []
                            }), [n, e]),
                            r = Object(l.d)((function(e) {
                                return e.user.pairs
                            })),
                            o = Object(i.useMemo)((function() {
                                if (!e || !r) return [];
                                var n = r[e];
                                return n ? Object.keys(n).map((function(e) {
                                    return [Ua(n[e].token0), Ua(n[e].token1)]
                                })) : []
                            }), [r, e]),
                            c = Object(i.useMemo)((function() {
                                return o.concat(a).concat(t)
                            }), [a, t, o]);
                        return Object(i.useMemo)((function() {
                            var e = c.reduce((function(e, n) {
                                var t = Object(k.a)(n, 2),
                                    a = t[0],
                                    r = t[1];
                                if (1 == a.chainId) return e;
                                var i = a.sortsBefore(r),
                                    o = i ? "".concat(a.address, ":").concat(r.address) : "".concat(r.address, ":").concat(a.address);
                                return e[o] || (e[o] = i ? [a, r] : [r, a]), e
                            }), {});
                            return Object.keys(e).map((function(n) {
                                return e[n]
                            }))
                        }), [c])
                    }(),
                    r = Object(i.useMemo)((function() {
                        return a.map((function(e) {
                            return {
                                liquidityToken: Ba(e),
                                tokens: e
                            }
                        }))
                    }), [a]),
                    c = Pu(null !== n && void 0 !== n ? n : void 0, Object(i.useMemo)((function() {
                        return r.map((function(e) {
                            return e.liquidityToken
                        }))
                    }), [r])),
                    u = Object(k.a)(c, 2),
                    d = u[0],
                    p = u[1],
                    m = Object(i.useMemo)((function() {
                        return r.filter((function(e) {
                            var n, t = e.liquidityToken;
                            return null === (n = d[t.address]) || void 0 === n ? void 0 : n.greaterThan("0")
                        }))
                    }), [r, d]),
                    b = gu(m.map((function(e) {
                        return e.tokens
                    }))),
                    v = p || (null === b || void 0 === b ? void 0 : b.length) < m.length || (null === b || void 0 === b ? void 0 : b.some((function(e) {
                        return !e
                    }))),
                    y = b.map((function(e) {
                        return Object(k.a)(e, 2)[1]
                    })).filter((function(e) {
                        return Boolean(e)
                    })),
                    g = rg(),
                    h = Ju(),
                    E = null === h || void 0 === h ? void 0 : h.filter((function(e) {
                        return f.e.greaterThan(e.stakedAmount.raw, ke)
                    })),
                    O = gu(null === E || void 0 === E ? void 0 : E.map((function(e) {
                        return e.tokens
                    }))),
                    j = y.filter((function(e) {
                        return 0 === (null === O || void 0 === O ? void 0 : O.map((function(e) {
                            return e[1]
                        })).filter((function(n) {
                            return (null === n || void 0 === n ? void 0 : n.liquidityToken.address) === e.liquidityToken.address
                        })).length)
                    }));
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(Kg, null, o.a.createElement(wg, {
                    active: "pool"
                }), o.a.createElement(Zp, null, o.a.createElement(rh, null, o.a.createElement(ch, {
                    id: "PoolNavRow"
                }, o.a.createElement(ih, uh, t("yourliquidity")), o.a.createElement(ih, Object.assign({
                    as: s.b
                }, lh, {
                    to: "/create/BNB"
                }), t("createpair")), o.a.createElement(ih, Object.assign({
                    as: s.b
                }, lh, {
                    to: "/add/BNB"
                }), t("addLiquidity"))), o.a.createElement(mn, {
                    gap: "lg",
                    justify: "center"
                }, o.a.createElement(mn, {
                    gap: "lg",
                    style: {
                        width: "100%"
                    }
                }, n ? v ? o.a.createElement(oh, null, o.a.createElement(Cr, {
                    color: e.text3,
                    textAlign: "center"
                }, o.a.createElement(em, null, "Loading"))) : (null === y || void 0 === y ? void 0 : y.length) > 0 || (null === O || void 0 === O ? void 0 : O.length) > 0 ? o.a.createElement(o.a.Fragment, null, j.map((function(e) {
                    return o.a.createElement(eg, {
                        key: e.liquidityToken.address,
                        pair: e
                    })
                })), O.map((function(e, n) {
                    return e[1] && o.a.createElement(eg, {
                        key: E[n].stakingRewardAddress,
                        pair: e[1],
                        stakedBalance: E[n].stakedAmount
                    })
                }))) : o.a.createElement(oh, null, o.a.createElement("img", {
                    src: Zg.a,
                    alt: "EmptyProposalsIcon icon"
                }), o.a.createElement(Cr, {
                    color: e.text3,
                    style: {
                        paddingTop: "0.5rem"
                    },
                    textAlign: "center"
                }, t("text19"))) : o.a.createElement(mo, {
                    padding: "40px"
                }, o.a.createElement(Cr, {
                    color: e.text3,
                    textAlign: "center"
                }, "Connect to a wallet to view your liquidity.")), o.a.createElement(mn, {
                    justify: "center",
                    gap: "md"
                }, o.a.createElement(La.b, {
                    textAlign: "center",
                    fontSize: 14,
                    style: {
                        padding: ".5rem 0 .5rem 0"
                    }
                }, g ? "Uniswap V1 liquidity found!" : t("text20"), " ", o.a.createElement(ir, {
                    id: "import-pool-link",
                    to: g ? "/migrate/v1" : "/find"
                }, g ? "Migrate now." : t("import"))))))))))
            }
            var dh = t(223),
                ph = t.n(dh),
                mh = t(137),
                fh = t.n(mh);

            function bh() {
                var e = Object(qe.a)(["\n    align-items: flex-end;\n  "]);
                return bh = function() {
                    return e
                }, e
            }

            function vh() {
                var e = Object(qe.a)(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"]);
                return vh = function() {
                    return e
                }, e
            }
            var yh = Je.default.div(vh(), (function(e) {
                return e.theme.flexColumnNoWrap
            }), (function(e) {
                var n = e.size;
                return n ? n + "px" : "32px"
            }), (function(e) {
                var n = e.size;
                return n ? n + "px" : "32px"
            }), (function(e) {
                return e.theme.mediaWidth.upToMedium(bh())
            }));

            function gh(e) {
                var n, t, a, r, c, u = e.currencies,
                    l = e.price,
                    s = e.showInverted,
                    d = e.setShowInverted,
                    p = Object(i.useContext)(Je.ThemeContext),
                    m = s ? null === l || void 0 === l ? void 0 : l.toSignificant(6) : null === l || void 0 === l || null === (n = l.invert()) || void 0 === n ? void 0 : n.toSignificant(6),
                    f = Boolean((null === l || void 0 === l ? void 0 : l.baseCurrency) && (null === l || void 0 === l ? void 0 : l.quoteCurrency)),
                    b = s ? "1 ".concat(null === (t = u[ug.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, " = ").concat(m, " ").concat(null === (a = u[ug.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol) : "1 ".concat(null === (r = u[ug.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol, " = ").concat(m, " ").concat(null === (c = u[ug.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol);
                return o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: p.text2,
                    style: {
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex"
                    }
                }, f ? o.a.createElement(o.a.Fragment, null, o.a.createElement(yh, {
                    size: 16,
                    onClick: function() {
                        return d(!s)
                    },
                    style: {
                        marginRight: "10px"
                    }
                }, o.a.createElement("img", {
                    src: fh.a,
                    alt: "repeat logo"
                })), b) : "-")
            }

            function hh() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n"]);
                return hh = function() {
                    return e
                }, e
            }
            var Eh = Je.default.div(hh());

            function Oh(e) {
                var n, t, a, r, c, u, b, v, y, g, h, E, x = e.match.params,
                    A = x.currencyIdA,
                    w = x.currencyIdB,
                    C = e.history,
                    I = Ne(),
                    T = I.account,
                    U = I.chainId,
                    S = I.library,
                    R = Object(i.useContext)(Je.ThemeContext),
                    N = Object(i.useState)(!0),
                    K = Object(k.a)(N, 2),
                    M = K[0],
                    B = K[1],
                    L = ga(A),
                    F = ga(w),
                    W = Boolean(U && (L && Object(f.p)(L, f.o[U]) || F && Object(f.p)(F, f.o[U]))),
                    D = it(),
                    q = Sa(),
                    G = fg(),
                    J = G.independentField,
                    z = G.typedValue,
                    P = G.otherTypedValue,
                    V = function(e, n) {
                        var t, a, r, o, c, u, l, s = Ne(),
                            d = s.account,
                            p = s.chainId,
                            b = Object(Be.b)().t,
                            v = fg(),
                            y = v.independentField,
                            g = v.typedValue,
                            h = v.otherTypedValue,
                            E = y === ug.CURRENCY_A ? ug.CURRENCY_B : ug.CURRENCY_A,
                            O = Object(i.useMemo)((function() {
                                var t;
                                return t = {}, Object(m.a)(t, ug.CURRENCY_A, null !== e && void 0 !== e ? e : void 0), Object(m.a)(t, ug.CURRENCY_B, null !== n && void 0 !== n ? n : void 0), t
                            }), [e, n]),
                            j = hu(O[ug.CURRENCY_A], O[ug.CURRENCY_B]),
                            x = Object(k.a)(j, 2),
                            A = x[0],
                            w = x[1],
                            C = By(null === w || void 0 === w ? void 0 : w.liquidityToken),
                            I = A === bu.NOT_EXISTS || Boolean(C && f.e.equal(C.raw, mg)),
                            T = Zu(null !== d && void 0 !== d ? d : void 0, [O[ug.CURRENCY_A], O[ug.CURRENCY_B]]),
                            U = (t = {}, Object(m.a)(t, ug.CURRENCY_A, T[0]), Object(m.a)(t, ug.CURRENCY_B, T[1]), t),
                            S = Nu(g, O[y]),
                            R = Object(i.useMemo)((function() {
                                if (I) return h && O[E] ? Nu(h, O[E]) : void 0;
                                if (S) {
                                    var t = mu(S, p),
                                        a = [pu(e, p), pu(n, p)],
                                        r = a[0],
                                        i = a[1];
                                    if (r && i && t && w) {
                                        var o = E === ug.CURRENCY_B ? n : e,
                                            c = E === ug.CURRENCY_B ? w.priceOf(r).quote(t) : w.priceOf(i).quote(t);
                                        return o === f.d ? f.c.ether(c.raw) : c
                                    }
                                } else;
                            }), [I, h, O, E, S, e, p, n, w]),
                            N = (a = {}, Object(m.a)(a, ug.CURRENCY_A, y === ug.CURRENCY_A ? S : R), Object(m.a)(a, ug.CURRENCY_B, y === ug.CURRENCY_A ? R : S), a),
                            K = Object(i.useMemo)((function() {
                                if (I) {
                                    var n = N[ug.CURRENCY_A],
                                        t = N[ug.CURRENCY_B];
                                    return n && t ? new f.h(n.currency, t.currency, n.raw, t.raw) : void 0
                                }
                                var a = pu(e, p);
                                return w && a ? w.priceOf(a) : void 0
                            }), [p, e, I, w, N]),
                            M = Object(i.useMemo)((function() {
                                var e = N[ug.CURRENCY_A],
                                    n = N[ug.CURRENCY_B],
                                    t = [mu(e, p), mu(n, p)],
                                    a = t[0],
                                    r = t[1];
                                return w && C && a && r ? w.getLiquidityMinted(C, a, r) : void 0
                            }), [N, p, w, C]),
                            B = Object(i.useMemo)((function() {
                                return M && C ? new f.g(M.raw, C.add(M).raw) : void 0
                            }), [M, C]);
                        d || (c = b("connectWallet")), A === bu.INVALID && (c = null !== (u = c) && void 0 !== u ? u : b("invalidpair")), N[ug.CURRENCY_A] && N[ug.CURRENCY_B] || (c = null !== (l = c) && void 0 !== l ? l : b("enterAmount"));
                        var L, F, W = N[ug.CURRENCY_A],
                            D = N[ug.CURRENCY_B];
                        return W && (null === U || void 0 === U || null === (r = U[ug.CURRENCY_A]) || void 0 === r ? void 0 : r.lessThan(W)) && (c = "Insufficient " + (null === (L = O[ug.CURRENCY_A]) || void 0 === L ? void 0 : L.symbol) + " balance"), D && (null === U || void 0 === U || null === (o = U[ug.CURRENCY_B]) || void 0 === o ? void 0 : o.lessThan(D)) && (c = "Insufficient " + (null === (F = O[ug.CURRENCY_B]) || void 0 === F ? void 0 : F.symbol) + " balance"), {
                            dependentField: E,
                            currencies: O,
                            pair: w,
                            pairState: A,
                            currencyBalances: U,
                            parsedAmounts: N,
                            price: K,
                            noLiquidity: I,
                            liquidityMinted: M,
                            poolTokenPercentage: B,
                            error: c
                        }
                    }(null !== L && void 0 !== L ? L : void 0, null !== F && void 0 !== F ? F : void 0),
                    Y = V.dependentField,
                    Z = V.currencies,
                    H = V.pair,
                    Q = V.pairState,
                    X = V.currencyBalances,
                    $ = V.parsedAmounts,
                    ee = V.price,
                    ne = V.noLiquidity,
                    te = V.liquidityMinted,
                    ae = V.poolTokenPercentage,
                    re = V.error,
                    ie = function(e) {
                        var n = Object(l.c)();
                        return {
                            onFieldAInput: Object(i.useCallback)((function(t) {
                                n(dg({
                                    field: ug.CURRENCY_A,
                                    typedValue: t,
                                    noLiquidity: !0 === e
                                }))
                            }), [n, e]),
                            onFieldBInput: Object(i.useCallback)((function(t) {
                                n(dg({
                                    field: ug.CURRENCY_B,
                                    typedValue: t,
                                    noLiquidity: !0 === e
                                }))
                            }), [n, e])
                        }
                    }(ne),
                    oe = ie.onFieldAInput,
                    ce = ie.onFieldBInput,
                    ue = !re,
                    le = Object(Be.b)().t,
                    se = Object(i.useState)(!1),
                    de = Object(k.a)(se, 2),
                    pe = de[0],
                    me = de[1],
                    fe = Object(i.useState)(!1),
                    be = Object(k.a)(fe, 2),
                    ve = be[0],
                    ye = be[1],
                    ge = sg(),
                    he = Na(),
                    Ee = Object(k.a)(he, 1)[0],
                    Oe = Object(i.useState)(""),
                    ke = Object(k.a)(Oe, 2),
                    xe = ke[0],
                    Ae = ke[1],
                    we = (a = {}, Object(m.a)(a, J, z), Object(m.a)(a, Y, ne ? P : null !== (n = null === (t = $[Y]) || void 0 === t ? void 0 : t.toSignificant(8)) && void 0 !== n ? n : ""), a),
                    Ce = [ug.CURRENCY_A, ug.CURRENCY_B].reduce((function(e, n) {
                        return Object(p.a)(Object(p.a)({}, e), {}, Object(m.a)({}, n, Tg(X[n])))
                    }), {}),
                    Ie = [ug.CURRENCY_A, ug.CURRENCY_B].reduce((function(e, n) {
                        var t, a;
                        return Object(p.a)(Object(p.a)({}, e), {}, Object(m.a)({}, n, null === (t = Ce[n]) || void 0 === t ? void 0 : t.equalTo(null !== (a = $[n]) && void 0 !== a ? a : "0")))
                    }), {}),
                    Te = lg($[ug.CURRENCY_A], _),
                    Ue = Object(k.a)(Te, 2),
                    Se = Ue[0],
                    Ke = Ue[1],
                    Me = lg($[ug.CURRENCY_B], _),
                    Le = Object(k.a)(Me, 2),
                    Fe = Le[0],
                    We = Le[1],
                    De = yi();

                function qe() {
                    return Ge.apply(this, arguments)
                }

                function Ge() {
                    return (Ge = Object(j.a)(O.a.mark((function e() {
                        var n, t, a, r, i, o, c, u, l, s, b, v, y, g, h, E;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (U && S && T) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (t = Wt(0, S, T), a = $[ug.CURRENCY_A], r = $[ug.CURRENCY_B], a && r && L && F && ge) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 6:
                                    return n = {}, Object(m.a)(n, ug.CURRENCY_A, Lt(a, ne ? 0 : Ee)[0]), Object(m.a)(n, ug.CURRENCY_B, Lt(r, ne ? 0 : Ee)[0]), i = n, L === f.d || F === f.d ? (v = F === f.d, o = t.estimateGas.addLiquidityETH, c = t.addLiquidityETH, u = [null !== (s = null === (b = pu(v ? L : F, U)) || void 0 === b ? void 0 : b.address) && void 0 !== s ? s : "", (v ? a : r).raw.toString(), i[v ? ug.CURRENCY_A : ug.CURRENCY_B].toString(), i[v ? ug.CURRENCY_B : ug.CURRENCY_A].toString(), T, ge.toHexString()], l = Ut.a.from((v ? r : a).raw.toString())) : (o = t.estimateGas.addLiquidity, c = t.addLiquidity, u = [null !== (y = null === (g = pu(L, U)) || void 0 === g ? void 0 : g.address) && void 0 !== y ? y : "", null !== (h = null === (E = pu(F, U)) || void 0 === E ? void 0 : E.address) && void 0 !== h ? h : "", a.raw.toString(), r.raw.toString(), i[ug.CURRENCY_A].toString(), i[ug.CURRENCY_B].toString(), T, ge.toHexString()], l = null), ye(!0), e.next = 11, o.apply(void 0, Object(d.a)(u).concat([l ? {
                                        value: l
                                    } : {}])).then((function(e) {
                                        return c.apply(void 0, Object(d.a)(u).concat([Object(p.a)(Object(p.a)({}, l ? {
                                            value: l
                                        } : {}), {}, {
                                            gasLimit: Bt(e)
                                        })])).then((function(e) {
                                            var n, t, a, r;
                                            ye(!1), De(e, {
                                                summary: "Add " + (null === (n = $[ug.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(8)) + " " + (null === (t = Z[ug.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol) + " and " + (null === (a = $[ug.CURRENCY_B]) || void 0 === a ? void 0 : a.toSignificant(8)) + " " + (null === (r = Z[ug.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol)
                                            }), Ae(e.hash)
                                        }))
                                    })).catch((function(e) {
                                        ye(!1), 4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e)
                                    }));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var ze = function() {
                        var e, n, t, a;
                        return ne ? o.a.createElement(mn, {
                            gap: "20px"
                        }, o.a.createElement(fo, {
                            mt: "20px",
                            borderRadius: "20px"
                        }, o.a.createElement(Ln, null, o.a.createElement(La.b, {
                            fontSize: "36px",
                            fontWeight: 500,
                            lineHeight: "42px",
                            marginRight: 10
                        }, (null === (e = Z[ug.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol) + "/" + (null === (n = Z[ug.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol)), o.a.createElement($s, {
                            currency0: Z[ug.CURRENCY_A],
                            currency1: Z[ug.CURRENCY_B],
                            size: 30
                        })))) : o.a.createElement(mn, {
                            gap: "20px"
                        }, o.a.createElement(Ln, {
                            style: {
                                marginTop: "20px"
                            }
                        }, o.a.createElement(La.b, {
                            fontSize: "36px",
                            fontWeight: 500,
                            lineHeight: "42px",
                            marginRight: 10
                        }, null === te || void 0 === te ? void 0 : te.toSignificant(8)), o.a.createElement($s, {
                            currency0: Z[ug.CURRENCY_A],
                            currency1: Z[ug.CURRENCY_B],
                            size: 30
                        })), o.a.createElement(Dn, null, o.a.createElement(La.b, {
                            fontSize: "24px"
                        }, (null === (t = Z[ug.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol) + "/" + (null === (a = Z[ug.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol) + " Pool Tokens")), o.a.createElement(Sr, {
                            fontSize: 12,
                            textAlign: "left",
                            padding: "8px 0 0 0 "
                        }, "Output is estimated. If the price changes by more than ".concat(Ee / 100, "% your transaction will revert.")))
                    },
                    Pe = function() {
                        return o.a.createElement(Vg, {
                            price: ee,
                            currencies: Z,
                            parsedAmounts: $,
                            noLiquidity: ne,
                            onAdd: qe,
                            poolTokenPercentage: ae
                        })
                    },
                    Ve = "Supplying ".concat(null === (r = $[ug.CURRENCY_A]) || void 0 === r ? void 0 : r.toSignificant(8), " ").concat(null === (c = Z[ug.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol, " and ").concat(null === (u = $[ug.CURRENCY_B]) || void 0 === u ? void 0 : u.toSignificant(8), " ").concat(null === (b = Z[ug.CURRENCY_B]) || void 0 === b ? void 0 : b.symbol),
                    Ye = Object(i.useCallback)((function(e) {
                        var n = Ly(e);
                        n === w ? C.push("/add/".concat(w, "/").concat(A)) : C.push("/add/".concat(n, "/").concat(w))
                    }), [w, C, A]),
                    Ze = Object(i.useCallback)((function(e) {
                        var n = Ly(e);
                        A === n ? w ? C.push("/add/".concat(w, "/").concat(n)) : C.push("/add/".concat(n)) : C.push("/add/".concat(A || "BNB", "/").concat(n))
                    }), [A, C, w]),
                    He = Object(i.useCallback)((function() {
                        me(!1), xe && oe(""), Ae("")
                    }), [oe, xe]),
                    Qe = C.location.pathname.includes("/create"),
                    Xe = function() {
                        return Qe ? o.a.createElement(o.a.Fragment, null, o.a.createElement(ih, uh, le("createpair")), o.a.createElement(ih, Object.assign({
                            as: s.b
                        }, lh, {
                            to: "/add/BNB"
                        }), le("addLiquidity"))) : o.a.createElement(o.a.Fragment, null, o.a.createElement(ih, Object.assign({
                            as: s.b
                        }, lh, {
                            to: "/create/BNB"
                        }), le("createpair")), o.a.createElement(ih, uh, le("addLiquidity")))
                    };
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(Kg, null, o.a.createElement(wg, {
                    active: "pool"
                }), o.a.createElement(ch, {
                    id: "AddNavRow"
                }, o.a.createElement(ih, Object.assign({
                    as: s.b
                }, lh, {
                    to: "/pool"
                }), le("yourliquidity")), o.a.createElement(Xe, null)), o.a.createElement(Gg, null, o.a.createElement(My, {
                    isOpen: pe,
                    onDismiss: He,
                    attemptingTxn: ve,
                    hash: xe,
                    content: function() {
                        return o.a.createElement(Ny, {
                            title: ne ? "You are creating a pool" : "You will receive",
                            onDismiss: He,
                            topContent: ze,
                            bottomContent: Pe
                        })
                    },
                    pendingText: Ve
                }), o.a.createElement(mn, {
                    gap: "16px"
                }, o.a.createElement(Gd, {
                    value: we[ug.CURRENCY_A],
                    onUserInput: oe,
                    onMax: function() {
                        var e, n;
                        oe(null !== (e = null === (n = Ce[ug.CURRENCY_A]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== e ? e : "")
                    },
                    onCurrencySelect: Ye,
                    showMaxButton: !Ie[ug.CURRENCY_A],
                    currency: Z[ug.CURRENCY_A],
                    id: "add-liquidity-input-token",
                    showCommonBases: !0
                }), o.a.createElement(Eh, {
                    style: {
                        justifyContent: "center"
                    }
                }, o.a.createElement("img", {
                    src: ph.a,
                    alt: "",
                    style: {
                        marginRight: "1rem"
                    }
                })), o.a.createElement(Gd, {
                    value: we[ug.CURRENCY_B],
                    onUserInput: ce,
                    onCurrencySelect: Ze,
                    onMax: function() {
                        var e, n;
                        ce(null !== (e = null === (n = Ce[ug.CURRENCY_B]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== e ? e : "")
                    },
                    showMaxButton: !Ie[ug.CURRENCY_B],
                    currency: Z[ug.CURRENCY_B],
                    id: "add-liquidity-input-tokenb",
                    showCommonBases: !0
                }), o.a.createElement(Eh, null, Z[ug.CURRENCY_A] && Z[ug.CURRENCY_B] && Q !== bu.INVALID && o.a.createElement(gh, {
                    price: ee,
                    currencies: Z,
                    showInverted: M,
                    setShowInverted: B
                })), o.a.createElement("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between"
                    }
                }, o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: R.text2,
                    pt: 1
                }, "Share of Pool"), o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: R.text2,
                    pt: 1
                }, ne && ee ? "100" : null !== (v = (null === ae || void 0 === ae ? void 0 : ae.lessThan(je)) ? "<0.01" : null === ae || void 0 === ae ? void 0 : ae.toFixed(2)) && void 0 !== v ? v : "0", "%")), T ? o.a.createElement(mn, {
                    gap: "md"
                }, (Se === cg.NOT_APPROVED || Se === cg.PENDING || Fe === cg.NOT_APPROVED || Fe === cg.PENDING) && ue && o.a.createElement(Bn, null, Se !== cg.APPROVED && o.a.createElement(ai, {
                    onClick: Ke,
                    disabled: Se === cg.PENDING,
                    width: Fe !== cg.APPROVED ? "48%" : "100%"
                }, Se === cg.PENDING ? o.a.createElement(Pg, null, "Approving ", null === (y = Z[ug.CURRENCY_A]) || void 0 === y ? void 0 : y.symbol) : "Approve " + (null === (g = Z[ug.CURRENCY_A]) || void 0 === g ? void 0 : g.symbol)), Fe !== cg.APPROVED && o.a.createElement(ai, {
                    onClick: We,
                    disabled: Fe === cg.PENDING,
                    width: Se !== cg.APPROVED ? "48%" : "100%"
                }, Fe === cg.PENDING ? o.a.createElement(Pg, null, "Approving ", null === (h = Z[ug.CURRENCY_B]) || void 0 === h ? void 0 : h.symbol) : "Approve " + (null === (E = Z[ug.CURRENCY_B]) || void 0 === E ? void 0 : E.symbol))), o.a.createElement(di, {
                    onClick: function() {
                        q ? qe() : me(!0)
                    },
                    disabled: !ue || Se !== cg.APPROVED || Fe !== cg.APPROVED,
                    error: !ue && !!$[ug.CURRENCY_A] && !!$[ug.CURRENCY_B]
                }, o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 20,
                    fontWeight: 500
                }, null !== re && void 0 !== re ? re : "Supply"))) : o.a.createElement(ri, {
                    onClick: D
                }, le("connectWallet")), H && !ne && Q !== bu.INVALID ? o.a.createElement(mn, {
                    style: {
                        minWidth: "20rem",
                        width: "100%",
                        maxWidth: "400px"
                    }
                }, o.a.createElement($y, {
                    showUnwrapped: W,
                    pair: H
                })) : null))))
            }
            var kh = t(243),
                jh = t(349),
                xh = t.n(jh),
                Ah = t(350),
                wh = t.n(Ah);

            function Ch() {
                var e = Object(qe.a)(["\n  font-weight: 600;\n  color: #BB6E0F;\n  font-size: 14px;\n"]);
                return Ch = function() {
                    return e
                }, e
            }

            function Ih() {
                var e = Object(qe.a)(["\n    position: relative;\n    top: -18px;\n  "]);
                return Ih = function() {
                    return e
                }, e
            }

            function Th() {
                var e = Object(qe.a)(["\n  width: 95px;\n  height: 30px;\n  background: linear-gradient(360deg, #FFED57 0%, #FFFFFF 100%);\n  outline: none;\n  border: none;\n  border-radius: 16px;\n  cursor: pointer;\n  ", "\n"]);
                return Th = function() {
                    return e
                }, e
            }

            function Uh() {
                var e = Object(qe.a)(["\n    margin-left: 12px;\n  "]);
                return Uh = function() {
                    return e
                }, e
            }

            function Sh() {
                var e = Object(qe.a)(["\n  font-size: 22px;\n  font-weight: 500;\n  ", "\n"]);
                return Sh = function() {
                    return e
                }, e
            }

            function Rh() {
                var e = Object(qe.a)(["\n    font-size: 16px;\n  "]);
                return Rh = function() {
                    return e
                }, e
            }

            function Nh() {
                var e = Object(qe.a)(["\n  font-size: 14px;\n  ", "\n"]);
                return Nh = function() {
                    return e
                }, e
            }

            function Kh() {
                var e = Object(qe.a)(["\n    flex-direction: column;\n    align-items: flex-start;\n    top: -4px;\n    position: relative;\n  "]);
                return Kh = function() {
                    return e
                }, e
            }

            function Mh() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n  color: #fff;\n  ", "\n"]);
                return Mh = function() {
                    return e
                }, e
            }

            function Bh() {
                var e = Object(qe.a)(["\n    top: -140px;\n    height: 90px;\n    background-image: url(", ");\n  "]);
                return Bh = function() {
                    return e
                }, e
            }

            function Lh() {
                var e = Object(qe.a)(["\n    background-image: url(", ");\n  "]);
                return Lh = function() {
                    return e
                }, e
            }

            function Fh() {
                var e = Object(qe.a)(["\n  max-width: 468px;\n  width: 100%\n  height: 72px;\n  background-size: cover;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 12px;\n  align-items: center;\n  ", "\n  ", "\n"]);
                return Fh = function() {
                    return e
                }, e
            }
            var Wh = Je.default.section(Fh(), !Re.isMobile && Object(Je.css)(Lh(), xh.a), Re.isMobile && Object(Je.css)(Bh(), wh.a)),
                Dh = Je.default.div(Mh(), Re.isMobile && Object(Je.css)(Kh())),
                qh = Je.default.span(Nh(), !Re.isMobile && Object(Je.css)(Rh())),
                Gh = Je.default.span(Sh(), !Re.isMobile && Object(Je.css)(Uh())),
                Jh = Je.default.button(Th(), Re.isMobile && Object(Je.css)(Ih())),
                zh = Je.default.span(Ch());

            function Ph() {
                var e = Ne(),
                    n = e.account,
                    t = e.chainId,
                    a = e.library,
                    r = yi(),
                    c = Object(Be.b)().t,
                    u = Object(i.useState)("000.0000"),
                    l = Object(k.a)(u, 2),
                    s = l[0],
                    d = l[1],
                    p = function() {
                        var e = Object(j.a)(O.a.mark((function e() {
                            var t, r, i, o, c, u, l, s, p;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!a || !n) {
                                            e.next = 29;
                                            break
                                        }
                                        return e.next = 3, ls();
                                    case 3:
                                        if (0 != (t = e.sent).code) {
                                            e.next = 29;
                                            break
                                        }
                                        r = Ft($, kh, a, n), i = t.result, o = 0, c = Object(S.a)(i), e.prev = 9, c.s();
                                    case 11:
                                        if ((u = c.n()).done) {
                                            e.next = 20;
                                            break
                                        }
                                        return l = u.value, e.next = 15, r.getUserReward(l.pool_id);
                                    case 15:
                                        s = e.sent, p = Number(s[0].toString() / 1e18), o += p;
                                    case 18:
                                        e.next = 11;
                                        break;
                                    case 20:
                                        e.next = 25;
                                        break;
                                    case 22:
                                        e.prev = 22, e.t0 = e.catch(9), c.e(e.t0);
                                    case 25:
                                        return e.prev = 25, c.f(), e.finish(25);
                                    case 28:
                                        d(String(o.toFixed(4)));
                                    case 29:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [9, 22, 25, 28]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    m = Object(i.useCallback)(Object(j.a)(O.a.mark((function e() {
                        var t, i;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(a && n && Number(s) > 0)) {
                                        e.next = 6;
                                        break
                                    }
                                    return t = Ft($, kh, a, n), e.next = 4, t.takerWithdraw();
                                case 4:
                                    i = e.sent, r(i, {
                                        summary: "Withdrawal of VKC Token succesful"
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [a, n, s]);
                return Object(i.useEffect)((function() {
                    p();
                    var e = setInterval((function() {
                        p()
                    }), 9e3);
                    return function() {
                        return clearInterval(e)
                    }
                }), [t, n, a]), o.a.createElement(o.a.Fragment, null, o.a.createElement(Wh, {
                    className: "ClaimVKC"
                }, o.a.createElement(Dh, {
                    className: "TextWarpper"
                }, o.a.createElement(qh, null, c("rewardText")), o.a.createElement(Gh, null, s, " VKC")), o.a.createElement(Jh, {
                    onClick: m
                }, o.a.createElement(zh, null, c("wihtdrawlMine")))))
            }
            var Vh = t(219),
                Yh = t.n(Vh),
                Zh = t(220),
                Hh = t.n(Zh),
                Qh = t(221),
                Xh = t.n(Qh),
                _h = t(222),
                $h = t.n(_h),
                eE = t(218),
                nE = t.n(eE),
                tE = t(229),
                aE = t.n(tE);

            function rE() {
                var e = Object(qe.a)(["\n  font-size: 16px;\n  font-weight: 800;\n  color: #485266;\n"]);
                return rE = function() {
                    return e
                }, e
            }

            function iE() {
                var e = Object(qe.a)(["\n  height: 40px;\n  margin-right: 14px;\n"]);
                return iE = function() {
                    return e
                }, e
            }

            function oE() {
                var e = Object(qe.a)(["\n  display: flex;\n  align-items: center;\n"]);
                return oE = function() {
                    return e
                }, e
            }

            function cE() {
                var e = Object(qe.a)(["\n  display: flex;\n  height: 120px;\n  width: 960px;\n  margin: 0 auto;\n  justify-content: space-around;\n"]);
                return cE = function() {
                    return e
                }, e
            }

            function uE() {
                var e = Object(qe.a)(["\n  width: 100%;\n  background-color: #101523;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n"]);
                return uE = function() {
                    return e
                }, e
            }
            var lE = Je.default.footer(uE()),
                sE = Je.default.div(cE()),
                dE = Je.default.a(oE()),
                pE = Je.default.img(iE()),
                mE = Je.default.span(rE());

            function fE() {
                var e = Object(Be.b)().t;
                return o.a.createElement(lE, null, o.a.createElement(sE, null, o.a.createElement(dE, {
                    href: "https://github.com/mdexSwap",
                    target: "_blank"
                }, o.a.createElement(pE, {
                    src: Yh.a
                }), o.a.createElement(mE, null, "Github")), o.a.createElement(dE, {
                    href: "https://medium.com/@mdex201229",
                    target: "_blank"
                }, o.a.createElement(pE, {
                    src: Hh.a
                }), o.a.createElement(mE, null, "Medium")), o.a.createElement(dE, {
                    href: "https://t.me/MixDex",
                    target: "_blank"
                }, o.a.createElement(pE, {
                    src: Xh.a
                }), o.a.createElement(mE, null, "Telegram")), o.a.createElement(dE, {
                    href: "https://twitter.com/Mdextech",
                    target: "_blank"
                }, o.a.createElement(pE, {
                    src: $h.a
                }), o.a.createElement(mE, null, "Twitter")), o.a.createElement(dE, {
                    href: "https://discord.com/invite/3TYDPktjqC",
                    target: "_blank"
                }, o.a.createElement(pE, {
                    src: nE.a
                }), o.a.createElement(mE, null, "Discord")), o.a.createElement(dE, null, o.a.createElement(pE, {
                    src: aE.a
                }), o.a.createElement(mE, null, e("Fund")))))
            }

            function bE() {
                return o.a.createElement(Ge.a, {
                    to: "/add/"
                })
            }
            var vE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

            function yE(e) {
                var n = e.match.params.currencyIdA.match(vE);
                return (null === n || void 0 === n ? void 0 : n.length) ? o.a.createElement(Ge.a, {
                    to: "/add/".concat(n[1], "/").concat(n[2])
                }) : o.a.createElement(Oh, e)
            }

            function gE(e) {
                var n = e.match.params,
                    t = n.currencyIdA,
                    a = n.currencyIdB;
                return t.toLowerCase() === a.toLowerCase() ? o.a.createElement(Ge.a, {
                    to: "/add/".concat(t)
                }) : o.a.createElement(Oh, e)
            }
            var hE, EE = t(678);

            function OE() {
                var e, n = Ne().account,
                    t = Object(i.useState)(!1),
                    a = Object(k.a)(t, 2),
                    r = a[0],
                    c = a[1],
                    u = Object(i.useState)(hE.TOKEN1),
                    s = Object(k.a)(u, 2),
                    d = s[0],
                    p = s[1],
                    m = Object(i.useState)(f.d),
                    b = Object(k.a)(m, 2),
                    v = b[0],
                    y = b[1],
                    g = Object(i.useState)(null),
                    h = Object(k.a)(g, 2),
                    E = h[0],
                    O = h[1],
                    j = hu(null !== v && void 0 !== v ? v : void 0, null !== E && void 0 !== E ? E : void 0),
                    x = Object(k.a)(j, 2),
                    A = x[0],
                    w = x[1],
                    C = function() {
                        var e = Object(l.c)();
                        return Object(i.useCallback)((function(n) {
                            e(wa({
                                serializedPair: Ma(n)
                            }))
                        }), [e])
                    }();
                Object(i.useEffect)((function() {
                    w && C(w)
                }), [w, C]);
                var I = A === bu.NOT_EXISTS || Boolean(A === bu.EXISTS && w && f.e.equal(w.reserve0.raw, f.e.BigInt(0)) && f.e.equal(w.reserve1.raw, f.e.BigInt(0))),
                    T = Yu(null !== n && void 0 !== n ? n : void 0, null === w || void 0 === w ? void 0 : w.liquidityToken),
                    U = Boolean(T && f.e.greaterThan(T.raw, f.e.BigInt(0))),
                    S = Object(i.useCallback)((function(e) {
                        d === hE.TOKEN0 ? y(e) : O(e)
                    }), [d]),
                    R = Object(Be.b)().t,
                    N = Object(i.useCallback)((function() {
                        c(!1)
                    }), [c]),
                    K = o.a.createElement(fo, {
                        padding: "45px 10px"
                    }, o.a.createElement(La.b, {
                        textAlign: "center"
                    }, R(n ? "text25" : "text24")));
                return o.a.createElement(Kg, null, o.a.createElement(Cg, null), o.a.createElement(mn, {
                    gap: "md"
                }, o.a.createElement(pi, {
                    onClick: function() {
                        c(!0), p(hE.TOKEN0)
                    },
                    id: "ButtonDropdownLight"
                }, v ? o.a.createElement(Dn, null, o.a.createElement(yl, {
                    currency: v
                }), o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20,
                    marginLeft: "12px"
                }, v.symbol)) : o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20,
                    marginLeft: "12px"
                }, R("selectToken"))), o.a.createElement(pn, null, o.a.createElement(EE.a, {
                    size: "16",
                    color: "#888D9B"
                })), o.a.createElement(pi, {
                    onClick: function() {
                        c(!0), p(hE.TOKEN1)
                    }
                }, E ? o.a.createElement(Dn, null, o.a.createElement(yl, {
                    currency: E
                }), o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20,
                    marginLeft: "12px"
                }, E.symbol)) : o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 20,
                    marginLeft: "12px"
                }, R("selectToken"))), U && o.a.createElement(pn, {
                    style: {
                        justifyItems: "center",
                        backgroundColor: "",
                        padding: "12px 0px",
                        borderRadius: "12px"
                    }
                }, o.a.createElement(La.b, {
                    textAlign: "center",
                    fontWeight: 500
                }, "Pool Found!"), o.a.createElement(ir, {
                    to: "/pool"
                }, o.a.createElement(La.b, {
                    textAlign: "center"
                }, "Manage this pool."))), v && E ? A === bu.EXISTS ? U && w ? o.a.createElement($y, {
                    pair: w
                }) : o.a.createElement(fo, {
                    padding: "45px 10px"
                }, o.a.createElement(mn, {
                    gap: "sm",
                    justify: "center"
                }, o.a.createElement(La.b, {
                    textAlign: "center"
                }, "You don\u2019t have liquidity in this pool yet."), o.a.createElement(ir, {
                    to: "/add/".concat(Ly(v), "/").concat(Ly(E))
                }, o.a.createElement(La.b, {
                    textAlign: "center"
                }, "Add liquidity.")))) : I ? o.a.createElement(fo, {
                    padding: "45px 10px"
                }, o.a.createElement(mn, {
                    gap: "sm",
                    justify: "center"
                }, o.a.createElement(La.b, {
                    textAlign: "center"
                }, "No pool found."), o.a.createElement(ir, {
                    to: "/add/".concat(Ly(v), "/").concat(Ly(E))
                }, R("createpool")))) : A === bu.INVALID ? o.a.createElement(fo, {
                    padding: "45px 10px"
                }, o.a.createElement(mn, {
                    gap: "sm",
                    justify: "center"
                }, o.a.createElement(La.b, {
                    textAlign: "center",
                    fontWeight: 500
                }, R("invalidpair")))) : A === bu.LOADING ? o.a.createElement(fo, {
                    padding: "45px 10px"
                }, o.a.createElement(mn, {
                    gap: "sm",
                    justify: "center"
                }, o.a.createElement(La.b, {
                    textAlign: "center"
                }, R("Loading"), o.a.createElement(Pg, null)))) : null : K), o.a.createElement(Vs, {
                    isOpen: r,
                    onCurrencySelect: S,
                    onDismiss: N,
                    showCommonBases: !0,
                    selectedCurrency: null !== (e = d === hE.TOKEN0 ? E : v) && void 0 !== e ? e : void 0
                }))
            }! function(e) {
                e[e.TOKEN0 = 0] = "TOKEN0", e[e.TOKEN1 = 1] = "TOKEN1"
            }(hE || (hE = {}));
            var kE = t(4),
                jE = t(679);

            function xE() {
                var e = Object(qe.a)(["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ", "px;\n    width: ", "px;\n    background-color: #FFCA13FF;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #F0F2F5;\n    border-radius: 100%;\n    border: none;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #F0F2F5;\n    border-radius: 100%;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(90deg, ", ", ", ");\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(90deg, ", ", ", ");\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ", ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ", ";\n  }\n  &::-ms-fill-upper {\n    background: ", ";\n  }\n"]);
                return xE = function() {
                    return e
                }, e
            }
            var AE, wE = Je.default.input(xE(), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.theme.bg1
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.theme.bg1
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.size
            }), (function(e) {
                return e.theme.bg1
            }), (function(e) {
                return e.theme.bg5
            }), (function(e) {
                return e.theme.bg3
            }), (function(e) {
                return e.theme.bg5
            }), (function(e) {
                return e.theme.bg3
            }), (function(e) {
                return e.theme.bg5
            }), (function(e) {
                return e.theme.bg5
            }), (function(e) {
                return e.theme.bg3
            }));

            function CE(e) {
                var n = e.value,
                    t = e.onChange,
                    a = e.min,
                    r = void 0 === a ? 0 : a,
                    c = e.step,
                    u = void 0 === c ? 1 : c,
                    l = e.max,
                    s = void 0 === l ? 100 : l,
                    d = e.size,
                    p = void 0 === d ? 28 : d,
                    m = Object(i.useCallback)((function(e) {
                        t(parseInt(e.target.value))
                    }), [t]);
                return o.a.createElement(wE, {
                    size: p,
                    type: "range",
                    value: n,
                    style: {
                        width: "100%",
                        marginRight: 15,
                        padding: "15px 0"
                    },
                    onChange: m,
                    "aria-labelledby": "input slider",
                    step: u,
                    min: r,
                    max: s
                })
            }

            function IE() {
                var e, n, t = Ne().account,
                    a = wt(oa(Ne().chainId === f.a.MAINNET ? "0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8" : void 0, Pt, !1), "isArgentWallet", [null !== t && void 0 !== t ? t : void 0], ht);
                return null !== (e = null === a || void 0 === a || null === (n = a.result) || void 0 === n ? void 0 : n[0]) && void 0 !== e && e
            }! function(e) {
                e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT", e.LIQUIDITY = "LIQUIDITY", e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(AE || (AE = {}));
            var TE = Object(Xn.b)("burn/typeInputBurn");

            function UE() {
                return Object(l.d)((function(e) {
                    return e.burn
                }))
            }
            var SE = t(232),
                RE = t.n(SE);

            function NE(e) {
                var n, t, a, r, c, u, s, p, b, v, y, g, h, E, x = e.history,
                    A = e.match.params,
                    w = A.currencyIdA,
                    C = A.currencyIdB,
                    I = null !== (n = ga(w)) && void 0 !== n ? n : void 0,
                    T = null !== (t = ga(C)) && void 0 !== t ? t : void 0,
                    U = Ne(),
                    S = U.account,
                    R = U.chainId,
                    N = U.library,
                    K = Object(i.useMemo)((function() {
                        return [pu(I, R), pu(T, R)]
                    }), [I, T, R]),
                    M = Object(k.a)(K, 2),
                    B = M[0],
                    L = M[1],
                    F = Object(i.useContext)(Je.ThemeContext),
                    W = it(),
                    D = UE(),
                    q = D.independentField,
                    G = D.typedValue,
                    J = function(e, n) {
                        var t, a, r, i, o, c = Ne(),
                            u = c.account,
                            l = c.chainId,
                            s = Object(Be.b)().t,
                            d = UE(),
                            p = d.independentField,
                            b = d.typedValue,
                            v = hu(e, n),
                            y = Object(k.a)(v, 2)[1],
                            g = Vu(null !== u && void 0 !== u ? u : void 0, [null === y || void 0 === y ? void 0 : y.liquidityToken]),
                            h = null === g || void 0 === g ? void 0 : g[null !== (t = null === y || void 0 === y || null === (a = y.liquidityToken) || void 0 === a ? void 0 : a.address) && void 0 !== t ? t : ""],
                            E = [pu(e, l), pu(n, l)],
                            O = E[0],
                            j = E[1],
                            x = (r = {}, Object(m.a)(r, AE.CURRENCY_A, O), Object(m.a)(r, AE.CURRENCY_B, j), Object(m.a)(r, AE.LIQUIDITY, null === y || void 0 === y ? void 0 : y.liquidityToken), r),
                            A = By(null === y || void 0 === y ? void 0 : y.liquidityToken),
                            w = y && A && h && O && f.e.greaterThanOrEqual(A.raw, h.raw) ? new f.l(O, y.getLiquidityValue(O, A, h, !1).raw) : void 0,
                            C = y && A && h && j && f.e.greaterThanOrEqual(A.raw, h.raw) ? new f.l(j, y.getLiquidityValue(j, A, h, !1).raw) : void 0,
                            I = (i = {}, Object(m.a)(i, AE.CURRENCY_A, w), Object(m.a)(i, AE.CURRENCY_B, C), i),
                            T = new f.g("0", "100");
                        if (p === AE.LIQUIDITY_PERCENT) T = new f.g(b, "100");
                        else if (p === AE.LIQUIDITY) {
                            if (null === y || void 0 === y ? void 0 : y.liquidityToken) {
                                var U = Nu(b, y.liquidityToken);
                                U && h && !U.greaterThan(h) && (T = new f.g(U.raw, h.raw))
                            }
                        } else if (x[p]) {
                            var S = Nu(b, x[p]),
                                R = I[p];
                            S && R && !S.greaterThan(R) && (T = new f.g(S.raw, R.raw))
                        }
                        var N, K, M = (o = {}, Object(m.a)(o, AE.LIQUIDITY_PERCENT, T), Object(m.a)(o, AE.LIQUIDITY, h && T && T.greaterThan("0") ? new f.l(h.token, T.multiply(h.raw).quotient) : void 0), Object(m.a)(o, AE.CURRENCY_A, O && T && T.greaterThan("0") && w ? new f.l(O, T.multiply(w.raw).quotient) : void 0), Object(m.a)(o, AE.CURRENCY_B, j && T && T.greaterThan("0") && C ? new f.l(j, T.multiply(C.raw).quotient) : void 0), o);
                        return u || (N = s("connectWallet")), M[AE.LIQUIDITY] && M[AE.CURRENCY_A] && M[AE.CURRENCY_B] || (N = null !== (K = N) && void 0 !== K ? K : s("enterAmount")), {
                            pair: y,
                            parsedAmounts: M,
                            error: N
                        }
                    }(null !== I && void 0 !== I ? I : void 0, null !== T && void 0 !== T ? T : void 0),
                    z = J.pair,
                    P = J.parsedAmounts,
                    V = J.error,
                    Y = function() {
                        var e = Object(l.c)();
                        return {
                            onUserInput: Object(i.useCallback)((function(n, t) {
                                e(TE({
                                    field: n,
                                    typedValue: t
                                }))
                            }), [e])
                        }
                    }().onUserInput,
                    Z = !V,
                    H = Object(i.useState)(!1),
                    Q = Object(k.a)(H, 2),
                    X = Q[0],
                    $ = Q[1],
                    ee = Object(i.useState)(!1),
                    ne = Object(k.a)(ee, 2),
                    te = ne[0],
                    ae = ne[1],
                    re = Object(i.useState)(!1),
                    ie = Object(k.a)(re, 2),
                    oe = ie[0],
                    ce = ie[1],
                    ue = Object(i.useState)(""),
                    le = Object(k.a)(ue, 2),
                    se = le[0],
                    de = le[1],
                    pe = sg(),
                    me = Na(),
                    fe = Object(k.a)(me, 1)[0],
                    be = (b = {}, Object(m.a)(b, AE.LIQUIDITY_PERCENT, P[AE.LIQUIDITY_PERCENT].equalTo("0") ? "0" : P[AE.LIQUIDITY_PERCENT].lessThan(new f.g("1", "100")) ? "<1" : P[AE.LIQUIDITY_PERCENT].toFixed(0)), Object(m.a)(b, AE.LIQUIDITY, q === AE.LIQUIDITY ? G : null !== (a = null === (r = P[AE.LIQUIDITY]) || void 0 === r ? void 0 : r.toSignificant(8)) && void 0 !== a ? a : ""), Object(m.a)(b, AE.CURRENCY_A, q === AE.CURRENCY_A ? G : null !== (c = null === (u = P[AE.CURRENCY_A]) || void 0 === u ? void 0 : u.toSignificant(8)) && void 0 !== c ? c : ""), Object(m.a)(b, AE.CURRENCY_B, q === AE.CURRENCY_B ? G : null !== (s = null === (p = P[AE.CURRENCY_B]) || void 0 === p ? void 0 : p.toSignificant(8)) && void 0 !== s ? s : ""), b),
                    ve = null === (v = P[AE.LIQUIDITY_PERCENT]) || void 0 === v ? void 0 : v.equalTo(new f.g("1")),
                    ye = oa(null === z || void 0 === z || null === (y = z.liquidityToken) || void 0 === y ? void 0 : y.address, zt.a, E),
                    ge = Object(i.useState)(null),
                    he = Object(k.a)(ge, 2),
                    Ee = he[0],
                    Oe = he[1],
                    ke = lg(P[AE.LIQUIDITY], _),
                    je = Object(k.a)(ke, 2),
                    xe = je[0],
                    Ae = je[1],
                    we = IE();

                function Ce() {
                    return (Ce = Object(j.a)(O.a.mark((function e() {
                        var n, t, a, r, i, o, c;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (ye && z && N && pe) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("missing dependencies");
                                case 2:
                                    if (n = P[AE.LIQUIDITY]) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("missing liquidity amount");
                                case 5:
                                    if (!we) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", Ae());
                                case 7:
                                    return e.next = 9, ye.nonces(S);
                                case 9:
                                    t = e.sent, a = [{
                                        name: "name",
                                        type: "string"
                                    }, {
                                        name: "version",
                                        type: "string"
                                    }, {
                                        name: "chainId",
                                        type: "uint256"
                                    }, {
                                        name: "verifyingContract",
                                        type: "address"
                                    }], r = {
                                        name: "VKC LP Coin",
                                        version: "1",
                                        chainId: R,
                                        verifyingContract: z.liquidityToken.address
                                    }, i = [{
                                        name: "owner",
                                        type: "address"
                                    }, {
                                        name: "spender",
                                        type: "address"
                                    }, {
                                        name: "value",
                                        type: "uint256"
                                    }, {
                                        name: "nonce",
                                        type: "uint256"
                                    }, {
                                        name: "deadline",
                                        type: "uint256"
                                    }], o = {
                                        owner: S,
                                        spender: _,
                                        value: n.raw.toString(),
                                        nonce: t.toHexString(),
                                        deadline: pe.toNumber()
                                    }, c = JSON.stringify({
                                        types: {
                                            EIP712Domain: a,
                                            Permit: i
                                        },
                                        domain: r,
                                        primaryType: "Permit",
                                        message: o
                                    }), N.send("eth_signTypedData_v4", [S, c]).then(kE.splitSignature).then((function(e) {
                                        Oe({
                                            v: e.v,
                                            r: e.r,
                                            s: e.s,
                                            deadline: pe.toNumber()
                                        })
                                    })).catch((function(e) {
                                        4001 !== (null === e || void 0 === e ? void 0 : e.code) && Ae()
                                    }));
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var Ie = Object(i.useCallback)((function(e, n) {
                        return Oe(null), Y(e, n)
                    }), [Y]),
                    Te = Object(i.useCallback)((function(e) {
                        return Ie(AE.LIQUIDITY, e)
                    }), [Ie]),
                    Ue = Object(i.useCallback)((function(e) {
                        return Ie(AE.CURRENCY_A, e)
                    }), [Ie]),
                    Se = Object(i.useCallback)((function(e) {
                        return Ie(AE.CURRENCY_B, e)
                    }), [Ie]),
                    Ke = yi();

                function Me() {
                    return Le.apply(this, arguments)
                }

                function Le() {
                    return (Le = Object(j.a)(O.a.mark((function e() {
                        var n, t, a, r, i, o, c, u, l, s, p, b, v, y;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (R && N && S && pe) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("missing dependencies");
                                case 2:
                                    if (t = P[AE.CURRENCY_A], a = P[AE.CURRENCY_B], t && a) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("missing currency amounts");
                                case 5:
                                    if (r = Wt(0, N, S), n = {}, Object(m.a)(n, AE.CURRENCY_A, Lt(t, fe)[0]), Object(m.a)(n, AE.CURRENCY_B, Lt(a, fe)[0]), i = n, I && T) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error("missing tokens");
                                case 9:
                                    if (o = P[AE.LIQUIDITY]) {
                                        e.next = 12;
                                        break
                                    }
                                    throw new Error("missing liquidity amount");
                                case 12:
                                    if (c = T === f.d, u = I === f.d || c, B && L) {
                                        e.next = 16;
                                        break
                                    }
                                    throw new Error("could not wrap");
                                case 16:
                                    if (xe !== cg.APPROVED) {
                                        e.next = 20;
                                        break
                                    }
                                    u ? (l = ["removeLiquidityETH", "removeLiquidityETHSupportingFeeOnTransferTokens"], s = [c ? B.address : L.address, o.raw.toString(), i[c ? AE.CURRENCY_A : AE.CURRENCY_B].toString(), i[c ? AE.CURRENCY_B : AE.CURRENCY_A].toString(), S, pe.toHexString()]) : (l = ["removeLiquidity"], s = [B.address, L.address, o.raw.toString(), i[AE.CURRENCY_A].toString(), i[AE.CURRENCY_B].toString(), S, pe.toHexString()]), e.next = 25;
                                    break;
                                case 20:
                                    if (null === Ee) {
                                        e.next = 24;
                                        break
                                    }
                                    u ? (l = ["removeLiquidityETHWithPermit", "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"], s = [c ? B.address : L.address, o.raw.toString(), i[c ? AE.CURRENCY_A : AE.CURRENCY_B].toString(), i[c ? AE.CURRENCY_B : AE.CURRENCY_A].toString(), S, Ee.deadline, !1, Ee.v, Ee.r, Ee.s]) : (l = ["removeLiquidityWithPermit"], s = [B.address, L.address, o.raw.toString(), i[AE.CURRENCY_A].toString(), i[AE.CURRENCY_B].toString(), S, Ee.deadline, !1, Ee.v, Ee.r, Ee.s]), e.next = 25;
                                    break;
                                case 24:
                                    throw new Error("Attempting to confirm without approval or a signature. Please contact support.");
                                case 25:
                                    return e.next = 27, Promise.all(l.map((function(e) {
                                        var n;
                                        return (n = r.estimateGas)[e].apply(n, Object(d.a)(s)).then(Bt).catch((function(n) {
                                            console.error("estimateGas failed", e, s, n)
                                        }))
                                    })));
                                case 27:
                                    if (p = e.sent, -1 !== (b = p.findIndex((function(e) {
                                            return Ut.a.isBigNumber(e)
                                        })))) {
                                        e.next = 33;
                                        break
                                    }
                                    console.error("This transaction would fail. Please contact support."), e.next = 38;
                                    break;
                                case 33:
                                    return v = l[b], y = p[b], ce(!0), e.next = 38, r[v].apply(r, Object(d.a)(s).concat([{
                                        gasLimit: y
                                    }])).then((function(e) {
                                        var n, t;
                                        ce(!1), Ke(e, {
                                            summary: "Remove " + (null === (n = P[AE.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(8)) + " " + (null === I || void 0 === I ? void 0 : I.symbol) + " and " + (null === (t = P[AE.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(8)) + " " + (null === T || void 0 === T ? void 0 : T.symbol)
                                        }), de(e.hash)
                                    })).catch((function(e) {
                                        ce(!1), console.error(e)
                                    }));
                                case 38:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function Fe() {
                    var e, n;
                    return o.a.createElement(mn, {
                        gap: "sm",
                        style: {
                            marginTop: "20px"
                        }
                    }, o.a.createElement(Bn, {
                        align: "flex-end"
                    }, o.a.createElement(La.b, {
                        fontSize: 30,
                        fontWeight: "bold"
                    }, null === (e = P[AE.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(8)), o.a.createElement(Wn, {
                        gap: "4px"
                    }, o.a.createElement(yl, {
                        currency: I,
                        size: "30px"
                    }), o.a.createElement(La.b, {
                        fontSize: 24,
                        fontWeight: 500,
                        style: {
                            marginLeft: "10px"
                        }
                    }, null === I || void 0 === I ? void 0 : I.symbol))), o.a.createElement(Wn, {
                        style: {
                            marginLeft: "30px"
                        }
                    }, o.a.createElement(EE.a, {
                        size: "16",
                        color: F.text2
                    })), o.a.createElement(Bn, {
                        align: "flex-end"
                    }, o.a.createElement(La.b, {
                        fontSize: 30,
                        fontWeight: "bold"
                    }, null === (n = P[AE.CURRENCY_B]) || void 0 === n ? void 0 : n.toSignificant(8)), o.a.createElement(Wn, {
                        gap: "4px"
                    }, o.a.createElement(yl, {
                        currency: T,
                        size: "30px"
                    }), o.a.createElement(La.b, {
                        fontSize: 24,
                        fontWeight: 500,
                        style: {
                            marginLeft: "10px"
                        }
                    }, null === T || void 0 === T ? void 0 : T.symbol))), o.a.createElement(xr, {
                        fontSize: 12,
                        color: "#B7C3DC",
                        textAlign: "left",
                        padding: "12px 0 0 0"
                    }, "Output is estimated. If the price changes by more than ".concat(fe / 100, "% your transaction will revert.")))
                }

                function We() {
                    var e;
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement($s, {
                        size: 20,
                        currency0: I,
                        currency1: T,
                        margin: !0
                    }), o.a.createElement(La.b, {
                        color: F.text2,
                        fontWeight: 600,
                        fontSize: 16
                    }, (null === I || void 0 === I ? void 0 : I.symbol) + "/" + (null === T || void 0 === T ? void 0 : T.symbol), " Burned")), o.a.createElement(Wn, null, o.a.createElement(La.b, {
                        fontWeight: 600,
                        fontSize: 16
                    }, null === (e = P[AE.LIQUIDITY]) || void 0 === e ? void 0 : e.toSignificant(8)))), z && o.a.createElement(o.a.Fragment, null, o.a.createElement(Bn, null, o.a.createElement(La.b, {
                        color: F.text2,
                        fontWeight: 600,
                        fontSize: 16
                    }, "Price"), o.a.createElement(La.b, {
                        fontWeight: 600,
                        fontSize: 16
                    }, "1 ", null === I || void 0 === I ? void 0 : I.symbol, " = ", B ? z.priceOf(B).toSignificant(8) : "-", " ", null === T || void 0 === T ? void 0 : T.symbol)), o.a.createElement(Bn, null, o.a.createElement("div", null), o.a.createElement(La.b, {
                        fontWeight: 600,
                        fontSize: 16
                    }, "1 ", null === T || void 0 === T ? void 0 : T.symbol, " = ", L ? z.priceOf(L).toSignificant(8) : "-", " ", null === I || void 0 === I ? void 0 : I.symbol))), o.a.createElement(ai, {
                        disabled: !(xe === cg.APPROVED || null !== Ee),
                        onClick: Me
                    }, o.a.createElement(La.b, {
                        fontWeight: 500,
                        fontSize: 20
                    }, "Confirm")))
                }
                var De = "Removing ".concat(null === (g = P[AE.CURRENCY_A]) || void 0 === g ? void 0 : g.toSignificant(8), " ").concat(null === I || void 0 === I ? void 0 : I.symbol, " and ").concat(null === (h = P[AE.CURRENCY_B]) || void 0 === h ? void 0 : h.toSignificant(8), " ").concat(null === T || void 0 === T ? void 0 : T.symbol),
                    qe = Object(i.useCallback)((function(e) {
                        Ie(AE.LIQUIDITY_PERCENT, e.toString())
                    }), [Ie]),
                    Ge = I === f.d || T === f.d,
                    ze = Boolean(R && (I && Object(f.p)(f.o[R], I) || T && Object(f.p)(f.o[R], T))),
                    Pe = Object(i.useCallback)((function(e) {
                        C && Ly(e) === C ? x.push("/remove/".concat(Ly(e), "/").concat(w)) : x.push("/remove/".concat(Ly(e), "/").concat(C))
                    }), [w, C, x]),
                    Ve = Object(i.useCallback)((function(e) {
                        w && Ly(e) === w ? x.push("/remove/".concat(C, "/").concat(Ly(e))) : x.push("/remove/".concat(w, "/").concat(Ly(e)))
                    }), [w, C, x]),
                    Ye = Object(i.useCallback)((function() {
                        $(!1), Oe(null), se && Ie(AE.LIQUIDITY_PERCENT, "0"), de("")
                    }), [Ie, se]),
                    Ze = function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                            a = Object(i.useState)((function() {
                                return e
                            })),
                            r = Object(k.a)(a, 2),
                            o = r[0],
                            c = r[1],
                            u = Object(i.useRef)(),
                            l = Object(i.useCallback)((function(e) {
                                c(e), u.current && clearTimeout(u.current), u.current = setTimeout((function() {
                                    n(e), u.current = void 0
                                }), t)
                            }), [t, n]);
                        return Object(i.useEffect)((function() {
                            u.current && (clearTimeout(u.current), u.current = void 0), c(e)
                        }), [e]), [o, l]
                    }(Number.parseInt(P[AE.LIQUIDITY_PERCENT].toFixed(0)), qe),
                    He = Object(k.a)(Ze, 2),
                    Qe = He[0],
                    Xe = He[1],
                    _e = Object(Be.b)().t;
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(Kg, null, o.a.createElement(Ig, {
                    creating: !1,
                    adding: !1
                }), o.a.createElement(Gg, null, o.a.createElement(My, {
                    isOpen: X,
                    onDismiss: Ye,
                    attemptingTxn: oe,
                    hash: se || "",
                    content: function() {
                        return o.a.createElement(Ny, {
                            title: "You will receive",
                            onDismiss: Ye,
                            topContent: Fe,
                            bottomContent: We
                        })
                    },
                    pendingText: De
                }), o.a.createElement(mn, {
                    gap: "md"
                }, o.a.createElement(fo, {
                    style: {
                        border: "1px solid #EBEDF3FF"
                    }
                }, o.a.createElement(mn, {
                    gap: "10px"
                }, o.a.createElement(Bn, null, o.a.createElement(La.b, {
                    fontWeight: 500
                }, "Amount"), o.a.createElement(Jg, {
                    fontWeight: 500,
                    onClick: function() {
                        ae(!te)
                    }
                }, te ? "Simple" : "Detailed")), o.a.createElement(Dn, {
                    style: {
                        alignItems: "flex-end"
                    }
                }, o.a.createElement(La.b, {
                    fontSize: 48,
                    fontWeight: 500
                }, be[AE.LIQUIDITY_PERCENT], "%")), !te && o.a.createElement(o.a.Fragment, null, o.a.createElement(CE, {
                    value: Qe,
                    onChange: Xe
                }), o.a.createElement(Bn, null, o.a.createElement(zg, {
                    onClick: function() {
                        return Ie(AE.LIQUIDITY_PERCENT, "25")
                    },
                    width: "20%"
                }, "25%"), o.a.createElement(zg, {
                    onClick: function() {
                        return Ie(AE.LIQUIDITY_PERCENT, "50")
                    },
                    width: "20%"
                }, "50%"), o.a.createElement(zg, {
                    onClick: function() {
                        return Ie(AE.LIQUIDITY_PERCENT, "75")
                    },
                    width: "20%"
                }, "75%"), o.a.createElement(zg, {
                    onClick: function() {
                        return Ie(AE.LIQUIDITY_PERCENT, "100")
                    },
                    width: "20%"
                }, "Max"))))), !te && o.a.createElement(o.a.Fragment, null, o.a.createElement(pn, {
                    style: {
                        height: "30px",
                        margin: ".5rem 0"
                    }
                }, o.a.createElement("img", {
                    src: RE.a,
                    alt: ""
                })), o.a.createElement(fo, {
                    style: {
                        border: "1px solid #EBEDF3FF"
                    }
                }, o.a.createElement(mn, {
                    gap: "10px"
                }, o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(yl, {
                    currency: I,
                    size: "30px",
                    style: {
                        marginRight: "12px"
                    }
                }), o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 18 : 24,
                    fontWeight: 500,
                    id: "remove-liquidity-tokena-symbol"
                }, null === I || void 0 === I ? void 0 : I.symbol)), o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 18 : 24,
                    fontWeight: 500
                }, be[AE.CURRENCY_A] || "-")), o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(yl, {
                    currency: T,
                    size: "30px",
                    style: {
                        marginRight: "12px"
                    }
                }), o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 18 : 24,
                    fontWeight: 500,
                    id: "remove-liquidity-tokenb-symbol"
                }, null === T || void 0 === T ? void 0 : T.symbol)), o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 18 : 24,
                    fontWeight: 500
                }, be[AE.CURRENCY_B] || "-")), R && (ze || Ge) ? o.a.createElement(Bn, {
                    style: {
                        justifyContent: "flex-end"
                    }
                }, Ge ? o.a.createElement(ir, {
                    to: "/remove/".concat(I === f.d ? f.o[R].address : w, "/").concat(T === f.d ? f.o[R].address : C)
                }, "Receive WBNB") : ze ? o.a.createElement(ir, {
                    to: "/remove/".concat(I && Object(f.p)(I, f.o[R]) ? "BNB" : w, "/").concat(T && Object(f.p)(T, f.o[R]) ? "BNB" : C)
                }, "Receive BNB") : null) : null))), te && o.a.createElement(o.a.Fragment, null, o.a.createElement(Gd, {
                    value: be[AE.LIQUIDITY],
                    onUserInput: Te,
                    onMax: function() {
                        Ie(AE.LIQUIDITY_PERCENT, "100")
                    },
                    showMaxButton: !ve,
                    disableCurrencySelect: !0,
                    currency: null === z || void 0 === z ? void 0 : z.liquidityToken,
                    pair: z,
                    id: "liquidity-amount"
                }), o.a.createElement(pn, null, o.a.createElement(jE.a, {
                    size: "16",
                    color: F.text2
                })), o.a.createElement(Gd, {
                    hideBalance: !0,
                    value: be[AE.CURRENCY_A],
                    onUserInput: Ue,
                    onMax: function() {
                        return Ie(AE.LIQUIDITY_PERCENT, "100")
                    },
                    showMaxButton: !ve,
                    currency: I,
                    label: "Output",
                    onCurrencySelect: Pe,
                    id: "remove-liquidity-tokena"
                }), o.a.createElement(pn, null, o.a.createElement(EE.a, {
                    size: "16",
                    color: F.text2
                })), o.a.createElement(Gd, {
                    hideBalance: !0,
                    value: be[AE.CURRENCY_B],
                    onUserInput: Se,
                    onMax: function() {
                        return Ie(AE.LIQUIDITY_PERCENT, "100")
                    },
                    showMaxButton: !ve,
                    currency: T,
                    label: "Output",
                    onCurrencySelect: Ve,
                    id: "remove-liquidity-tokenb"
                })), z && o.a.createElement("div", {
                    style: {
                        padding: "10px 0"
                    }
                }, o.a.createElement(Bn, null, "Price:", o.a.createElement("div", null, "1 ", null === I || void 0 === I ? void 0 : I.symbol, " = ", B ? z.priceOf(B).toSignificant(6) : "-", " ", null === T || void 0 === T ? void 0 : T.symbol)), o.a.createElement(Bn, null, o.a.createElement("div", null), o.a.createElement("div", null, "1 ", null === T || void 0 === T ? void 0 : T.symbol, " = ", L ? z.priceOf(L).toSignificant(6) : "-", " ", null === I || void 0 === I ? void 0 : I.symbol))), o.a.createElement("div", {
                    style: {
                        position: "relative"
                    }
                }, S ? o.a.createElement(Bn, null, o.a.createElement(si, {
                    onClick: function() {
                        return Ce.apply(this, arguments)
                    },
                    confirmed: xe === cg.APPROVED || null !== Ee,
                    disabled: xe !== cg.NOT_APPROVED || null !== Ee,
                    mr: "0.5rem",
                    fontWeight: 500,
                    fontSize: 16
                }, xe === cg.PENDING ? o.a.createElement(em, null, "Approving") : xe === cg.APPROVED || null !== Ee ? "Approved" : "Approve"), o.a.createElement(di, {
                    onClick: function() {
                        $(!0)
                    },
                    disabled: !Z || null === Ee && xe !== cg.APPROVED,
                    error: !Z && !!P[AE.CURRENCY_A] && !!P[AE.CURRENCY_B]
                }, o.a.createElement(La.b, {
                    fontSize: 16,
                    fontWeight: 500
                }, V || "Remove"))) : o.a.createElement(ri, {
                    onClick: W
                }, _e("connectWallet")))), z ? o.a.createElement(mn, {
                    style: {
                        minWidth: "20rem",
                        width: "100%",
                        maxWidth: "400px",
                        marginTop: "1rem"
                    }
                }, o.a.createElement($y, {
                    showUnwrapped: ze,
                    pair: z
                })) : null)))
            }
            var KE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

            function ME(e) {
                var n = e.match.params.tokens;
                if (!KE.test(n)) return o.a.createElement(Ge.a, {
                    to: "/pool"
                });
                var t = n.split("-"),
                    a = Object(k.a)(t, 2),
                    r = a[0],
                    i = a[1];
                return o.a.createElement(Ge.a, {
                    to: "/remove/".concat(r, "/").concat(i)
                })
            }
            var BE = t(680);

            function LE(e) {
                var n = e.priceImpact;
                return o.a.createElement(Xp, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: "#FFCA13FF",
                    severity: Su(n)
                }, n ? n.lessThan(je) ? "<0.01%" : "".concat(n.toFixed(2), "%") : "-")
            }

            function FE(e) {
                var n, t, a, r, c = e.trade,
                    u = e.onConfirm,
                    l = e.allowedSlippage,
                    s = e.swapErrorMessage,
                    d = e.disabledConfirm,
                    p = Object(i.useState)(!1),
                    m = Object(k.a)(p, 2),
                    b = m[0],
                    v = m[1],
                    y = Object(i.useContext)(Je.ThemeContext),
                    g = Object(i.useMemo)((function() {
                        return Uu(c, l)
                    }), [l, c]),
                    h = Object(i.useMemo)((function() {
                        return Tu(c)
                    }), [c]),
                    E = h.priceImpactWithoutFee,
                    O = h.realizedLPFee,
                    j = Su(E),
                    x = Object(Be.b)().t;
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(mn, {
                    gap: "0px"
                }, o.a.createElement(Bn, {
                    align: "center"
                }, o.a.createElement(La.b, {
                    fontWeight: 400,
                    fontSize: 14,
                    color: y.text2
                }, x("price")), o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: y.text1,
                    style: {
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        textAlign: "right",
                        paddingLeft: "10px"
                    }
                }, function(e, n) {
                    return e ? n ? "".concat(e.executionPrice.invert().toSignificant(6), " ").concat(e.inputAmount.currency.symbol, " / ").concat(e.outputAmount.currency.symbol) : "".concat(e.executionPrice.toSignificant(6), " ").concat(e.outputAmount.currency.symbol, " / ").concat(e.inputAmount.currency.symbol) : ""
                }(c, b), o.a.createElement(_p, {
                    onClick: function() {
                        return v(!b)
                    }
                }, o.a.createElement(BE.a, {
                    size: 14
                })))), o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontSize: 14,
                    fontWeight: 400,
                    color: y.text2
                }, c.tradeType === f.n.EXACT_INPUT ? x("minimumreceived") : x("maximumSold")), o.a.createElement(Fo, {
                    text: x("text11")
                })), o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontSize: 14
                }, c.tradeType === f.n.EXACT_INPUT ? null !== (n = null === (t = g[vu.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(8)) && void 0 !== n ? n : "-" : null !== (a = null === (r = g[vu.INPUT]) || void 0 === r ? void 0 : r.toSignificant(8)) && void 0 !== a ? a : "-"), o.a.createElement(Ar, {
                    fontSize: 14,
                    marginLeft: "4px"
                }, c.tradeType === f.n.EXACT_INPUT ? c.outputAmount.currency.symbol : c.inputAmount.currency.symbol))), o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    color: y.text2,
                    fontSize: 14,
                    fontWeight: 400
                }, x("Impact")), o.a.createElement(Fo, {
                    text: x("text12")
                })), o.a.createElement(LE, {
                    priceImpact: E
                })), o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontSize: 14,
                    fontWeight: 400,
                    color: y.text2
                }, x("liquidityFee")), o.a.createElement(Fo, {
                    text: x("text13")
                })), o.a.createElement(Ar, {
                    fontSize: 14
                }, O ? (null === O || void 0 === O ? void 0 : O.toSignificant(6)) + " " + c.inputAmount.currency.symbol : "-"))), o.a.createElement(Fn, null, o.a.createElement(di, {
                    onClick: u,
                    disabled: d,
                    error: j > 2,
                    style: {
                        margin: "10px 0 0 0"
                    },
                    id: "confirm-swap-or-send"
                }, o.a.createElement(La.b, {
                    fontSize: 20,
                    fontWeight: 500
                }, x(j > 2 ? "swapAnyway" : "confirmSwap"))), s ? o.a.createElement(am, {
                    error: s
                }) : null))
            }

            function WE(e) {
                var n, t, a = e.trade,
                    r = e.allowedSlippage,
                    c = e.recipient,
                    u = e.showAcceptChanges,
                    l = e.onAcceptChanges,
                    s = Object(i.useMemo)((function() {
                        return Uu(a, r)
                    }), [a, r]),
                    d = Su(Object(i.useMemo)((function() {
                        return Tu(a)
                    }), [a]).priceImpactWithoutFee),
                    p = Object(i.useContext)(Je.ThemeContext),
                    m = Object(Be.b)().t;
                return o.a.createElement(mn, {
                    gap: "md",
                    style: {
                        marginTop: "20px"
                    }
                }, o.a.createElement(Bn, {
                    align: "flex-end"
                }, o.a.createElement(Wn, {
                    gap: "0px"
                }, o.a.createElement(yl, {
                    currency: a.inputAmount.currency,
                    size: "30px",
                    style: {
                        marginRight: "12px"
                    }
                }), o.a.createElement($p, {
                    fontSize: 24,
                    fontWeight: 500,
                    color: u && a.tradeType === f.n.EXACT_OUTPUT ? p.primary1 : ""
                }, a.inputAmount.toSignificant(8))), o.a.createElement(Wn, {
                    gap: "0px"
                }, o.a.createElement(La.b, {
                    fontSize: 24,
                    fontWeight: 500,
                    style: {
                        marginLeft: "10px"
                    }
                }, a.inputAmount.currency.symbol))), o.a.createElement(Wn, null, o.a.createElement(jE.a, {
                    size: "16",
                    color: p.text2,
                    style: {
                        marginLeft: "4px",
                        minWidth: "16px"
                    }
                })), o.a.createElement(Bn, {
                    align: "flex-end"
                }, o.a.createElement(Wn, {
                    gap: "0px"
                }, o.a.createElement(yl, {
                    currency: a.outputAmount.currency,
                    size: "30px",
                    style: {
                        marginRight: "12px"
                    }
                }), o.a.createElement($p, {
                    fontSize: 24,
                    fontWeight: 500,
                    color: d > 2 ? p.red1 : u && a.tradeType === f.n.EXACT_INPUT ? p.primary1 : ""
                }, a.outputAmount.toSignificant(8))), o.a.createElement(Wn, {
                    gap: "0px"
                }, o.a.createElement(La.b, {
                    fontSize: 24,
                    fontWeight: 500,
                    style: {
                        marginLeft: "10px"
                    }
                }, a.outputAmount.currency.symbol))), u ? o.a.createElement(rm, {
                    justify: "flex-start",
                    gap: "0px"
                }, o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(Np.a, {
                    size: 20,
                    style: {
                        marginRight: "8px",
                        minWidth: 24
                    }
                }), o.a.createElement(xr, {
                    color: p.primary1
                }, " Price Updated")), o.a.createElement(ai, {
                    style: {
                        padding: ".5rem",
                        width: "fit-content",
                        fontSize: "0.825rem",
                        borderRadius: "12px"
                    },
                    onClick: l
                }, "Accept"))) : null, o.a.createElement(mn, {
                    justify: "flex-start",
                    gap: "sm",
                    style: {
                        padding: "12px 0 0 0px"
                    }
                }, a.tradeType === f.n.EXACT_INPUT ? o.a.createElement(Sr, {
                    textAlign: "left",
                    style: {
                        width: "100%"
                    }
                }, m("text8"), o.a.createElement("b", null, null === (n = s[vu.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(8), " ", a.outputAmount.currency.symbol), m("text9")) : o.a.createElement(Sr, {
                    textAlign: "left",
                    style: {
                        width: "100%"
                    }
                }, m("text10"), o.a.createElement("b", null, null === (t = s[vu.INPUT]) || void 0 === t ? void 0 : t.toSignificant(8), " ", a.inputAmount.currency.symbol), m("text9"))), null !== c ? o.a.createElement(mn, {
                    justify: "flex-start",
                    gap: "sm",
                    style: {
                        padding: "12px 0 0 0px"
                    }
                }, o.a.createElement(xr, null, "Output will be sent to", " ", o.a.createElement("b", {
                    title: c
                }, Rt(c) ? Mt(c) : c))) : null)
            }

            function DE(e) {
                var n, t, a, r, c, u, l = e.trade,
                    s = e.originalTrade,
                    d = e.onAcceptChanges,
                    p = e.allowedSlippage,
                    m = e.onConfirm,
                    b = e.onDismiss,
                    v = e.recipient,
                    y = e.swapErrorMessage,
                    g = e.isOpen,
                    h = e.attemptingTxn,
                    E = e.txHash,
                    O = Object(i.useMemo)((function() {
                        return Boolean(l && s && (n = s, (e = l).tradeType !== n.tradeType || !Object(f.p)(e.inputAmount.currency, n.inputAmount.currency) || !e.inputAmount.equalTo(n.inputAmount) || !Object(f.p)(e.outputAmount.currency, n.outputAmount.currency) || !e.outputAmount.equalTo(n.outputAmount)));
                        var e, n
                    }), [s, l]),
                    k = Object(Be.b)().t,
                    j = Object(i.useCallback)((function() {
                        return l ? o.a.createElement(WE, {
                            trade: l,
                            allowedSlippage: p,
                            recipient: v,
                            showAcceptChanges: O,
                            onAcceptChanges: d
                        }) : null
                    }), [p, d, v, O, l]),
                    x = Object(i.useCallback)((function() {
                        return l ? o.a.createElement(FE, {
                            onConfirm: m,
                            trade: l,
                            disabledConfirm: O,
                            swapErrorMessage: y,
                            allowedSlippage: p
                        }) : null
                    }), [p, m, O, y, l]),
                    A = "Swapping ".concat(null === l || void 0 === l || null === (n = l.inputAmount) || void 0 === n ? void 0 : n.toSignificant(8), " ").concat(null === l || void 0 === l || null === (t = l.inputAmount) || void 0 === t || null === (a = t.currency) || void 0 === a ? void 0 : a.symbol, " for ").concat(null === l || void 0 === l || null === (r = l.outputAmount) || void 0 === r ? void 0 : r.toSignificant(8), " ").concat(null === l || void 0 === l || null === (c = l.outputAmount) || void 0 === c || null === (u = c.currency) || void 0 === u ? void 0 : u.symbol),
                    w = Object(i.useCallback)((function() {
                        return y ? o.a.createElement(Ky, {
                            onDismiss: b,
                            message: y
                        }) : o.a.createElement(Ny, {
                            title: k("confirmSwap"),
                            onDismiss: b,
                            topContent: j,
                            bottomContent: x
                        })
                    }), [b, x, j, y]);
                return o.a.createElement(My, {
                    isOpen: g,
                    onDismiss: b,
                    attemptingTxn: h,
                    hash: E,
                    content: w,
                    pendingText: A
                })
            }
            var qE = t(681),
                GE = Object(i.memo)((function(e) {
                    var n = e.trade,
                        t = Object(i.useContext)(Je.ThemeContext);
                    return o.a.createElement(La.a, {
                        px: "1rem",
                        py: "0.5rem",
                        my: "0.5rem",
                        flexWrap: "wrap",
                        width: "100%",
                        justifyContent: "space-evenly",
                        alignItems: "center"
                    }, n.route.path.map((function(e, n, a) {
                        var r = n === a.length - 1;
                        return o.a.createElement(i.Fragment, {
                            key: n
                        }, o.a.createElement(La.a, {
                            my: "0.5rem",
                            alignItems: "center",
                            style: {
                                flexShrink: 0
                            }
                        }, o.a.createElement(yl, {
                            currency: e,
                            size: "1.5rem"
                        }), o.a.createElement(Ar, {
                            fontSize: 14,
                            color: t.text1,
                            ml: "0.5rem"
                        }, e.symbol)), r ? null : o.a.createElement(qE.a, {
                            color: t.text2
                        }))
                    })))
                })),
                JE = t(351);

            function zE(e) {
                var n, t, a, r, c, u = e.trade,
                    l = e.allowedSlippage,
                    s = Object(i.useContext)(Je.ThemeContext),
                    d = Ne(),
                    p = d.account,
                    m = d.library,
                    b = Tu(u),
                    v = b.priceImpactWithoutFee,
                    y = b.realizedLPFee,
                    g = u.tradeType === f.n.EXACT_INPUT,
                    h = Uu(u, l),
                    E = u.outputAmount.currency.decimals,
                    x = u.inputAmount.currency.decimals,
                    A = Object(i.useState)(0),
                    w = Object(k.a)(A, 2),
                    C = w[0],
                    I = w[1],
                    T = Object(i.useState)(0),
                    U = Object(k.a)(T, 2),
                    S = U[0],
                    R = U[1],
                    N = Object(i.useState)(0),
                    K = Object(k.a)(N, 2),
                    M = K[0],
                    B = K[1],
                    L = u.route.path[0].address,
                    F = u.route.path.slice(-1)[0].address,
                    W = u.route.pairs.length,
                    D = null === (n = h[vu.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(8);
                Object(i.useEffect)((function() {
                    if (m && p) {
                        var e = Ft("0x5fFBf808C8Bc1e49246eEcb0d6957A29a06871aC", JE, m, p);
                        e.getPrice(F, String(Math.pow(10, E)), ee).then((function(n) {
                            var t = n.toString() / 1e18,
                                a = Number(D) * t,
                                r = 0;
                            u.route.pairs.forEach(function() {
                                var n = Object(j.a)(O.a.mark((function n(t, i) {
                                    var o, c, u, l, s;
                                    return O.a.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return o = t.reserve0, c = t.reserve1, n.next = 4, e.getPoolReward(o.token.address, c.token.address);
                                            case 4:
                                                u = n.sent, l = u[0].toString(), s = u[1].toString(), l && s && I(r += l * a / s);
                                            case 8:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function(e, t) {
                                    return n.apply(this, arguments)
                                }
                            }())
                        })), e.getPrice(ne, String(Math.pow(10, 18)), ee).then((function(e) {
                            var n = e.toString() / 1e18;
                            R(n)
                        })), e.getPrice(L, String(Math.pow(10, x)), ee).then((function(e) {
                            var n = e.toString() / 1e18;
                            B(n)
                        }))
                    }
                }), [W, L, F, D]);
                var q = Object(Be.b)().t;
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(mn, null, o.a.createElement(Bn, {
                    align: "center"
                }, o.a.createElement(Ar, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: s.text2
                }, q("Slippagetolerance"), o.a.createElement(Fo, {
                    text: q("SlippagetoleranceHelp")
                })), o.a.createElement(Ar, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: s.text1
                }, l / 100, "%")), o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontSize: 14,
                    fontWeight: 500,
                    color: s.text2
                }, q("Impact")), o.a.createElement(Fo, {
                    text: q("text12")
                })), o.a.createElement(LE, {
                    priceImpact: v
                })), o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontSize: 14,
                    fontWeight: 500,
                    color: s.text2
                }, q(g ? "minimumreceived" : "maximumSold")), o.a.createElement(Fo, {
                    text: q("text11")
                })), o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    color: s.text1,
                    fontSize: 14
                }, g ? null !== (t = "".concat(null === (a = h[vu.OUTPUT]) || void 0 === a ? void 0 : a.toSignificant(4), " ").concat(u.outputAmount.currency.symbol)) && void 0 !== t ? t : "-" : null !== (r = "".concat(null === (c = h[vu.INPUT]) || void 0 === c ? void 0 : c.toSignificant(4), " ").concat(u.inputAmount.currency.symbol)) && void 0 !== r ? r : "-"))), o.a.createElement(Bn, null, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontSize: 14,
                    fontWeight: 500,
                    color: s.text2
                }, q("liquidityFee")), o.a.createElement(Fo, {
                    text: q("text13")
                })), o.a.createElement(Ar, {
                    fontSize: 14,
                    color: s.text1
                }, y ? "".concat(y.toSignificant(2), " ").concat(u.inputAmount.currency.symbol) : "-", " ", o.a.createElement(o.a.Fragment, null, C > 0 ? "\u2248 $".concat(Number(M * Number(null === y || void 0 === y ? void 0 : y.toSignificant(2))).toFixed(6)) : ""))), C > 0 && o.a.createElement(Bn, null, o.a.createElement(Ar, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: s.text2
                }, q("rewardText"), o.a.createElement(Fo, {
                    text: q("rewardTip")
                })), o.a.createElement(Ar, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: s.text1
                }, C.toFixed(4), " MDX \u2248 $", Number(C * S).toFixed(6)))))
            }

            function PE(e) {
                var n = e.trade,
                    t = Object(i.useContext)(Je.ThemeContext),
                    a = Na(),
                    r = Object(k.a)(a, 1)[0],
                    c = Boolean(n && n.route.path.length > 2);
                return o.a.createElement(mn, {
                    gap: "md"
                }, n && o.a.createElement(o.a.Fragment, null, o.a.createElement(zE, {
                    trade: n,
                    allowedSlippage: r
                }), c && o.a.createElement(o.a.Fragment, null, o.a.createElement(Hp, null), o.a.createElement(mn, null, o.a.createElement(Wn, null, o.a.createElement(Ar, {
                    fontSize: 14,
                    fontWeight: 400,
                    color: t.text2
                }, "Route"), o.a.createElement(Fo, {
                    text: "Routing through these tokens resulted in the best price for your trade."
                })), o.a.createElement(GE, {
                    trade: n
                })))))
            }

            function VE() {
                var e = Object(qe.a)(["\n  padding-top: calc(16px + 2rem);\n  margin-top: -1rem;\n  width: 100%;\n  max-width: 434px;\n  color: ", ";\n  z-index: -1;\n  display: ", ";\n"]);
                return VE = function() {
                    return e
                }, e
            }
            var YE = Je.default.div(VE(), (function(e) {
                return e.theme.text2
            }), (function(e) {
                return e.show ? "block" : "none"
            }));

            function ZE(e) {
                var n, t = e.id,
                    a = e.trade,
                    r = Object(ze.a)(e, ["id", "trade"]),
                    i = Qu(a, Xu);
                return o.a.createElement(YE, {
                    show: Boolean(a),
                    id: t
                }, o.a.createElement(PE, Object.assign({}, r, {
                    trade: null !== (n = null !== a && void 0 !== a ? a : i) && void 0 !== n ? n : void 0
                })))
            }

            function HE() {
                var e = Object(qe.a)(["\n    align-items: flex-end;\n  "]);
                return HE = function() {
                    return e
                }, e
            }

            function QE() {
                var e = Object(qe.a)(["\n  ", ";\n  align-items: center;\n  justify-content: center;\n  margin-left: 8px;\n  cursor: pointer;\n  & > img,\n  span {\n    height: ", ";\n    width: ", ";\n  }\n  ", ";\n"]);
                return QE = function() {
                    return e
                }, e
            }
            var XE = Je.default.div(QE(), (function(e) {
                return e.theme.flexColumnNoWrap
            }), (function(e) {
                var n = e.size;
                return n ? n + "px" : "32px"
            }), (function(e) {
                var n = e.size;
                return n ? n + "px" : "32px"
            }), (function(e) {
                return e.theme.mediaWidth.upToMedium(HE())
            }));

            function _E(e) {
                var n, t, a, r, c, u = e.price,
                    l = e.showInverted,
                    s = e.setShowInverted,
                    d = Object(i.useContext)(Je.ThemeContext),
                    p = l ? null === u || void 0 === u ? void 0 : u.toSignificant(6) : null === u || void 0 === u || null === (n = u.invert()) || void 0 === n ? void 0 : n.toSignificant(6),
                    m = Boolean((null === u || void 0 === u ? void 0 : u.baseCurrency) && (null === u || void 0 === u ? void 0 : u.quoteCurrency)),
                    f = l ? "1 ".concat(null === u || void 0 === u || null === (t = u.baseCurrency) || void 0 === t ? void 0 : t.symbol, " = ").concat(p, " ").concat(null === u || void 0 === u || null === (a = u.quoteCurrency) || void 0 === a ? void 0 : a.symbol) : "1 ".concat(null === u || void 0 === u || null === (r = u.quoteCurrency) || void 0 === r ? void 0 : r.symbol, " = ").concat(p, " ").concat(null === u || void 0 === u || null === (c = u.baseCurrency) || void 0 === c ? void 0 : c.symbol);
                return o.a.createElement(La.b, {
                    fontWeight: 500,
                    fontSize: 14,
                    color: d.text2,
                    style: {
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex"
                    }
                }, m ? o.a.createElement(o.a.Fragment, null, o.a.createElement(XE, {
                    size: 16,
                    onClick: function() {
                        return s(!l)
                    },
                    style: {
                        marginRight: "10px"
                    }
                }, o.a.createElement("img", {
                    src: fh.a,
                    alt: "repeat logo"
                })), f) : "-")
            }

            function $E() {
                var e = Object(qe.a)(["\n  stroke: ", ";\n"]);
                return $E = function() {
                    return e
                }, e
            }

            function eO() {
                var e = Object(qe.a)(["\n  max-width: 468px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]);
                return eO = function() {
                    return e
                }, e
            }

            function nO() {
                var e = Object(qe.a)(["\n  background: ", ";\n  padding: 0.75rem;\n  border-radius: 20px;\n"]);
                return nO = function() {
                    return e
                }, e
            }
            var tO = Je.default.div(nO(), (function(e) {
                    var n = e.theme;
                    return Object(Ye.d)(.6, n.bg3)
                })),
                aO = Je.default.div(eO()),
                rO = Object(Je.default)(Np.a)($E(), (function(e) {
                    return e.theme.red2
                }));

            function iO(e) {
                var n, t, a, r, c = e.token,
                    u = Ne().chainId,
                    l = null !== (n = null === c || void 0 === c || null === (t = c.symbol) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : "",
                    s = null !== (a = null === c || void 0 === c || null === (r = c.name) || void 0 === r ? void 0 : r.toLowerCase()) && void 0 !== a ? a : "",
                    d = fa(),
                    p = Object(i.useMemo)((function() {
                        return !(!c || !u) && Object.keys(d).some((function(e) {
                            var n, t, a = d[e];
                            return !a.equals(c) && ((null === (n = a.symbol) || void 0 === n ? void 0 : n.toLowerCase()) === l || (null === (t = a.name) || void 0 === t ? void 0 : t.toLowerCase()) === s)
                        }))
                    }), [c, u, d, l, s]);
                return c ? o.a.createElement(tO, {
                    error: p
                }, o.a.createElement(Fn, {
                    gap: "6px"
                }, o.a.createElement(mn, {
                    gap: "24px"
                }, o.a.createElement(yl, {
                    currency: c,
                    size: "16px"
                }), o.a.createElement("div", null, " ")), o.a.createElement(mn, {
                    gap: "10px",
                    justify: "flex-start"
                }, o.a.createElement(xr, null, c && c.name && c.symbol && c.name !== c.symbol ? "".concat(c.name, " (").concat(c.symbol, ")") : c.name || c.symbol, " "), u && o.a.createElement(lr, {
                    style: {
                        fontWeight: 400
                    },
                    href: Kt(u, c.address, "token")
                }, o.a.createElement(Ur, {
                    title: c.address
                }, Mt(c.address), " (View on BSC)"))))) : null
            }

            function oO(e) {
                var n = e.isOpen,
                    t = e.tokens,
                    a = e.onConfirm,
                    r = Object(i.useState)(!1),
                    c = Object(k.a)(r, 2),
                    u = c[0],
                    l = c[1],
                    s = Object(i.useCallback)((function() {
                        return l((function(e) {
                            return !e
                        }))
                    }), []),
                    d = Object(i.useCallback)((function() {
                        return null
                    }), []);
                return o.a.createElement(cn, {
                    isOpen: n,
                    onDismiss: d,
                    maxHeight: 90
                }, o.a.createElement(aO, {
                    className: "token-warning-container"
                }, o.a.createElement(mn, {
                    gap: "lg"
                }, o.a.createElement(Fn, {
                    gap: "6px"
                }, o.a.createElement(rO, null), o.a.createElement(xr, {
                    color: "red2"
                }, "Token imported")), o.a.createElement(Cr, {
                    color: "red2"
                }, "Anyone can create an BEP-20 token on BSC Chain with ", o.a.createElement("em", null, "any"), " name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary BEP-20 tokens."), o.a.createElement(Cr, {
                    color: "red2"
                }, "If you purchase an arbitrary token, ", o.a.createElement("strong", null, "you may be unable to sell it back.")), t.map((function(e) {
                    return o.a.createElement(iO, {
                        key: e.address,
                        token: e
                    })
                })), o.a.createElement(Bn, null, o.a.createElement("div", null, o.a.createElement("label", {
                    style: {
                        cursor: "pointer",
                        userSelect: "none"
                    }
                }, o.a.createElement("input", {
                    type: "checkbox",
                    className: "understand-checkbox",
                    checked: u,
                    onChange: s
                }), " ", "I understand")), o.a.createElement(di, {
                    disabled: !u,
                    error: !0,
                    width: "140px",
                    padding: "0.5rem 1rem",
                    className: "token-dismiss-button",
                    style: {
                        borderRadius: "10px"
                    },
                    onClick: function() {
                        a()
                    }
                }, o.a.createElement(Cr, {
                    color: "white"
                }, "Continue"))))))
            }

            function cO() {
                var e = Object(qe.a)(["\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ", "\n      0%,\n    ", " 80%\n  );\n  opacity: 0.6;\n"]);
                return cO = function() {
                    return e
                }, e
            }

            function uO() {
                var e = Object(qe.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]);
                return uO = function() {
                    return e
                }, e
            }

            function lO() {
                var e = Object(qe.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n"]);
                return lO = function() {
                    return e
                }, e
            }

            function sO() {
                var e = Object(qe.a)(["\n  width: 50%;\n"]);
                return sO = function() {
                    return e
                }, e
            }

            function dO() {
                var e = Object(qe.a)([""]);
                return dO = function() {
                    return e
                }, e
            }
            var pO, mO, fO = Object(Je.default)(mn)(dO()),
                bO = Object(Je.default)(Bn)(sO()),
                vO = Je.default.div(lO(), (function(e) {
                    var n = e.theme,
                        t = e.confirmed;
                    return e.disabled ? n.bg4 : t ? n.green1 : n.primary1
                }), (function(e) {
                    return e.theme.white
                })),
                yO = Je.default.div(uO()),
                gO = Je.default.div(cO(), (function(e) {
                    var n = e.theme,
                        t = e.prevConfirmed;
                    return e.disabled ? n.bg4 : Object(Ye.d)(.5, t ? n.green1 : n.primary1)
                }), (function(e) {
                    var n = e.theme,
                        t = e.prevConfirmed;
                    return e.disabled ? n.bg4 : t ? n.primary1 : n.bg4
                }));

            function hO(e) {
                var n = e.steps,
                    t = e.disabled,
                    a = void 0 !== t && t,
                    r = Object(ze.a)(e, ["steps", "disabled"]);
                return o.a.createElement(fO, Object.assign({
                    justify: "center"
                }, r), o.a.createElement(bO, null, n.map((function(e, t) {
                    return o.a.createElement(yO, {
                        key: t
                    }, o.a.createElement(vO, {
                        confirmed: e,
                        disabled: a || !n[t - 1] && 0 !== t
                    }, e ? "\u2713" : t + 1), o.a.createElement(gO, {
                        prevConfirmed: e,
                        disabled: a
                    }))
                })), o.a.createElement(vO, {
                    disabled: a || !n[n.length - 1]
                }, n.length + 1)))
            }

            function EO(e) {
                return "0x".concat(e.raw.toString(16))
            }

            function OO(e, n) {
                if (ig(e) !== ru.v1) throw new Error("invalid trade version");
                if (e.route.pairs.length > 2) throw new Error("too many pairs");
                var t = e.tradeType === f.n.EXACT_INPUT,
                    a = e.inputAmount.currency === f.d,
                    r = e.outputAmount.currency === f.d;
                if (a && r) throw new Error("ETHER to ETHER");
                var i = EO(e.minimumAmountOut(n.allowedSlippage)),
                    o = EO(e.maximumAmountIn(n.allowedSlippage)),
                    c = "0x".concat(n.deadline.toString(16));
                if (t) {
                    if (a) return {
                        methodName: "ethToTokenTransferInput",
                        args: [i, c, n.recipient],
                        value: o
                    };
                    if (r) return {
                        methodName: "tokenToEthTransferInput",
                        args: [o, i, c, n.recipient],
                        value: "0x0"
                    };
                    var u = e.outputAmount.currency;
                    if (!(u instanceof f.k)) throw new Error("token to token");
                    return {
                        methodName: "tokenToTokenTransferInput",
                        args: [o, i, "0x1", c, n.recipient, u.address],
                        value: "0x0"
                    }
                }
                if (a) return {
                    methodName: "ethToTokenTransferOutput",
                    args: [i, c, n.recipient],
                    value: o
                };
                if (r) return {
                    methodName: "tokenToEthTransferOutput",
                    args: [i, o, c, n.recipient],
                    value: "0x0"
                };
                var l = e.outputAmount.currency;
                if (!(l instanceof f.k)) throw new Error("invalid output amount currency");
                return {
                    methodName: "tokenToTokenTransferOutput",
                    args: [i, o, ng.a.toHexString(), c, n.recipient, l.address],
                    value: "0x0"
                }
            }

            function kO(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                    t = arguments.length > 2 ? arguments[2] : void 0,
                    a = Ne(),
                    r = a.account,
                    o = a.chainId,
                    c = a.library,
                    u = Ri(t),
                    l = u.address,
                    s = null === t ? r : l,
                    d = sg(),
                    p = ua(og(e), !0);
                return Object(i.useMemo)((function() {
                    var t = ig(e);
                    if (!e || !s || !c || !r || !t || !o || !d) return [];
                    var a = t === ru.v2 ? Wt(0, c, r) : p;
                    if (!a) return [];
                    var i = [];
                    switch (t) {
                        case ru.v2:
                            i.push(f.j.swapCallParameters(e, {
                                feeOnTransfer: !1,
                                allowedSlippage: new f.g(f.e.BigInt(n), xe),
                                recipient: s,
                                deadline: d.toNumber()
                            })), e.tradeType === f.n.EXACT_INPUT && i.push(f.j.swapCallParameters(e, {
                                feeOnTransfer: !0,
                                allowedSlippage: new f.g(f.e.BigInt(n), xe),
                                recipient: s,
                                deadline: d.toNumber()
                            }));
                            break;
                        case ru.v1:
                            i.push(OO(e, {
                                allowedSlippage: new f.g(f.e.BigInt(n), xe),
                                recipient: s,
                                deadline: d.toNumber()
                            }))
                    }
                    return i.map((function(e) {
                        return {
                            parameters: e,
                            contract: a
                        }
                    }))
                }), [r, n, o, d, c, s, e, p])
            }! function(e) {
                e[e.INVALID = 0] = "INVALID", e[e.LOADING = 1] = "LOADING", e[e.VALID = 2] = "VALID"
            }(pO || (pO = {})),
            function(e) {
                e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.WRAP = 1] = "WRAP", e[e.UNWRAP = 2] = "UNWRAP"
            }(mO || (mO = {}));
            var jO = {
                wrapType: mO.NOT_APPLICABLE
            };

            function xO(e, n, t) {
                var a = Ne(),
                    r = a.chainId,
                    o = a.account,
                    c = function(e) {
                        var n = Ne().chainId;
                        return oa(n ? f.o[n].address : void 0, ea, e)
                    }(),
                    u = Hu(null !== o && void 0 !== o ? o : void 0, e),
                    l = Object(i.useMemo)((function() {
                        return Nu(t, e)
                    }), [e, t]),
                    s = yi();
                return Object(i.useMemo)((function() {
                    if (!c || !r || !e || !n) return jO;
                    var t = l && u && !u.lessThan(l);
                    return e === f.d && Object(f.p)(f.o[r], n) ? {
                        wrapType: mO.WRAP,
                        execute: t && l ? Object(j.a)(O.a.mark((function e() {
                            var n;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, c.deposit({
                                            value: "0x".concat(l.raw.toString(16))
                                        });
                                    case 3:
                                        n = e.sent, s(n, {
                                            summary: "Wrap ".concat(l.toSignificant(8), " BNB to WBNB")
                                        }), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("Could not deposit", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: t ? void 0 : "Insufficient BNB balance"
                    } : Object(f.p)(f.o[r], e) && n === f.d ? {
                        wrapType: mO.UNWRAP,
                        execute: t && l ? Object(j.a)(O.a.mark((function e() {
                            var n;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, c.withdraw("0x".concat(l.raw.toString(16)));
                                    case 3:
                                        n = e.sent, s(n, {
                                            summary: "Unwrap ".concat(l.toSignificant(8), " WBNB to BNB")
                                        }), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("Could not withdraw", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: t ? void 0 : "Insufficient WBNB balance"
                    } : jO
                }), [c, r, e, n, l, u, s])
            }
            var AO = t(226),
                wO = t.n(AO);

            function CO() {
                var e, n, t, a, r, c, u, s, b, v, y, g = function() {
                        var e = Ne().chainId,
                            n = Object(l.c)(),
                            t = uu(),
                            a = Object(i.useState)(),
                            r = Object(k.a)(a, 2),
                            o = r[0],
                            c = r[1];
                        return Object(i.useEffect)((function() {
                            if (e) {
                                var a = Du(t);
                                n(xu({
                                    typedValue: a.typedValue,
                                    field: a.independentField,
                                    inputCurrencyId: a[vu.INPUT].currencyId,
                                    outputCurrencyId: a[vu.OUTPUT].currencyId,
                                    recipient: a.recipient
                                })), c({
                                    inputCurrencyId: a[vu.INPUT].currencyId,
                                    outputCurrencyId: a[vu.OUTPUT].currencyId
                                })
                            }
                        }), [n, e]), o
                    }(),
                    h = Object(Be.b)().t,
                    E = [ga(null === g || void 0 === g ? void 0 : g.inputCurrencyId), ga(null === g || void 0 === g ? void 0 : g.outputCurrencyId)],
                    x = E[0],
                    A = E[1],
                    w = Object(i.useState)(!1),
                    C = Object(k.a)(w, 2),
                    I = C[0],
                    T = C[1],
                    U = Object(i.useMemo)((function() {
                        var e, n;
                        return null !== (e = null === (n = [x, A]) || void 0 === n ? void 0 : n.filter((function(e) {
                            return e instanceof f.k
                        }))) && void 0 !== e ? e : []
                    }), [x, A]),
                    S = Object(i.useCallback)((function() {
                        T(!0)
                    }), []),
                    R = Ne().account,
                    N = it(),
                    K = Ra(),
                    M = Object(k.a)(K, 1)[0],
                    B = Na(),
                    L = Object(k.a)(B, 1)[0],
                    F = Ru(),
                    W = F.independentField,
                    D = F.typedValue,
                    q = F.recipient,
                    G = Bu(),
                    J = G.v2Trade,
                    z = G.currencyBalances,
                    P = G.parsedAmount,
                    V = G.currencies,
                    Y = G.inputError,
                    Z = xO(V[vu.INPUT], V[vu.OUTPUT], D),
                    H = Z.wrapType,
                    Q = Z.execute,
                    X = Z.inputError,
                    $ = H !== mO.NOT_APPLICABLE,
                    ee = Ui(q).address,
                    ne = su(),
                    te = (e = {}, Object(m.a)(e, ru.v1, J), Object(m.a)(e, ru.v2, J), e),
                    ae = $ ? void 0 : te[ne],
                    re = $ ? (n = {}, Object(m.a)(n, vu.INPUT, P), Object(m.a)(n, vu.OUTPUT, P), n) : (t = {}, Object(m.a)(t, vu.INPUT, W === vu.INPUT ? P : null === ae || void 0 === ae ? void 0 : ae.inputAmount), Object(m.a)(t, vu.OUTPUT, W === vu.OUTPUT ? P : null === ae || void 0 === ae ? void 0 : ae.outputAmount), t),
                    ie = function() {
                        var e = Object(l.c)(),
                            n = Object(i.useCallback)((function(n, t) {
                                e(Ou({
                                    field: n,
                                    currencyId: t instanceof f.k ? t.address : t === f.d ? "BNB" : ""
                                }))
                            }), [e]);
                        return {
                            onSwitchTokens: Object(i.useCallback)((function() {
                                e(ku())
                            }), [e]),
                            onCurrencySelection: n,
                            onUserInput: Object(i.useCallback)((function(n, t) {
                                e(ju({
                                    field: n,
                                    typedValue: t
                                }))
                            }), [e]),
                            onChangeRecipient: Object(i.useCallback)((function(n) {
                                e(Au({
                                    recipient: n
                                }))
                            }), [e])
                        }
                    }(),
                    oe = ie.onSwitchTokens,
                    ce = ie.onCurrencySelection,
                    ue = ie.onUserInput,
                    le = !Y,
                    se = W === vu.INPUT ? vu.OUTPUT : vu.INPUT,
                    de = Object(i.useCallback)((function(e) {
                        ue(vu.INPUT, e)
                    }), [ue]),
                    pe = Object(i.useCallback)((function(e) {
                        ue(vu.OUTPUT, e)
                    }), [ue]),
                    me = Object(i.useState)({
                        showConfirm: !1,
                        tradeToConfirm: void 0,
                        attemptingTxn: !1,
                        swapErrorMessage: void 0,
                        txHash: void 0
                    }),
                    fe = Object(k.a)(me, 2),
                    be = fe[0],
                    ve = be.showConfirm,
                    ye = be.tradeToConfirm,
                    ge = be.swapErrorMessage,
                    he = be.attemptingTxn,
                    Ee = be.txHash,
                    Oe = fe[1],
                    ke = (s = {}, Object(m.a)(s, W, D), Object(m.a)(s, se, $ ? null !== (a = null === (r = re[W]) || void 0 === r ? void 0 : r.toExact()) && void 0 !== a ? a : "" : null !== (c = null === (u = re[se]) || void 0 === u ? void 0 : u.toSignificant(6)) && void 0 !== c ? c : ""), s),
                    je = null === ae || void 0 === ae ? void 0 : ae.route,
                    xe = Boolean(V[vu.INPUT] && V[vu.OUTPUT] && (null === (b = re[W]) || void 0 === b ? void 0 : b.greaterThan(f.e.BigInt(0)))),
                    Ae = !je,
                    we = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            t = Object(i.useMemo)((function() {
                                return e ? Uu(e, n)[vu.INPUT] : void 0
                            }), [e, n]),
                            a = ig(e) === ru.v1,
                            r = og(e);
                        return lg(t, a ? r : _)
                    }(ae, L),
                    Te = Object(k.a)(we, 2),
                    Ue = Te[0],
                    Se = Te[1],
                    Ke = Object(i.useState)(!1),
                    Me = Object(k.a)(Ke, 2),
                    Le = Me[0],
                    Fe = Me[1];
                Object(i.useEffect)((function() {
                    Ue === cg.PENDING && Fe(!0)
                }), [Ue, Le]);
                var We = Tg(z[vu.INPUT]),
                    De = Boolean(We && (null === (v = re[vu.INPUT]) || void 0 === v ? void 0 : v.equalTo(We))),
                    qe = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                            t = arguments.length > 2 ? arguments[2] : void 0,
                            a = Ne(),
                            r = a.account,
                            o = a.chainId,
                            c = a.library,
                            u = kO(e, n, t),
                            l = yi(),
                            s = Ri(t),
                            m = s.address,
                            f = null === t ? r : m;
                        return Object(i.useMemo)((function() {
                            if (!e || !c || !r || !o) return {
                                state: pO.INVALID,
                                callback: null,
                                error: "Missing dependencies"
                            };
                            if (!f) return null !== t ? {
                                state: pO.INVALID,
                                callback: null,
                                error: "Invalid recipient"
                            } : {
                                state: pO.LOADING,
                                callback: null,
                                error: null
                            };
                            var n = ig(e);
                            return {
                                state: pO.VALID,
                                callback: function() {
                                    var a = Object(j.a)(O.a.mark((function a() {
                                        var i, o, c, s, m, b, v, y, g, h;
                                        return O.a.wrap((function(a) {
                                            for (;;) switch (a.prev = a.next) {
                                                case 0:
                                                    return a.next = 2, Promise.all(u.map((function(e) {
                                                        var n, t = e.parameters,
                                                            a = t.methodName,
                                                            r = t.args,
                                                            i = t.value,
                                                            o = e.contract,
                                                            c = !i || Ii(i) ? {} : {
                                                                value: i
                                                            };
                                                        return (n = o.estimateGas)[a].apply(n, Object(d.a)(r).concat([c])).then((function(n) {
                                                            return {
                                                                call: e,
                                                                gasEstimate: n
                                                            }
                                                        })).catch((function(n) {
                                                            var t;
                                                            return console.debug("Gas estimate failed, trying eth_call to extract error", e), (t = o.callStatic)[a].apply(t, Object(d.a)(r).concat([c])).then((function(t) {
                                                                return console.debug("Unexpected successful call after failed estimate gas", e, n, t), {
                                                                    call: e,
                                                                    error: new Error("Unexpected issue with estimating the gas. Please try again.")
                                                                }
                                                            })).catch((function(n) {
                                                                var t;
                                                                switch (console.debug("Call threw error", e, n), n.reason) {
                                                                    case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                                                                    case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                                                                        t = "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
                                                                        break;
                                                                    default:
                                                                        t = "The transaction cannot succeed due to error: ".concat(n.reason, ". This is probably an issue with one of the tokens you are swapping.")
                                                                }
                                                                return {
                                                                    call: e,
                                                                    error: new Error(t)
                                                                }
                                                            }))
                                                        }))
                                                    })));
                                                case 2:
                                                    if (i = a.sent, o = i.find((function(e, n, t) {
                                                            return "gasEstimate" in e && (n === t.length - 1 || "gasEstimate" in t[n + 1])
                                                        }))) {
                                                        a.next = 9;
                                                        break
                                                    }
                                                    if (!((c = i.filter((function(e) {
                                                            return "error" in e
                                                        }))).length > 0)) {
                                                        a.next = 8;
                                                        break
                                                    }
                                                    throw c[c.length - 1].error;
                                                case 8:
                                                    throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
                                                case 9:
                                                    return s = o.call, m = s.contract, b = s.parameters, v = b.methodName, y = b.args, g = b.value, h = o.gasEstimate, a.abrupt("return", m[v].apply(m, Object(d.a)(y).concat([Object(p.a)({
                                                        gasLimit: Bt(h)
                                                    }, g && !Ii(g) ? {
                                                        value: g,
                                                        from: r
                                                    } : {
                                                        from: r
                                                    })])).then((function(a) {
                                                        var i = e.inputAmount.currency.symbol,
                                                            o = e.outputAmount.currency.symbol,
                                                            c = e.inputAmount.toSignificant(8),
                                                            u = e.outputAmount.toSignificant(8),
                                                            s = "Swap ".concat(c, " ").concat(i, " for ").concat(u, " ").concat(o),
                                                            d = f === r ? s : "".concat(s, " to ").concat(t && Rt(t) ? Mt(t) : t),
                                                            p = n === ru.v2 ? d : "".concat(d, " on ").concat(n.toUpperCase());
                                                        return l(a, {
                                                            summary: p
                                                        }), a.hash
                                                    })).catch((function(e) {
                                                        throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, v, y, g), new Error("Swap failed: ".concat(e.message)))
                                                    })));
                                                case 11:
                                                case "end":
                                                    return a.stop()
                                            }
                                        }), a)
                                    })));
                                    return function() {
                                        return a.apply(this, arguments)
                                    }
                                }(),
                                error: null
                            }
                        }), [e, c, r, o, f, t, u, l])
                    }(ae, L, q),
                    Ge = qe.callback,
                    Je = qe.error,
                    ze = Tu(ae).priceImpactWithoutFee,
                    Pe = Object(i.useCallback)((function() {
                        ze && ! function(e) {
                            return e.lessThan(Ie) ? !!e.lessThan(Ce) || window.confirm("This swap has a price impact of at least ".concat(Ce.toFixed(0), "%. Please confirm that you would like to continue with this swap.")) : "confirm" === window.prompt("This swap has a price impact of at least ".concat(Ie.toFixed(0), '%. Please type the word "confirm" to continue with this swap.'))
                        }(ze) || Ge && (Oe({
                            attemptingTxn: !0,
                            tradeToConfirm: ye,
                            showConfirm: ve,
                            swapErrorMessage: void 0,
                            txHash: void 0
                        }), Ge().then((function(e) {
                            Oe({
                                attemptingTxn: !1,
                                tradeToConfirm: ye,
                                showConfirm: ve,
                                swapErrorMessage: void 0,
                                txHash: e
                            })
                        })).catch((function(e) {
                            Oe({
                                attemptingTxn: !1,
                                tradeToConfirm: ye,
                                showConfirm: ve,
                                swapErrorMessage: e.message,
                                txHash: void 0
                            })
                        })))
                    }), [ye, R, ze, q, ee, ve, Ge, ae]),
                    Ve = Object(i.useState)(!1),
                    Ye = Object(k.a)(Ve, 2),
                    Ze = Ye[0],
                    He = Ye[1],
                    Qe = Su(ze),
                    Xe = !Y && (Ue === cg.NOT_APPROVED || Ue === cg.PENDING || Le && Ue === cg.APPROVED) && !(Qe > 3 && !M),
                    _e = Object(i.useCallback)((function() {
                        Oe({
                            showConfirm: !1,
                            tradeToConfirm: ye,
                            attemptingTxn: he,
                            swapErrorMessage: ge,
                            txHash: Ee
                        }), Ee && ue(vu.INPUT, "")
                    }), [he, ue, ge, ye, Ee]),
                    $e = Object(i.useCallback)((function() {
                        Oe({
                            tradeToConfirm: ae,
                            swapErrorMessage: ge,
                            txHash: Ee,
                            attemptingTxn: he,
                            showConfirm: ve
                        })
                    }), [he, ve, ge, ae, Ee]),
                    en = Object(i.useCallback)((function(e) {
                        Fe(!1), ce(vu.INPUT, e)
                    }), [ce]),
                    nn = Object(i.useCallback)((function() {
                        We && ue(vu.INPUT, We.toExact())
                    }), [We, ue]),
                    tn = Object(i.useCallback)((function(e) {
                        return ce(vu.OUTPUT, e)
                    }), [ce]);
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(oO, {
                    isOpen: U.length > 0 && !I,
                    tokens: U,
                    onConfirm: S
                }), o.a.createElement(Kg, null, o.a.createElement(wg, {
                    active: "swap"
                }), o.a.createElement(Zp, {
                    id: "swap-page"
                }, o.a.createElement(DE, {
                    isOpen: ve,
                    trade: ae,
                    originalTrade: ye,
                    onAcceptChanges: $e,
                    attemptingTxn: he,
                    txHash: Ee,
                    recipient: q,
                    allowedSlippage: L,
                    onConfirm: Pe,
                    swapErrorMessage: ge,
                    onDismiss: _e
                }), o.a.createElement(mn, {
                    gap: Re.isMobile ? "sm" : "md"
                }, o.a.createElement(Gd, {
                    label: W === vu.OUTPUT && !$ && ae ? "From (estimated)" : "From",
                    value: ke[vu.INPUT],
                    showMaxButton: !De,
                    currency: V[vu.INPUT],
                    onUserInput: de,
                    onMax: nn,
                    onCurrencySelect: en,
                    otherCurrency: V[vu.OUTPUT],
                    id: "swap-currency-input"
                }), o.a.createElement(Fn, {
                    justify: "center",
                    style: {
                        flexWrap: "revert"
                    },
                    id: "exchangeIcon"
                }, o.a.createElement(im, {
                    size: Re.isMobile ? 40 : 48,
                    onClick: function() {
                        Fe(!1), oe()
                    }
                }, o.a.createElement("img", {
                    src: wO.a,
                    alt: "ex-change icon"
                }))), o.a.createElement(Gd, {
                    value: ke[vu.OUTPUT],
                    onUserInput: pe,
                    label: W === vu.INPUT && !$ && ae ? "To (estimated)" : "To",
                    showMaxButton: !1,
                    currency: V[vu.OUTPUT],
                    onCurrencySelect: tn,
                    otherCurrency: V[vu.INPUT],
                    id: "swap-currency-output"
                })), o.a.createElement(Fn, {
                    justify: "center",
                    style: {
                        flexWrap: "revert"
                    },
                    id: "exchangeIcon"
                }, $ ? null : o.a.createElement(mo, {
                    padding: "1.25rem 0 0 0",
                    borderRadius: "20px"
                }, o.a.createElement(mn, {
                    gap: "4px"
                }, Boolean(ae) && o.a.createElement(Bn, {
                    align: "center"
                }, o.a.createElement(_E, {
                    price: null === ae || void 0 === ae ? void 0 : ae.executionPrice,
                    showInverted: Ze,
                    setShowInverted: He
                }))))), o.a.createElement(Qp, null, R ? $ ? o.a.createElement(ai, {
                    disabled: Boolean(X),
                    onClick: Q
                }, null !== X && void 0 !== X ? X : H === mO.WRAP ? "Wrap" : H === mO.UNWRAP ? "Unwrap" : null) : Ae && xe ? o.a.createElement(bo, {
                    style: {
                        textAlign: "center"
                    }
                }, o.a.createElement(xr, {
                    mb: "4px",
                    fontSize: Re.isMobile ? "16px" : "20px"
                }, h("noliquidity"))) : Xe ? o.a.createElement(Bn, null, o.a.createElement(si, {
                    onClick: Se,
                    disabled: Ue !== cg.NOT_APPROVED || Le,
                    width: "48%",
                    altDisabledStyle: Ue === cg.PENDING,
                    confirmed: Ue === cg.APPROVED,
                    className: "ButtonConfirmed"
                }, Ue === cg.PENDING ? o.a.createElement(Fn, {
                    gap: "6px",
                    justify: "center"
                }, "Approving ", o.a.createElement(Wl, {
                    stroke: "white"
                })) : Le && Ue === cg.APPROVED ? "Approved" : "Approve " + (null === (y = V[vu.INPUT]) || void 0 === y ? void 0 : y.symbol)), o.a.createElement(di, {
                    onClick: function() {
                        M ? Pe() : Oe({
                            tradeToConfirm: ae,
                            attemptingTxn: !1,
                            swapErrorMessage: void 0,
                            showConfirm: !0,
                            txHash: void 0
                        })
                    },
                    width: "48%",
                    id: "swap-button",
                    disabled: !le || Ue !== cg.APPROVED || Qe > 3 && !M,
                    error: le && Qe > 2
                }, o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 16,
                    fontWeight: 500
                }, Qe > 3 && !M ? h("priceImpact") : "Swap".concat(Qe > 2 ? " Anyway" : "")))) : o.a.createElement(di, {
                    onClick: function() {
                        M ? Pe() : Oe({
                            tradeToConfirm: ae,
                            attemptingTxn: !1,
                            swapErrorMessage: void 0,
                            showConfirm: !0,
                            txHash: void 0
                        })
                    },
                    id: "swap-button",
                    disabled: !le || Qe > 3 && !M || !!Je,
                    error: le && Qe > 2 && !Je
                }, o.a.createElement(La.b, {
                    fontSize: Re.isMobile ? 14 : 20,
                    fontWeight: 500
                }, Y || h(Qe > 3 && !M ? "priceImpact" : Qe > 2 ? "swapAnyway" : "confirmSwap"))) : o.a.createElement(ri, {
                    onClick: N,
                    className: "ButtonLight"
                }, h("connectWallet")), Xe && o.a.createElement(fn, {
                    style: {
                        marginTop: "1rem"
                    }
                }, o.a.createElement(hO, {
                    steps: [Ue === cg.APPROVED]
                })), M && ge ? o.a.createElement(am, {
                    error: ge
                }) : null)), o.a.createElement(ZE, {
                    trade: ae,
                    id: "AdvancedSwapDetailsDropdown"
                })))
            }

            function IO(e) {
                var n = e.location;
                return o.a.createElement(Ge.a, {
                    to: Object(p.a)(Object(p.a)({}, n), {}, {
                        pathname: "/swap"
                    })
                })
            }

            function TO(e) {
                var n = e.location.search,
                    t = e.match.params.outputCurrency;
                return o.a.createElement(Ge.a, {
                    to: Object(p.a)(Object(p.a)({}, e.location), {}, {
                        pathname: "/swap",
                        search: n && n.length > 1 ? "".concat(n, "&outputCurrency=").concat(t) : "?outputCurrency=".concat(t)
                    })
                })
            }
            var UO = t(230),
                SO = t.n(UO),
                RO = t(227),
                NO = t.n(RO),
                KO = t(228),
                MO = t.n(KO),
                BO = t(231),
                LO = t.n(BO),
                FO = t(224),
                WO = t.n(FO);

            function DO() {
                var e = Object(qe.a)(["\n  flex:1;\n"]);
                return DO = function() {
                    return e
                }, e
            }

            function qO() {
                var e = Object(qe.a)(["\n  flex:1;\n"]);
                return qO = function() {
                    return e
                }, e
            }

            function GO() {
                var e = Object(qe.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  display: flex;\n  z-index: 2;\n  img {\n    width: 24px;\n  }\n  padding: 8px 0px 35px 0px;\n  text-align: center;\n  a {\n    text-decoration: none;\n  }\n"]);
                return GO = function() {
                    return e
                }, e
            }
            var JO = Je.default.footer(GO()),
                zO = Je.default.div(qO()),
                PO = Je.default.a(DO());

            function VO() {
                var e = Object(Be.b)().t,
                    n = localStorage.getItem("i18nextLng") || "en";
                return o.a.createElement(JO, {
                    className: "Warper"
                }, o.a.createElement(PO, {
                    href: "https://vkcapital.com/#/?lang=".concat(n)
                }, o.a.createElement("img", {
                    src: SO.a
                }), o.a.createElement(La.b, {
                    fontWeight: "blod",
                    fontSize: 12,
                    color: "#8890A1FF"
                }, e("tab1"))), o.a.createElement(zO, null, o.a.createElement("img", {
                    src: NO.a
                }), o.a.createElement(La.b, {
                    fontWeight: "blod",
                    fontSize: 12,
                    color: "#F3BC00"
                }, e("tab2"))), o.a.createElement(PO, {
                    href: "https://vkcapital.com/#/liquidity?lang=".concat(n)
                }, o.a.createElement("img", {
                    src: MO.a
                }), o.a.createElement(La.b, {
                    fontWeight: "blod",
                    fontSize: 12,
                    color: "#8890A1FF"
                }, e("tab3"))), o.a.createElement(PO, {
                    href: "https://vkcapital.com/#/boardroom?lang=".concat(n)
                }, o.a.createElement("img", {
                    src: WO.a
                }), o.a.createElement(La.b, {
                    fontWeight: "blod",
                    fontSize: 12,
                    color: "#8890A1FF"
                }, e("tab5"))), o.a.createElement(PO, {
                    href: "https://bsc-info.mdex.com"
                }, o.a.createElement("img", {
                    src: LO.a
                }), o.a.createElement(La.b, {
                    fontWeight: "blod",
                    fontSize: 12,
                    color: "#8890A1FF"
                }, e("tab4"))))
            }

            function YO() {
                var e = Object(qe.a)(["\n  margin-top: 5rem;\n"]);
                return YO = function() {
                    return e
                }, e
            }

            function ZO() {
                var e = Object(qe.a)(["\n    top: -140px;\n  "]);
                return ZO = function() {
                    return e
                }, e
            }

            function HO() {
                var e = Object(qe.a)(["\n    top: -160px;\n  "]);
                return HO = function() {
                    return e
                }, e
            }

            function QO() {
                var e = Object(qe.a)(["\n    padding: 0 16px;\n    top: -160px;\n  "]);
                return QO = function() {
                    return e
                }, e
            }

            function XO() {
                var e = Object(qe.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  ", ";\n  position: relative;\n  ", "\n  ", "\n"]);
                return XO = function() {
                    return e
                }, e
            }

            function _O() {
                var e = Object(qe.a)(["\n  ", "\n  width: 100%;\n  justify-content: space-between;\n"]);
                return _O = function() {
                    return e
                }, e
            }

            function $O() {
                var e = Object(qe.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n  position: relative;\n  height: auto;\n  min-height: 100%;\n"]);
                return $O = function() {
                    return e
                }, e
            }
            var ek = Je.default.div($O()),
                nk = Je.default.div(_O(), (function(e) {
                    return e.theme.flexRowNoWrap
                })),
                tk = Je.default.div(XO(), (function(e) {
                    return e.theme.mediaWidth.upToSmall(QO())
                }), !Re.isMobile && Object(Je.css)(HO()), Re.isMobile && Object(Je.css)(ZO())),
                ak = Je.default.div(YO());

            function rk() {
                var e = at(Qn.ADDRESS_CLAIM),
                    n = rt(Qn.ADDRESS_CLAIM);
                return o.a.createElement(no, {
                    isOpen: e,
                    onDismiss: n
                })
            }

            function ik() {
                return o.a.createElement(i.Suspense, {
                    fallback: null
                }, o.a.createElement(Ge.b, {
                    component: Oy
                }), o.a.createElement(ek, null, o.a.createElement(nk, null, o.a.createElement(Kv, null)), o.a.createElement(tk, {
                    className: "BodyWrapper"
                }, o.a.createElement(by, null), o.a.createElement(Ph, null), o.a.createElement(rk, null), o.a.createElement(Ey, null, o.a.createElement(Ge.d, null, o.a.createElement(Ge.b, {
                    exact: !0,
                    strict: !0,
                    path: "/swap",
                    component: CO
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    strict: !0,
                    path: "/swap/:outputCurrency",
                    component: TO
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    strict: !0,
                    path: "/send",
                    component: IO
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    strict: !0,
                    path: "/find",
                    component: OE
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    strict: !0,
                    path: "/pool",
                    component: sh
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    strict: !0,
                    path: "/create",
                    component: bE
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    path: "/add",
                    component: Oh
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    path: "/add/:currencyIdA",
                    component: yE
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    path: "/add/:currencyIdA/:currencyIdB",
                    component: gE
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    path: "/create",
                    component: Oh
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    path: "/create/:currencyIdA",
                    component: yE
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    path: "/create/:currencyIdA/:currencyIdB",
                    component: gE
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    strict: !0,
                    path: "/remove/:tokens",
                    component: ME
                }), o.a.createElement(Ge.b, {
                    exact: !0,
                    strict: !0,
                    path: "/remove/:currencyIdA/:currencyIdB",
                    component: NE
                }), o.a.createElement(Ge.b, {
                    component: IO
                }))), o.a.createElement(ak, null)), Re.isMobile && o.a.createElement(VO, null), !Re.isMobile && o.a.createElement(fE, null)))
            }
            var ok = t(244),
                ck = Object(Xn.c)({
                    blockNumber: {},
                    popupList: [],
                    openModal: null
                }, (function(e) {
                    return e.addCase(_n, (function(e, n) {
                        var t = n.payload,
                            a = t.chainId,
                            r = t.blockNumber;
                        "number" !== typeof e.blockNumber[a] ? e.blockNumber[a] = r : e.blockNumber[a] = Math.max(r, e.blockNumber[a])
                    })).addCase($n, (function(e, n) {
                        e.openModal = n.payload
                    })).addCase(et, (function(e, n) {
                        var t = n.payload,
                            a = t.content,
                            r = t.key,
                            i = t.removeAfterMs,
                            o = void 0 === i ? 15e3 : i;
                        e.popupList = (r ? e.popupList.filter((function(e) {
                            return e.key !== r
                        })) : e.popupList).concat([{
                            key: r || Object(Xn.e)(),
                            show: !0,
                            content: a,
                            removeAfterMs: o
                        }])
                    })).addCase(nt, (function(e, n) {
                        var t = n.payload.key;
                        e.popupList.forEach((function(e) {
                            e.key === t && (e.show = !1)
                        }))
                    }))
                })),
                uk = Object(Xn.b)("global/updateVersion"),
                lk = function() {
                    return (new Date).getTime()
                };

            function sk(e, n) {
                return "".concat(e, ";").concat(n)
            }
            var dk, pk = {
                    userDarkMode: null,
                    matchesDarkMode: !1,
                    userExpertMode: !1,
                    userSlippageTolerance: 50,
                    userDeadline: 1200,
                    tokens: {},
                    pairs: {},
                    timestamp: lk(),
                    URLWarningVisible: !0
                },
                mk = Object(Xn.c)(pk, (function(e) {
                    return e.addCase(uk, (function(e) {
                        "number" !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = 50), "number" !== typeof e.userDeadline && (e.userDeadline = 1200), e.lastUpdateVersionTimestamp = lk()
                    })).addCase(Ea, (function(e, n) {
                        e.userDarkMode = n.payload.userDarkMode, e.timestamp = lk()
                    })).addCase(ha, (function(e, n) {
                        e.matchesDarkMode = n.payload.matchesDarkMode, e.timestamp = lk()
                    })).addCase(Oa, (function(e, n) {
                        e.userExpertMode = n.payload.userExpertMode, e.timestamp = lk()
                    })).addCase(ka, (function(e, n) {
                        e.userSlippageTolerance = n.payload.userSlippageTolerance, e.timestamp = lk()
                    })).addCase(ja, (function(e, n) {
                        e.userDeadline = n.payload.userDeadline, e.timestamp = lk()
                    })).addCase(xa, (function(e, n) {
                        var t = n.payload.serializedToken;
                        e.tokens[t.chainId] = e.tokens[t.chainId] || {}, e.tokens[t.chainId][t.address] = t, e.timestamp = lk()
                    })).addCase(Aa, (function(e, n) {
                        var t = n.payload,
                            a = t.address,
                            r = t.chainId;
                        e.tokens[r] = e.tokens[r] || {}, delete e.tokens[r][a], e.timestamp = lk()
                    })).addCase(wa, (function(e, n) {
                        var t = n.payload.serializedPair;
                        if (t.token0.chainId === t.token1.chainId && t.token0.address !== t.token1.address) {
                            var a = t.token0.chainId;
                            e.pairs[a] = e.pairs[a] || {}, e.pairs[a][sk(t.token0.address, t.token1.address)] = t
                        }
                        e.timestamp = lk()
                    })).addCase(Ca, (function(e, n) {
                        var t = n.payload,
                            a = t.chainId,
                            r = t.tokenAAddress,
                            i = t.tokenBAddress;
                        e.pairs[a] && (delete e.pairs[a][sk(r, i)], delete e.pairs[a][sk(i, r)]), e.timestamp = lk()
                    })).addCase(Ia, (function(e) {
                        e.URLWarningVisible = !e.URLWarningVisible
                    }))
                })),
                fk = function() {
                    return (new Date).getTime()
                },
                bk = Object(Xn.c)({}, (function(e) {
                    return e.addCase(mi, (function(e, n) {
                        var t, a, r = n.payload,
                            i = r.chainId,
                            o = r.from,
                            c = r.hash,
                            u = r.approval,
                            l = r.summary,
                            s = r.claim;
                        if (null === (t = e[i]) || void 0 === t ? void 0 : t[c]) throw Error("Attempted to add existing transaction.");
                        var d = null !== (a = e[i]) && void 0 !== a ? a : {};
                        d[c] = {
                            hash: c,
                            approval: u,
                            summary: l,
                            claim: s,
                            from: o,
                            addedTime: fk()
                        }, e[i] = d
                    })).addCase(fi, (function(e, n) {
                        var t = n.payload.chainId;
                        e[t] && (e[t] = {})
                    })).addCase(vi, (function(e, n) {
                        var t, a = n.payload,
                            r = a.chainId,
                            i = a.hash,
                            o = a.blockNumber,
                            c = null === (t = e[r]) || void 0 === t ? void 0 : t[i];
                        c && (c.lastCheckedBlockNumber ? c.lastCheckedBlockNumber = Math.max(o, c.lastCheckedBlockNumber) : c.lastCheckedBlockNumber = o)
                    })).addCase(bi, (function(e, n) {
                        var t, a = n.payload,
                            r = a.hash,
                            i = a.chainId,
                            o = a.receipt,
                            c = null === (t = e[i]) || void 0 === t ? void 0 : t[r];
                        c && (c.receipt = o, c.confirmedTime = fk())
                    }))
                })),
                vk = (dk = {
                    independentField: vu.INPUT,
                    typedValue: ""
                }, Object(m.a)(dk, vu.INPUT, {
                    currencyId: ""
                }), Object(m.a)(dk, vu.OUTPUT, {
                    currencyId: ""
                }), Object(m.a)(dk, "recipient", null), dk),
                yk = Object(Xn.c)(vk, (function(e) {
                    return e.addCase(xu, (function(e, n) {
                        var t, a = n.payload,
                            r = a.typedValue,
                            i = a.recipient,
                            o = a.field,
                            c = a.inputCurrencyId,
                            u = a.outputCurrencyId;
                        return t = {}, Object(m.a)(t, vu.INPUT, {
                            currencyId: c
                        }), Object(m.a)(t, vu.OUTPUT, {
                            currencyId: u
                        }), Object(m.a)(t, "independentField", o), Object(m.a)(t, "typedValue", r), Object(m.a)(t, "recipient", i), t
                    })).addCase(Ou, (function(e, n) {
                        var t, a = n.payload,
                            r = a.currencyId,
                            i = a.field,
                            o = i === vu.INPUT ? vu.OUTPUT : vu.INPUT;
                        return r === e[o].currencyId ? Object(p.a)(Object(p.a)({}, e), {}, (t = {
                            independentField: e.independentField === vu.INPUT ? vu.OUTPUT : vu.INPUT
                        }, Object(m.a)(t, i, {
                            currencyId: r
                        }), Object(m.a)(t, o, {
                            currencyId: e[i].currencyId
                        }), t)) : Object(p.a)(Object(p.a)({}, e), {}, Object(m.a)({}, i, {
                            currencyId: r
                        }))
                    })).addCase(ku, (function(e) {
                        var n;
                        return Object(p.a)(Object(p.a)({}, e), {}, (n = {
                            independentField: e.independentField === vu.INPUT ? vu.OUTPUT : vu.INPUT
                        }, Object(m.a)(n, vu.INPUT, {
                            currencyId: e[vu.OUTPUT].currencyId
                        }), Object(m.a)(n, vu.OUTPUT, {
                            currencyId: e[vu.INPUT].currencyId
                        }), n))
                    })).addCase(ju, (function(e, n) {
                        var t = n.payload,
                            a = t.field,
                            r = t.typedValue;
                        return Object(p.a)(Object(p.a)({}, e), {}, {
                            independentField: a,
                            typedValue: r
                        })
                    })).addCase(Au, (function(e, n) {
                        var t = n.payload.recipient;
                        e.recipient = t
                    }))
                })),
                gk = {
                    independentField: ug.CURRENCY_A,
                    typedValue: "",
                    otherTypedValue: ""
                },
                hk = Object(Xn.c)(gk, (function(e) {
                    return e.addCase(pg, (function() {
                        return gk
                    })).addCase(dg, (function(e, n) {
                        var t = n.payload,
                            a = t.field,
                            r = t.typedValue;
                        return t.noLiquidity ? a === e.independentField ? Object(p.a)(Object(p.a)({}, e), {}, {
                            independentField: a,
                            typedValue: r
                        }) : Object(p.a)(Object(p.a)({}, e), {}, {
                            independentField: a,
                            typedValue: r,
                            otherTypedValue: e.typedValue
                        }) : Object(p.a)(Object(p.a)({}, e), {}, {
                            independentField: a,
                            typedValue: r,
                            otherTypedValue: ""
                        })
                    }))
                })),
                Ek = (new Date).getTime(),
                Ok = "https://bsc.mdex.com/tokenlist.json?t=".concat(Ek),
                kk = [Ok],
                jk = {
                    error: null,
                    current: null,
                    loadingRequestId: null,
                    pendingUpdate: null
                },
                xk = {
                    lastInitializedDefaultListOfLists: kk,
                    byUrl: Object(p.a)({}, kk.reduce((function(e, n) {
                        return e[n] = jk, e
                    }), {})),
                    selectedListUrl: Ok
                },
                Ak = Object(Xn.c)(xk, (function(e) {
                    return e.addCase(us.pending, (function(e, n) {
                        var t = n.payload,
                            a = t.requestId,
                            r = t.url;
                        e.byUrl[r] = Object(p.a)(Object(p.a)({
                            current: null,
                            pendingUpdate: null
                        }, e.byUrl[r]), {}, {
                            loadingRequestId: a,
                            error: null
                        })
                    })).addCase(us.fulfilled, (function(e, n) {
                        var t, a, r = n.payload,
                            i = r.requestId,
                            o = r.tokenList,
                            c = r.url,
                            u = null === (t = e.byUrl[c]) || void 0 === t ? void 0 : t.current,
                            l = null === (a = e.byUrl[c]) || void 0 === a ? void 0 : a.loadingRequestId;
                        if (u) {
                            if (Object(Mv.c)(u.version, o.version) === Mv.a.NONE) return;
                            null !== l && l !== i || (e.byUrl[c] = Object(p.a)(Object(p.a)({}, e.byUrl[c]), {}, {
                                loadingRequestId: null,
                                error: null,
                                current: u,
                                pendingUpdate: o
                            }))
                        } else e.byUrl[c] = Object(p.a)(Object(p.a)({}, e.byUrl[c]), {}, {
                            loadingRequestId: null,
                            error: null,
                            current: o,
                            pendingUpdate: null
                        })
                    })).addCase(us.rejected, (function(e, n) {
                        var t, a = n.payload,
                            r = a.url,
                            i = a.requestId,
                            o = a.errorMessage;
                        (null === (t = e.byUrl[r]) || void 0 === t ? void 0 : t.loadingRequestId) === i && (e.byUrl[r] = Object(p.a)(Object(p.a)({}, e.byUrl[r]), {}, {
                            loadingRequestId: null,
                            error: o,
                            current: null,
                            pendingUpdate: null
                        }))
                    })).addCase(fs, (function(e, n) {
                        var t = n.payload;
                        e.selectedListUrl = t, e.byUrl[t] || (e.byUrl[t] = jk)
                    })).addCase(ps, (function(e, n) {
                        var t = n.payload;
                        e.byUrl[t] || (e.byUrl[t] = jk)
                    })).addCase(ms, (function(e, n) {
                        var t = n.payload;
                        e.byUrl[t] && delete e.byUrl[t], e.selectedListUrl === t && (e.selectedListUrl = t === Ok ? Object.keys(e.byUrl)[0] : Ok)
                    })).addCase(ds, (function(e, n) {
                        var t, a = n.payload;
                        if (!(null === (t = e.byUrl[a]) || void 0 === t ? void 0 : t.pendingUpdate)) throw new Error("accept list update called without pending update");
                        e.byUrl[a] = Object(p.a)(Object(p.a)({}, e.byUrl[a]), {}, {
                            pendingUpdate: null,
                            current: e.byUrl[a].pendingUpdate
                        })
                    })).addCase(uk, (function(e) {
                        if (e.lastInitializedDefaultListOfLists) {
                            if (e.lastInitializedDefaultListOfLists) {
                                var n = e.lastInitializedDefaultListOfLists.reduce((function(e, n) {
                                        return e.add(n)
                                    }), new Set),
                                    t = kk.reduce((function(e, n) {
                                        return e.add(n)
                                    }), new Set);
                                kk.forEach((function(t) {
                                    n.has(t) || (e.byUrl[t] = jk)
                                })), e.lastInitializedDefaultListOfLists.forEach((function(n) {
                                    t.has(n) || delete e.byUrl[n]
                                }))
                            }
                        } else e.byUrl = xk.byUrl, e.selectedListUrl = Ok;
                        e.lastInitializedDefaultListOfLists = kk, e.selectedListUrl || (e.selectedListUrl = Ok, e.byUrl[Ok] || (e.byUrl[Ok] = jk))
                    }))
                })),
                wk = {
                    independentField: AE.LIQUIDITY_PERCENT,
                    typedValue: "0"
                },
                Ck = Object(Xn.c)(wk, (function(e) {
                    return e.addCase(TE, (function(e, n) {
                        var t = n.payload,
                            a = t.field,
                            r = t.typedValue;
                        return Object(p.a)(Object(p.a)({}, e), {}, {
                            independentField: a,
                            typedValue: r
                        })
                    }))
                })),
                Ik = Object(Xn.c)({
                    callResults: {}
                }, (function(e) {
                    return e.addCase(dt, (function(e, n) {
                        var t, a = n.payload,
                            r = a.calls,
                            i = a.chainId,
                            o = a.options,
                            c = (o = void 0 === o ? {} : o).blocksPerFetch,
                            u = void 0 === c ? 1 : c,
                            l = e.callListeners ? e.callListeners : e.callListeners = {};
                        l[i] = null !== (t = l[i]) && void 0 !== t ? t : {}, r.forEach((function(e) {
                            var n, t, a = lt(e);
                            l[i][a] = null !== (n = l[i][a]) && void 0 !== n ? n : {}, l[i][a][u] = (null !== (t = l[i][a][u]) && void 0 !== t ? t : 0) + 1
                        }))
                    })).addCase(pt, (function(e, n) {
                        var t = n.payload,
                            a = t.chainId,
                            r = t.calls,
                            i = t.options,
                            o = (i = void 0 === i ? {} : i).blocksPerFetch,
                            c = void 0 === o ? 1 : o,
                            u = e.callListeners ? e.callListeners : e.callListeners = {};
                        u[a] && r.forEach((function(e) {
                            var n = lt(e);
                            u[a][n] && u[a][n][c] && (1 === u[a][n][c] ? delete u[a][n][c] : u[a][n][c]--)
                        }))
                    })).addCase(mt, (function(e, n) {
                        var t, a = n.payload,
                            r = a.chainId,
                            i = a.fetchingBlockNumber,
                            o = a.calls;
                        e.callResults[r] = null !== (t = e.callResults[r]) && void 0 !== t ? t : {}, o.forEach((function(n) {
                            var t = lt(n),
                                a = e.callResults[r][t];
                            if (a) {
                                var o;
                                if ((null !== (o = a.fetchingBlockNumber) && void 0 !== o ? o : 0) >= i) return;
                                e.callResults[r][t].fetchingBlockNumber = i
                            } else e.callResults[r][t] = {
                                fetchingBlockNumber: i
                            }
                        }))
                    })).addCase(ft, (function(e, n) {
                        var t, a = n.payload,
                            r = a.fetchingBlockNumber,
                            i = a.chainId,
                            o = a.calls;
                        e.callResults[i] = null !== (t = e.callResults[i]) && void 0 !== t ? t : {}, o.forEach((function(n) {
                            var t = lt(n),
                                a = e.callResults[i][t];
                            a && a.fetchingBlockNumber === r && (delete a.fetchingBlockNumber, a.data = null, a.blockNumber = r)
                        }))
                    })).addCase(bt, (function(e, n) {
                        var t, a = n.payload,
                            r = a.chainId,
                            i = a.results,
                            o = a.blockNumber;
                        e.callResults[r] = null !== (t = e.callResults[r]) && void 0 !== t ? t : {}, Object.keys(i).forEach((function(n) {
                            var t, a = e.callResults[r][n];
                            (null !== (t = null === a || void 0 === a ? void 0 : a.blockNumber) && void 0 !== t ? t : 0) > o || (e.callResults[r][n] = {
                                data: i[n],
                                blockNumber: o
                            })
                        }))
                    }))
                })),
                Tk = ["transactions", "user"],
                Uk = Object(Xn.a)({
                    reducer: {
                        application: ck,
                        user: mk,
                        transactions: bk,
                        swap: yk,
                        mint: hk,
                        burn: Ck,
                        multicall: Ik,
                        lists: Ak
                    },
                    middleware: [].concat(Object(d.a)(Object(Xn.d)({
                        thunk: !1
                    })), [Object(ok.save)({
                        states: Tk
                    })]),
                    preloadedState: Object(ok.load)({
                        states: Tk
                    })
                });
            Uk.dispatch(uk());
            var Sk = Uk,
                Rk = "visibilityState" in document;

            function Nk() {
                return !Rk || "hidden" !== document.visibilityState
            }

            function Kk() {
                var e = Object(i.useState)(Nk()),
                    n = Object(k.a)(e, 2),
                    t = n[0],
                    a = n[1],
                    r = Object(i.useCallback)((function() {
                        a(Nk())
                    }), [a]);
                return Object(i.useEffect)((function() {
                    if (Rk) return document.addEventListener("visibilitychange", r),
                        function() {
                            document.removeEventListener("visibilitychange", r)
                        }
                }), [r]), t
            }

            function Mk() {
                var e = Ne(),
                    n = e.library,
                    t = e.chainId,
                    a = Object(l.c)(),
                    r = Kk(),
                    o = Object(i.useState)({
                        chainId: t,
                        blockNumber: null
                    }),
                    c = Object(k.a)(o, 2),
                    u = c[0],
                    s = c[1],
                    d = Object(i.useCallback)((function(e) {
                        s((function(n) {
                            return t === n.chainId ? "number" !== typeof n.blockNumber ? {
                                chainId: t,
                                blockNumber: e
                            } : {
                                chainId: t,
                                blockNumber: Math.max(e, n.blockNumber)
                            } : n
                        }))
                    }), [t, s]);
                Object(i.useEffect)((function() {
                    if (n && t && r) return s({
                            chainId: t,
                            blockNumber: null
                        }), n.getBlockNumber().then(d).catch((function(e) {
                            return console.error("Failed to get block number for chainId: ".concat(t), e)
                        })), n.on("block", d),
                        function() {
                            n.removeListener("block", d)
                        }
                }), [a, t, n, d, r]);
                var p = Ti(u, 100);
                return Object(i.useEffect)((function() {
                    p.chainId && p.blockNumber && r && a(_n({
                        chainId: p.chainId,
                        blockNumber: p.blockNumber
                    }))
                }), [r, a, p.blockNumber, p.chainId]), null
            }

            function Bk() {
                var e = Ne().library,
                    n = Object(l.c)(),
                    t = Object(l.d)((function(e) {
                        return e.lists.byUrl
                    })),
                    a = Object(l.d)((function(e) {
                        return e.lists.selectedListUrl
                    })),
                    r = Kk(),
                    o = As();
                return Oo(Object(i.useCallback)((function() {
                    r && Object.keys(t).forEach((function(e) {
                        return o(e).catch((function(e) {
                            return console.debug("interval list fetching error", e)
                        }))
                    }))
                }), [o, r, t]), e ? 6e5 : null), Object(i.useEffect)((function() {
                    Object.keys(t).forEach((function(e) {
                        var n = t[e];
                        n.current || n.loadingRequestId || n.error || o(e).catch((function(e) {
                            return console.debug("list added fetching error", e)
                        }))
                    }))
                }), [n, o, e, t]), Object(i.useEffect)((function() {
                    Object.keys(t).forEach((function(e) {
                        var r = t[e];
                        if (r.current && r.pendingUpdate) {
                            var i = Object(Mv.c)(r.current.version, r.pendingUpdate.version);
                            switch (i) {
                                case Mv.a.NONE:
                                    throw new Error("unexpected no version bump");
                                case Mv.a.PATCH:
                                case Mv.a.MINOR:
                                    i >= Object(Mv.d)(r.current.tokens, r.pendingUpdate.tokens) ? (n(ds(e)), e === a && n(et({
                                        key: e,
                                        content: {
                                            listUpdate: {
                                                listUrl: e,
                                                oldList: r.current,
                                                newList: r.pendingUpdate,
                                                auto: !0
                                            }
                                        }
                                    }))) : console.error("List at url ".concat(e, " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"));
                                    break;
                                case Mv.a.MAJOR:
                                    e === a && n(et({
                                        key: e,
                                        content: {
                                            listUpdate: {
                                                listUrl: e,
                                                auto: !1,
                                                oldList: r.current,
                                                newList: r.pendingUpdate
                                            }
                                        },
                                        removeAfterMs: null
                                    }))
                            }
                        }
                    }))
                }), [n, t, a]), null
            }

            function Lk(e, n) {
                return t = e + Math.round(Math.random() * Math.max(0, n - e)), new Promise((function(e) {
                    return setTimeout(e, t)
                }));
                var t
            }
            var Fk = function(e) {
                    Object(w.a)(t, e);
                    var n = Object(C.a)(t);

                    function t() {
                        return Object(x.a)(this, t), n.call(this, "Cancelled")
                    }
                    return t
                }(Object(R.a)(Error)),
                Wk = function(e) {
                    Object(w.a)(t, e);
                    var n = Object(C.a)(t);

                    function t() {
                        return Object(x.a)(this, t), n.apply(this, arguments)
                    }
                    return t
                }(Object(R.a)(Error));

            function Dk() {
                return (Dk = Object(j.a)(O.a.mark((function e(n, t, a) {
                    var r, i, o, c;
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 4, n.aggregate(t.map((function(e) {
                                    return [e.address, e.callData]
                                })));
                            case 4:
                                o = e.sent, c = Object(k.a)(o, 2), r = c[0], i = c[1], e.next = 14;
                                break;
                            case 10:
                                throw e.prev = 10, e.t0 = e.catch(0), console.debug("Failed to fetch chunk inside retry", e.t0), e.t0;
                            case 14:
                                if (!(r.toNumber() < a)) {
                                    e.next = 17;
                                    break
                                }
                                throw console.debug("Fetched results for old block number: ".concat(r.toString(), " vs. ").concat(a)), new Wk("Fetched for old block number");
                            case 17:
                                return e.abrupt("return", {
                                    results: i,
                                    blockNumber: r.toNumber()
                                });
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 10]
                    ])
                })))).apply(this, arguments)
            }

            function qk() {
                var e = Object(l.c)(),
                    n = Object(l.d)((function(e) {
                        return e.multicall
                    })),
                    t = Ti(n.callListeners, 100),
                    a = tt(),
                    r = Ne().chainId,
                    o = pa(),
                    c = Object(i.useRef)(),
                    u = Object(i.useMemo)((function() {
                        return function(e, n) {
                            if (!e || !n) return {};
                            var t = e[n];
                            return t ? Object.keys(t).reduce((function(e, n) {
                                var a = t[n];
                                return e[n] = Object.keys(a).filter((function(e) {
                                    var n = parseInt(e);
                                    return !(n <= 0) && a[n] > 0
                                })).reduce((function(e, n) {
                                    return Math.min(e, parseInt(n))
                                }), 1 / 0), e
                            }), {}) : {}
                        }(t, r)
                    }), [t, r]),
                    s = Object(i.useMemo)((function() {
                        return function(e, n, t, a) {
                            return t && a ? e[t] ? Object.keys(n).filter((function(r) {
                                var i = n[r],
                                    o = e[t][r];
                                if (!o) return !0;
                                var c = a - (i - 1);
                                return !(o.fetchingBlockNumber && o.fetchingBlockNumber >= c) && (!o.blockNumber || o.blockNumber < c)
                            })) : Object.keys(n) : []
                        }(n.callResults, u, r, a)
                    }), [r, n.callResults, u, a]),
                    p = Object(i.useMemo)((function() {
                        return JSON.stringify(s.sort())
                    }), [s]);
                return Object(i.useEffect)((function() {
                    var n;
                    if (a && r && o) {
                        var t = JSON.parse(p);
                        if (0 !== t.length) {
                            var i, u, l = t.map((function(e) {
                                    return st(e)
                                })),
                                s = function(e, n) {
                                    if (n < 1) throw new Error("maxChunkSize must be gte 1");
                                    if (e.length <= n) return [e];
                                    var t = Math.ceil(e.length / n),
                                        a = Math.ceil(e.length / t);
                                    return Object(d.a)(Array(t).keys()).map((function(n) {
                                        return e.slice(n * a, n * a + a)
                                    }))
                                }(l, 500);
                            if ((null === (n = c.current) || void 0 === n ? void 0 : n.blockNumber) !== a) null === (i = c.current) || void 0 === i || null === (u = i.cancellations) || void 0 === u || u.forEach((function(e) {
                                return e()
                            }));
                            e(mt({
                                calls: l,
                                chainId: r,
                                fetchingBlockNumber: a
                            })), c.current = {
                                blockNumber: a,
                                cancellations: s.map((function(n, i) {
                                    var u = function(e, n) {
                                            var t, a = n.n,
                                                r = n.minWait,
                                                i = n.maxWait,
                                                o = !1;
                                            return {
                                                promise: new Promise(function() {
                                                    var n = Object(j.a)(O.a.mark((function n(c, u) {
                                                        var l;
                                                        return O.a.wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    t = u;
                                                                case 1:
                                                                    return l = void 0, n.prev = 3, n.next = 6, e();
                                                                case 6:
                                                                    return l = n.sent, o || (c(l), o = !0), n.abrupt("break", 24);
                                                                case 11:
                                                                    if (n.prev = 11, n.t0 = n.catch(3), !o) {
                                                                        n.next = 15;
                                                                        break
                                                                    }
                                                                    return n.abrupt("break", 24);
                                                                case 15:
                                                                    if (!(a <= 0) && n.t0 instanceof Wk) {
                                                                        n.next = 19;
                                                                        break
                                                                    }
                                                                    return u(n.t0), o = !0, n.abrupt("break", 24);
                                                                case 19:
                                                                    a--;
                                                                case 20:
                                                                    return n.next = 22, Lk(r, i);
                                                                case 22:
                                                                    n.next = 1;
                                                                    break;
                                                                case 24:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n, null, [
                                                            [3, 11]
                                                        ])
                                                    })));
                                                    return function(e, t) {
                                                        return n.apply(this, arguments)
                                                    }
                                                }()),
                                                cancel: function() {
                                                    o || (o = !0, t(new Fk))
                                                }
                                            }
                                        }((function() {
                                            return function(e, n, t) {
                                                return Dk.apply(this, arguments)
                                            }(o, n, a)
                                        }), {
                                            n: 1 / 0,
                                            minWait: 2500,
                                            maxWait: 3500
                                        }),
                                        l = u.cancel;
                                    return u.promise.then((function(n) {
                                        var o = n.results,
                                            u = n.blockNumber;
                                        c.current = {
                                            cancellations: [],
                                            blockNumber: a
                                        };
                                        var l = s.slice(0, i).reduce((function(e, n) {
                                                return e + n.length
                                            }), 0),
                                            d = l + o.length;
                                        e(bt({
                                            chainId: r,
                                            results: t.slice(l, d).reduce((function(e, n, t) {
                                                var a;
                                                return e[n] = null !== (a = o[t]) && void 0 !== a ? a : null, e
                                            }), {}),
                                            blockNumber: u
                                        }))
                                    })).catch((function(t) {
                                        t instanceof Fk ? console.debug("Cancelled fetch for blockNumber", a) : (console.error("Failed to fetch multicall chunk", n, r, t), e(ft({
                                            calls: n,
                                            chainId: r,
                                            fetchingBlockNumber: a
                                        })))
                                    })), l
                                }))
                            }
                        }
                    }
                }), [r, o, e, p, a]), null
            }

            function Gk() {
                var e, n = Ne(),
                    t = n.chainId,
                    a = n.library,
                    r = tt(),
                    o = Object(l.c)(),
                    c = Object(l.d)((function(e) {
                        return e.transactions
                    })),
                    u = t && null !== (e = c[t]) && void 0 !== e ? e : {},
                    s = function() {
                        var e = Object(l.c)();
                        return Object(i.useCallback)((function(n, t) {
                            e(et({
                                content: n,
                                key: t
                            }))
                        }), [e])
                    }();
                return Object(i.useEffect)((function() {
                    t && a && r && Object.keys(u).filter((function(e) {
                        return function(e, n) {
                            if (n.receipt) return !1;
                            if (!n.lastCheckedBlockNumber) return !0;
                            var t = e - n.lastCheckedBlockNumber;
                            if (t < 1) return !1;
                            var a = ((new Date).getTime() - n.addedTime) / 1e3 / 60;
                            return a > 60 ? t > 9 : !(a > 5) || t > 2
                        }(r, u[e])
                    })).forEach((function(e) {
                        a.getTransactionReceipt(e).then((function(n) {
                            var a;
                            n ? (o(bi({
                                chainId: t,
                                hash: e,
                                receipt: {
                                    blockHash: n.blockHash,
                                    blockNumber: n.blockNumber,
                                    contractAddress: n.contractAddress,
                                    from: n.from,
                                    status: n.status,
                                    to: n.to,
                                    transactionHash: n.transactionHash,
                                    transactionIndex: n.transactionIndex
                                }
                            })), s({
                                txn: {
                                    hash: e,
                                    success: 1 === n.status,
                                    summary: null === (a = u[e]) || void 0 === a ? void 0 : a.summary
                                }
                            }, e)) : o(vi({
                                chainId: t,
                                hash: e,
                                blockNumber: r
                            }))
                        })).catch((function(n) {
                            console.error("failed to check transaction hash: ".concat(e), n)
                        }))
                    }))
                }), [t, a, u, r, o, s]), null
            }

            function Jk() {
                var e = Object(l.c)();
                return Object(i.useEffect)((function() {
                    var n, t = function(n) {
                            e(ha({
                                matchesDarkMode: n.matches
                            }))
                        },
                        a = null === (n = window) || void 0 === n ? void 0 : n.matchMedia("(prefers-color-scheme: dark)");
                    return e(ha({
                            matchesDarkMode: a.matches
                        })), (null === a || void 0 === a ? void 0 : a.addListener) ? null === a || void 0 === a || a.addListener(t) : (null === a || void 0 === a ? void 0 : a.addEventListener) && (null === a || void 0 === a || a.addEventListener("change", t)),
                        function() {
                            (null === a || void 0 === a ? void 0 : a.removeListener) ? null === a || void 0 === a || a.removeListener(t): (null === a || void 0 === a ? void 0 : a.removeEventListener) && (null === a || void 0 === a || a.removeEventListener("change", t))
                        }
                }), [e]), null
            }

            function zk(e) {
                var n = new b.a(e, "any");
                return n.pollingInterval = 15e3, n
            }
            var Pk = Object(r.c)("NETWORK");

            function Vk() {
                return o.a.createElement(o.a.Fragment, null, o.a.createElement(Bk, null), o.a.createElement(Jk, null), o.a.createElement(Mk, null), o.a.createElement(Gk, null), o.a.createElement(qk, null))
            }
            "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1), u.a.render(o.a.createElement(i.StrictMode, null, o.a.createElement(Nr, null), o.a.createElement(r.b, {
                getLibrary: zk
            }, o.a.createElement(Pk, {
                getLibrary: zk
            }, o.a.createElement(Ke, null, o.a.createElement(l.a, {
                store: Sk
            }, o.a.createElement(Vk, null), o.a.createElement(kr, null, o.a.createElement(Kr, null), o.a.createElement(s.a, null, o.a.createElement(ik, null)))))))), document.getElementById("root"))
        }
    },
    [
        [370, 3, 4]
    ]
]);