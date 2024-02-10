import React from 'react'

const Settings = ({fill}) => {
  return (
  <div>
    <svg width="24" height="24" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_42_45)">
<path d="M315.733 298.667H306.347C304.623 298.67 302.94 298.142 301.527 297.156C300.113 296.17 299.037 294.773 298.445 293.154C297.409 290.437 296.287 287.754 295.083 285.107C294.353 283.537 294.125 281.78 294.43 280.076C294.736 278.371 295.56 276.803 296.789 275.584L303.479 268.885C313.411 258.866 313.393 242.708 303.437 232.712L279.322 208.597C269.313 198.647 253.149 198.647 243.14 208.597L236.45 215.279C235.229 216.504 233.66 217.325 231.957 217.63C230.254 217.935 228.498 217.71 226.927 216.985C224.269 215.784 221.583 214.646 218.871 213.572C217.244 212.984 215.839 211.908 214.848 210.49C213.856 209.073 213.327 207.383 213.333 205.653V196.267C213.333 182.128 201.872 170.667 187.733 170.667H153.6C139.461 170.667 128 182.128 128 196.267V205.653C128.003 207.377 127.476 209.06 126.49 210.473C125.503 211.887 124.106 212.963 122.487 213.555C119.757 214.596 117.086 215.714 114.441 216.917C112.87 217.644 111.114 217.87 109.41 217.564C107.706 217.259 106.138 216.437 104.917 215.211L98.2187 208.52C88.2112 198.577 72.0533 198.577 62.0459 208.52L37.9307 232.712C27.9808 242.721 27.9808 258.885 37.9307 268.894L44.6123 275.584C45.8421 276.803 46.6659 278.371 46.9713 280.076C47.2767 281.78 47.0489 283.537 46.3189 285.107C45.1136 287.757 43.9895 290.444 42.9483 293.163C42.3525 294.79 41.2672 296.193 39.8415 297.179C38.4158 298.164 36.7198 298.684 34.9867 298.667H25.6C11.4613 298.667 0 310.128 0 324.267V358.4C0 372.539 11.4613 384 25.6 384H34.9867C36.7103 383.997 38.3931 384.524 39.8068 385.51C41.2204 386.496 42.2963 387.894 42.8885 389.512C43.9296 392.243 45.0475 394.914 46.2507 397.559C46.9806 399.129 47.2085 400.886 46.903 402.591C46.5976 404.295 45.7738 405.864 44.544 407.083L37.8539 413.781C27.9104 423.789 27.9104 439.947 37.8539 449.954L61.9691 474.069C71.9776 484.019 88.1419 484.019 98.1504 474.069L104.841 467.388C106.062 466.162 107.631 465.341 109.334 465.036C111.037 464.731 112.793 464.956 114.364 465.681C117.021 466.882 119.707 468.021 122.419 469.094C124.054 469.675 125.469 470.749 126.468 472.167C127.468 473.585 128.003 475.278 128 477.013V486.4C128 500.539 139.461 512 153.6 512H187.733C201.872 512 213.333 500.539 213.333 486.4V477.013C213.33 475.29 213.858 473.607 214.844 472.193C215.83 470.779 217.227 469.704 218.846 469.111C221.577 468.07 224.247 466.952 226.893 465.749C228.464 465.023 230.22 464.797 231.923 465.102C233.627 465.407 235.195 466.229 236.416 467.456L243.115 474.146C253.136 484.073 269.29 484.054 279.287 474.103L303.403 449.988C313.353 439.98 313.353 423.815 303.403 413.807L296.721 407.117C295.491 405.898 294.667 404.329 294.362 402.625C294.057 400.921 294.284 399.164 295.014 397.593C296.216 394.936 297.354 392.25 298.428 389.538C299.016 387.911 300.092 386.505 301.51 385.514C302.927 384.523 304.617 383.994 306.347 384H315.733C329.872 384 341.333 372.539 341.333 358.4V324.267C341.333 310.128 329.872 298.667 315.733 298.667ZM324.267 358.4C324.267 360.663 323.368 362.834 321.767 364.434C320.167 366.034 317.997 366.933 315.733 366.933H306.347C301.164 366.952 296.108 368.539 291.844 371.484C287.58 374.43 284.306 378.596 282.453 383.437C281.551 385.82 280.572 388.174 279.518 390.494C277.375 395.225 276.716 400.495 277.631 405.608C278.545 410.721 280.988 415.436 284.638 419.132L291.311 425.813C292.104 426.605 292.733 427.546 293.162 428.581C293.592 429.616 293.813 430.725 293.814 431.846C293.814 432.967 293.594 434.076 293.166 435.112C292.737 436.148 292.109 437.089 291.317 437.881L291.311 437.888L267.196 462.003C265.596 463.603 263.425 464.502 261.163 464.502C258.9 464.502 256.73 463.603 255.13 462.003L248.439 455.321C244.746 451.669 240.03 449.223 234.917 448.309C229.803 447.395 224.532 448.055 219.802 450.201C217.486 451.252 215.138 452.231 212.762 453.137C207.925 454.989 203.762 458.26 200.818 462.521C197.874 466.783 196.288 471.834 196.267 477.013V486.4C196.267 488.663 195.368 490.834 193.767 492.434C192.167 494.034 189.997 494.933 187.733 494.933H153.6C151.337 494.933 149.166 494.034 147.566 492.434C145.966 490.834 145.067 488.663 145.067 486.4V477.013C145.048 471.831 143.461 466.775 140.516 462.51C137.57 458.246 133.403 454.972 128.563 453.12C126.18 452.218 123.826 451.239 121.506 450.184C116.775 448.042 111.505 447.385 106.392 448.299C101.28 449.213 96.5644 451.656 92.8683 455.304L86.1867 461.977C85.3947 462.77 84.4543 463.399 83.4192 463.829C82.3841 464.258 81.2745 464.48 80.1539 464.48C79.0332 464.481 77.9234 464.261 76.8879 463.832C75.8523 463.404 74.9112 462.776 74.1184 461.984L74.112 461.977L49.9968 437.888C48.3971 436.288 47.4984 434.118 47.4984 431.855C47.4984 429.592 48.3971 427.422 49.9968 425.822L56.6784 419.132C60.3283 415.436 62.7716 410.721 63.6857 405.608C64.5998 400.495 63.9417 395.225 61.7984 390.494C60.7477 388.178 59.7688 385.83 58.8629 383.454C57.0151 378.612 53.7455 374.443 49.4841 371.495C45.2226 368.546 40.1687 366.956 34.9867 366.933H25.6C23.3368 366.933 21.1663 366.034 19.566 364.434C17.9657 362.834 17.0667 360.663 17.0667 358.4V324.267C17.0667 322.003 17.9657 319.833 19.566 318.233C21.1663 316.632 23.3368 315.733 25.6 315.733H34.9867C40.1694 315.714 45.225 314.128 49.4894 311.182C53.7538 308.237 57.0273 304.07 58.88 299.23C59.7845 296.84 60.7627 294.488 61.8155 292.173C63.9585 287.441 64.6164 282.172 63.7023 277.059C62.7882 271.946 60.3451 267.23 56.6955 263.535L49.9883 256.853C49.1954 256.061 48.5663 255.121 48.1369 254.086C47.7075 253.051 47.4862 251.941 47.4856 250.82C47.485 249.7 47.7051 248.59 48.1334 247.554C48.5617 246.519 49.1899 245.578 49.9819 244.785L49.9883 244.779L74.1035 220.663C75.7037 219.064 77.8738 218.165 80.1365 218.165C82.3993 218.165 84.5694 219.064 86.1696 220.663L92.8597 227.345C96.5533 230.998 101.269 233.443 106.383 234.357C111.496 235.272 116.767 234.612 121.498 232.465C123.814 231.414 126.161 230.435 128.538 229.529C133.381 227.683 137.551 224.414 140.502 220.152C143.452 215.891 145.043 210.836 145.067 205.653V196.267C145.067 194.003 145.966 191.833 147.566 190.233C149.166 188.632 151.337 187.733 153.6 187.733H187.733C189.997 187.733 192.167 188.632 193.767 190.233C195.368 191.833 196.267 194.003 196.267 196.267V205.653C196.286 210.836 197.872 215.892 200.818 220.156C203.763 224.42 207.93 227.694 212.77 229.547C215.159 230.451 217.511 231.429 219.827 232.482C224.558 234.629 229.828 235.289 234.942 234.374C240.056 233.46 244.772 231.015 248.465 227.362L255.147 220.689C256.754 219.099 258.923 218.207 261.184 218.207C263.445 218.207 265.614 219.099 267.221 220.689L291.337 244.804C292.936 246.404 293.835 248.574 293.835 250.837C293.835 253.1 292.936 255.27 291.337 256.87L284.655 263.56C281.005 267.256 278.562 271.971 277.648 277.084C276.734 282.197 277.392 287.467 279.535 292.198C280.586 294.514 281.565 296.862 282.47 299.238C284.323 304.075 287.594 308.238 291.855 311.182C296.116 314.126 301.168 315.712 306.347 315.733H315.733C317.997 315.733 320.167 316.632 321.767 318.233C323.368 319.833 324.267 322.003 324.267 324.267V358.4Z" fill={`${fill ? fill: "#CDCDCD"}`}/>
<path d="M247.296 337.92C247.218 335.875 247.059 333.834 246.818 331.802C246.545 329.617 246.221 327.45 245.768 325.325C245.47 323.934 245.077 322.56 244.702 321.178C244.226 319.427 243.688 317.693 243.089 315.981C242.671 314.795 242.236 313.617 241.792 312.448C240.693 309.715 239.437 307.048 238.029 304.461C237.918 304.265 237.85 304.051 237.739 303.855C235.519 299.904 232.948 296.159 230.059 292.668C229.811 292.361 229.53 292.07 229.274 291.772C228.105 290.383 226.884 289.04 225.613 287.744C224.947 287.053 224.247 286.404 223.548 285.739C222.694 284.945 221.841 284.16 220.988 283.409C219.955 282.512 218.899 281.641 217.822 280.798L216.422 279.757C203.219 269.867 187.164 264.525 170.667 264.533C169.813 264.533 168.96 264.661 168.107 264.695C166.277 264.742 164.45 264.856 162.628 265.037C161.664 265.139 160.691 265.25 159.727 265.387C156.945 265.753 154.185 266.268 151.458 266.931C110.369 277.549 85.6671 319.467 96.2847 360.556C99.7204 373.851 106.656 385.982 116.369 395.688C126.083 405.394 138.22 412.319 151.518 415.744C151.654 415.744 151.799 415.787 151.944 415.821C154.891 416.556 157.877 417.126 160.887 417.527C162.876 417.775 164.864 417.826 166.861 417.92C168.192 417.988 169.421 418.185 170.812 418.185C173.244 418.185 175.77 418.022 178.347 417.766C178.62 417.766 178.893 417.69 179.2 417.655C181.318 417.425 183.425 417.103 185.515 416.691C186.368 416.529 187.162 416.316 187.981 416.128C189.502 415.782 191.013 415.392 192.512 414.959C193.707 414.601 194.867 414.182 196.036 413.773C197.205 413.363 198.417 412.919 199.629 412.459C200.84 411.998 201.856 411.469 202.957 410.957C204.39 410.3 205.815 409.651 207.223 408.883H207.275C215.238 404.62 222.594 399.307 229.146 393.088C230.915 391.437 232.454 389.554 233.719 387.49C240.38 376.813 244.755 364.871 246.571 352.418C246.81 350.771 247.023 349.124 247.151 347.443C247.27 345.899 247.356 344.363 247.39 342.827C247.39 342.34 247.458 341.879 247.458 341.393C247.467 340.19 247.347 339.081 247.296 337.92ZM230.289 343.509C230.289 344.218 230.229 344.926 230.187 345.626C230.027 347.704 229.771 349.774 229.419 351.829C227.844 360.59 224.335 368.889 219.148 376.122C213.96 383.356 207.225 389.341 199.432 393.643C198.399 394.188 197.352 394.706 196.292 395.196L195.584 395.537C190.627 397.788 185.393 399.372 180.019 400.247C179.644 400.307 179.26 400.375 178.876 400.427C177.809 400.58 176.759 400.708 175.718 400.802C174.333 400.921 172.944 400.992 171.554 401.015H169.771C167.752 400.992 165.735 400.867 163.729 400.64L162.705 400.521C160.358 400.214 158.031 399.775 155.733 399.206C123.774 391.026 104.497 358.486 112.676 326.527C115.33 316.159 120.72 306.694 128.284 299.122C135.848 291.55 145.308 286.15 155.674 283.486V283.477C160.576 282.241 165.611 281.61 170.667 281.6C173.107 281.614 175.543 281.779 177.963 282.095C178.611 282.172 179.251 282.291 179.891 282.385C181.734 282.675 183.56 283.042 185.361 283.503C185.95 283.657 186.539 283.793 187.119 283.955C191.656 285.265 196.024 287.104 200.132 289.434C200.789 289.818 201.429 290.219 202.078 290.62C203.426 291.473 204.732 292.326 206.02 293.299C206.711 293.803 207.411 294.298 208.077 294.835C209.751 296.173 211.355 297.597 212.881 299.102C213.487 299.716 214.042 300.39 214.63 301.03C215.612 302.097 216.567 303.189 217.48 304.341C218.111 305.14 218.723 305.954 219.315 306.782C220.168 308.011 221.022 309.291 221.79 310.588C222.216 311.296 222.643 311.987 223.078 312.713C224.179 314.738 225.159 316.827 226.014 318.967C226.355 319.821 226.645 320.674 226.952 321.527C227.507 323.098 227.985 324.685 228.403 326.289C228.616 327.142 228.855 327.902 229.035 328.73C229.533 331.036 229.894 333.37 230.118 335.718C230.17 336.341 230.17 336.973 230.212 337.596C230.332 339.558 230.366 341.53 230.289 343.509ZM486.4 179.2H459.563C457.818 179.218 456.111 178.687 454.684 177.682C453.257 176.678 452.182 175.251 451.61 173.602C448.963 165.675 445.761 157.945 442.027 150.468C441.254 148.894 440.996 147.116 441.29 145.387C441.584 143.657 442.415 142.065 443.665 140.834L462.694 121.779C472.683 111.783 472.683 95.5851 462.694 85.5893L426.411 49.3653C416.415 39.3771 400.216 39.3771 390.221 49.3653L371.2 68.3776C369.971 69.6271 368.38 70.4584 366.653 70.754C364.925 71.0495 363.149 70.7944 361.574 70.0245C354.097 66.2711 346.364 63.0517 338.432 60.3904C336.777 59.8241 335.342 58.7511 334.331 57.3236C333.32 55.8961 332.785 54.1865 332.8 52.4373V25.6C332.8 11.4613 321.339 0 307.2 0H256C241.861 0 230.4 11.4613 230.4 25.6V52.4373C230.418 54.1824 229.887 55.8889 228.883 57.316C227.878 58.743 226.451 59.8185 224.802 60.3904C216.874 63.051 209.144 66.2675 201.668 70.016C200.094 70.7915 198.316 71.0505 196.586 70.7564C194.856 70.4622 193.263 69.6298 192.034 68.3776L172.979 49.3483C162.972 39.3888 146.797 39.3888 136.789 49.3483L100.574 85.5637C90.5802 95.5605 90.5802 111.765 100.574 121.762L128.555 149.794C130.162 151.351 132.316 152.214 134.554 152.198C136.791 152.182 138.933 151.287 140.517 149.707C142.102 148.127 143.002 145.988 143.025 143.751C143.047 141.513 142.19 139.357 140.638 137.745L112.64 109.722C111.04 108.121 110.141 105.951 110.141 103.689C110.141 101.426 111.04 99.2557 112.64 97.6555L148.855 61.44C150.456 59.8402 152.626 58.9416 154.888 58.9416C157.151 58.9416 159.321 59.8402 160.922 61.44L179.985 80.4693C183.746 84.2521 188.603 86.7533 193.867 87.6173C199.131 88.4813 204.533 87.6642 209.306 85.2821C216.065 81.8976 223.054 78.9919 230.221 76.5867C235.265 74.879 239.645 71.6281 242.74 67.2942C245.835 62.9603 247.488 57.7629 247.467 52.4373V25.6C247.467 23.3368 248.366 21.1663 249.966 19.566C251.566 17.9657 253.737 17.0667 256 17.0667H307.2C309.463 17.0667 311.634 17.9657 313.234 19.566C314.834 21.1663 315.733 23.3368 315.733 25.6V52.4373C315.712 57.7617 317.366 62.958 320.461 67.2905C323.556 71.6229 327.935 74.8721 332.979 76.5781C340.15 78.9842 347.141 81.8928 353.903 85.2821C358.678 87.6519 364.076 88.4614 369.336 87.5963C374.596 86.7312 379.451 84.2351 383.215 80.4608L402.278 61.44C403.879 59.8402 406.049 58.9416 408.311 58.9416C410.574 58.9416 412.744 59.8402 414.344 61.44L450.56 97.664C452.157 99.2639 453.054 101.432 453.054 103.693C453.054 105.953 452.157 108.122 450.56 109.722L431.531 128.785C427.751 132.548 425.252 137.405 424.389 142.668C423.525 147.931 424.34 153.332 426.718 158.106C430.102 164.865 433.008 171.854 435.413 179.021C437.12 184.066 440.37 188.446 444.704 191.541C449.039 194.637 454.237 196.29 459.563 196.267H486.4C488.663 196.267 490.834 197.166 492.434 198.766C494.034 200.366 494.933 202.537 494.933 204.8V256C494.933 258.263 494.034 260.434 492.434 262.034C490.834 263.634 488.663 264.533 486.4 264.533H459.563C454.238 264.512 449.042 266.166 444.709 269.261C440.377 272.356 437.128 276.735 435.422 281.779C433.016 288.95 430.108 295.942 426.718 302.703C424.344 307.477 423.533 312.876 424.398 318.137C425.263 323.398 427.761 328.253 431.539 332.015L450.568 351.078C452.168 352.679 453.067 354.849 453.067 357.111C453.067 359.374 452.168 361.544 450.568 363.145L414.336 399.36C412.736 400.957 410.568 401.854 408.307 401.854C406.047 401.854 403.878 400.957 402.278 399.36L374.238 371.379C372.663 369.754 370.507 368.82 368.245 368.784C365.982 368.748 363.797 369.613 362.172 371.187C361.349 371.984 360.695 372.939 360.249 373.994C359.803 375.049 359.574 376.183 359.575 377.328C359.577 378.474 359.809 379.607 360.258 380.661C360.707 381.715 361.364 382.668 362.189 383.462L390.221 411.443C400.216 421.431 416.415 421.431 426.411 411.443L462.626 375.236C472.62 365.239 472.62 349.035 462.626 339.038L443.622 320C442.374 318.77 441.543 317.18 441.248 315.453C440.952 313.725 441.207 311.949 441.975 310.374C445.729 302.897 448.948 295.164 451.61 287.232C452.176 285.577 453.249 284.142 454.676 283.131C456.104 282.12 457.813 281.585 459.563 281.6H486.4C500.539 281.6 512 270.139 512 256V204.8C512 190.661 500.539 179.2 486.4 179.2Z" fill={`${fill ? fill: "#CDCDCD"}`}/>
<path d="M360.038 151.961C316.691 108.705 246.509 108.705 203.162 151.961C201.607 153.571 200.747 155.726 200.766 157.964C200.786 160.201 201.683 162.341 203.265 163.924C204.848 165.506 206.988 166.403 209.225 166.423C211.463 166.442 213.618 165.582 215.228 164.028C251.638 127.125 311.07 126.727 347.972 163.138C384.875 199.549 385.272 258.98 348.862 295.883C348.567 296.181 348.271 296.478 347.972 296.772C346.344 298.344 345.408 300.499 345.369 302.762C345.329 305.025 346.191 307.21 347.763 308.838C348.559 309.662 349.513 310.317 350.567 310.765C351.621 311.212 352.755 311.443 353.901 311.443C355.046 311.443 356.18 311.212 357.234 310.765C358.289 310.317 359.243 309.662 360.038 308.838C403.295 265.491 403.295 195.309 360.038 151.961Z" fill={`${fill ? fill: "#CDCDCD"}`}/>
</g>
<defs>
<clipPath id="clip0_42_45">
<rect width="512" height="512" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
  )
}

export default Settings