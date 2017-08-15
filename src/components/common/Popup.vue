<template>
	<!-- .popup -->
	<div class="popup" v-if="show">
		<!-- .popup__inner -->
		<div class="popup__inner" v-on-clickaway="close">
			<!-- .popup-heading -->
			<div class="popup-heading">
				<h2 class="popup-title" v-if="title">{{title}}</h2>
				<div class="popup-description" v-if="description">
					<p>{{description}}</p>
				</div>
			</div>
			<!-- END:.popup-heading -->
			<div class="popup-body">
				<slot name="body"/>
			</div>
			<div class="popup-footer">
				<slot name="footer" />
			</div>
		</div>
		<!-- END:.popup__inner -->
	</div>
	<!-- END:.popup -->
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'

export default {
  name: 'popup',
  props: {
    modal: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      show: this.modal
    }
  },
  methods: {
    close () {
      if (!this.modal) {
        this.show = false
      }
    }
  },
  directives: {
    onClickaway
  }
}
</script>

<style src="@/assets/scss/components/popup.scss" lang="scss" scoped/>