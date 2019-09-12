import React from 'react';
const resume = require('./assets/Morsadi-Resume.pdf');

export const About = () => {
  

  return (
    <div>
      <h1 style={{marginTop: '70px'}}>Hi, I'm Badr</h1>
      <p>
        I am a front-end developer based in Phoenix, Arizona. I love linguistics, Shih Tzus and
        building websites/web apps that improve the lives of those around me. You can typically find
        me buried under some Javascript and ReacJs, along with HTML & CSS, as I’m eager to elevate
        my front-end development to the next level. <br />
        <br />
        When I’m not nerding out on code, you might find me...
      </p>
      <ul style={{ listStyle: 'circle' }}>
        <li>Teaching English as a Second Language (ESL).</li>
        <li>Playing the guitar, ukulele or learning piano.</li>
        <li>Advocating for educational reform.</li>
        <li>Cooking for family and friends.</li>
        <li>Speaking English, Modern Standard Arabic, Moroccan Darija and French.</li>
        <li>Volunteering for community arts performances.</li>
        <li>Singing renditions of Elvis Prestly and Johnny Cash.</li>
      </ul>
      
      <div className='seeCvBox'>
      <a href={resume} download='Morsadi-Resume.pdf'><span><svg width="70" height="90" viewBox="0 0 83 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.19141 4.81503C1.19141 2.70805 2.89662 1 5.0001 1H78.0002C80.1036 1 81.8089 2.70805 81.8089 4.81503V85.185C81.8089 87.292 80.1036 89 78.0002 89H5.0001C2.89662 89 1.19141 87.292 1.19141 85.185V4.81503Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
<path d="M1.19141 61.5369H81.8089V85.1856C81.8089 87.2922 80.1036 89 78.0002 89H5.0001C2.89662 89 1.19141 87.2922 1.19141 85.1856V61.5369Z" fill="white"/>
<path d="M26 75.8667C26 74.9037 26.1804 73.9556 26.5411 73.0222C26.9174 72.0741 27.4585 71.2296 28.1642 70.4889C28.8699 69.7481 29.7325 69.1481 30.7518 68.6889C31.7712 68.2296 32.9317 68 34.2334 68C35.7703 68 37.0955 68.3185 38.2089 68.9556C39.3381 69.5926 40.1771 70.4222 40.726 71.4444L38.2325 73.0667C38.0129 72.6222 37.7463 72.2519 37.4326 71.9556C37.119 71.6444 36.7818 71.4 36.4211 71.2222C36.0604 71.0444 35.684 70.9185 35.292 70.8444C34.8999 70.7556 34.5157 70.7111 34.1393 70.7111C33.3238 70.7111 32.6102 70.8667 31.9986 71.1778C31.4027 71.4889 30.9008 71.8963 30.4931 72.4C30.101 72.8889 29.803 73.4519 29.5992 74.0889C29.3953 74.7111 29.2934 75.3333 29.2934 75.9556C29.2934 76.6519 29.411 77.3259 29.6462 77.9778C29.8815 78.6148 30.2108 79.1778 30.6342 79.6667C31.0733 80.1556 31.5909 80.5481 32.1868 80.8444C32.7984 81.1407 33.4649 81.2889 34.1863 81.2889C34.5627 81.2889 34.9548 81.2444 35.3625 81.1556C35.7703 81.0667 36.1545 80.9259 36.5152 80.7333C36.8916 80.5407 37.2366 80.2963 37.5503 80C37.8639 79.6889 38.1148 79.3185 38.303 78.8889L40.9612 80.3333C40.6946 80.9259 40.3104 81.4519 39.8086 81.9111C39.3224 82.3556 38.7657 82.7333 38.1384 83.0444C37.5267 83.3556 36.8681 83.5926 36.1624 83.7556C35.4566 83.9185 34.7666 84 34.0922 84C32.9004 84 31.8104 83.763 30.8224 83.2889C29.8344 82.8148 28.9797 82.2 28.2583 81.4444C27.5526 80.6741 26.9958 79.8074 26.5881 78.8444C26.196 77.8667 26 76.8741 26 75.8667Z" fill="#534775"/>
<path d="M44.6029 68.0889L49.1195 80.0222L53.589 68.0889H57L50.4839 83.8667H47.7551L41.1919 68.0889H44.6029Z" fill="#534775"/>
<path fillRule="evenodd" clipRule="evenodd" d="M16.8425 12.8121C16.8425 12.3228 17.2687 11.9261 17.7945 11.9261H30.3604C30.8861 11.9261 31.3123 12.3228 31.3123 12.8121C31.3123 13.3013 30.8861 13.698 30.3604 13.698H17.7945C17.2687 13.698 16.8425 13.3013 16.8425 12.8121Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M16.8425 25.8053C16.8425 25.3161 17.2689 24.9194 17.7948 24.9194H68.454C68.98 24.9194 69.4063 25.3161 69.4063 25.8053C69.4063 26.2946 68.98 26.6912 68.454 26.6912H17.7948C17.2689 26.6912 16.8425 26.2946 16.8425 25.8053Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M16.8425 34.3692C16.8425 33.8799 17.2689 33.4833 17.7948 33.4833H68.454C68.98 33.4833 69.4063 33.8799 69.4063 34.3692C69.4063 34.8585 68.98 35.2551 68.454 35.2551H17.7948C17.2689 35.2551 16.8425 34.8585 16.8425 34.3692Z" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M16.8425 44.1141C16.8425 43.6248 17.2689 43.2281 17.7948 43.2281H68.454C68.98 43.2281 69.4063 43.6248 69.4063 44.1141C69.4063 44.6033 68.98 45 68.454 45H17.7948C17.2689 45 16.8425 44.6033 16.8425 44.1141Z" fill="white"/>
</svg>


</span>
</a>
<a href='https://github.com/Morsadi/' target='_blank' rel="noopener noreferrer" ><svg width="70" height="90" viewBox="0 0 83 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 4.81503C1 2.70805 2.70521 1 4.8087 1H77.8088C79.9122 1 81.6174 2.70805 81.6174 4.81503V85.185C81.6174 87.292 79.9122 89 77.8088 89H4.8087C2.70521 89 1 87.292 1 85.185V4.81503Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
<path d="M41.0448 12C31.0802 12 23 20.2165 23 30.3528C23 38.4617 28.1704 45.3413 35.3401 47.7681C36.2419 47.938 36.573 47.37 36.573 46.8852C36.573 46.4476 36.5563 45.0018 36.5485 43.4682C31.5285 44.5785 30.4692 41.3028 30.4692 41.3028C29.6483 39.1814 28.4656 38.6174 28.4656 38.6174C26.8284 37.4783 28.589 37.5017 28.589 37.5017C30.401 37.6308 31.3551 39.393 31.3551 39.393C32.9645 42.1988 35.5765 41.3876 36.6062 40.9186C36.7682 39.7327 37.2358 38.9225 37.7518 38.4645C33.7439 38.0004 29.5306 36.4267 29.5306 29.3943C29.5306 27.3905 30.2355 25.7533 31.3898 24.468C31.2024 24.0055 30.5848 22.1391 31.5646 19.6111C31.5646 19.6111 33.0799 19.1178 36.5282 21.4923C37.9676 21.0857 39.5113 20.8818 41.0448 20.8748C42.5783 20.8818 44.1232 21.0857 45.5652 21.4923C49.0094 19.1178 50.5226 19.6111 50.5226 19.6111C51.5048 22.1391 50.8868 24.0055 50.6995 24.468C51.8565 25.7533 52.5566 27.3905 52.5566 29.3943C52.5566 36.4434 48.3352 37.9955 44.3171 38.4499C44.9643 39.0194 45.541 40.1363 45.541 41.8486C45.541 44.304 45.5201 46.2804 45.5201 46.8852C45.5201 47.3736 45.8449 47.9459 46.7596 47.7657C53.9255 45.3361 59.0893 38.459 59.0893 30.3528C59.0893 20.2165 51.0102 12 41.0448 12" fill="white"/>
<path d="M29.8346 38.3508C29.7948 38.4423 29.6538 38.4694 29.5253 38.4067C29.3944 38.3469 29.3209 38.2226 29.3634 38.1311C29.4022 38.0372 29.5435 38.0113 29.6741 38.0736C29.8053 38.1338 29.88 38.2593 29.8346 38.3508" fill="white"/>
<path d="M30.5652 39.1799C30.4792 39.2611 30.311 39.2234 30.1968 39.0951C30.0788 38.9672 30.0567 38.7961 30.1439 38.7137C30.2327 38.6326 30.3958 38.6705 30.5141 38.7985C30.6322 38.928 30.6552 39.0979 30.5652 39.1799" fill="white"/>
<path d="M31.277 40.2369C31.1664 40.315 30.9856 40.2418 30.8739 40.0786C30.7633 39.9154 30.7633 39.7196 30.8763 39.6412C30.9883 39.5628 31.1664 39.6333 31.2797 39.7953C31.3899 39.961 31.3899 40.157 31.277 40.2369" fill="white"/>
<path d="M32.2517 41.2581C32.1528 41.369 31.9421 41.3392 31.7879 41.1879C31.6301 41.0399 31.5862 40.8299 31.6854 40.7189C31.7855 40.6077 31.9974 40.639 32.1528 40.7891C32.3094 40.9368 32.3572 41.1484 32.2517 41.2581" fill="white"/>
<path d="M33.5964 41.8511C33.5527 41.9948 33.3498 42.0602 33.1455 41.9991C32.9414 41.9362 32.8078 41.7678 32.849 41.6225C32.8915 41.4778 33.0953 41.4098 33.3011 41.4751C33.5049 41.5377 33.6388 41.7049 33.5964 41.8511" fill="white"/>
<path d="M35.073 41.9611C35.0781 42.1125 34.9048 42.238 34.6902 42.2404C34.4745 42.2456 34.3 42.1231 34.2976 41.9742C34.2976 41.8213 34.467 41.697 34.6828 41.6933C34.8973 41.6891 35.073 41.8107 35.073 41.9611" fill="white"/>
<path d="M36.4471 41.723C36.4728 41.8707 36.3237 42.0224 36.1106 42.0625C35.9012 42.1017 35.7072 42.0105 35.6806 41.8641C35.6546 41.7127 35.8064 41.561 36.0156 41.5218C36.229 41.4842 36.4199 41.5729 36.4471 41.723" fill="white"/>
<path fillRule="evenodd" clipRule="evenodd" d="M81.6174 61.5369H1V85.1856C1 87.2922 2.70521 89 4.8087 89H77.8088C79.9122 89 81.6174 87.2922 81.6174 85.1856V61.5369ZM24.5357 72.1757V82.7973H27.2981V72.1757H24.5357ZM24.5357 68V70.6959H27.2981V68H24.5357ZM15.9473 82.8986C17.5003 82.8986 18.8609 82.3243 20.029 81.1757V82.7973H22.3792V75.3986H17.0811V77.4459H20.029V78.4595C18.8883 79.7703 17.6102 80.4257 16.1946 80.4257C15.5762 80.4257 14.999 80.3041 14.463 80.0608C13.9407 79.8041 13.4872 79.4595 13.1024 79.027C12.7176 78.5946 12.4152 78.0878 12.1953 77.5068C11.9754 76.9122 11.8655 76.277 11.8655 75.6014C11.8655 74.9527 11.9617 74.3378 12.1541 73.7568C12.3603 73.1757 12.642 72.6622 12.9993 72.2162C13.3704 71.7703 13.8102 71.4189 14.3187 71.1622C14.8409 70.9054 15.4113 70.777 16.0297 70.777C16.8131 70.777 17.5346 70.9662 18.1943 71.3446C18.8677 71.723 19.39 72.2703 19.7611 72.9865L21.8844 71.4459C21.3896 70.4865 20.6475 69.723 19.658 69.1554C18.6822 68.5878 17.5071 68.3041 16.1328 68.3041C15.1158 68.3041 14.1744 68.5 13.3085 68.8919C12.4427 69.2703 11.6868 69.7905 11.0409 70.4527C10.4087 71.1014 9.90706 71.8649 9.53599 72.7432C9.17866 73.6081 9 74.5338 9 75.5203C9 76.5608 9.17866 77.5338 9.53599 78.4392C9.90706 79.3311 10.4018 80.1081 11.0203 80.7703C11.6525 81.4324 12.3877 81.9527 13.2261 82.3311C14.0782 82.7095 14.9852 82.8986 15.9473 82.8986ZM36.2632 82.25C35.8922 82.4122 35.4386 82.5743 34.9026 82.7365C34.3666 82.8986 33.8032 82.9797 33.2122 82.9797C32.8274 82.9797 32.4632 82.9324 32.1196 82.8378C31.7898 82.7432 31.4943 82.5946 31.2332 82.3919C30.9858 82.1757 30.7865 81.9054 30.6353 81.5811C30.4841 81.2432 30.4086 80.8378 30.4086 80.3649V74.2635H28.9861V72.1757H30.4086V68.7297H33.171V72.1757H35.4386V74.2635H33.171V79.4527C33.171 79.8311 33.2672 80.1014 33.4596 80.2635C33.6657 80.4122 33.9131 80.4865 34.2017 80.4865C34.4903 80.4865 34.7721 80.4392 35.0469 80.3446C35.3218 80.25 35.5417 80.1689 35.7066 80.1014L36.2632 82.25ZM47.4528 82.7973H50.2771V68.4054H47.4528V74.223H40.8148V68.4054H37.9699V82.7973H40.8148V76.6554H47.4528V82.7973ZM56.361 83C55.2477 83 54.4025 82.6486 53.8253 81.9459C53.2481 81.2432 52.9595 80.2027 52.9595 78.8243V72.1757H55.7219V78.2365C55.7219 79.8716 56.3197 80.6892 57.5154 80.6892C58.0514 80.6892 58.5668 80.5338 59.0615 80.223C59.57 79.8986 59.9823 79.4122 60.2984 78.7635V72.1757H63.0608V79.6757C63.0608 79.9595 63.1089 80.1622 63.2052 80.2838C63.3151 80.4054 63.4869 80.473 63.7205 80.4865V82.7973C63.4457 82.8513 63.212 82.8851 63.0196 82.8986C62.841 82.9122 62.676 82.9189 62.5249 82.9189C62.0301 82.9189 61.6247 82.8108 61.3086 82.5946C61.0062 82.3649 60.8275 82.0541 60.7726 81.6622L60.7107 80.8108C60.2297 81.5405 59.6113 82.0878 58.8554 82.4527C58.0995 82.8176 57.268 83 56.361 83ZM69.7435 82.4527C70.3894 82.8176 71.1247 83 71.9493 83C72.664 83 73.3305 82.8581 73.949 82.5743C74.5674 82.2905 75.1034 81.9054 75.5569 81.4189C76.0105 80.9189 76.3609 80.3378 76.6083 79.6757C76.8694 79.0135 77 78.2973 77 77.527C77 76.7838 76.8832 76.0743 76.6495 75.3986C76.4296 74.723 76.1067 74.1351 75.6806 73.6351C75.2683 73.1351 74.7736 72.7365 74.1964 72.4392C73.6191 72.1419 72.9801 71.9932 72.2792 71.9932C71.4408 71.9932 70.7055 72.1757 70.0733 72.5405C69.4549 72.8919 68.9533 73.3919 68.5684 74.0405V68H65.806V82.7973H68.218V80.9527C68.5891 81.5878 69.0976 82.0878 69.7435 82.4527ZM72.4028 80.4459C72.0318 80.6081 71.6263 80.6892 71.1866 80.6892C70.9254 80.6892 70.6574 80.6486 70.3826 80.5676C70.1077 80.473 69.8535 80.3514 69.6198 80.2027C69.3862 80.0405 69.1731 79.8514 68.9807 79.6351C68.8021 79.4189 68.6646 79.1757 68.5684 78.9054V76.3716C68.8296 75.7905 69.2006 75.3041 69.6817 74.9122C70.1764 74.5068 70.733 74.3041 71.3515 74.3041C71.7638 74.3041 72.1417 74.3919 72.4853 74.5676C72.8289 74.7432 73.1244 74.9797 73.3717 75.277C73.6329 75.5743 73.8322 75.9189 73.9696 76.3108C74.107 76.7027 74.1757 77.1149 74.1757 77.5473C74.1757 77.9797 74.1002 78.3851 73.949 78.7635C73.8115 79.1419 73.6123 79.473 73.3511 79.7568C73.09 80.0405 72.7739 80.2703 72.4028 80.4459Z" fill="white"/>
</svg>

</a>
      </div>
    </div>
  );
};
