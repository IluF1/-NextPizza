import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    const port = process.env.PORT || 4200
    app.enableCors()
    app.setGlobalPrefix('api')

    const config = new DocumentBuilder()
        .setTitle('Next Pizza API')
        .setDescription('Next Pizza by miraclecancode')
        .setVersion('1.0')
        .addTag('pizza')
        .build()

    const documentFactory = () => SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, documentFactory)

    console.log(`Server running on port ${port}`)
    await app.listen(port)
}
bootstrap()
