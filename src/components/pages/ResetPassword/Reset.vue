<template>
  <div id="app" class="app login">
    <div class="wrapper">
      <header class="front-header">
        <div class="center">
          <a data-v-429d63aa="" href="/" class="logo-link">
            <img data-v-429d63aa="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCA0NTIgNTMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1MiA1MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzIyQjZDRDt9DQoJLnN0MXtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiMxRDFEMUI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxnPg0KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzcuNywyMy44Yy0wLjItMi4yLTAuOS00LTIuMy01LjVjLTEuNC0xLjUtMy4zLTIuMy01LjgtMi4zYy0xLjMsMC0yLjQsMC4yLTMuNSwwLjdjLTEsMC40LTEuOSwxLTIuNiwxLjcNCgkJCWMtMC43LDAuNy0xLjMsMS42LTEuNywyLjVjLTAuNCwwLjktMC42LDEuOS0wLjcsMi45SDc3LjdMNzcuNywyMy44eiBNODIuNSwzNi4xYy0wLjMsMC40LTAuOCwwLjgtMS40LDEuNA0KCQkJYy0wLjYsMC42LTEuNSwxLjEtMi41LDEuNmMtMSwwLjUtMi4yLDEtMy42LDEuNGMtMS40LDAuNC0zLDAuNi00LjcsMC42Yy0yLjIsMC00LjEtMC40LTUuOS0xLjFjLTEuOC0wLjctMy4zLTEuOC00LjYtMy4xDQoJCQljLTEuMy0xLjMtMi4zLTIuOS0zLTQuOGMtMC43LTEuOC0xLjEtMy45LTEuMS02LjJjMC0yLjEsMC4zLTQsMS01LjhjMC43LTEuOCwxLjYtMy4zLDIuOS00LjZjMS4yLTEuMywyLjctMi4zLDQuNC0zLjENCgkJCWMxLjctMC44LDMuNi0xLjEsNS42LTEuMWMyLjQsMCw0LjUsMC41LDYuMiwxLjRjMS43LDAuOSwzLjEsMi4yLDQuMiwzLjdjMS4xLDEuNSwxLjksMy4zLDIuNCw1LjJjMC41LDIsMC44LDQsMC44LDYuMmgtMjINCgkJCWMwLDEuMiwwLjMsMi40LDAuOCwzLjRjMC41LDEsMS4yLDEuOSwyLDIuN2MwLjgsMC44LDEuOCwxLjQsMi45LDEuOGMxLjEsMC40LDIuMiwwLjcsMy40LDAuN2MyLjQsMCw0LjMtMC40LDUuOC0xLjINCgkJCWMxLjUtMC44LDIuNi0xLjYsMy4zLTIuNEw4Mi41LDM2LjF6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNS40LDBoNS4zdjE2LjNjMC40LTAuNSwwLjgtMSwxLjMtMS42YzAuNS0wLjYsMS4yLTEuMSwxLjktMS42czEuNi0wLjksMi42LTEuMmMxLTAuMywyLjEtMC41LDMuNC0wLjUNCgkJCWMzLjYsMCw2LjMsMS4xLDguMSwzLjJjMS44LDIuMSwyLjYsNSwyLjYsOC43djE2LjhoLTUuNFYyMy44YzAtMi42LTAuNi00LjUtMS43LTUuOGMtMS4xLTEuMi0yLjctMS44LTQuNy0xLjgNCgkJCWMtMS42LDAtMi45LDAuMy0zLjksMWMtMSwwLjYtMS45LDEuNS0yLjUsMi41Yy0wLjYsMS0xLjEsMi4yLTEuNCwzLjVjLTAuMywxLjMtMC40LDIuNi0wLjQsNHYxM2gtNS40VjB6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik01LDE2LjdIMHYtNC41aDVWM2g1LjR2OS4yaDguMnY0LjVoLTguMnYxMy44YzAsMi4zLDAuNCwzLjgsMS4xLDQuNmMwLjcsMC44LDEuNywxLjMsMywxLjMNCgkJCWMxLDAsMS45LTAuMiwyLjYtMC41YzAuNy0wLjMsMS40LTAuOCwyLTEuNGwyLjUsMy4zYy0xLjIsMS4xLTIuNCwxLjktMy42LDIuNGMtMS4yLDAuNS0yLjcsMC44LTQuNCwwLjhjLTMsMC01LjEtMC44LTYuNS0yLjQNCgkJCUM1LjcsMzcsNSwzNC41LDUsMzEuMVYxNi43eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNi4zLDQ3LjFjMC40LDAuNCwwLjksMC43LDEuNCwxYzAuNSwwLjMsMS4yLDAuNCwxLjksMC40YzAuNiwwLDEuMi0wLjEsMS43LTAuNGMwLjUtMC4zLDAuOS0wLjcsMS4zLTEuMw0KCQkJYzAuNC0wLjYsMC43LTEuMywxLjEtMi4xYzAuMy0wLjgsMC43LTEuOCwxLjItMi45bDAuNy0xLjhMNDIzLDEyLjJoNi4ybDksMjEuMmw3LjktMjEuMmg1LjlsLTExLjIsMjcuM2MtMC41LDEuMy0xLjEsMi43LTEuNiw0LjMNCgkJCWMtMC41LDEuNS0xLjIsMy0yLDQuNHMtMS44LDIuNS0yLjksMy41Yy0xLjIsMC45LTIuNiwxLjQtNC40LDEuNGMtMS40LDAtMi42LTAuMi0zLjUtMC42Yy0xLTAuNC0xLjgtMC45LTIuNS0xLjVMNDI2LjMsNDcuMXoiLz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM5NS44LDE4LjNjMC0xLjIsMC0yLjMsMC0zLjJzMC0xLjktMC4xLTIuOWg1LjJsMC4yLDQuMmMwLjQtMC41LDAuOC0xLDEuMy0xLjZjMC41LTAuNiwxLjItMS4xLDEuOS0xLjYNCgkJCWMwLjgtMC41LDEuNy0wLjksMi43LTEuMmMxLTAuMywyLjItMC41LDMuNS0wLjVjMy42LDAsNi4zLDEuMSw4LjEsMy4yYzEuOCwyLjEsMi42LDUsMi42LDguN3YxNi44aC01LjRWMjMuOA0KCQkJYzAtMi42LTAuNi00LjUtMS43LTUuOGMtMS4xLTEuMi0yLjctMS44LTQuNy0xLjhjLTEuNiwwLTIuOSwwLjMtMy45LDFjLTEsMC42LTEuOSwxLjUtMi41LDIuNWMtMC42LDEtMS4xLDIuMi0xLjMsMy41DQoJCQljLTAuMywxLjMtMC40LDIuNi0wLjQsNHYxM2gtNS40VjE4LjN6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMzcuMiwzNC4xYzAuNiwwLjUsMS42LDEsMi44LDEuNWMxLjIsMC41LDIuNywwLjcsNC41LDAuN2MxLjQsMCwyLjYtMC4zLDMuOC0wLjhjMS4xLTAuNSwyLjEtMS4yLDIuOS0yLjENCgkJCWMwLjgtMC45LDEuNS0yLDEuOS0zLjJjMC40LTEuMiwwLjctMi41LDAuNy00YzAtMS40LTAuMi0yLjctMC41LTMuOWMtMC4zLTEuMi0wLjgtMi4zLTEuNC0zLjJjLTAuNy0wLjktMS41LTEuNy0yLjYtMi4yDQoJCQljLTEtMC41LTIuMy0wLjgtMy44LTAuOGMtMS45LDAtMy42LDAuNS00LjksMS42Yy0xLjQsMS4xLTIuMywyLjYtMi45LDQuN2MtMC4yLDAuNi0wLjMsMS4zLTAuNCwyLjFjMCwwLjctMC4xLDEuNS0wLjEsMi4zVjM0LjENCgkJCUwzMzcuMiwzNC4xeiBNMzMxLjksMTguM2MwLTEuMiwwLTIuMywwLTMuMnMwLTEuOS0wLjEtMi45aDUuMmwwLjIsNGMwLjMtMC40LDAuNy0wLjgsMS4yLTEuM2MwLjUtMC41LDEuMi0xLDItMS41DQoJCQljMC44LTAuNSwxLjctMC45LDIuNy0xLjJjMS0wLjMsMi4yLTAuNSwzLjYtMC41YzIuMiwwLDQsMC40LDUuNiwxLjJjMS42LDAuOCwyLjksMS45LDMuOSwzLjNjMSwxLjQsMS44LDIuOSwyLjMsNC43DQoJCQljMC41LDEuOCwwLjgsMy42LDAuOCw1LjZjMCwyLjUtMC40LDQuNy0xLjMsNi42Yy0wLjksMS44LTIsMy40LTMuNCw0LjZjLTEuNCwxLjItMi45LDIuMS00LjYsMi43Yy0xLjcsMC42LTMuNCwwLjktNSwwLjkNCgkJCWMtMS45LDAtMy40LTAuMi00LjUtMC42Yy0xLjEtMC40LTIuMi0wLjgtMy4yLTEuMnYxM2gtNS4zVjE4LjN6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yODIuMywxOC4zYzAtMS4yLDAtMi4zLDAtMy4yczAtMS45LTAuMS0yLjloNS4ybDAuMiw0LjJjMC4zLTAuNSwwLjctMSwxLjMtMS42YzAuNS0wLjYsMS4xLTEuMSwxLjktMS42DQoJCQlzMS42LTAuOSwyLjYtMS4yYzEtMC4zLDIuMS0wLjUsMy40LTAuNWMyLjIsMCw0LDAuNCw1LjQsMS4zYzEuNCwwLjksMi41LDIuMSwzLjMsMy44YzEuMS0xLjMsMi41LTIuNSw0LjEtMy41DQoJCQljMS42LTEsMy42LTEuNSw2LTEuNWMzLjYsMCw2LjMsMS4xLDgsMy4yYzEuNywyLjIsMi42LDUsMi42LDguN3YxNi44aC01LjRWMjMuOGMwLTIuNi0wLjUtNC41LTEuNS01LjhjLTEtMS4yLTIuNS0xLjgtNC41LTEuOA0KCQkJYy0xLjEsMC0yLjIsMC4yLTMuMSwwLjdjLTAuOSwwLjUtMS44LDEuMS0yLjUsMS44Yy0wLjcsMC44LTEuMiwxLjctMS42LDIuN2MtMC40LDEtMC42LDIuMS0wLjYsMy4ydjE1LjZoLTUuNFYyMy44DQoJCQljMC0yLjYtMC41LTQuNS0xLjUtNS44Yy0xLTEuMi0yLjUtMS44LTQuNC0xLjhjLTEuNSwwLTIuNywwLjMtMy43LDFjLTEsMC42LTEuOCwxLjUtMi40LDIuNWMtMC42LDEtMS4xLDIuMi0xLjMsMy41DQoJCQljLTAuMywxLjMtMC40LDIuNy0wLjQsNHYxM2gtNS40VjE4LjN6Ii8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNjIuOSwzNi40YzEuNCwwLDIuNy0wLjMsMy45LTAuOWMxLjItMC42LDIuMS0xLjMsMi45LTIuM2MwLjgtMC45LDEuNC0yLDEuOC0zLjNjMC40LTEuMiwwLjYtMi41LDAuNi0zLjgNCgkJCWMwLTEuMi0wLjItMi41LTAuNi0zLjdjLTAuNC0xLjItMS0yLjMtMS45LTMuM2MtMC44LTEtMS44LTEuNy0yLjktMi4zYy0xLjEtMC42LTIuNC0wLjktMy45LTAuOWMtMS40LDAtMi43LDAuMy0zLjksMC45DQoJCQljLTEuMiwwLjYtMi4xLDEuMy0yLjksMi4zYy0wLjgsMC45LTEuNCwyLTEuOCwzLjNjLTAuNCwxLjItMC42LDIuNS0wLjYsMy44YzAsMS4zLDAuMiwyLjUsMC42LDMuN2MwLjQsMS4yLDEsMi4zLDEuOSwzLjMNCgkJCWMwLjgsMSwxLjgsMS43LDIuOSwyLjNDMjYwLjIsMzYuMSwyNjEuNSwzNi40LDI2Mi45LDM2LjRMMjYyLjksMzYuNHogTTI2Mi45LDQxLjFjLTIuMiwwLTQuMS0wLjQtNS45LTEuMg0KCQkJYy0xLjgtMC44LTMuNC0xLjktNC43LTMuMmMtMS4zLTEuNC0yLjMtMi45LTMuMS00LjdjLTAuNy0xLjgtMS4xLTMuNy0xLjEtNS44YzAtMiwwLjQtNCwxLjEtNS44YzAuNy0xLjgsMS44LTMuNCwzLjEtNC43DQoJCQlzMi45LTIuNCw0LjctMy4yYzEuOC0wLjgsMy44LTEuMiw1LjktMS4yYzIuMSwwLDQuMSwwLjQsNS45LDEuMmMxLjgsMC44LDMuNCwxLjksNC43LDMuMmMxLjMsMS40LDIuNCwyLjksMy4xLDQuNw0KCQkJYzAuNywxLjgsMS4xLDMuNywxLjEsNS44YzAsMi4xLTAuNCw0LTEuMSw1LjhjLTAuNywxLjgtMS44LDMuNC0zLjEsNC43Yy0xLjMsMS40LTIuOSwyLjQtNC43LDMuMkMyNjcsNDAuNywyNjUsNDEuMSwyNjIuOSw0MS4xeiINCgkJCS8+DQoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNDYuNCwzNi40Yy0xLjIsMS40LTIuOCwyLjUtNC42LDMuNGMtMS44LDAuOS0zLjksMS4zLTYuMywxLjNjLTIuMiwwLTQuMy0wLjQtNi4xLTEuMQ0KCQkJYy0xLjgtMC43LTMuNC0xLjgtNC42LTMuMWMtMS4zLTEuMy0yLjItMi45LTIuOS00LjdjLTAuNy0xLjgtMS0zLjgtMS02YzAtMiwwLjQtNCwxLjEtNS44YzAuNy0xLjgsMS43LTMuNCwzLTQuNw0KCQkJYzEuMy0xLjMsMi44LTIuNCw0LjYtMy4yYzEuOC0wLjgsMy44LTEuMiw1LjktMS4yYzIuNCwwLDQuNCwwLjQsNi4yLDEuM2MxLjgsMC44LDMuMywyLDQuNiwzLjRsLTMuNSwzLjRjLTAuOC0xLTEuOS0xLjktMy4xLTIuNQ0KCQkJYy0xLjItMC42LTIuNi0wLjktNC4zLTAuOWMtMS40LDAtMi43LDAuMy0zLjksMC44Yy0xLjEsMC41LTIuMSwxLjMtMi45LDIuMmMtMC44LDAuOS0xLjQsMi0xLjgsMy4zYy0wLjQsMS4yLTAuNiwyLjUtMC42LDMuOA0KCQkJYzAsMS4zLDAuMiwyLjUsMC42LDMuOGMwLjQsMS4yLDEsMi4zLDEuOCwzLjNjMC44LDAuOSwxLjcsMS43LDIuOSwyLjNjMS4xLDAuNiwyLjQsMC44LDMuOSwwLjhjMS42LDAsMy4xLTAuMyw0LjQtMC45DQoJCQljMS4zLTAuNiwyLjQtMS41LDMuMi0yLjVMMjQ2LjQsMzYuNHoiLz4NCgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM4NC45LDE4LjljLTEuNC0xLjItMy4yLTIuNy02LjgtMi42Yy00LDAtNy4xLDIuMi04LjQsNmMtMC41LDEuMy0wLjcsMi43LTAuNyw0LjNjMCwxLjMsMC4yLDIuNiwwLjUsMy44DQoJCQljMSwzLjgsMy43LDUuOSw3LjYsNS45YzMuNSwwLDYuMy0yLDcuNC01LjNjMC4zLTAuOSwwLjUtMS44LDAuNS0yLjZWMTguOUwzODQuOSwxOC45eiBNMzg0LjksMzYuN2MtMi40LDIuOC01LjMsNC40LTkuMSw0LjQNCgkJCWMtNS41LDAtOS43LTMuNC0xMS41LTguNWMtMC42LTEuOC0wLjktMy44LTAuOS02YzAtOC4zLDUuOC0xNS4xLDE0LjItMTUuMWMzLjIsMCw1LjUsMSw3LjMsMi4zdi0xLjdoNS40djIxLjljMCwxLjIsMCwyLjMsMCwzLjINCgkJCXMwLDEuOSwwLjEsMi45SDM4NUwzODQuOSwzNi43eiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE4NS42LDE4LjljLTEuNC0xLjItMy4yLTIuNy02LjgtMi42Yy00LDAtNy4xLDIuMi04LjQsNmMtMC41LDEuMy0wLjcsMi43LTAuNyw0LjNjMCwxLjMsMC4yLDIuNiwwLjUsMy44DQoJCQljMSwzLjgsMy43LDUuOSw3LjYsNS45YzMuNSwwLDYuMy0yLDcuNC01LjNjMC4zLTAuOSwwLjQtMS44LDAuNC0yLjZWMTguOUwxODUuNiwxOC45eiBNMTg1LjYsMzYuN2MtMi40LDIuOC01LjMsNC40LTkuMSw0LjQNCgkJCWMtNS41LDAtOS43LTMuNC0xMS41LTguNWMtMC42LTEuOC0wLjktMy44LTAuOS02YzAtOC4zLDUuOC0xNS4xLDE0LjItMTUuMWMzLjIsMCw1LjUsMSw3LjMsMi4zdi0xLjdoNS40djIxLjljMCwxLjIsMCwyLjMsMCwzLjINCgkJCXMwLDEuOSwwLjEsMi45aC01LjNMMTg1LjYsMzYuN3oiLz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE5Ni4zLDE3LjljMC0xLjIsMC0yLjIsMC0zYzAtMC45LDAtMS44LTAuMS0yLjdoNS4ybDAuMiw0LjVjMC4zLTAuNSwwLjctMSwxLjMtMS42YzAuNS0wLjYsMS4yLTEuMSwxLjktMS42DQoJCQljMC43LTAuNSwxLjYtMC45LDIuNi0xLjJjMS0wLjMsMi4xLTAuNSwzLjQtMC41YzAuNiwwLDEuMiwwLDEuNywwLjFjMC41LDAuMSwxLDAuMiwxLjQsMC40bC0xLjIsNS4xYy0wLjctMC4zLTEuNi0wLjQtMi44LTAuNA0KCQkJYy0xLjIsMC0yLjIsMC4yLTMuMiwwLjdjLTEsMC40LTEuOCwxLjEtMi42LDEuOGMtMC43LDAuOC0xLjMsMS43LTEuNywyLjdjLTAuNCwxLTAuNiwyLjItMC42LDMuM3YxNC44aC01LjRWMTcuOXoiLz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE1NC43LDIzLjhjLTAuMi0yLjItMC45LTQtMi4zLTUuNWMtMS40LTEuNS0zLjMtMi4zLTUuOC0yLjNjLTEuMywwLTIuNCwwLjItMy41LDAuN2MtMSwwLjQtMS45LDEtMi42LDEuNw0KCQkJYy0wLjcsMC43LTEuMywxLjYtMS43LDIuNWMtMC40LDAuOS0wLjYsMS45LTAuNywyLjlIMTU0LjdMMTU0LjcsMjMuOHogTTE1OS42LDM2LjFjLTAuMywwLjQtMC44LDAuOC0xLjQsMS40DQoJCQljLTAuNiwwLjYtMS41LDEuMS0yLjUsMS42Yy0xLDAuNS0yLjIsMS0zLjYsMS40Yy0xLjQsMC40LTMsMC42LTQuNywwLjZjLTIuMiwwLTQuMS0wLjQtNS45LTEuMWMtMS44LTAuNy0zLjMtMS44LTQuNi0zLjENCgkJCWMtMS4zLTEuMy0yLjMtMi45LTMtNC44Yy0wLjctMS44LTEuMS0zLjktMS4xLTYuMmMwLTIuMSwwLjMtNCwxLTUuOGMwLjctMS44LDEuNi0zLjMsMi45LTQuNmMxLjItMS4zLDIuNy0yLjMsNC40LTMuMQ0KCQkJYzEuNy0wLjgsMy42LTEuMSw1LjYtMS4xYzIuNCwwLDQuNSwwLjUsNi4yLDEuNGMxLjcsMC45LDMuMSwyLjIsNC4yLDMuN2MxLjEsMS41LDEuOSwzLjMsMi40LDUuMmMwLjUsMiwwLjgsNCwwLjgsNi4yaC0yMg0KCQkJYzAsMS4yLDAuMywyLjQsMC44LDMuNGMwLjUsMSwxLjIsMS45LDIsMi43YzAuOCwwLjgsMS44LDEuNCwyLjksMS44YzEuMSwwLjQsMi4yLDAuNywzLjQsMC43YzIuNCwwLDQuMy0wLjQsNS44LTEuMg0KCQkJYzEuNS0wLjgsMi42LTEuNiwzLjMtMi40TDE1OS42LDM2LjF6Ii8+DQoJCTxyZWN0IHg9IjEyMy4xIiBjbGFzcz0ic3QxIiB3aWR0aD0iNS40IiBoZWlnaHQ9IjQwLjIiLz4NCgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTExOS4zLDM2LjRjLTEuMiwxLjQtMi44LDIuNS00LjYsMy40Yy0xLjgsMC45LTMuOSwxLjMtNi4zLDEuM2MtMi4yLDAtNC4zLTAuNC02LjEtMS4xDQoJCQljLTEuOC0wLjctMy40LTEuOC00LjYtMy4xYy0xLjMtMS4zLTIuMi0yLjktMi45LTQuN2MtMC43LTEuOC0xLTMuOC0xLTZjMC0yLDAuNC00LDEuMS01LjhjMC43LTEuOCwxLjctMy40LDMtNC43DQoJCQljMS4zLTEuMywyLjgtMi40LDQuNi0zLjJjMS44LTAuOCwzLjgtMS4yLDUuOS0xLjJjMi40LDAsNC40LDAuNCw2LjIsMS4zYzEuOCwwLjgsMy4zLDIsNC42LDMuNGwtMy41LDMuNGMtMC44LTEtMS45LTEuOS0zLjEtMi41DQoJCQljLTEuMi0wLjYtMi42LTAuOS00LjMtMC45Yy0xLjQsMC0yLjcsMC4zLTMuOSwwLjhjLTEuMSwwLjUtMi4xLDEuMy0yLjksMi4yYy0wLjgsMC45LTEuNCwyLTEuOCwzLjNjLTAuNCwxLjItMC42LDIuNS0wLjYsMy44DQoJCQljMCwxLjMsMC4yLDIuNSwwLjYsMy44YzAuNCwxLjIsMSwyLjMsMS44LDMuM2MwLjgsMC45LDEuNywxLjcsMi45LDIuM2MxLjEsMC42LDIuNCwwLjgsMy45LDAuOGMxLjYsMCwzLjEtMC4zLDQuNC0wLjkNCgkJCWMxLjMtMC42LDIuNC0xLjUsMy4yLTIuNUwxMTkuMywzNi40eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K" alt="logo" class="logo-img" width="222px" height="26px">
          </a>
          <div data-v-429d63aa="" class="front-header-capabilities">
            <ul data-v-429d63aa="" class="front-header-capabilities-sizes">
              <li data-v-429d63aa="" class="front-header-capabilities-sizes__item">
                <a data-v-429d63aa="" href="#" class="front-header-capabilities-sizes__link small">A</a>
              </li>
              <li data-v-429d63aa="" class="front-header-capabilities-sizes__item">
                <a data-v-429d63aa="" href="#" class="front-header-capabilities-sizes__link medium">A</a>
              </li>
              <li data-v-429d63aa="" class="front-header-capabilities-sizes__item">
                <a data-v-429d63aa="" href="#" class="front-header-capabilities-sizes__link large">A</a>
              </li>
            </ul>
            <ul data-v-429d63aa="" class="front-header-capabilities-colors">
              <li data-v-429d63aa="" class="front-header-capabilities-colors__item">
                <a data-v-429d63aa="" href="#" class="front-header-capabilities-colors__link">
                  <img data-v-429d63aa="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMCAyMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAgMjA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGQkY3QzA7fQ0KPC9zdHlsZT4NCjxnIGlkPSJYTUxJRF8yXyI+DQoJPHBvbHlnb24gaWQ9IlhNTElEXzNfIiBwb2ludHM9IjEwLDEwIDAsMjAgMCwwIDIwLDAgCSIvPg0KCTxwb2x5Z29uIGlkPSJYTUxJRF80XyIgY2xhc3M9InN0MCIgcG9pbnRzPSIyMCwyMCAwLDIwIDIwLDAgCSIvPg0KPC9nPg0KPC9zdmc+DQo=" alt="capabilities-color" class="front-header-capabilities-colors__icon">
                </a>
              </li>
              <li data-v-429d63aa="" class="front-header-capabilities-colors__item">
                <a data-v-429d63aa="" href="#" class="front-header-capabilities-colors__link">
                  <img data-v-429d63aa="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9Ii0yOTUgMzg3IDIwIDIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IC0yOTUgMzg3IDIwIDIwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojQ0NFOUYxO30NCjwvc3R5bGU+DQo8Zz4NCgk8cG9seWdvbiBpZD0iWE1MSURfM18iIHBvaW50cz0iLTI5NSwzODcgLTI3NSwzODcgLTI4NSwzOTcgLTI5NSw0MDcgCSIvPg0KCTxwb2x5Z29uIGlkPSJYTUxJRF80XyIgY2xhc3M9InN0MCIgcG9pbnRzPSItMjc1LDQwNyAtMjk1LDQwNyAtMjc1LDM4NyAJIi8+DQo8L2c+DQo8L3N2Zz4NCg==" alt="capabilities-color" class="front-header-capabilities-colors__icon">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main class="main">
        <div class="center">
          <div class="main-title">Reset password</div>
          <div class="main-reset">
            <input type="password" name="" placeholder="New Password" v-model="formInfo.fos_user_resetting_form.plainPassword.first"/>
            <input type="password" name="" placeholder="Retype Password" v-model="formInfo.fos_user_resetting_form.plainPassword.second" />
            <input type="submit" name="" value="Reset" @click="reserPassword()"/>
          </div>
        </div>
      </main>
      <div class="push"></div>
    </div>

  </div>
	<!-- .reset -->
	<!--<div class="reset">-->
		<!--<h1>Reset Password</h1>-->
		<!--<form-->
		<!--name="fos_user_resetting_form"-->
		<!--method="post"-->
		<!--:action="formAction"-->
    <!--@submit.prevent="submit"-->
		<!--class="form">-->
		    <!--&lt;!&ndash; form-element &ndash;&gt;-->
        <!--<div class="form-element">-->
            <!--<input-->
            <!--type="password"-->
            <!--:name="passwordsNames.first"-->
            <!--v-model="formInfo.fos_user_resetting_form.plainPassword.first"-->
            <!--v-validate="'required'"-->
            <!--data-vv-as='"Password"'-->
            <!--placeholder="New Password"-->
            <!--class="form-control"-->
            <!--required>-->
            <!--<div -->
            <!--v-if="errors.has('fos_user_resetting_form[plainPassword][first]')"-->
            <!--class="form-errors">{{ errors.first('fos_user_resetting_form[plainPassword][first]') }}</div>-->
        <!--</div>-->
		    <!--&lt;!&ndash; END:form-element &ndash;&gt;-->
		    <!--&lt;!&ndash; form-element &ndash;&gt;-->
        <!--<div class="form-element">-->
            <!--<input-->
            <!--type="password"-->
            <!--:name="passwordsNames.second"-->
            <!--v-model="formInfo.fos_user_resetting_form.plainPassword.second"-->
            <!--data-vv-as='"Repeat Password"'-->
            <!--v-validate="'required|confirmed:fos_user_resetting_form[plainPassword][first]'"-->
            <!--placeholder="Repeat new password"-->
            <!--class="form-control"-->
            <!--required>-->
            <!--<div -->
            <!--v-if="errors.has('fos_user_resetting_form[plainPassword][second]')"-->
            <!--class="form-errors">{{ errors.first('fos_user_resetting_form[plainPassword][second]') }}</div>-->
        <!--</div>-->
        <!--&lt;!&ndash; END:form-element &ndash;&gt;-->
    		<!--<button-->
    		<!--type="submit"-->
    		<!--class="form-control form-submit">-->
    		<!--Change password</button>-->
		<!--</form>-->
	<!--</div>-->
	<!-- END:.reset -->
