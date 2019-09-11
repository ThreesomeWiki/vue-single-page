<template>
    <div class="Picture">
        <Header title="美图" />
        <div class="ContentFirst">
            <Group>
                <cell title="title" value="value" class="cell"></cell>
                <cell title="title" value="value" class="cell"></cell>
            </Group>
            <Timeline />
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header';
import { Group, Cell, Timeline } from 'vux';

export default {
    components: { Header, Group, Cell, Timeline },
    data: function() {
        return {};
    },
    mounted: function() {
        this.$bus.emit('app-show');
    },
};
</script>>
<style lang="scss" scoped>
.Picture {
    div {
        box-sizing: border-box;
    }
    .cell {
        height: 0.44rem;
    }
}
</style>
