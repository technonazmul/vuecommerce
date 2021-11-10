<template>
    <div>
        <h2>You have logout successfully!</h2>
    </div>
</template>

<script>

export default({
    created() {
        localStorage.removeItem('AToken'),
        this.$router.push('/')
    },
    
})
</script>
