<script>
export default {
  name: 'menuItem',
  functional: true,
  props: {
    meta: {
      type: Object,
      default: () => {
        return {
          title: '',
          icon: ''
        }
      }
    }
  },
  render (h, context) {
    const { icon, title } = context.props.meta
    const vnodes = []
    if (icon) {
      vnodes.push(<i class={icon} />)
    }

    if (title) {
      vnodes.push(<span slot="title">{(title)}</span>)
    }

    return vnodes
  }
}
</script>
