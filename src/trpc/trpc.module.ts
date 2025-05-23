import { Module } from "@nestjs/common";
import { TRPCModule } from "nestjs-trpc";


@Module({
    imports: [
        TRPCModule.forRoot({
            autoSchemaFile: "src/trpc/@generated"
        })
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class TrpcModule {}