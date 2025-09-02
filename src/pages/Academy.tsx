import React, { useState, useEffect } from "react";
import Navbar from '@/components/ui/Navbar';
import { Link } from 'react-router-dom';
import { ChevronUp, Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Complete list of all certifications from your images
const certifications = [
  // International Certification
  { 
    category: "International", 
    title: "Adobe Certification",
    logo: "data:image/png;base64,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",
    description: "Master Adobe Creative Suite for creative and marketing excellence"
  },
  { 
    category: "International", 
    title: "Linux Certification",
    logo: "data:image/png;base64,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",
    description: "Gain expertise in Linux system administration and networking"
  },
  { 
    category: "International", 
    title: "Digital Marketing Certification",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWx0cQZGo-qwgSrBJH6TJJRhGecwoyYaKmUZ_15roOia_q0euKSvPNA0kbxKrHlKeV8k&usqp=CAU",
    description: "Learn modern digital marketing strategies and techniques"
  },
  { 
    category: "International", 
    title: "PostgreSQL Certification",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN0AAADkCAMAAAArb9FNAAAAw1BMVEX///8zZ5EAAAAwZZAtZI8qYo4mYI0fXYsYWokgXovz8/Pw8PD7+/vt7e3Nzc3n5+eWlpa9vb3g4OCysrLa2toiIiItLS2CgoLw9PeampqKioqnp6d1dXU4ODguLi5ZWVlERERmZmZRUVHGxsbL1uBRe5+urq6htcgmJia4uLiIiIjT09O9y9jm6/BfhKWsvs6WrcI+Pj4VFRV5l7Lb4+oQEBCJo7tqamrd5exwka5CcZhUfaB4eHjCz9uQqL6BnbYATYH1vjrqAAAa30lEQVR4nNVdaUPqOhOmdtciiwtFUJBFXNjcUPCo7///VS9tZtKkTdsk6Dnc58O9HmhLppnMPkmlsnc4qh3ftC+u+2dPT68HWzydnQ/eLtp3p7XgXw9tN5yetPrnB7k46/+5edhTEoPaw/CmXb9otVoX9Xan8fDQPEq+bTZa/Xy6WPQvfpzC4OjhpF1/69+ePb2+vj7dXj323+qdYe1I6odqd+3ek3CoV9f1zkP1rvsqRxniunH4U5RV71q9XH45G3Q7w2rB3cHwz6Xa0CUJPN6dsuD4/kzqt9oPR4LbDxvXv0EZoLPbBDblSAM83jd4CmstrUFv2SFals3q0eEWR7XT4+FJ+60vYu1WTZu2Ew2Oerw/xpX4oD5tt93OQzN3Qg6bD/VB+pZu0arIRdARiwEJDG62v9jMjOPgqt/706p3Ttr33bfe4DIlSPr1oRSjHddTL72lTt9JhrbBRefuuFarVatH1er2/81hp/4nT4gP3lKE3d/V0uvysNa8q18T1u82VIbYrPMLpqNGW5Mfdf/+OP/HTxsX18Us/HZXpDaCYVtD+vEEnj8o3HrBjq0ro1oOHzo5Cq03/C3josFOwR/ZXzli7no8URC6zbtumra6pkwLwvfRaLpYTCaLxfRz9DITXnXcS37pqSn14GPmvauzTLMzSO6/UNdH4Ww6+f6wbMfdwvcdx3H97R+OY8xXi5cwffkp82syq69Dr75UYWYG1TuiCrpi2oIwzOei2fp/nmNbhmmkYBqW7Xr2+HmaonCYiN5u6dDq9NqbzLBm76PpZLn8Wn0ttxwzHb3P8oYZ3PWuUu8meJkunzeW68VwjfF6tZy+ZyajMnv2rDRpCY2m7XvjCc+niZS4KlkHlLjUi58tVh8bO2YRO4Lj+FuGsY3NfDvE0gUdjCZzY3uvzUyJuX2GuyXye5peU+9zN5++LSzHn0/Z32wmIrtw8VHiOB4ercaeL2aX7Rh9zxl/L97zHzr7Mjwnb7zRZGy+Rvwdo41bRN6WQNdastOeTN9p/jju4JJX5prZxHDtDF0ZfnGt9UI4iaMPzy4e6pZC1/nmCZxYZTc57jcz6YkozBUWpyhcE9Udfm+llRys7SRk1vznR8Eq4gj0NtxshPOS6YveyXdyR+0WyRuKiavi2qQmU7DySqYt/YO+9zFJfjJcy9FGbna8b5a/F3bpvbazSK7vFZMHSvyJypORITtvDPw55c9FKXulR+uuGW6bjct/3v1IbrgvWnuo6KjY+fZU5g0HOKcPXHsat7srZvFKjMB2p/RyKluyRnEtNa/hh68+OMMe4+BmG42Jj/jTToZbWbil5JneM30fSN55RrwBX7bp4BS5isBBRnm35FdcCt46Wbmj8sVnOBvKncicvRRxoAz6OHOGFnEuyvV3R4OrEbabCIvQKCfP8j/xcgx1/OGpu+IWXag3c+4SiVMStRmY7pxOXziWGIpHubmXWmDs1CFfzrWIsz+Qra2diIseZbzg0AIJ8kwPZztAL5Oljji6V/CvZZkmFf+Ei/yvN/M5461UPmRmDy9H6VhPiLshnzTIv140RPkW7gSe9qwlLTOPe6azJ0UeMmcDyEvcgCtu6sZa4s4aw+0LvZeTQWIXBBuJEVGJBgEr6gicclO30OJLw4Onz/xdFx3C+UDyQgnyTHvG8eYtUkfk6Dm8KL1FY6GRMtdWdBkktsG7BLPTq984+X/IrcOJjo2yZYzZz/IlGfAGNcNIwix0YKU+cAoA1AFx2wPNccCTw5+buQgWJU/mrblEjQREAwzYmezvturAeVn9iLxMkDDnd/mT8RW/sSqP/H1C/jHWkgnWGqZO790UwFmjdJCQLF7AMuMDIzFrIPG0xoACc7W7Hk/DX6FkKRfGoBVOmfkioaJHkCl6fsuG3D37SZGC8NBKmJY+3Zmw3BiLyUH85z1MvxZj+mAHLX941RG46AI8l3EGLpCzxA9ijepQ7+Wb4S7ythQuCM5SVWyBHd+jcrLJCpipllRAWaV3dzlw0KU/YG6IWPkTk3RJBcz5LlIBWefjZ5Ud8wPoOK7LxkdmmRhfZwEGI7o76APTAaH2GzKFAGVyWBxoMW1CHaHp9RCFCjHDQi2Zgoz5OzIlhmnA5JXYiQ6hDjIGR+j9DHd4++h76BkCcnC+KjJCHeRPm1BXrRy+Mga1nlgwyVLWdHolATZkidIDW55SV8M/4nnX4S30fX6RMQ3GOS4SXSbPmVVQCE/kzm8dkYkGgp4hIA0MA44KJ49Qd49SZcg6slqep0d4ZvZLyg6BuqxwkHAN1Qg3rPuj9/rJE6d69rc8/Enp5OEbILUXV7gA38iNOlOHtp0WV6v9Ehhk+VEtExbnNToGZAG24g8Dnfj4X1p2RjJ5+ZIdBdwAGZJQdxF/GOpIPZ9oO037Wwk2iM38C8CuoKEHYrS09anzCL98/rJQiVDqaDlgjx6gdUnECwltajnm8EL13F41UCc5b5w+CUgfHeCUdXekzgahopdYUYT3WawUwCY8ppGHa5Y6De5CZvh9oWIk8nmRMw0QmbujDvmu1MFamO2WsSuCZfsuFGB5/yN2ZF78BmJi1MyE2J8+Z4LnxZvQcYleVGvl70q07Rrzr8XnaBYG4ez9ZQQRb7GxiesyiWfuSh1Y5YmlYrmeM19+jt5nUdXc19jTTzKbvr0aZQvltvgSrnJUCH1qO//ZVSOErMi03c16wZe1hRNDMyvkb6aVHIjNPjAsjohTd11BfUe0uYatgrZPZIeZvvP9IqgVCybFRXs5T6ZxTAFGQupAZEIcLKKpjoovgvoqQdvnw7K8zSKvljGUKBtKPzjJnIuoE8o/yOCByIzSkUS+QIGH6hASVje8+Ug8EIK1InnWRlwKDRCbmiBUwHeNCqpIAdUlzoAydRDv2BTSVpFL7bPP5YiLS8Cnn6MRFkkK1x3yEVR1RJc2WN+8NJSdAVTZZVgyfB99TkdMxWaQLV4tAA2ub3XN18aN4Uf/AYUnzMPxWYS4CgCWIKkQUDcWfYFYmy3WY8uLxuJtnunq+VRwIiya1hpt3LhSGSUC2OwL0UA9TqjE5UYQNWrmT3ghmJcMr3q58ZJiXNNOqr4ULFEP+XLtWc72FX1NVuM4tWw6hBtEXgJ+d0IoiqvWD0lxDuk8UA/a+dx6CxYbH7RKpNRdz7cM24KhiuWcCLQMcu2b1hJufyGvjFAgygjgsoOWD5KPvGSMlVBZ4bkMdcHSoIFwd/35Mpu9LNaeTWN10oY21lxOPMNMpEuUQ8B8yVog/lDAEYLOyGsgEgZCD8qWfkJdsPQTdnGoJg6/XCxCyrPs08DKk9A2bEyPVIi6wgUpcoFgkYBzd00uvEAvPe+uQmA1QOVzw9pbHiPQJz6wk2wcH+2frWC0klLdScTY9ip/FiDKDpVUUGp0Rw3qSp51WkQdFFGs+XoSlmErHnCaLGfgBEXsR3NbMXHob4UCLsB3AhWoULkPtSukkF1ZaAI7pGOMzDuvhJ79nQxXAsiO8Zv255HpOlsTkQRvTcQFuBiu2NmqBNSRrWgITZiWzM/5mLMhJgL5SzLTgHX45Jm2t5mPXeApnywEUYgKuAg03AB//ZzlU1XqQJtnnWUXirGDZ5fqYEmdgOxHn5kUs4JKEylzCENDMSbW0YL/CjJGNQeXGQmFY0zeZ6NJXGANDCVZ8IHBDNHVZJSCuDcu1rfEhI5RZ+1o1cQ5cHsgGonjeaAkcE3IPTz/jeFyFoh2NAkJcWd0XZAsEGTwZHUSAlVo8awUqaksMMyWfSaKp032JmB+kJFvlLomK0JfFMNioIAqxbdhOEdO4aDPmFUgwAOC9D7OKjRc3FHqKq/MOgxlyUqNpGRSIH0jxxn55hbKsKxQwSD8JevyxBiwk6nowCLPlVwGJo2k0ATxl/XHwGbPMpgJTSzNlD6o0OAm+YeiWJGkDpS+ZEgR7MysVgOdlv0CLfU2Z4bFGHLWitrCQ+oE65wFLhi5h4ICCTNNG146eJp6PjIm2/5aZa0VxSJETJKUmJBU2EmpUxSamVUCoeHs8gWyq2l9kFBMyo2CkllID3suNewkMCjzUDSIM5abw4WGs4+HHsI6SxxkSiDqJ2nqAiTnDlWC5MMh25HJ//s5c4fVHv2UocKQ/JonqYpgSVIHhXKSpQMYz0h/7uVExECVgwV9yRGHCp6sRfnwRwRJmWm4Sq8Ol2la+4NiSUs+HERdxJhonJG9DwIl6mgsugS58iAHUHqWGgsI0/QEYGDuPCsxIzzGn2KNpsrCQ+rKOE6ROqzHTDE8kJHR5uRdQCn7bSWFC/ZjpegD8lDZhIPbKev742NTnAzSI2WJoSV/n3LtEKDPSQhQqTbDzrXnebh5VkYOLDIdqRCk2IrGENWBmDFR2EBdu0qeC3+vlLqRGnXorvGZDfRIOJ2Myq6RtTEBJNQCPQkqCy838iCmTpxVFACHnMrHw6dcBAFju5D6OclS12UVhYohnRc1yqFOnusxUMoRIjQKoLQXG14FGdIT9huVhZcjozPwFdcdZUJOt5lQ2MQKPrwQ3APR9j+cIa1S0Jbrk6TgqsnMCNCfwikFP+sFo0yB/Y2EG00RRUiyCSoeLObTSqlTcc4JIWA7crf4GWMF7ZRhjrKLQQo7oJFLoX7bl7zDJdcpGLHYghBwEiSzEFDvg0wRb7sF4rSavrlsCLDMS1PSJrlOpQCX5rmYycuIaBwAyhTRJp70WxJLkm8psSVDeRgIUskx4T1sZ5iTDnWi7wPbV7xVxHhiF570INBiKgthUzWsEupGpmMmD0wjhluJmIe269wtqQjxr/A82eUBMYLSeAmGl5Xi+BgKYsQmvE36CZZKg1PezyGOb8uWTgWhIVa2UEFxKMaCMQuYSGR0SZBXIGsCnMcGaXlUWR9PmoPyQ/4pSCoOHrSrkNa64DoHnYXhJZCJT3nEYUwCUkGyss0tSNcwwEGp5mCwUpjqNz5Ngm0/6W2LBKjrGGM4dyXrFDWzav6MlkugYc9ThzINIicHBRtaPrDGmDBjJYBkFBasJfWeBdR5GB3jqcO9JQZk6Bf5xKHzB5dIGmPA+CX5fpwC9VIm2jMJOoqjDkUM7tBXuLEvyVpCe6/kTh3IG8UvA1WuWqiUuxWkuMVKFbSfr/O9gwTgBRHHXTKfge+yUAphgkavHR0EB7H12HoVfLM4dcUb19Y4O1RSAIDDVchz+AqK+wJzgEKfbLmDiWw3eWc4ddeFxGE6AeISkn6CV9wgQK75ZF+/IkyIrpMBMfUqzkpl6lI6QdJcwehOwcCx5S/UK21H2RHE1NF6FRMcWXR90pvbZXDKmTNy5gou84IgKPKW5r40aMXFgg4cqYVDnwrZVrFPzuGcZWDZoK04Js6ODlseNbsuMBAWJIJkbht2wE1dv5Q4dJKIypd0YUv3eEArTEumkJ9AT8iBdRAkzsGD9NThpbCvmFya0iobPLbB67ewof8dOiZWZOFHkAEpX3UROLUoyZrIeDmTh+rgfYfeSuSPFTDm0kExjNvaFWyknABKisk/JKUmLu+cy1Go7tLSjJ5QCGwwpoXTt3K6jmDIsaakGMBG6S+hRrdgYDs1/XpcbfmLB4G/7F67hYAtLSD2IltOieWvIt7EgMpubbFsMevWKvDgocGrjIWZoMtKTck6ZrpvZra+JJEpOzaOsm0PMx/SX3QXXtlTP441FHryZl8yuTGUbfrqgH9OhBXuBIoxzHtJ4lBqgoCVzgNju8yLn2JOrAHaeZsEn7YAzDx02HGPWvmjQVrsXIeyY7Kxbj+9ETMwreaulQxMFCTbVQfMDiJQlLDLwwPnBsm6mxZlHH73eOTZH9iKi4ZYXnDnOzhU5pEbf1AtnEmiQWCTV+nlkuwlWFnYSa7b13fKM/CX/EDxLAdU5LXjdpcM/umtI04ncI2HFSaQWPrb3/QJ4bePjAh2zM/szMgrPTwR4LoSHN/Urx9TB4a1xNTVuG/l1ZSbkFeZrRzPsU0TGVa12FoME4MQMXoHxcg5o4Tc9iqsqCiCx3HOaDnf2PjRD21ly+zfj0GgIghtT7gPVF7p1nL0pz/Sy5kejRNGB678BHkebVAJyonLyeWRr6D+QTZfkuzAmsXLcrF8NtSOyRDA8sZL/BGpw+eEbhFJMmMTlFzYNtk9Nxfvq7SqV4M/Zqyxu9ssMWe9dqMWBEGzjV+KTmCB8AqYplKqCncHjI70y7fX3+f60sX0Ugrh4WKAZD09vl3cnbJSBKZWaKLBbZBzkFEK1FaJYji9Ri6TPmuTxxzQweIwR3mT2TsTfQUOLxRxloeyTKqJQJ08XZ/knBklLaTSxC3Fz8sD14SQAsw4tJiVegrUiK6yR+D1WhfZ8opQqaeegmtWlKHupoA6sFdgcGWTR8/ZCNKHwtJVPaND0rM4KXME07WzlPAJOgXUQdsvfln8vl20aivpQyjxFLbZh+c/h1IPEyM5nMBwLcPdLPLmj241MyigDv0g8C0KJy+xnwcp4tDUCy0rOo0M97/U3zsJ92o3fW+dOlwunI0m35v/IReBp9MXUwfSAXJ5RT56Yh39SRGHVaBwrogFQWul2lYAhC+YTmXb94zNfP39NZksV/OPjeG6vjemB13Bi87Lo3c53sp3hCzc9pE5FpDgFr/AKC321GsYnVBkljLGTcuKDuJzbDuK51iMWE07R2lA7gGKc3IFuUk3KuikiHvEDP0Kh4ShEfXoGK05zVcnpjtPTihDC1tQQwy45uY2FJ+9YGLEi0YBEJQnmG1mPd19NjFYm1vRbLns5jV4il9BgDpVMycWLFTRnbKU3XaTo4ZGzP7O2tsZFvYamZbjzVlDpp2WaiKAkMBAqCjHQWMBRwlpg/Ypo47YxgHTq2jOHe2DTc+dadmuM55wp0LSI5CvKgVAzx40siASi8eAUC1+3Unxwow9RAvfhQZ1mBwxPT+SIZE0sR3f9eyPr09e9R0n1lJxCBcED1qiGblJz6WKvfmni6y78cISR1WHehjCpvZCdKrqfD6er59Xy2l2l7gj5qzgktQCBumxgmfCk2fRKEf0yI7AOlqwUYvkcuGWRIVwJE3o9oE0cUluDCeFIy/RBdtn9rM+fjDl9ltJiNPQCOzpkrkIWJ10JZFZGABv4rwsE/IsF5fy9h1cZSZu9G1wm+FbRrKbjDp1Ob4di2qdPQu+JxN7R8FC4xML2I/PTI4LjHQBn7N+X0QxFP7lsxu7qW947hXtebfF4R0fZpE8zB0nmzYjzuZuLK6+8eVEL+CcXh+8L9aG66eUh+l9sw9V3n6HlvKJcHRcTx0dP5BLVVYSsz9JRLys5vMv+mtB9GRM624p87KBIcs1+S3H1KmDWoDO28kDs55qw5NW7/Egjczh1wVvBu/JKTiOX1sf/jGaZ45TNm3ejtCizuQ2Xz94vb0SBMQAF/LZrgpzfrGIlwNwV6nEfJ98GL7rbPVtbL+7zmbFLBmwq5WPPuEPiinCn5ITwDOgOuRP5qsq7I/EGXTB++fyeT0ff8yfv/izvatPutRxh/zk40I2wcyAqv9+ysy6S54rkx8cam6TkbS1FpLWa6iTFmFAn8AGP5scn5Qv5SiBT/5STjJD3KEgddBq5OXrVMg76A5r22V72OykA0TXBeXkFTR7NKmDeofTAwFue62GtAYQg9OVT5eXr6Lfqee/vhPQSJrUgTInDnK/f3l7dns5uO7Wb4a1QyURmYN0QIgBo0q7DdEEPrToy9Cljqg7EoDVkByluMtQBWjwcb7z1s1DFWkMjpodbtrJx6pSxYQGxnvmGT+MGkcEYrB9k0FGDb1eDmJkdK4mdRAzil/Ua/4Qd8LwMj3YKzBg2ukv8qBHHUZV4vcrbmv9Efq4WWIUjHhi86hTtcSwBSFmhUvRwH4IR8OL7lZm9a/vG/zqPi63krSpw83X40f0f5G6AjRbV7lU9dvVHaiD8lUSgswPwP46gR1Rrr7XiUxbhrqlInUuq+7yunb/DmrHndZb7/Hq7Lzfe2u1h2hHsNQp+uawdRrxpIsisP8O8dB0doWim1SQAGR6y6L9QBxEJbaaInX8aRz7SV3smxHfUjFaiylzdtPufUMci9c6HxHD7ERGKVSa/kXE0R3i/irmEUDdwWYAw6If+WeI/UES1FbMcEGoFrw7qZ6Rv47YliFRXUXqwLuD8JVqWOjv4C1hK7Wd9NC7g8CxfoThNxHHIondrUidkTpJch9RT6hT2ywdg5lv/9KILkPsAxJ/UO08YAxmkpC6VJvd30e8bEhcUG3rWAhmQrgvGzLeC8QlJLAjtRJ1EMwEdbefpgoJaEKOWok6/jRCzYDzbyMuS4PqEKWTXaBb/2SflTnxrCHRpzJ1BhS5FNXK/ntUmbCBSt85F+4T1znvAeKW0z75W2lPMVAIl3sQd8hHEMWUIFynspkFlKrAgVP76btWSKz1icTgVcK1EBCDgkqJDQH+DeKFQ4KgKmEj2CN0rz2ECuQ4IPSgYkYTD6G910IFFBbhLAUnAW1okmKTbSv/+xgmhua7fOgBq/tIOil3H7t/jhpjaAqa7nOATfT77LrGYFhLft8AcMyP99m5ixHpYyjmlVbn2ENC4tCFW739Y7QSO1E6Go0dRoN9NqFjxEl9OIFB9pQ/2GKR5McKto/892gmUk92TzgMst/stxkW4+xAdeMW7OXo77ehEiMuOINOJynWxHKA5t5LzAroc8hySFXk4BaLJJS5nxkEijisBU7QTII6bLojAaPCzpB9QJdxYpal1piPXYv3e26FAYZM9KG0VdjH1pPmnrsHFPE4oXdj5BaRx5TB9/c51Meixay8dOMNB9egZfDEs9vTCDsHkmHEePJE3LFomL41oake7kzMPQevlrEzhSPN9oxJ0psFGdeCXa73CGQmaCXbbM7vSmL53viL7YqBxmq5Xfr+PUhYMikYenl2fd9xbMdxXcdYL7guSAyv3+5nSjKLYYbTgpfpZPm1XExf0r2Ch9grsN8GJoue9EKS6DzeO2DTW5mf3aDtSzvW4/9dYENmv4DfDm9oU8z5f4ctY7Rw4Pc5wqJBe6q30vK/IlAoksHfZ9qcmydcAeueJpILwdRQn7VOTo8OD4PDw8PTm/s+36TS+08tOYpMa8pT+oMtrvY24VOG8m3qenvuiheiVljhf1b/b/JkgmG6xw3Rr4t2cPvP4bSVafW8bAnbwP6bCJqd+95VJCjP+tf1m9Of9+L+D6+6TgMXfzg+AAAAAElFTkSuQmCC",
    description: "Database management and advanced PostgreSQL programming"
  },
  { 
    category: "International", 
    title: "INTEL Certification",
    logo: "/api/placeholder/64/64",
    description: "Hardware and processor technology certification program"
  },
  { 
    category: "International", 
    title: "Amazon Certification",
    logo: "/api/placeholder/64/64",
    description: "AWS cloud computing and web services certification"
  },
  { 
    category: "International", 
    title: "Novell Certification",
    logo: "/api/placeholder/64/64",
    description: "Enterprise networking and directory services"
  },
  { 
    category: "International", 
    title: "NetIQ Certification",
    logo: "/api/placeholder/64/64",
    description: "Identity and access management solutions"
  },
  { 
    category: "International", 
    title: "Suse Certification",
    logo: "/api/placeholder/64/64",
    description: "SUSE Linux enterprise solutions and administration"
  },
  { 
    category: "International", 
    title: "VMware Certification",
    logo: "/api/placeholder/64/64",
    description: "Virtualization and cloud infrastructure management"
  },
  { 
    category: "International", 
    title: "MongoDB Certification",
    logo: "/api/placeholder/64/64",
    description: "NoSQL database development and administration"
  },
  { 
    category: "International", 
    title: "Android Certification",
    logo: "/api/placeholder/64/64",
    description: "Mobile app development for Android platform"
  },
  { 
    category: "International", 
    title: "Google Certification",
    logo: "/api/placeholder/64/64",
    description: "Google Cloud Platform and workspace certifications"
  },
  { 
    category: "International", 
    title: "C++ Institute Certification",
    logo: "/api/placeholder/64/64",
    description: "Professional C++ programming certification"
  },
  { 
    category: "International", 
    title: "Corel Certification",
    logo: "/api/placeholder/64/64",
    description: "Graphic design and digital art with CorelDRAW"
  },
  { 
    category: "International", 
    title: "Microchip Certification",
    logo: "/api/placeholder/64/64",
    description: "Embedded systems and microcontroller programming"
  },
  { 
    category: "International", 
    title: "HP Enterprise Education",
    logo: "/api/placeholder/64/64",
    description: "Enterprise infrastructure and server management"
  },

  // Professional Course
  { 
    category: "Professional", 
    title: "Diploma in C and C++",
    logo: "/api/placeholder/64/64",
    description: "Comprehensive programming in C and C++ languages"
  },
  { 
    category: "Professional", 
    title: "Diploma in J2EE",
    logo: "/api/placeholder/64/64",
    description: "Enterprise Java development and frameworks"
  },
  { 
    category: "Professional", 
    title: "Diploma in .Net",
    logo: "/api/placeholder/64/64",
    description: "Microsoft .NET framework and C# development"
  },
  { 
    category: "Professional", 
    title: "Diploma in Core JAVA",
    logo: "/api/placeholder/64/64",
    description: "Core Java programming and object-oriented concepts"
  },
  { 
    category: "Professional", 
    title: "Software Testing",
    logo: "/api/placeholder/64/64",
    description: "Comprehensive software testing with Selenium automation"
  },
  { 
    category: "Professional", 
    title: "Diploma in VB + SQL",
    logo: "/api/placeholder/64/64",
    description: "Visual Basic programming with SQL database management"
  },

  // Certificate Course
  { 
    category: "Certificate", 
    title: "Diploma in PHP & MySQL",
    logo: "/api/placeholder/64/64",
    description: "Web development with PHP and MySQL database"
  },
  { 
    category: "Certificate", 
    title: "Certified Computer Accountant (Tally ERP 9)",
    logo: "/api/placeholder/64/64",
    description: "Accounting software expertise with Tally ERP 9"
  },
  { 
    category: "Certificate", 
    title: "Diploma in Web Designing",
    logo: "/api/placeholder/64/64",
    description: "Modern web design with CSS3, HTML5, and responsive design"
  },
  { 
    category: "Certificate", 
    title: "Diploma in Animation",
    logo: "/api/placeholder/64/64",
    description: "2D and 3D animation techniques and software"
  },
  { 
    category: "Certificate", 
    title: "Diploma in Computer & Networking",
    logo: "/api/placeholder/64/64",
    description: "Computer hardware and network administration"
  },
  { 
    category: "Certificate", 
    title: "Diploma in Information Technology",
    logo: "/api/placeholder/64/64",
    description: "Comprehensive IT skills and system management"
  },
  { 
    category: "Certificate", 
    title: "Flash Training",
    logo: "/api/placeholder/64/64",
    description: "Adobe Flash animation and interactive media design"
  },
  { 
    category: "Certificate", 
    title: "Diploma in Photoshop",
    logo: "/api/placeholder/64/64",
    description: "Advanced photo editing and digital design skills"
  },
  { 
    category: "Certificate", 
    title: "Business Intelligence - QLIK",
    logo: "/api/placeholder/64/64",
    description: "Data visualization and analytics with QlikView"
  },
  { 
    category: "Certificate", 
    title: "Blockchain Technology",
    logo: "/api/placeholder/64/64",
    description: "Distributed ledger technology and cryptocurrency development"
  },

  // Community College
  { 
    category: "Community", 
    title: "PMKVY",
    logo: "/api/placeholder/64/64",
    description: "Pradhan Mantri Kaushal Vikas Yojana skill development program"
  },
  { 
    category: "Community", 
    title: "TNSDC",
    logo: "/api/placeholder/64/64",
    description: "Tamil Nadu Skill Development Corporation certification"
  },
  { 
    category: "Community", 
    title: "NIELIT-SCI/IMAC CC",
    logo: "/api/placeholder/64/64",
    description: "National Institute of Electronics & IT certification"
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

const highlights = [
 
];

export default function CertificationPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const categories = ["All", "International", "Professional", "Certificate", "Community"];
  const filteredCertifications = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Enhanced Hero Section with Animations */}
      <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-800 text-white py-20 relative overflow-hidden pt-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          {/* Animated Title */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-blue-300 text-lg mb-2 font-semibold tracking-wide">
              Industry-Recognized Certifications
            </p>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Accelerate Your <span className="text-blue-400">Tech Career</span><br/>
              With Expert <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Certification</span>
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Our certification programs combine hands-on training, placement assistance, 
              and interview preparation to help you land your dream tech job.
            </p>
          </div>

          {/* Animated Highlight Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {highlights.map((item, index) => (
              <div
                key={item.text}
                className={`bg-white/10 backdrop-blur-lg rounded-2xl p-6 transform transition-all duration-700 hover:scale-105 hover:bg-white/20 border border-white/20 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-3xl font-bold text-blue-300 mb-1">{item.number}</div>
                <div className="text-white/90 text-sm font-medium">{item.text}</div>
              </div>
            ))}
          </div>

          {/* Animated CTA Button */}
          <div className={`mt-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           
          </div>
        </div>
      </div>

      {/* Enhanced Category Filter with Animation */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 animate-pulse"
                  : "bg-white/90 text-slate-700 hover:bg-blue-50 hover:text-blue-600 shadow-lg hover:shadow-xl"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category} {category !== "All" && `(${certifications.filter(c => c.category === category).length})`}
            </button>
          ))}
        </div>

        {/* Enhanced Certifications Grid with Stagger Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCertifications.map((cert, index) => (
            <div
              key={`${cert.category}-${index}`}
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 p-6 group border border-white/20"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <img 
                    src={cert.logo} 
                    alt={cert.title} 
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'block';
                      }
                    }}
                  />
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg" style={{display: 'none'}}>
                    {cert.title.charAt(0)}
                  </div>
                </div>
                
                <span className={`px-4 py-2 rounded-full text-xs font-bold mb-3 transition-all duration-300 group-hover:scale-105 ${
                  cert.category === 'International' ? 'bg-purple-100 text-purple-700 group-hover:bg-purple-200' :
                  cert.category === 'Professional' ? 'bg-green-100 text-green-700 group-hover:bg-green-200' :
                  cert.category === 'Certificate' ? 'bg-blue-100 text-blue-700 group-hover:bg-blue-200' :
                  'bg-orange-100 text-orange-700 group-hover:bg-orange-200'
                }`}>
                  {cert.category}
                </span>
                
                <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-slate-600 text-sm mb-4 line-clamp-2 group-hover:text-slate-700 transition-colors duration-300">
                  {cert.description}
                </p>
                
                <div className="flex gap-2 w-full">
                  <button
                    onClick={() => alert(`Learn more about ${cert.title}`)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  >
                    Learn More
                  </button>
                  <button
                    onClick={() => {
                      setForm(prev => ({ ...prev, course: cert.title }));
                      document.getElementById('enquiry-form').scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Section */}
        <div className="bg-gradient-to-r from-slate-800/90 to-blue-900/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-16 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-bold text-purple-400 mb-2 animate-pulse">17</div>
              <div className="text-white/80 font-medium">International Certifications</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-bold text-green-400 mb-2 animate-pulse">6</div>
              <div className="text-white/80 font-medium">Professional Courses</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-bold text-blue-400 mb-2 animate-pulse">10</div>
              <div className="text-white/80 font-medium">Certificate Courses</div>
            </div>
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl font-bold text-orange-400 mb-2 animate-pulse">3</div>
              <div className="text-white/80 font-medium">Community Programs</div>
            </div>
          </div>
        </div>

        {/* Enhanced Enquiry Form */}
        <div id="enquiry-form" className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-2">Ready to Get Started?</h2>
              <p className="text-slate-600 text-lg">Fill out the form below and we'll get back to you shortly</p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-slate-700 font-bold mb-2 group-focus-within:text-blue-600 transition-colors">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105"
                    value={form.name}
                    onChange={handleInput}
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="group">
                  <label className="block text-slate-700 font-bold mb-2 group-focus-within:text-blue-600 transition-colors">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105"
                    value={form.email}
                    onChange={handleInput}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-slate-700 font-bold mb-2 group-focus-within:text-blue-600 transition-colors">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105"
                    value={form.phone}
                    onChange={handleInput}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div className="group">
                  <label className="block text-slate-700 font-bold mb-2 group-focus-within:text-blue-600 transition-colors">
                    Select Course *
                  </label>
                  <select
                    name="course"
                    required
                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105"
                    value={form.course}
                    onChange={handleInput}
                  >
                    <option value="">Choose a course</option>
                    {certifications.map((cert, idx) => (
                      <option key={idx} value={cert.title}>
                        {cert.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="group">
                <label className="block text-slate-700 font-bold mb-2 group-focus-within:text-blue-600 transition-colors">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform focus:scale-105 resize-none"
                  placeholder="Tell us about your goals and any questions you have..."
                  value={form.message}
                  onChange={handleInput}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white py-4 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg hover:shadow-blue-500/50 relative overflow-hidden group"
              >
                <span className="relative z-10">Submit Enquiry</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>

              {submitted && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 text-center transform transition-all duration-500 scale-105">
                  <div className="text-green-600 font-bold text-lg mb-2">
                    ✅ Thank you! Your enquiry has been submitted successfully.
                  </div>
                  <div className="text-green-500 text-sm">
                    We'll get back to you within 24 hours.
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 border-t border-slate-700 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">TIMA Integrated Technologies</h3>
              <p className="text-gray-400 mb-4">"Together We Rise, Together We Thrive."</p>
              <div className="flex space-x-4">
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all cursor-pointer" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-400 hover:scale-110 transition-all cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 hover:scale-110 transition-all cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
            
                <li><Link to="/division" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                <li><Link to="/academy" className="hover:text-white transition-colors">Academy</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>admin@thetima.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 93637 21147</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>TIMA Integrated Technologies Pvt Ltd, 50-A, AA Road, Rathinapuram, Madurai - 625011</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
           
              </ul>
            </div>
            <div className="md:col-span-1 w-full">
              <h4 className="text-lg font-semibold text-white mb-4 text-right md:text-left">Our Location</h4>
              <div className="w-full md:w-[320px] ml-auto">
                <iframe 
                  title="TIMA Location"
                  src="https://www.google.com/maps?q=TIMA+Integrated+Technologies+Pvt+Ltd,+Madurai&output=embed"
                  width="100%" 
                  height="180" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md border border-slate-700"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-8 border-t border-slate-700">
            
            <Button 
              onClick={scrollToTop}
              variant="outline" 
              size="icon"
              className="border-slate-600 text-gray-400 hover:text-white hover:scale-110 transition-all"
            >
              <ChevronUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
