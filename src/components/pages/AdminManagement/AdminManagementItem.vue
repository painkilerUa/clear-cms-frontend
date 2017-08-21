<template>
	<li>
		{{itemInfo}}
	</li>
</template>

<script>
export default {
  name: 'admin-management-item',
  props: ['itemInfo']
}
</script>