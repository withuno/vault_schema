// swift-tools-version: 5.4
import PackageDescription

let package = Package(
    name: "VaultSchema",
    platforms: [
        .iOS(.v15), .macOS(.v12_0)
    ],
    products: [
        .library(
            name: "VaultSchema",
            targets: ["VaultSchema"]),
    ],
    targets: [
        .target(
            name: "VaultSchema",
            path: ".",
            exclude: ["src/*"],
            resources: [
                .process("schemas/*")
            ]
        )
    ]
)
