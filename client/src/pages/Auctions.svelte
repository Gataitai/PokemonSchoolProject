<script>
    import { get } from '../util/fetch.js';
    import Card from "../components/card/Card.svelte";
    import OptionsNav from "../components/navigation/OptionsNav.svelte";
    import Modal from "../components/Modal.svelte";

    let promise = get("auctions");

    let nameModal;
    let typeModal;
    let priceModal;
    let generationModal;


    let toggleModal = (event) => {
        switch(event.detail.button) {
            case "name":
                nameModal.toggle();
                break;
            case "type":
                typeModal.toggle();
                break;
            case "price":
                priceModal.toggle();
                break;
            case "generation":
                generationModal.toggle();
                break;
        }
    }

</script>

<OptionsNav on:buttonPushed={toggleModal} name type price generation />

<Modal bind:this={nameModal}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, adipisci alias asperiores assumenda atque commodi consequuntur culpa cum est eum eveniet expedita fugit, hic illum inventore iure molestias mollitia nesciunt nihil non omnis quam rem sequi similique sunt suscipit tenetur ullam velit voluptatibus? Assumenda consequuntur ducimus quam recusandae repellat. Aliquam deserunt ea excepturi expedita facilis ipsam libero, modi, nesciunt optio, quasi rem repudiandae sequi sit! A amet commodi consequatur doloribus dolorum ea esse, est explicabo facilis fugit, molestias nisi, non numquam obcaecati quae quaerat sequi sint totam unde voluptas! Assumenda commodi, ea eaque, enim exercitationem facere iusto laborum maiores minus natus nisi omnis, repudiandae sunt veritatis voluptatem. Beatae consectetur debitis deserunt ex, facilis mollitia rem. Corporis deleniti dolore ducimus facere harum iste iure non officiis porro possimus, quas, repellat repellendus suscipit tempore vitae voluptate voluptatem! Assumenda ea excepturi expedita, laboriosam maxime modi molestiae natus neque nisi odit quas quasi quod temporibus, ut, voluptas. Architecto doloremque eius expedita facilis fugit ipsam officia, porro ut. Ad autem consectetur corporis, dignissimos doloremque, error facilis fugiat illum magnam minus necessitatibus, nobis non perspiciatis possimus quas rerum saepe suscipit tenetur voluptas voluptatem. A blanditiis culpa cumque deleniti dolores doloribus earum eius enim est ex fuga illum laborum minus, odit quos sed soluta ullam voluptatum! A accusamus ad amet consequuntur dicta dolorem dolores ducimus earum error est in ipsam, iure molestiae molestias nihil non obcaecati perferendis provident qui ratione reprehenderit rerum tempora voluptate voluptatem voluptates. Aperiam at, autem consequatur distinctio eaque eos esse est eum eveniet exercitationem in itaque, iure laborum maxime minus molestias numquam odio pariatur, possimus tenetur ut vel vitae? Aperiam eum illo maxime perspiciatis voluptas? Aperiam cupiditate, deserunt iste libero quam voluptatum. Aliquid animi asperiores, atque aut commodi consequatur distinctio dolorum enim eveniet excepturi exercitationem inventore ipsa itaque labore laborum molestiae nam natus provident quam unde. Accusamus autem distinctio dolor eum illo mollitia odio quis tempora ullam. Assumenda consequatur delectus dolores, doloribus, dolorum eaque expedita laborum nam neque possimus quisquam veniam voluptas! Aliquid asperiores at atque beatae blanditiis consequuntur corporis culpa doloremque ea est et, eveniet fugiat impedit itaque iusto magnam minima modi molestiae nam non nostrum pariatur placeat quaerat quas quibusdam reiciendis rerum sapiente sunt ullam veritatis? Ab excepturi repellendus tenetur veritatis. Accusantium ad aliquid animi atque commodi culpa dicta dignissimos ducimus enim eos eum eveniet explicabo inventore iste iure, laboriosam maxime modi natus, odio provident quas qui recusandae rem reprehenderit repudiandae sed sint voluptatibus? Ad amet asperiores atque aut beatae consectetur corporis culpa debitis deleniti dicta eos et eum fuga id illo inventore ipsum laboriosam laborum maxime modi, numquam odio quaerat quibusdam quos soluta temporibus veniam voluptates? Ad alias aliquam at cum debitis dicta eaque ex expedita facilis impedit, molestiae necessitatibus placeat quo repellat ullam, veritatis voluptatem? Ad adipisci distinctio fugiat libero modi soluta veritatis. A architecto atque dolor dolores dolorum ducimus eius esse harum id illo in itaque, iusto nihil nostrum, optio repellendus soluta totam, ut. Aspernatur, dolores perspiciatis. Aliquid asperiores commodi consequatur culpa cupiditate dignissimos, earum inventore laboriosam magni mollitia nesciunt quas, unde veniam. Alias animi assumenda debitis doloribus eligendi enim fugit ipsa iusto laudantium magni nihil, officia sapiente, soluta suscipit ut veritatis vero voluptate? Accusamus aperiam delectus eaque odio sed totam! Architecto aspernatur, atque beatae commodi consectetur eius fugit harum laudantium magni nihil quasi sed suscipit tempore totam ut. A accusamus aliquid beatae blanditiis consequatur consequuntur culpa deleniti eligendi et fugit harum illum itaque labore laudantium nam natus nobis non odio odit officia porro quia quibusdam repellendus sint, soluta vel voluptates voluptatibus! A accusantium alias assumenda dolorum ea enim esse ex, exercitationem id illo modi mollitia natus nobis odio pariatur porro sit. A, ad cumque delectus, ea fuga fugit harum id libero minima pariatur reiciendis reprehenderit soluta tempora velit veritatis. Aperiam ipsa obcaecati quod soluta ullam? Animi architecto autem commodi corporis deserunt dolor ducimus, eos facere fuga fugit hic in incidunt nesciunt numquam obcaecati odit omnis pariatur perferendis praesentium quam, qui quibusdam quidem saepe sapiente sit sunt temporibus ut! Assumenda corporis cupiditate delectus dignissimos distinctio dolore dolorem eos eveniet excepturi facere fugit in inventore ipsam molestias nemo nostrum obcaecati optio, quia recusandae sed sunt unde ut veniam, voluptatibus, voluptatum. Illo iusto modi non similique voluptates? Aliquam amet deserunt earum est eveniet ex explicabo facere fugit hic labore laboriosam libero maxime minus mollitia nobis obcaecati possimus quaerat quas quis quod, recusandae repudiandae saepe sapiente sed sunt voluptas voluptatem. Accusantium aspernatur dolorem doloribus enim, error ex fugiat fugit harum id illo illum impedit ipsa laudantium magnam nam nemo nostrum nulla possimus praesentium quia quibusdam quis quo quod, ratione recusandae sint vitae voluptates. Architecto deleniti, dicta expedita fuga fugiat id iste laboriosam nihil nostrum qui ut vitae voluptate. Aliquid dicta ex fugit inventore iure, natus porro provident sed temporibus voluptatum. Ab deleniti dolorem eligendi eveniet illum incidunt ipsam iure iusto laudantium libero molestias mollitia nam nemo odio, officia quis ratione reiciendis sunt ullam ut. Accusamus ad deserunt dolor ea eaque est iste itaque libero magnam minima, nesciunt, odio perferendis possimus, reiciendis repellat reprehenderit veniam voluptatibus. Adipisci alias animi commodi, culpa cumque dolore eius error natus nemo provident quaerat quas qui quo rem repellat saepe tempora ut vitae. Dolore, dolores ducimus excepturi fuga, id laborum modi neque nulla praesentium sequi sint, voluptatum? Accusamus, accusantium adipisci, atque ducimus et fuga ipsa, ipsum modi nostrum quia suscipit tempore velit voluptatum! Accusamus, ad aut esse ex exercitationem iure laborum nam quia ratione ullam! Adipisci aliquam animi asperiores aut debitis dicta distinctio dolor earum, eos esse et eveniet excepturi facilis, in minima minus modi natus nobis nostrum, officiis quam quidem reprehenderit sapiente sit suscipit totam ullam vel. A amet assumenda cumque, deserunt dicta dolores earum est exercitationem facilis inventore ipsam molestiae non perferendis porro quos repellendus tempore totam unde veniam voluptatibus? Animi aperiam, at debitis dicta dignissimos dolor eius, eligendi enim esse, eum expedita id illum libero neque nihil odit quaerat quam quibusdam rem sapiente unde velit voluptatem? Ab ea enim fugiat, hic illo ipsam libero nam nulla omnis pariatur possimus quaerat sapiente tenetur veniam.
</Modal>

<Modal bind:this={typeModal}>
    type
</Modal>

<Modal bind:this={priceModal}>
    price
</Modal>

<Modal bind:this={generationModal}>
    generation
</Modal>

<div class="items">
    {#await promise}
        Loading
    {:then auctions}
        {#each auctions as auction}
            <Card pokemon={auction.pokemon}/>
        {/each}
    {:catch error}
        <p>{error.message}</p>
    {/await}
</div>

<style>
    .items{
        padding-left: 5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
        grid-gap: 4rem;
    }
</style>