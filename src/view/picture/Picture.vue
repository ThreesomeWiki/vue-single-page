<template>
    <div class="Picture">
        <Header title="美图" />
        <div class="ContentFirst">
            <Group>
                <cell title="title" value="value" class="cell"></cell>
                <cell title="title" value="value" class="cell"></cell>
            </Group>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header';
import { Group, Cell } from 'vux';

export default {
    components: { Header, Group, Cell },
    data: function() {
        return {};
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
