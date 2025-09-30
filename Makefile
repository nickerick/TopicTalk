prod-image:
ifndef VERSION
	$(error VERSION is required. Usage: make docker-push VERSION=v1.0.0)
endif
	@echo "Building multi-platform Docker image..."
	docker buildx build \
		--platform linux/amd64,linux/arm64 \
		-t ghcr.io/nickerick/topic-talk:${VERSION} \
		-t ghcr.io/nickerick/topic-talk:latest \
		--push \
		.
	@echo "Built and pushed multi-platform image:"
	@echo "  ghcr.io/nickerick/topic-talk:${VERSION}"
	@echo "  ghcr.io/nickerick/topic-talk:latest"