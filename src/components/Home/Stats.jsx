import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

const SVGs = {
  Logo: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.474"
      height="19.742"
      viewBox="0 0 25.474 19.742"
    >
      <path
        id="Path_386"
        data-name="Path 386"
        d="M22.439,75.853V61.62l1.468-1.468v2.493H25.4V57.6H20.358V59.1h2.493l-2.584,2.584-3.48-3.48L8.43,66.559,5.053,63.182.293,67.941,1.349,69,3.035,67.31v8.543H0v1.493H25.474V75.853ZM20.946,63.112V75.853H18.995V62.519l1.273,1.273ZM17.5,61.026V75.853h-2.3V61.894l1.582-1.582ZM11.761,75.853V65.338l1.952-1.952V75.853H11.761Zm-1.493-9.022v9.022h-2.3V68.212l.457.457ZM4.528,65.818l.525-.525L6.48,66.72v9.134H4.528Z"
        transform="translate(0 -57.604)"
        fill="#fff"
      />
    </svg>
  ),
  Downloads: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 md:h-14 md:w-14 flex-no-shrink fill-current"
      viewBox="0 0 31.372 40.248"
    >
      <path
        id="Icon_ionic-md-download"
        data-name="Icon ionic-md-download"
        d="M38.122,18.7H29.161V4.5H15.711V18.7H6.75L22.436,35.273ZM6.75,40.01v4.737H38.122V40.01Z"
        transform="translate(-6.75 -4.5)"
        fill="#fff"
      />
    </svg>
  ),
  Contributors: (
    <svg
      id="handshake_1_"
      data-name="handshake (1)"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 md:h-14 md:w-14 flex-no-shrink fill-current"
      viewBox="0 0 46.392 28.832"
    >
      <path
        id="Path_366"
        data-name="Path 366"
        d="M107.77,304.659a1.275,1.275,0,0,0,.116-1.8l-.07-.08a1.265,1.265,0,0,0-.874-.427h-.085a1.265,1.265,0,0,0-.839.317l-1.708,1.5-1.555,1.365a1.277,1.277,0,0,0-.115,1.8l.071.082a1.276,1.276,0,0,0,1.8.116l1.2-1.049Z"
        transform="translate(-92.85 -283.714)"
        fill="#fff"
      />
      <path
        id="Path_367"
        data-name="Path 367"
        d="M100.406,304.806c-.035,0-.07,0-.106,0a1.568,1.568,0,0,1-1.084-.533l-.072-.082a1.582,1.582,0,0,1,.143-2.226l3.264-2.867a1.585,1.585,0,0,1,1.144-.389,1.568,1.568,0,0,1,1.084.533l.1.117a1.577,1.577,0,0,1-.172,2.193l-3.263,2.867A1.564,1.564,0,0,1,100.406,304.806Zm3.186-5.489a.969.969,0,0,0-.638.244l-3.263,2.867a.972.972,0,0,0-.087,1.367l.072.082a.97.97,0,0,0,1.367.087l3.263-2.867a.969.969,0,0,0,.088-1.367l-.071-.082a.96.96,0,0,0-.664-.326Z"
        transform="translate(-89.6 -280.375)"
        fill="#fff"
      />
      <path
        id="Path_368"
        data-name="Path 368"
        d="M187.736,366.414a1.27,1.27,0,0,0-.84.316l-1.684,1.478a1.275,1.275,0,1,0,1.682,1.917l1.684-1.478a1.274,1.274,0,0,0-.842-2.232Z"
        transform="translate(-167.724 -342.282)"
        fill="#fff"
      />
      <path
        id="Path_369"
        data-name="Path 369"
        d="M182.8,367.682a1.579,1.579,0,0,1-1.044-2.767l1.685-1.478a1.627,1.627,0,0,1,2.229.145,1.58,1.58,0,0,1-.145,2.23l-1.684,1.478A1.572,1.572,0,0,1,182.8,367.682Zm1.682-4.026a.967.967,0,0,0-.641.237l-1.685,1.478a.97.97,0,1,0,1.281,1.458l1.685-1.477a.969.969,0,0,0-.64-1.7Z"
        transform="translate(-164.471 -339.218)"
        fill="#fff"
      />
      <path
        id="Path_370"
        data-name="Path 370"
        d="M7.486,93.793,4.062,108.731,6.8,110.27l7.084-11.523Z"
        transform="translate(-3.714 -93.032)"
        fill="#fff"
      />
      <path
        id="Path_371"
        data-name="Path 371"
        d="M3.192,104.988,0,103.194,3.581,87.568l6.991,5.413Zm-2.5-2.1,2.283,1.281,6.787-11.04-5.8-4.492Z"
        transform="translate(0 -87.341)"
        fill="#fff"
      />
      <path
        id="Path_372"
        data-name="Path 372"
        d="M75.044,284.965a1.275,1.275,0,0,0,.117-1.8l-.022-.025a1.265,1.265,0,0,0-.875-.431h-.085a1.265,1.265,0,0,0-.839.317L71.3,284.817a1.292,1.292,0,0,0,1.688,1.956l.017-.014.155-.136,1.557-1.366Z"
        transform="translate(-64.786 -265.754)"
        fill="#fff"
      />
      <path
        id="Path_373"
        data-name="Path 373"
        d="M68.948,284.126a1.117,1.117,0,0,1-.119,0,1.621,1.621,0,0,1-1.1-.556,1.58,1.58,0,0,1,.145-2.229l2.043-1.793a1.6,1.6,0,0,1,2.106,2.4l-2.042,1.793A1.552,1.552,0,0,1,68.948,284.126Zm2.007-4.365a.966.966,0,0,0-.638.244L68.275,281.8a.97.97,0,0,0-.089,1.369h0a1.014,1.014,0,0,0,.688.35.947.947,0,0,0,.7-.235l2.042-1.793a.97.97,0,0,0,.089-1.369.983.983,0,0,0-.687-.353Z"
        transform="translate(-61.562 -262.501)"
        fill="#fff"
      />
      <path
        id="Path_374"
        data-name="Path 374"
        d="M145.479,336.012a1.266,1.266,0,0,0-.314-.924l-.018-.021a1.264,1.264,0,0,0-.873-.427h-.085a1.265,1.265,0,0,0-.839.317l-.2.176-2.066,1.814-.549.479a1.294,1.294,0,0,0,.776,2.251,1.262,1.262,0,0,0,.924-.314l2.814-2.47A1.267,1.267,0,0,0,145.479,336.012Z"
        transform="translate(-127.149 -313.232)"
        fill="#fff"
      />
      <path
        id="Path_375"
        data-name="Path 375"
        d="M138.063,336.656c-.035,0-.069,0-.1,0a1.594,1.594,0,0,1-.958-2.784l2.811-2.473a1.593,1.593,0,0,1,1.144-.389,1.566,1.566,0,0,1,1.083.532,1.579,1.579,0,0,1-.123,2.251l-2.814,2.47a1.569,1.569,0,0,1-1.041.4Zm1.952-4.624-2.611,2.292a.972.972,0,0,0-.091,1.369.984.984,0,0,0,.684.348.96.96,0,0,0,.705-.24l2.814-2.47a.969.969,0,0,0,.09-1.368h0a.976.976,0,0,0-.684-.349h-.065a.956.956,0,0,0-.638.244Z"
        transform="translate(-123.827 -309.908)"
        fill="#fff"
      />
      <path
        id="Path_376"
        data-name="Path 376"
        d="M86.649,172.806l-9.926-8.088c-3.8,2.018-6.493.98-7.78.158a1.45,1.45,0,0,1,.122-2.5l3.308-1.757c-.085-.013-.169-.024-.244-.031a64.016,64.016,0,0,1-9.023.777l-5.783,9.406,1.289.983,1.516-1.331a2.535,2.535,0,0,1,3.578.233h0l.022.025a2.514,2.514,0,0,1,.583,1.227,2.486,2.486,0,0,1,1.566-.427,2.518,2.518,0,0,1,1.741.858l.071.082a2.518,2.518,0,0,1,.624,1.836v0a2.551,2.551,0,0,1,.35-.012,2.519,2.519,0,0,1,1.741.858l-.456.437.474-.416a2.519,2.519,0,0,1,.625,1.837c0,.009,0,.016,0,.025a2.511,2.511,0,0,1,2.274,3.9l2.72,1.569a1.26,1.26,0,0,0,1.7-.451,1.236,1.236,0,0,0-.37-1.652l-4.33-3s-.005-.007-.009-.009l-.292-.2a.631.631,0,0,1,.718-1.037l6.108,4.231a1.241,1.241,0,0,0,1.727-.313h0a1.246,1.246,0,0,0-.3-1.718L74.911,174s0-.007-.009-.009a.631.631,0,1,1,.732-1.028l6.814,4.834a1.321,1.321,0,0,0,1.572-2.123l-7.332-5.283a.631.631,0,1,1,.7-1.049l.032.023.5.357h.007l6.8,4.9c.013.009.022.021.034.03l.112.081a.587.587,0,0,1,.061.048l.122.084a1.314,1.314,0,0,0,1.791-.248,1.293,1.293,0,0,0,.226-1.169,1.263,1.263,0,0,0-.423-.634Z"
        transform="translate(-52.409 -154.1)"
        fill="#fff"
      />
      <path
        id="Path_377"
        data-name="Path 377"
        d="M72.34,179.633a1.535,1.535,0,0,1-.768-.206l-3-1.732.183-.268a2.221,2.221,0,0,0-1.712-3.444,1.506,1.506,0,0,0-.227.006l-.409.026.024-.347a2.227,2.227,0,0,0-.36-1.4l-.229.2-.412-.449.232-.222a2.214,2.214,0,0,0-1.326-.549,2.048,2.048,0,0,0-.267.009l-.328.024-.041-.361v-.013a2.227,2.227,0,0,0-.549-1.59l-.072-.082a2.209,2.209,0,0,0-2.907-.376l-.389.261-.082-.461a2.239,2.239,0,0,0-3.682-1.309l-1.7,1.5-1.711-1.3,6.015-9.783.164,0a63.94,63.94,0,0,0,8.974-.772l.043-.009.043,0c.08.007.17.02.262.033l.915.137-4.126,2.191a1.145,1.145,0,0,0-.1,1.977c1.211.773,3.794,1.78,7.471-.171l.179-.1,10.082,8.215a1.57,1.57,0,0,1,.52.789,1.6,1.6,0,0,1-.278,1.442,1.622,1.622,0,0,1-2.211.3l-.342-.256L72.929,166.3a.324.324,0,0,0-.453.074h0a.325.325,0,0,0,.075.454h0l7.333,5.287a1.626,1.626,0,0,1-1.927,2.618l-6.816-4.832a.326.326,0,1,0-.378.531l6.088,4.321a1.546,1.546,0,0,1-1.774,2.533h0l-6.107-4.232a.326.326,0,0,0-.388.523l.018.012,4.632,3.212a1.546,1.546,0,0,1-.47,2.767A1.6,1.6,0,0,1,72.34,179.633Zm-2.917-2.15,2.454,1.416a.942.942,0,0,0,1.008-1.586l-3.461-2.4a2.821,2.821,0,0,1,.3,1.48A2.748,2.748,0,0,1,69.423,177.483Zm-.635-5.089a.929.929,0,0,1,.531.165l6.107,4.231a.936.936,0,0,0,1.073-1.533l-6.121-4.346a.936.936,0,0,1,1.117-1.5l6.816,4.834a1.016,1.016,0,0,0,1.21-1.632L72.2,167.335a.935.935,0,0,1,1.088-1.522l.509.36,6.941,5.007a.893.893,0,0,1,.089.073l.086.056a1.009,1.009,0,0,0,1.377-.183.991.991,0,0,0,.174-.9.963.963,0,0,0-.318-.488l-9.772-7.962c-3.854,1.97-6.6.886-7.907.052a1.755,1.755,0,0,1,.146-3.03l1.87-.993c-1.9.258-4.5.45-7.513.549l-5.55,9.033.873.664,1.329-1.166a2.84,2.84,0,0,1,4.008.26h0a2.879,2.879,0,0,1,.572.99,2.75,2.75,0,0,1,1.39-.27,2.822,2.822,0,0,1,1.952.961l.072.082a2.816,2.816,0,0,1,.7,1.722h.061a2.822,2.822,0,0,1,1.756.767l.01-.009.165.189.018.02.192.219-.009.009a2.813,2.813,0,0,1,.537,1.54h.037a2.853,2.853,0,0,1,.793.167.934.934,0,0,1,.915-1.146Z"
        transform="translate(-48.093 -150.801)"
        fill="#fff"
      />
      <path
        id="Path_378"
        data-name="Path 378"
        d="M393.94,91.146l-6.4,4.954,5.916,9.623a.6.6,0,0,1,.109.073.619.619,0,0,1,.173.387l.886,1.441,2.735-1.539Z"
        transform="translate(-351.32 -90.612)"
        fill="#fff"
      />
      <path
        id="Path_379"
        data-name="Path 379"
        d="M390.2,102.341l-1.076-1.752-.007-.071a.317.317,0,0,0-.085-.2l-.117-.07-.036-.061-6.06-9.854,6.992-5.414,3.581,15.626Zm-.488-1.955.7,1.136,2.283-1.281L389.43,85.988l-5.8,4.494,5.733,9.325a.563.563,0,0,1,.1.08.908.908,0,0,1,.251.5Z"
        transform="translate(-347.001 -84.921)"
        fill="#fff"
      />
      <path
        id="Path_380"
        data-name="Path 380"
        d="M214.315,157.833a5.621,5.621,0,0,1-3.9.142l-3.358-1.09a1.829,1.829,0,0,0-1.4.122l-1.138.6c-.012.006-.023.013-.035.019l-4.51,2.4a.191.191,0,0,0-.109.166.173.173,0,0,0,.081.16c1.327.847,3.6,1.464,6.851-.4a.632.632,0,0,1,.712.058l10.252,8.356a2.432,2.432,0,0,1,.384.4l2.535-2.537-5.4-8.787Z"
        transform="translate(-179.734 -150.637)"
        fill="#fff"
      />
      <path
        id="Path_381"
        data-name="Path 381"
        d="M214.9,165.994l-.212-.269a2.1,2.1,0,0,0-.335-.348L204.1,157.024a.329.329,0,0,0-.366-.03c-3.386,1.944-5.766,1.288-7.167.4a.476.476,0,0,1-.221-.433.494.494,0,0,1,.271-.421l5.681-3.017a2.134,2.134,0,0,1,1.636-.144l3.356,1.088a5.317,5.317,0,0,0,3.687-.133l1.209-.5,5.664,9.21Zm-11.01-9.654a.939.939,0,0,1,.592.209l10.252,8.356a2.327,2.327,0,0,1,.206.187l2.135-2.135-5.14-8.363-.727.3a5.926,5.926,0,0,1-4.109.149l-3.355-1.089a1.525,1.525,0,0,0-1.164.1l-5.51,2.928c1.277.742,3.377,1.194,6.357-.518a.935.935,0,0,1,.462-.124Z"
        transform="translate(-176.508 -147.414)"
        fill="#fff"
      />
    </svg>
  ),
  Dependents: (
    <svg
      id="group"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6  md:h-14 md:w-14 flex-no-shrink fill-current"
      viewBox="0 0 40 34.084"
    >
      <g
        id="Group_626"
        data-name="Group 626"
        transform="translate(31.367 18.885)"
      >
        <g id="Group_625" data-name="Group 625">
          <path
            id="Path_360"
            data-name="Path 360"
            d="M401.506,273.32h-3.012a7.833,7.833,0,0,1,.475,2.693v11.382a3.358,3.358,0,0,1-.193,1.124h4.979a3.377,3.377,0,0,0,3.373-3.373v-6.2A5.628,5.628,0,0,0,401.506,273.32Z"
            transform="translate(-398.494 -273.32)"
            fill="#fff"
          />
        </g>
      </g>
      <g id="Group_628" data-name="Group 628" transform="translate(0 18.885)">
        <g id="Group_627" data-name="Group 627">
          <path
            id="Path_361"
            data-name="Path 361"
            d="M8.158,276.014a7.834,7.834,0,0,1,.475-2.693H5.621A5.628,5.628,0,0,0,0,278.943v6.2a3.377,3.377,0,0,0,3.373,3.373H8.352a3.358,3.358,0,0,1-.193-1.124Z"
            transform="translate(0 -273.321)"
            fill="#fff"
          />
        </g>
      </g>
      <g
        id="Group_630"
        data-name="Group 630"
        transform="translate(10.936 15.956)"
      >
        <g id="Group_629" data-name="Group 629" transform="translate(0 0)">
          <path
            id="Path_362"
            data-name="Path 362"
            d="M149.335,234.815H142.45a5.628,5.628,0,0,0-5.621,5.621v11.382a1.124,1.124,0,0,0,1.124,1.124h15.879a1.124,1.124,0,0,0,1.124-1.124V240.436A5.628,5.628,0,0,0,149.335,234.815Z"
            transform="translate(-136.829 -234.815)"
            fill="#fff"
          />
        </g>
      </g>
      <g id="Group_632" data-name="Group 632" transform="translate(13.239 0)">
        <g id="Group_631" data-name="Group 631">
          <path
            id="Path_363"
            data-name="Path 363"
            d="M173.875,38.84a6.759,6.759,0,1,0,6.761,6.761A6.768,6.768,0,0,0,173.875,38.84Z"
            transform="translate(-167.114 -38.84)"
            fill="#fff"
          />
        </g>
      </g>
      <g id="Group_634" data-name="Group 634" transform="translate(2.544 6.59)">
        <g id="Group_633" data-name="Group 633">
          <path
            id="Path_364"
            data-name="Path 364"
            d="M38.5,121.689a5.053,5.053,0,1,0,5.056,5.056A5.062,5.062,0,0,0,38.5,121.689Z"
            transform="translate(-33.443 -121.689)"
            fill="#fff"
          />
        </g>
      </g>
      <g
        id="Group_636"
        data-name="Group 636"
        transform="translate(27.344 6.59)"
      >
        <g id="Group_635" data-name="Group 635">
          <path
            id="Path_365"
            data-name="Path 365"
            d="M350.663,121.689a5.056,5.056,0,1,0,5.056,5.056A5.062,5.062,0,0,0,350.663,121.689Z"
            transform="translate(-345.607 -121.689)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  ),
  GithubStars: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 md:h-14 md:w-14 flex-no-shrink fill-current"
      viewBox="0 0 40 40"
    >
      <g id="Group_639" data-name="Group 639" transform="translate(-336 -333)">
        <g id="Group_638" data-name="Group 638" transform="translate(336 333)">
          <path
            id="Path_382"
            data-name="Path 382"
            d="M0,0H40V40H0Z"
            fill="none"
          />
          <path
            id="github"
            d="M19.683.5A19.513,19.513,0,0,0,0,19.842,19.374,19.374,0,0,0,13.458,38.193c.984.182,1.345-.417,1.345-.93,0-.459-.016-1.676-.025-3.289-5.475,1.166-6.63-2.595-6.63-2.595a5.156,5.156,0,0,0-2.19-2.829c-1.783-1.2.138-1.174.138-1.174a4.118,4.118,0,0,1,3.015,1.993c1.755,2.957,4.607,2.1,5.733,1.609a4.1,4.1,0,0,1,1.247-2.587c-4.371-.484-8.966-2.147-8.966-9.558a7.39,7.39,0,0,1,2.026-5.19,6.767,6.767,0,0,1,.172-5.119s1.648-.518,5.413,1.983a18.872,18.872,0,0,1,9.842,0c3.74-2.5,5.388-1.983,5.388-1.983a6.954,6.954,0,0,1,.2,5.119,7.42,7.42,0,0,1,2.018,5.19c0,7.43-4.6,9.066-8.98,9.541a4.589,4.589,0,0,1,1.329,3.579c0,2.588-.025,4.668-.025,5.3,0,.507.344,1.112,1.353.919A19.315,19.315,0,0,0,39.366,19.842,19.516,19.516,0,0,0,19.683.5Z"
            transform="translate(0.317 0.534)"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  ),
};

