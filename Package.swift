// swift-tools-version: 5.4
import PackageDescription

let package = Package(
    name: "VaultSchema",
    products: [
        .library(
            name: "VaultSchema",
            targets: ["VaultSchema"]
        ),
    ],
    targets: [
        .target(
            name: "VaultSchema",
            path: "Sources",
            resources: [
                .process("../schemas/7/vault.json")
            ]
        )
    ]
)