</template>

<script>
import api from '@/api'
import forms from '@/mixins/forms'
import FormMessages from '@/components/common/FormMessages'

export default {
  name: 'reset',
  props: ['token'],
  mixins: [forms],
  data () {
    return {
      passwordsNames: {
        first: 'fos_user_resetting_form[plainPassword][first]',
        second: 'fos_user_resetting_form[plainPassword][second]'
      },
      formInfo: {
        fos_user_resetting_form: {
          plainPassword: {
            first: '',
            second: ''
          }
        }
      }
    }
  },
  computed: {
    formAction () {
      return api.serverURL + window.location.pathname
    }
  },
  methods: {
    sendFormRequest () {
      this.$router.push('/')
    },
    reserPassword () {
//      let token = this.$route.params.token
//      this.$http.post(api.URLS.forgotPassword + token, JSON.stringify(this.formInfo), {})
//        .then((res) => {
//          console.log(res)
//        })
//        .catch((err) => { this.submitErrors(err.body) })
    }
  },
  components: {
    FormMessages
  }
}
</script>
<style>
  .login .clear {clear:both; display:block;}
  .login .wrapper {min-height:100%; margin:0 0 -108px 0; background:url('http://eromagency.com/tmp/tcc/img/login-hero.jpg') 50% calc(50% + 62px) no-repeat; background-size:cover;}
  .login .center {width:60%; max-width:1152px; margin:0 auto; min-width:320px;}
  .login .front-header {height:62px; background:#ffffff;}
  .login .logo-link {float:left; margin:18px 0 18px 0;}
  .login .front-header-capabilities {float:right; padding:21px 0 21px 0;}
  .login .front-header-capabilities-colors img,
  .login .front-header-capabilities-colors img {width:20px; margin-right:-4px;}
  .login .main {color:#ffffff;}
  .login .main-title {padding:120px 70px 0 70px; font-size:29pt; text-transform:uppercase; font-weight:bold; text-align:center;}
  .login .main-video {display:block; margin:90px auto 0 auto; width:54%; padding:15px 0 20px 0; color:#ffffff; text-decoration:none;}
  .login .main-video-start {width:57px; height:57px; margin:0 auto; background:url('http://eromagency.com/tmp/tcc/img/play.svg') 0 0 no-repeat;}
  .login .main-video-label {font-size:13pt; font-weight:bold; padding:35px 0 0 0; text-align:center;}
  .login .main-text {font-size:12pt; padding:120px 40px 30px 40px;}
  .login .main-text-left {width:47%; float:left; margin:0 6% 0 0;}
  .login .main-text-right {width:47%; float:right;}
  .login .push {height:108px;}
  .login .front-footer {height:108px; background:#1c1c1d;}
  .login .user-area {float:left; margin:35px 0 30px 0;}
  .login input {font-family:Arial; font-size:12pt; float:left; margin:0 20px 0 0; height:40px; border:none; box-sizing:border-box; padding:10px; display:block;}
  .login input::-webkit-input-placeholder {color:#000000;}
  .login input:-moz-placeholder {color:#000000; opacity:1;}
  .login input::-moz-placeholder {color:#000000; opacity:1;}
  .login input:-ms-input-placeholder {color:#000000;}
  .login input::-ms-input-placeholder {color:#000000;}
  .login input[type=text], .login .user-area input[type=password] {width:240px; background:#ffffff; color:#000000;}
  .login input[type=submit] {width:105px; background:#257281; color:#ffffff; font-weight:bold; text-transform:uppercase; font-size:12pt;}
  .login .user-area.error input[type=text], .login .user-area.error input[type=password], .login .main-reset.error input[type=text], .login .main-reset.error input[type=password] {border:2px solid #d8656a;}
  .login .user-area-lost-password {font-size:10pt; color:#257281; line-height:40px;}
  .login .front-footer-social-list {float:right; margin:40px 0 35px 0;}
  .login .front-footer-social-list li {margin-right:7px; float:left;}
  .login .front-footer-social-list a {width:30px; height:30px;}
  .login .lost-pass-label {float:left; font-size:11pt; color:#ffffff; padding:0 40px 0 0; line-height:14pt;}
  .login .user-area.lost-error .lost-pass-label {color:#d8656a; padding-top:10px;}
  .login .user-area.lost-success .lost-pass-label {color:#22b6cd;}
  .login .main-reset {padding:80px 0 0 0;}
  .login .main-reset input {float:none; margin:0 auto 20px auto;}
  .login .main-reset input[type=submit] {background:#000000; margin-top:20px;}
  .login .main-reset-label {text-align:center; font-size:16pt; padding:40px 0 0 0;}
  .login .main-video-player {margin:100px 0 0 0;}
  .login .main-video-player video {width:100%; height:auto;}

  @media (max-width: 1750px) {
    .login .center {width:80%;}
  }

  @media (max-width: 1320px) {
    .login .center {width:90%;}
  }

  @media (max-width: 1160px) {
    .login .center {width:auto; padding:0 10px;}
  }

  @media (max-width: 1160px) {
    .login .front-footer-social-list {display:none;}
  }

  @media (max-width: 800px) {
    .login .front-header {height:75px; background:#ffffff;}
    .login .front-header .center {padding:0;}
    .login .logo-link {margin:23px 0 18px 0;}
    .login .logo-img {width:266px; height:31px;}
    .login .logo-link {margin-left:30px;}
    .login .front-header-capabilities {display:none;}
    .login .main-title {font-size:21pt; padding:20px 10px 0 10px;}
    .login .main-video {margin:0; width:100%; padding:15px 0 20px 0;}
    .login .main-video-label {font-size:14pt; padding:25px 0 0 0;}
    .login .main-text {padding:30px 0 10px 0;}
    .login .main-text-left {width:100%;}
    .login .main-text-right {width:100%;}
    .login .push {height:225px;}
    .login .front-footer {position:fixed; width:100%; left:0; bottom:0; height:auto;}
    .login .user-area {margin:20px 0; width:100%; text-align:center;}
    .login .user-area input {float:none; margin:0 auto 20px auto;}
    .login .user-area-lost-password {line-height:normal;}
    .login .lost-pass-label {float:none; padding:0 0 20px 0;}
    .login .user-area.lost input[type=submit], .login .user-area.lost-error input[type=submit] {margin-bottom:0;}

  }
</style>
