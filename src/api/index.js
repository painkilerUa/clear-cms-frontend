/**
 * Server api configuration
 */

import Vue from 'vue'

const api = {}

export default api

/**
 *  Fake data start
 **/
const content = [
  {
    title: 'Title 1',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 1,
    language_id: 1,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTUgMTQuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUgMTQuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiM5QTlCOUI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxkZWZzPg0KCQk8cGF0aCBpZD0iU1ZHSURfMV8iIGQ9Ik02LjksNi4zYzAuNCwwLjgsMC45LDEuNiwxLjcsMi4zQzcuNiw4LjksNi44LDkuMSw1LjcsOS42QzYsOSw2LjcsNy40LDYuOSw2LjMgTTcuMSwyLjYNCgkJCWMwLjgsMC41LDAuMywxLjYsMCwyLjdDNi45LDQuNiw2LjYsMy4xLDcuMSwyLjYgTTcsMi4zYy0wLjMsMC0wLjYsMC4yLTAuNywwLjVDNiwzLjUsNi42LDUuNyw2LjgsNmMtMC43LDItMi45LDYtNC4xLDYuMg0KCQkJYzAtMC4zLDAuMS0xLDEuNi0yYzAuMS0wLjEsMC4yLTAuMiwwLjItMC4yYy0xLjIsMC42LTIuOSwxLjYtMS45LDIuM2MwLjEsMCwwLjEsMC4xLDAuMiwwLjFjMC43LDAuMywxLjgtMC42LDIuOC0yLjcNCgkJCUM2LjgsOS40LDcuNyw5LjEsOSw4LjljMS40LDEsMi40LDEuMiwzLjEsMC45YzAuMi0wLjEsMC41LTAuMywwLjUtMC42Yy0wLjUsMC43LTEuOCwwLjItMi44LTAuNGMwLjktMC4xLDEuOS0wLjIsMi4zLDANCgkJCWMwLjUsMC4yLDAuNSwwLjQsMC41LDAuNWMwLTAuMSwwLjEtMC40LDAtMC41QzEyLjIsOCw5LjgsOC45LDksOC45QzcuOSw4LjMsNy41LDYuNiw3LjIsNS43YzAuMy0xLjEsMC42LTIsMC40LTIuOA0KCQkJQzcuNSwyLjUsNy4yLDIuMyw3LDIuM0M3LDIuMyw3LDIuMyw3LDIuMyIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxyZWN0IHg9IjAiIHk9IjAiIGNsYXNzPSJzdDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNC44Ii8+DQo8L2c+DQo8L3N2Zz4NCg=='
  },
  {
    title: 'Title 2',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 2,
    language_id: 2,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTEuMSA4LjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDExLjEgOC4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMl8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDF7Y2xpcC1wYXRoOnVybCgjU1ZHSURfNF8pO30NCgkuc3Qye2NsaXAtcGF0aDp1cmwoI1NWR0lEXzZfKTtmaWxsOiM5QTlCOUI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxkZWZzPg0KCQk8cmVjdCBpZD0iU1ZHSURfMV8iIHg9IjAiIHk9IjAiIHdpZHRoPSIxMS4xIiBoZWlnaHQ9IjguMiIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxnIGNsYXNzPSJzdDAiPg0KCQk8Zz4NCgkJCTxkZWZzPg0KCQkJCTxyZWN0IGlkPSJTVkdJRF8zXyIgeD0iLTAuMiIgeT0iLTAuMyIgd2lkdGg9IjExLjUiIGhlaWdodD0iOC44Ii8+DQoJCQk8L2RlZnM+DQoJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzRfIj4NCgkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8zXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPg0KCQkJPC9jbGlwUGF0aD4NCgkJCTxnIGNsYXNzPSJzdDEiPg0KCQkJCTxkZWZzPg0KCQkJCQk8cGF0aCBpZD0iU1ZHSURfNV8iIGQ9Ik00LDUuOFYyLjNDNCwyLjEsNC4zLDEuOSw0LjUsMmwzLDEuOGMwLjIsMC4xLDAuMiwwLjUsMCwwLjZsLTMsMS44Yy0wLjEsMC0wLjEsMC0wLjIsMA0KCQkJCQkJQzQuMSw2LjIsNCw2LDQsNS44IE0wLjksMC4zQzAuNSwwLjQsMC4yLDAuNywwLjIsMWMtMC4yLDIuMS0wLjIsNC4xLDAsNi4yYzAsMC4zLDAuMywwLjYsMC43LDAuN2MzLjIsMC40LDYuMiwwLjQsOS40LDANCgkJCQkJCWMwLjMsMCwwLjYtMC40LDAuNy0wLjdjMC4yLTIuMSwwLjItNC4xLDAtNi4yYzAtMC4zLTAuMy0wLjYtMC43LTAuN0M4LjYsMC4xLDcuMSwwLDUuNSwwQzQsMCwyLjQsMC4xLDAuOSwwLjMiLz4NCgkJCQk8L2RlZnM+DQoJCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF82XyI+DQoJCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzVfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+DQoJCQkJPC9jbGlwUGF0aD4NCgkJCQk8cmVjdCB4PSItMi4zIiB5PSItMi4zIiBjbGFzcz0ic3QyIiB3aWR0aD0iMTUuNyIgaGVpZ2h0PSIxMi44Ii8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=='
  },
  {
    title: 'Title 3',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 3,
    language_id: 3,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTEuNyAxMS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMS43IDExLjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9DQoJLnN0MXtjbGlwLXBhdGg6dXJsKCNTVkdJRF80Xyk7fQ0KCS5zdDJ7Y2xpcC1wYXRoOnVybCgjU1ZHSURfNl8pO2ZpbGw6IzlBOUI5Qjt9DQo8L3N0eWxlPg0KPGc+DQoJPGRlZnM+DQoJCTxyZWN0IGlkPSJTVkdJRF8xXyIgeD0iMCIgeT0iMCIgd2lkdGg9IjExLjciIGhlaWdodD0iMTEuMyIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxnIGNsYXNzPSJzdDAiPg0KCQk8Zz4NCgkJCTxkZWZzPg0KCQkJCTxyZWN0IGlkPSJTVkdJRF8zXyIgeD0iLTAuMiIgeT0iLTAuMSIgd2lkdGg9IjEyIiBoZWlnaHQ9IjExLjUiLz4NCgkJCTwvZGVmcz4NCgkJCTxjbGlwUGF0aCBpZD0iU1ZHSURfNF8iPg0KCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzNfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+DQoJCQk8L2NsaXBQYXRoPg0KCQkJPGcgY2xhc3M9InN0MSI+DQoJCQkJPGRlZnM+DQoJCQkJCTxwYXRoIGlkPSJTVkdJRF81XyIgZD0iTTQuNSwzLjdjMC4zLDAsMC41LDAsMC44LDBDNSw0LjksNC44LDYuMiw0LjQsNy41Yy0wLjEsMC4xLTAuMywwLjEtMC41LDBjLTAuMSwwLTAuMiwwLTAuMywwDQoJCQkJCQlDMy40LDYuNiwzLjIsNS43LDMuMSw0LjlDMi45LDUuNywyLjcsNi42LDIuNSw3LjRjLTAuMywwLTAuNSwwLTAuOCwwQzEuNiw2LjIsMS4zLDUsMS4xLDMuOWMwLjIsMCwwLjUsMCwwLjcsMA0KCQkJCQkJYzAuMSwwLjgsMC4zLDEuNywwLjQsMi41YzAuMi0wLjksMC40LTEuNywwLjYtMi42YzAuMywwLDAuNSwwLDAuOCwwYzAuMiwwLjksMC40LDEuOCwwLjYsMi43QzQuMiw1LjUsNC40LDQuNiw0LjUsMy43DQoJCQkJCQkgTTYuOSwxLjVoNC40djguNEg2LjlWOC44aDMuNVY4LjNINi45VjcuNmgzLjVWNy4xSDYuOVY2LjVoMy41VjUuOUg2LjlWNS4zaDMuNVY0LjdINi45VjQuMWgzLjVWMy42SDYuOVYyLjloMy41VjIuNEg2LjlWMS41eg0KCQkJCQkJIE02LjEsMEM0LjEsMC40LDIsMC43LDAsMS4xYzAsMy4xLDAsNi4yLDAsOS4yYzIsMC40LDQuMSwwLjcsNi4xLDEuMWgwLjh2LTEuMWMxLjMsMCwyLjcsMCw0LDBjMC4yLDAsMC41LDAsMC43LTAuMQ0KCQkJCQkJYzAuMi0wLjIsMC4xLTAuNSwwLjEtMC44YzAtMi42LDAtNS4yLDAtNy44YzAtMC4zLTAuMi0wLjUtMC41LTAuNWMtMC44LDAtMS43LDAtMi41LDBjLTAuNiwwLTEuMiwwLTEuNywwVjBINi4xeiIvPg0KCQkJCTwvZGVmcz4NCgkJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzZfIj4NCgkJCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfNV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgkJCQk8L2NsaXBQYXRoPg0KCQkJCTxyZWN0IHg9Ii0yLjMiIHk9Ii0yLjMiIGNsYXNzPSJzdDIiIHdpZHRoPSIxNi40IiBoZWlnaHQ9IjE2Ii8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=='
  },
  {
    title: 'Title 4',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 4,
    language_id: 4,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTEuNyAxMS42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMS43IDExLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yXyk7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9DQoJLnN0MXtjbGlwLXBhdGg6dXJsKCNTVkdJRF80Xyk7fQ0KCS5zdDJ7Y2xpcC1wYXRoOnVybCgjU1ZHSURfNl8pO2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPGc+DQoJPGRlZnM+DQoJCTxyZWN0IGlkPSJTVkdJRF8xXyIgeD0iMCIgeT0iMCIgd2lkdGg9IjExLjciIGhlaWdodD0iMTEuNiIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxnIGNsYXNzPSJzdDAiPg0KCQk8Zz4NCgkJCTxkZWZzPg0KCQkJCTxyZWN0IGlkPSJTVkdJRF8zXyIgeD0iLTAuMiIgeT0iMCIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIi8+DQoJCQk8L2RlZnM+DQoJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzRfIj4NCgkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8zXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPg0KCQkJPC9jbGlwUGF0aD4NCgkJCTxnIGNsYXNzPSJzdDEiPg0KCQkJCTxkZWZzPg0KCQkJCQk8cGF0aCBpZD0iU1ZHSURfNV8iIGQ9Ik00LjYsNC43aDIuMVY4aDAuNHYxLjJINC42VjhINVY1LjlINC42VjQuN3ogTTQuOCwzLjRjMC0wLjQsMC4zLTAuOSwxLTAuOWMwLjYsMCwxLDAuNSwxLDAuOQ0KCQkJCQkJYzAsMC41LTAuMywwLjktMSwwLjlDNS4yLDQuMyw0LjgsMy44LDQuOCwzLjQgTTAsNS44QzAsNywwLjMsOC4xLDAuOSw5bC0wLjYsMi4ybDIuMi0wLjZjMC45LDAuNiwyLjEsMSwzLjMsMQ0KCQkJCQkJYzMuMiwwLDUuOC0yLjYsNS44LTUuOFM5LDAsNS44LDBDMi42LDAsMCwyLjYsMCw1LjgiLz4NCgkJCQk8L2RlZnM+DQoJCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF82XyI+DQoJCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzVfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+DQoJCQkJPC9jbGlwUGF0aD4NCgkJCQk8cmVjdCB4PSItMi4zIiB5PSItMi4zIiBjbGFzcz0ic3QyIiB3aWR0aD0iMTYuMyIgaGVpZ2h0PSIxNi4zIi8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8L3N2Zz4NCg=='
  },
  {
    title: 'Title 5',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 5,
    language_id: 5,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAuNiA4LjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwLjYgOC4xOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMl8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDF7Y2xpcC1wYXRoOnVybCgjU1ZHSURfNF8pO30NCgkuc3Qye2NsaXAtcGF0aDp1cmwoI1NWR0lEXzZfKTtmaWxsOiM5QTlCOUI7fQ0KCS5zdDN7Y2xpcC1wYXRoOnVybCgjU1ZHSURfOF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDR7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTBfKTt9DQoJLnN0NXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8xMl8pO2ZpbGw6IzlBOUI5Qjt9DQoJLnN0NntjbGlwLXBhdGg6dXJsKCNTVkdJRF8xNF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDd7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMTZfKTt9DQoJLnN0OHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8xOF8pO2ZpbGw6IzlBOUI5Qjt9DQoJLnN0OXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8yMF8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDEwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzIyXyk7fQ0KCS5zdDExe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzI0Xyk7ZmlsbDojOUE5QjlCO30NCgkuc3QxMntjbGlwLXBhdGg6dXJsKCNTVkdJRF8yNl8pO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQ0KCS5zdDEze2NsaXAtcGF0aDp1cmwoI1NWR0lEXzI4Xyk7fQ0KCS5zdDE0e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzMwXyk7ZmlsbDojOUE5QjlCO30NCgkuc3QxNXtjbGlwLXBhdGg6dXJsKCNTVkdJRF8zMl8pO2ZpbGw6IzlBOUI5Qjt9DQoJLnN0MTZ7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMzRfKTtmaWxsOiM5QTlCOUI7fQ0KCS5zdDE3e2NsaXAtcGF0aDp1cmwoI1NWR0lEXzM2Xyk7ZmlsbDojOUE5QjlCO30NCjwvc3R5bGU+DQo8Zz4NCgk8ZGVmcz4NCgkJPHJlY3QgaWQ9IlNWR0lEXzFfIiB4PSIxLjciIHk9IjAiIHdpZHRoPSI5IiBoZWlnaHQ9IjEuMyIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxnIGNsYXNzPSJzdDAiPg0KCQk8Zz4NCgkJCTxkZWZzPg0KCQkJCTxyZWN0IGlkPSJTVkdJRF8zXyIgeD0iMS43IiB5PSIwIiB3aWR0aD0iOS4yIiBoZWlnaHQ9IjEuNCIvPg0KCQkJPC9kZWZzPg0KCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF80XyI+DQoJCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfM18iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgkJCTwvY2xpcFBhdGg+DQoJCQk8ZyBjbGFzcz0ic3QxIj4NCgkJCQk8ZGVmcz4NCgkJCQkJPHBhdGggaWQ9IlNWR0lEXzVfIiBkPSJNMi40LDBDMiwwLDEuNywwLjMsMS43LDAuN3YwQzEuNywxLDIsMS4zLDIuNCwxLjNIMTBjMC40LDAsMC43LTAuMywwLjctMC43djBDMTAuNiwwLjMsMTAuNCwwLDEwLDBIMi40DQoJCQkJCQl6Ii8+DQoJCQkJPC9kZWZzPg0KCQkJCTxjbGlwUGF0aCBpZD0iU1ZHSURfNl8iPg0KCQkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF81XyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPg0KCQkJCTwvY2xpcFBhdGg+DQoJCQkJPHJlY3QgeD0iLTAuNiIgeT0iLTIuMyIgY2xhc3M9InN0MiIgd2lkdGg9IjEzLjYiIGhlaWdodD0iNiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGRlZnM+DQoJCTxyZWN0IGlkPSJTVkdJRF83XyIgeD0iMS43IiB5PSIyLjIiIHdpZHRoPSI5IiBoZWlnaHQ9IjEuMyIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzhfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfN18iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxnIGNsYXNzPSJzdDMiPg0KCQk8Zz4NCgkJCTxkZWZzPg0KCQkJCTxyZWN0IGlkPSJTVkdJRF85XyIgeD0iMS43IiB5PSIxLjgiIHdpZHRoPSI5LjIiIGhlaWdodD0iMS44Ii8+DQoJCQk8L2RlZnM+DQoJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzEwXyI+DQoJCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfOV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgkJCTwvY2xpcFBhdGg+DQoJCQk8ZyBjbGFzcz0ic3Q0Ij4NCgkJCQk8ZGVmcz4NCgkJCQkJPHBhdGggaWQ9IlNWR0lEXzExXyIgZD0iTTIuNCwyLjJDMiwyLjIsMS43LDIuNSwxLjcsMi45djBjMCwwLjQsMC4zLDAuNywwLjcsMC43SDEwYzAuNCwwLDAuNy0wLjMsMC43LTAuN3YwDQoJCQkJCQljMC0wLjQtMC4zLTAuNy0wLjctMC43SDIuNHoiLz4NCgkJCQk8L2RlZnM+DQoJCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF8xMl8iPg0KCQkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgkJCQk8L2NsaXBQYXRoPg0KCQkJCTxyZWN0IHg9Ii0wLjYiIHk9Ii0wLjEiIGNsYXNzPSJzdDUiIHdpZHRoPSIxMy42IiBoZWlnaHQ9IjYiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxkZWZzPg0KCQk8cmVjdCBpZD0iU1ZHSURfMTNfIiB4PSIxLjciIHk9IjQuNSIgd2lkdGg9IjkiIGhlaWdodD0iMS4zIi8+DQoJPC9kZWZzPg0KCTxjbGlwUGF0aCBpZD0iU1ZHSURfMTRfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMTNfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+DQoJPC9jbGlwUGF0aD4NCgk8ZyBjbGFzcz0ic3Q2Ij4NCgkJPGc+DQoJCQk8ZGVmcz4NCgkJCQk8cmVjdCBpZD0iU1ZHSURfMTVfIiB4PSIxLjciIHk9IjQuMSIgd2lkdGg9IjkuMiIgaGVpZ2h0PSIxLjgiLz4NCgkJCTwvZGVmcz4NCgkJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMTZfIj4NCgkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xNV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgkJCTwvY2xpcFBhdGg+DQoJCQk8ZyBjbGFzcz0ic3Q3Ij4NCgkJCQk8ZGVmcz4NCgkJCQkJPHBhdGggaWQ9IlNWR0lEXzE3XyIgZD0iTTIuNCw0LjVDMiw0LjUsMS43LDQuOCwxLjcsNS4xdjBjMCwwLjQsMC4zLDAuNywwLjcsMC43SDEwYzAuNCwwLDAuNy0wLjMsMC43LTAuN3YwDQoJCQkJCQljMC0wLjQtMC4zLTAuNy0wLjctMC43SDIuNHoiLz4NCgkJCQk8L2RlZnM+DQoJCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF8xOF8iPg0KCQkJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xN18iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgkJCQk8L2NsaXBQYXRoPg0KCQkJCTxyZWN0IHg9Ii0wLjYiIHk9IjIuMiIgY2xhc3M9InN0OCIgd2lkdGg9IjEzLjYiIGhlaWdodD0iNiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGRlZnM+DQoJCTxwb2x5Z29uIGlkPSJTVkdJRF8xOV8iIHBvaW50cz0iMS43LDYuNyAxLjcsOC4xIDYuMiw4LjEgMTAuNiw4LjEgMTAuNiw2LjcgCQkiLz4NCgk8L2RlZnM+DQoJPGNsaXBQYXRoIGlkPSJTVkdJRF8yMF8iPg0KCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xOV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxnIGNsYXNzPSJzdDkiPg0KCQk8Zz4NCgkJCTxkZWZzPg0KCQkJCTxyZWN0IGlkPSJTVkdJRF8yMV8iIHg9IjEuNyIgeT0iNi40IiB3aWR0aD0iOS4yIiBoZWlnaHQ9IjEuOCIvPg0KCQkJPC9kZWZzPg0KCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yMl8iPg0KCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzIxXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPg0KCQkJPC9jbGlwUGF0aD4NCgkJCTxnIGNsYXNzPSJzdDEwIj4NCgkJCQk8ZGVmcz4NCgkJCQkJPHBhdGggaWQ9IlNWR0lEXzIzXyIgZD0iTTIuNCw2LjdDMiw2LjcsMS43LDcsMS43LDcuNHYwYzAsMC40LDAuMywwLjcsMC43LDAuN0gxMGMwLjQsMCwwLjctMC4zLDAuNy0wLjd2MA0KCQkJCQkJYzAtMC40LTAuMy0wLjctMC43LTAuN0gyLjR6Ii8+DQoJCQkJPC9kZWZzPg0KCQkJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMjRfIj4NCgkJCQkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMjNfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+DQoJCQkJPC9jbGlwUGF0aD4NCgkJCQk8cmVjdCB4PSItMC42IiB5PSI0LjQiIGNsYXNzPSJzdDExIiB3aWR0aD0iMTMuNiIgaGVpZ2h0PSI2Ii8+DQoJCQk8L2c+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8ZGVmcz4NCgkJPHJlY3QgaWQ9IlNWR0lEXzI1XyIgeD0iMCIgeT0iMCIgd2lkdGg9IjEuMyIgaGVpZ2h0PSIxLjMiLz4NCgk8L2RlZnM+DQoJPGNsaXBQYXRoIGlkPSJTVkdJRF8yNl8iPg0KCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8yNV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxnIGNsYXNzPSJzdDEyIj4NCgkJPGc+DQoJCQk8ZGVmcz4NCgkJCQk8cmVjdCBpZD0iU1ZHSURfMjdfIiB4PSItMC4yIiB5PSIwIiB3aWR0aD0iMS44IiBoZWlnaHQ9IjEuNCIvPg0KCQkJPC9kZWZzPg0KCQkJPGNsaXBQYXRoIGlkPSJTVkdJRF8yOF8iPg0KCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzI3XyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPg0KCQkJPC9jbGlwUGF0aD4NCgkJCTxnIGNsYXNzPSJzdDEzIj4NCgkJCQk8ZGVmcz4NCgkJCQkJPHBhdGggaWQ9IlNWR0lEXzI5XyIgZD0iTTAsMC43QzAsMSwwLjMsMS4zLDAuNywxLjNTMS4zLDEsMS4zLDAuN0MxLjMsMC4zLDEsMCwwLjcsMFMwLDAuMywwLDAuNyIvPg0KCQkJCTwvZGVmcz4NCgkJCQk8Y2xpcFBhdGggaWQ9IlNWR0lEXzMwXyI+DQoJCQkJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzI5XyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPg0KCQkJCTwvY2xpcFBhdGg+DQoJCQkJPHJlY3QgeD0iLTIuMyIgeT0iLTIuMyIgY2xhc3M9InN0MTQiIHdpZHRoPSI1LjkiIGhlaWdodD0iNiIvPg0KCQkJPC9nPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGRlZnM+DQoJCTxwYXRoIGlkPSJTVkdJRF8zMV8iIGQ9Ik0wLDIuOWMwLDAuNCwwLjMsMC43LDAuNywwLjdzMC43LTAuMywwLjctMC43YzAtMC40LTAuMy0wLjctMC43LTAuN1MwLDIuNSwwLDIuOSIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzMyXyI+DQoJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzMxXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPg0KCTwvY2xpcFBhdGg+DQoJPHJlY3QgeD0iLTIuMyIgeT0iLTAuMSIgY2xhc3M9InN0MTUiIHdpZHRoPSI1LjkiIGhlaWdodD0iNiIvPg0KPC9nPg0KPGc+DQoJPGRlZnM+DQoJCTxwYXRoIGlkPSJTVkdJRF8zM18iIGQ9Ik0wLDUuMWMwLDAuNCwwLjMsMC43LDAuNywwLjdzMC43LTAuMywwLjctMC43YzAtMC40LTAuMy0wLjctMC43LTAuN1MwLDQuOCwwLDUuMSIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzM0XyI+DQoJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzMzXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPg0KCTwvY2xpcFBhdGg+DQoJPHJlY3QgeD0iLTIuMyIgeT0iMi4yIiBjbGFzcz0ic3QxNiIgd2lkdGg9IjUuOSIgaGVpZ2h0PSI2Ii8+DQo8L2c+DQo8Zz4NCgk8ZGVmcz4NCgkJPHBhdGggaWQ9IlNWR0lEXzM1XyIgZD0iTTAsNy40YzAsMC40LDAuMywwLjcsMC43LDAuN3MwLjctMC4zLDAuNy0wLjdDMS4zLDcsMSw2LjcsMC43LDYuN1MwLDcsMCw3LjQiLz4NCgk8L2RlZnM+DQoJPGNsaXBQYXRoIGlkPSJTVkdJRF8zNl8iPg0KCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8zNV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxyZWN0IHg9Ii0yLjMiIHk9IjQuNCIgY2xhc3M9InN0MTciIHdpZHRoPSI1LjkiIGhlaWdodD0iNiIvPg0KPC9nPg0KPC9zdmc+DQo='
  },
  {
    title: 'Title 6',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 6,
    language_id: 6,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTUgMTQuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUgMTQuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiM5QTlCOUI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxkZWZzPg0KCQk8cGF0aCBpZD0iU1ZHSURfMV8iIGQ9Ik02LjksNi4zYzAuNCwwLjgsMC45LDEuNiwxLjcsMi4zQzcuNiw4LjksNi44LDkuMSw1LjcsOS42QzYsOSw2LjcsNy40LDYuOSw2LjMgTTcuMSwyLjYNCgkJCWMwLjgsMC41LDAuMywxLjYsMCwyLjdDNi45LDQuNiw2LjYsMy4xLDcuMSwyLjYgTTcsMi4zYy0wLjMsMC0wLjYsMC4yLTAuNywwLjVDNiwzLjUsNi42LDUuNyw2LjgsNmMtMC43LDItMi45LDYtNC4xLDYuMg0KCQkJYzAtMC4zLDAuMS0xLDEuNi0yYzAuMS0wLjEsMC4yLTAuMiwwLjItMC4yYy0xLjIsMC42LTIuOSwxLjYtMS45LDIuM2MwLjEsMCwwLjEsMC4xLDAuMiwwLjFjMC43LDAuMywxLjgtMC42LDIuOC0yLjcNCgkJCUM2LjgsOS40LDcuNyw5LjEsOSw4LjljMS40LDEsMi40LDEuMiwzLjEsMC45YzAuMi0wLjEsMC41LTAuMywwLjUtMC42Yy0wLjUsMC43LTEuOCwwLjItMi44LTAuNGMwLjktMC4xLDEuOS0wLjIsMi4zLDANCgkJCWMwLjUsMC4yLDAuNSwwLjQsMC41LDAuNWMwLTAuMSwwLjEtMC40LDAtMC41QzEyLjIsOCw5LjgsOC45LDksOC45QzcuOSw4LjMsNy41LDYuNiw3LjIsNS43YzAuMy0xLjEsMC42LTIsMC40LTIuOA0KCQkJQzcuNSwyLjUsNy4yLDIuMyw3LDIuM0M3LDIuMyw3LDIuMyw3LDIuMyIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxyZWN0IHg9IjAiIHk9IjAiIGNsYXNzPSJzdDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNC44Ii8+DQo8L2c+DQo8L3N2Zz4NCg=='
  },
  {
    title: 'Title 7',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 7,
    language_id: 7,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTUgMTQuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUgMTQuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiM5QTlCOUI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxkZWZzPg0KCQk8cGF0aCBpZD0iU1ZHSURfMV8iIGQ9Ik02LjksNi4zYzAuNCwwLjgsMC45LDEuNiwxLjcsMi4zQzcuNiw4LjksNi44LDkuMSw1LjcsOS42QzYsOSw2LjcsNy40LDYuOSw2LjMgTTcuMSwyLjYNCgkJCWMwLjgsMC41LDAuMywxLjYsMCwyLjdDNi45LDQuNiw2LjYsMy4xLDcuMSwyLjYgTTcsMi4zYy0wLjMsMC0wLjYsMC4yLTAuNywwLjVDNiwzLjUsNi42LDUuNyw2LjgsNmMtMC43LDItMi45LDYtNC4xLDYuMg0KCQkJYzAtMC4zLDAuMS0xLDEuNi0yYzAuMS0wLjEsMC4yLTAuMiwwLjItMC4yYy0xLjIsMC42LTIuOSwxLjYtMS45LDIuM2MwLjEsMCwwLjEsMC4xLDAuMiwwLjFjMC43LDAuMywxLjgtMC42LDIuOC0yLjcNCgkJCUM2LjgsOS40LDcuNyw5LjEsOSw4LjljMS40LDEsMi40LDEuMiwzLjEsMC45YzAuMi0wLjEsMC41LTAuMywwLjUtMC42Yy0wLjUsMC43LTEuOCwwLjItMi44LTAuNGMwLjktMC4xLDEuOS0wLjIsMi4zLDANCgkJCWMwLjUsMC4yLDAuNSwwLjQsMC41LDAuNWMwLTAuMSwwLjEtMC40LDAtMC41QzEyLjIsOCw5LjgsOC45LDksOC45QzcuOSw4LjMsNy41LDYuNiw3LjIsNS43YzAuMy0xLjEsMC42LTIsMC40LTIuOA0KCQkJQzcuNSwyLjUsNy4yLDIuMyw3LDIuM0M3LDIuMyw3LDIuMyw3LDIuMyIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxyZWN0IHg9IjAiIHk9IjAiIGNsYXNzPSJzdDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNC44Ii8+DQo8L2c+DQo8L3N2Zz4NCg=='
  },
  {
    title: 'Title 27',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 7,
    language_id: 7,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTUgMTQuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUgMTQuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiM5QTlCOUI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxkZWZzPg0KCQk8cGF0aCBpZD0iU1ZHSURfMV8iIGQ9Ik02LjksNi4zYzAuNCwwLjgsMC45LDEuNiwxLjcsMi4zQzcuNiw4LjksNi44LDkuMSw1LjcsOS42QzYsOSw2LjcsNy40LDYuOSw2LjMgTTcuMSwyLjYNCgkJCWMwLjgsMC41LDAuMywxLjYsMCwyLjdDNi45LDQuNiw2LjYsMy4xLDcuMSwyLjYgTTcsMi4zYy0wLjMsMC0wLjYsMC4yLTAuNywwLjVDNiwzLjUsNi42LDUuNyw2LjgsNmMtMC43LDItMi45LDYtNC4xLDYuMg0KCQkJYzAtMC4zLDAuMS0xLDEuNi0yYzAuMS0wLjEsMC4yLTAuMiwwLjItMC4yYy0xLjIsMC42LTIuOSwxLjYtMS45LDIuM2MwLjEsMCwwLjEsMC4xLDAuMiwwLjFjMC43LDAuMywxLjgtMC42LDIuOC0yLjcNCgkJCUM2LjgsOS40LDcuNyw5LjEsOSw4LjljMS40LDEsMi40LDEuMiwzLjEsMC45YzAuMi0wLjEsMC41LTAuMywwLjUtMC42Yy0wLjUsMC43LTEuOCwwLjItMi44LTAuNGMwLjktMC4xLDEuOS0wLjIsMi4zLDANCgkJCWMwLjUsMC4yLDAuNSwwLjQsMC41LDAuNWMwLTAuMSwwLjEtMC40LDAtMC41QzEyLjIsOCw5LjgsOC45LDksOC45QzcuOSw4LjMsNy41LDYuNiw3LjIsNS43YzAuMy0xLjEsMC42LTIsMC40LTIuOA0KCQkJQzcuNSwyLjUsNy4yLDIuMyw3LDIuM0M3LDIuMyw3LDIuMyw3LDIuMyIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxyZWN0IHg9IjAiIHk9IjAiIGNsYXNzPSJzdDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNC44Ii8+DQo8L2c+DQo8L3N2Zz4NCg=='
  },
  {
    title: 'Title 28',
    type: {title: 'text', id: 1},
    author_id: 'Arthur',
    searchable_id: 7,
    language_id: 7,
    category: {title: 'Category1', id: 1},
    tags: [
      {title: 'tag1', id: 1},
      {title: 'tag2', id: 2}
    ],
    description: 'Lorem ipsum dolor sit amet',
    thumbnail: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTUgMTQuOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTUgMTQuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiM5QTlCOUI7fQ0KPC9zdHlsZT4NCjxnPg0KCTxkZWZzPg0KCQk8cGF0aCBpZD0iU1ZHSURfMV8iIGQ9Ik02LjksNi4zYzAuNCwwLjgsMC45LDEuNiwxLjcsMi4zQzcuNiw4LjksNi44LDkuMSw1LjcsOS42QzYsOSw2LjcsNy40LDYuOSw2LjMgTTcuMSwyLjYNCgkJCWMwLjgsMC41LDAuMywxLjYsMCwyLjdDNi45LDQuNiw2LjYsMy4xLDcuMSwyLjYgTTcsMi4zYy0wLjMsMC0wLjYsMC4yLTAuNywwLjVDNiwzLjUsNi42LDUuNyw2LjgsNmMtMC43LDItMi45LDYtNC4xLDYuMg0KCQkJYzAtMC4zLDAuMS0xLDEuNi0yYzAuMS0wLjEsMC4yLTAuMiwwLjItMC4yYy0xLjIsMC42LTIuOSwxLjYtMS45LDIuM2MwLjEsMCwwLjEsMC4xLDAuMiwwLjFjMC43LDAuMywxLjgtMC42LDIuOC0yLjcNCgkJCUM2LjgsOS40LDcuNyw5LjEsOSw4LjljMS40LDEsMi40LDEuMiwzLjEsMC45YzAuMi0wLjEsMC41LTAuMywwLjUtMC42Yy0wLjUsMC43LTEuOCwwLjItMi44LTAuNGMwLjktMC4xLDEuOS0wLjIsMi4zLDANCgkJCWMwLjUsMC4yLDAuNSwwLjQsMC41LDAuNWMwLTAuMSwwLjEtMC40LDAtMC41QzEyLjIsOCw5LjgsOC45LDksOC45QzcuOSw4LjMsNy41LDYuNiw3LjIsNS43YzAuMy0xLjEsMC42LTIsMC40LTIuOA0KCQkJQzcuNSwyLjUsNy4yLDIuMyw3LDIuM0M3LDIuMyw3LDIuMyw3LDIuMyIvPg0KCTwvZGVmcz4NCgk8Y2xpcFBhdGggaWQ9IlNWR0lEXzJfIj4NCgkJPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iICBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4NCgk8L2NsaXBQYXRoPg0KCTxyZWN0IHg9IjAiIHk9IjAiIGNsYXNzPSJzdDAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNC44Ii8+DQo8L2c+DQo8L3N2Zz4NCg=='
  }
]

const users = [
  {
    id: 1,
    name: 'User 1',
    role: 'Admin',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 2,
    name: 'User 2',
    role: 'Admin',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 3,
    name: 'User 3',
    role: 'Admin',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 4,
    name: 'User 4',
    role: 'Admin',
    date: '2017-06-29 12:09:33'
  },
  {
    id: 5,
    name: 'User 5',
    role: 'Admin',
    date: '2017-06-29 12:09:33'
  }
]

/**
 *  Fake data end
 **/

api.timeout = { timeout: 20000 }
api.serverURL = 'http://192.168.0.85/web/app.php/api/v1/content'

/**
 * Stabs for getters start
 * REMOVE AFTER BACK-END WELL BE IMPLEMENTED
 */

api.requestUsers = (urlEnd, type, payload = {}) => Promise.resolve(users)
api.requestContent = (urlEnd, type, payload = {}) => Promise.resolve(content)

/**
 * Stabs for getters end
 */

/*
* Request to back-end api
*/
api.requestToServer = (urlEnd, type, payload = {}) => Vue.http[type](api.serverURL + urlEnd, payload, api.timeout)