const stats = [
  {
    name: 'Downloads',
    value: '38.2k',
    svg: SVGs['Downloads'],
  },
  {
    name: 'GithubStars',
    value: '14.8k',
    svg: SVGs['GithubStars'],
  },
  {
    name: ' Contributions',
    value: '196',
    svg: SVGs['Contributors'],
  },
  {
    name: 'Dependents',
    value: '53.6k',
    svg: SVGs['Dependents'],
  },
];

export function Stats() {
  const [starCount, setStarCount] = React.useState(0);

  // React.useEffect(() => {
  //   fetch('https://api.github.com/repos/GeekyAnts/NativeBase')
  //     .then((response) => response.json())
  //     .then((data) => setStarCount(data.stargazers_count.toLocaleString()));

  //   fetch(
  //     'https://api.github.com/repos/Geekyants/nativebase/contributors?per_page=196'
  //   )
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }, []);

  const { isDarkTheme } = useThemeContext();
  const foldBg = '';
  const headingColor = !isDarkTheme ? 'text-gray-800' : 'text-gray-200';
  const subHeadingColor = !isDarkTheme ? 'text-gray-600' : 'text-gray-400';
  const statsColor = !isDarkTheme ? 'text-gray-500' : 'text-gray-400';
  const ringColor = !isDarkTheme ? 'ring-white' : 'ring-secondary-800';

  return (
    <section className="relative">
      <div
        className={'absolute inset-0 pointer-events-none ' + foldBg}
        aria-hidden="true"
      />
      <div className="px-6 md:px-0">
        <div className="relative py-12 md:py-20">
          <div className="flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0  md:space-x-7">
            <div className="mt-2">
              <p className="w-10 h-10 items-center rounded-md flex justify-center bg-green-600">
                {SVGs['Logo']}
              </p>
            </div>
            <div className="w-full">
              <h2
                className={`leading-snug max-w-3xl text-3xl md:text-4xl ${headingColor}`}
              >
                <span>We Are </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
                  Growing
                </span>
              </h2>
              <p
                className={`text-lg md:text-xl mt-7 leading-normal ${subHeadingColor}`}
              >
                NativeBase is a popular component library among devs and we are
                constantly improving it.
              </p>
              <div className="w-full grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 mt-20 max-4xl">
                {stats.map((stat, idx) => {
                  return (
                    <div key={idx}>
                      <div
                        className={`ring-8 md:ring-10 ${ringColor} w-24 h-24 md:w-44 md:h-44 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white`}
                      >
                        <div className="">{stat.svg}</div>
                        <div className="font-bold text-sm md:text-3xl ">
                          {stat.value}
                        </div>
                      </div>
                      <p
                        className={`text-center md:ml-4 text-xs md:text-lg mt-2.5 font-semibold ${statsColor}`}
                      >
                        {stat.name}
                      </p>
                    </div>
                  );
                })}
                {/* <div className="">
                  <div className=" ring-10 ring-white w-20 h-20 md:w-36 md:h-36 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white">
                    <div className="">{SVGs['Downloads']}</div>
                    <div className="font-bold text-xl md:text-3xl ">38.2k</div>
                  </div>
                  <p
                    className={`text-center mt-2.5 font-semibold ${statsColor}`}
                  >
                    Downloads / week
                  </p>
                </div>
                <div className="-ml-2 lg:-ml-8">
                  <div className=" ring-10 ring-white w-20 h-20  md:w-36 md:h-36 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white">
                    <div className="">{SVGs['GithubStars']}</div>
                    <div className="font-bold text-2xl md:text-3xl ">14.8k</div>
                  </div>
                  <p
                    className={`text-center mt-2.5 font-semibold ${statsColor}`}
                  >
                    Github Stars
                  </p>
                </div>
                <div className="-ml-2 lg:-ml-8 ">
                  <div className="ring-10 ring-white w-20 h-20  md:w-36 md:h-36 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white ring-10 ring-white ">
                    <div className="flex items-center">
                      {SVGs['Contributors']}
                    </div>
                    <div className="font-bold mt-1 text-2xl md:text-3xl ">
                      196
                    </div>
                  </div>
                  <p
                    className={`text-center mt-2.5 font-semibold ${statsColor}`}
                  >
                    Contributions
                  </p>
                </div>
                <div className="-ml-2 -ml-2 lg:-ml-8 ">
                  <div className="w-20 h-20 ring-10 ring-white  md:w-36 md:h-36 lg:h-48 lg:w-48 flex flex-col items-center justify-center rounded-full bg-green-600 text-white">
                    <div className="">{SVGs['Dependents']}</div>
                    <div className="font-bold  text-2xl md:text-3xl">53.6k</div>
                  </div>
                  <p
                    className={`text-center mt-2.5 text-md font-semibold ${statsColor}`}
                  >
                    Dependents
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
