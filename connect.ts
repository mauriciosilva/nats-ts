import { connect } from 'nats'


(async() => {

    const servers = [
        { servers: ["demo.nats.io:4442", "demo.nats.io:4222"] },
    ]

    await servers.forEach(async(v) => {
        console.log(v)
        try {
            const nc = await connect(v)
            console.log(`connected to ${nc.getServer()}`)
            const done = nc.close()

            await nc.close()

            const err = await done
            // if(err) { console.log(`error closing: ${err}`) }
        } catch (err) {
            console.log(`error connecting to ${JSON.stringify(v)}`)
        }
    })


})()